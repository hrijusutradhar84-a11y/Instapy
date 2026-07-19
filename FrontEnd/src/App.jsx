import { useState } from 'react'
import mImage from './assets/asset1.png' 
import bgImage from './assets/asset2.jpeg'
function App() {
  // These two "State" variables hold whatever the user types in real-time
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentView, setCurrentView] = useState('')

  async function sendDataToBackend(e) {
    
    e.preventDefault() 
    const payload = {
      user: username,
      pass: password
    };

    try{
      const response = await fetch('http://127.0.0.1', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    }
    catch (error){
      console.error('Backend failed')
    }
  };
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(10px)',                
    padding: '50px',
    borderRadius: '16px',
    border: '5px solid rgb(0, 255, 242)',
    color: '#fff',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
  };
  const imageStyle = {
    width: '40px',
    height: 'auto',
    objectFit: 'contain'
  }
  const textBoxStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '3px solid rgb(0, 247, 255)',
    backgroundColor: 'rgb(0, 255, 234)',
    color: '#ffffff',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box'
    
  };
  const buttonStyle = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s ease'
  }

  return Home()
}
function Home() {
  
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(10px)',                
    padding: '50px',
    borderRadius: '16px',
    border: '5px solid rgb(0, 255, 242)',
    color: '#fff',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
  };
  
  const buttonStyle = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s ease'
  }

    const textBoxStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '3px solid rgb(0, 247, 255)',
    backgroundColor: 'rgb(0, 255, 234)',
    color: '#ffffff',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box'
  }

  return <div style={containerStyle}>
    <div style={hazyCardStyle}>
      <form>
        <button 
        style={buttonStyle}
        type='submit'
        >
          Log In
        </button>
        <button style={buttonStyle}
        type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  </div>
}

function logIn () {
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(10px)',                
    padding: '50px',
    borderRadius: '16px',
    border: '5px solid rgb(0, 255, 242)',
    color: '#fff',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
  };
  
  const buttonStyle = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s ease'
  }
      const textBoxStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '3px solid rgb(0, 247, 255)',
    backgroundColor: 'rgb(0, 255, 234)',
    color: '#ffffff',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box'
  }


  return <div style={containerStyle}>
    <div style={hazyCardStyle}>
      <input
        type='password'
        style={textBoxStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='give your set password'
      />
      <input 
        type='password'
        style={textBoxStyle}
        value={password}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='give your set password'
      />
    </div>
  </div>
};