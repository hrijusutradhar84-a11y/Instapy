import { useState } from 'react'
import mascotImage from './assets/asset1.png' // Make sure your image name matches this!

function App() {
  // These two "State" variables hold whatever the user types in real-time
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // This function runs when the user clicks the login button
  const handleLogin = (e) => {
    e.preventDefault() // Prevents the page from refreshing
    
    // For now, let's just prove we captured the data!
    console.log("Attempting to login with:")
    console.log("Username:", username)
    console.log("Password:", password)
    
    // In the next step, we will change this console.log to a fetch() 
    // request that sends this data to your Python server.
  }

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans text-slate-100">
      
      {/* The Main Login Card */}
      <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md flex flex-col items-center">
        
        {/* Floating Mascot */}
        <img 
          src={mascotImage} 
          alt="AI Mascot" 
          className="w-32 h-32 mb-6 animate-bounce" 
        />

        <h1 className="text-3xl font-bold mb-2 text-emerald-400">Python Quest</h1>
        <p className="text-slate-400 mb-8 text-sm">Enter your credentials to begin</p>

        {/* The Form */}
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            required
          />

          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            required
          />

          <button 
            type="submit" 
            className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            Start Quest
          </button>

        </form>

      </div>
    </div>
  )
}

export default App