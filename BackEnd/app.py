from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import bcrypt

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
# This matches the exact URL and POST method from your React fetch()
@app.route('/login', methods=['POST'])
def receive_login():
    # 1. Catch the JSON payload from React
    data = request.json
    
    # 2. Extract the variables (matching the exact names in your JSX)
    username = data.get('user')
    plain_password = data.get('pass')

    # 3. Hash the password for security
    password_bytes = plain_password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password_bytes, salt)

    try:
        # 4. Connect to SQLite and save the user
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        
        # Insert the data into our table
        cursor.execute(
            'INSERT INTO accounts (username, password) VALUES (?, ?)', 
            (username, hashed_password)
        )
        
        conn.commit()
        conn.close()

        print(f"Success! Saved new user: {username}")
        # Send a success message back to React
        return jsonify({"status": "success", "message": "User registered successfully"}), 200

    except sqlite3.IntegrityError:
        # If the username already exists, SQLite throws an IntegrityError
        print(f"Failed: User {username} already exists.")
        return jsonify({"status": "error", "message": "Username already taken"}), 400


# --- START THE ENGINE ---
if __name__ == '__main__':
    # We set it to port 8000 to perfectly match your React fetch request
    app.run(port=8000, debug=True)