from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import bcrypt
import re

app = Flask(__name__)
# This line tells Flask: "It is okay to accept data from React (port 5173)"
CORS(app)

# --- DATABASE SETUP ---
def init_db():
    # This creates a file named 'users.db' in your folder automatically
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    # Create a table with two columns: username and the hashed password
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS accounts (
            username TEXT PRIMARY KEY,
            password TEXT
        )
    ''')
    conn.commit()
    conn.close()

# Run the database setup immediately when the server starts
init_db()


# --- THE API ENDPOINT ---
@app.route('/login', methods=['POST']) # 
def receive_login():
    # 1. Catch the JSON payload from React
    data = request.json
    
    # 2. Extract the variables (matching the exact names in your JSX)
    username = data.get('user')
    plain_password = data.get('pass')

    #eligibilty check
    pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$])[A-Za-z\d_@$]{8,}$"
    if plain_password and username:
        if re.fullmatch(pattern, plain_password) and len(username) >=3:
            # password hashing for security
            password_bytes = plain_password.encode('utf-8') #storing as byte
            salt = bcrypt.gensalt()
            hashed_password = bcrypt.hashpw(password_bytes, salt)

            try:
                #Connect to SQLite and save the user
                conn = sqlite3.connect('users.db')
                cursor = conn.cursor()
                
                # Insert the data into our table
                cursor.execute(
                    'INSERT INTO accounts (username, password) VALUES (?, ?)', 
                    (username, hashed_password.decode('utf-8'))
                )
                #saving and hanging up the connection
                conn.commit()

                # Send a success message back to React (as a json)
                return jsonify({"status": "success", "message": "User registered successfully"}), 200

            except sqlite3.IntegrityError:
                # If the username already exists -> an error
                print(f"Failed: User {username} already exists.")
                return jsonify({"status": "error", "message": "Username already taken"}), 400
            finally:
                conn.close()
        else:
            return jsonify({"status": "error", "message": "WEAK PASSWORD"}), 400
    else:
        return jsonify({"status": "error", "message": "Username and password are required"}), 400
    

@app.route('/auth', methods=['POST'])
def authenticate():
    data = request.json
    username = data.get('user')
    plain_password = data.get('pass')
    
    if not username or not plain_password:
        return jsonify({"status": "error", "message": "Credentials required"}), 400

    conn = sqlite3.connect('users.db')
    try:
        cursor = conn.cursor()
        cursor.execute('SELECT password FROM accounts WHERE username = ?', (username,))
        row = cursor.fetchone()
        
        if row and bcrypt.checkpw(plain_password.encode('utf-8'), row[0].encode('utf-8')):
            return jsonify({"status": "success", "message": "Login successful"}), 200
        else:
            return jsonify({"status": "error", "message": "Invalid username or password"}), 401
    finally:
        conn.close()



# --- START THE ENGINE ---
if __name__ == '__main__':
    # We set it to port 8000 to perfectly match your React fetch request
    app.run(port=8000, debug=True)