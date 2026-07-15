import { useState } from 'react'
import mImage from './assets/asset1.png' // Make sure your image name matches this!
import bgImage from './assets/asset2.jpeg'
function App() {
  // These two "State" variables hold whatever the user types in real-time
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault() 
    
    console.log("Attempting to login with:")
    console.log("Username:", username)
    console.log("Password:", password)
    
    
  }
  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%'
  };
  const hazyCardStyle = {
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
    backdropFilter: 'blur(10px)',                // This creates the hazy effect
    padding: '100px',
    borderRadius: '16px',
    border: '5px solid rgb(0, 255, 242)',
    color: '#fff',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
  };
  const imageStyle = {
    width: '40px',
    height: 'auto',
    objectfit: 'contain'
  }
  const textBoxStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '3px solid rgb(0, 247, 255)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  return <div style={containerStyle}>
    <div style={hazyCardStyle}>
      
    </div>
  </div>
}

export default App;