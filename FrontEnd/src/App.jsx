import { useState } from 'react'
import mImage from './assets/asset1.png' 
import bgImage from './assets/asset3.jpg'
import ParticleBackground from "./ParticleBackground.jsx";
import './index.css';
function App() {
  const [currentView, setCurrentView] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mouseHovered, setMouseHovered] = useState(false)
  const [mouseHovered1, setMouseHovered1] = useState(false)
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
  
  if (currentView === 0) {
    return <Home setCurrentView={setCurrentView} mouseHovered={mouseHovered} setMouseHovered={setMouseHovered} mouseHovered1={mouseHovered1} setMouseHovered1={setMouseHovered1} />
  }

  if (currentView === 1) {
    return (
      <LogIn
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        sendDataToBackend={sendDataToBackend}
        setCurrentView={setCurrentView}
        mouseHovered={mouseHovered}
        setMouseHovered={setMouseHovered}
      />
    )
  }

  return <SignUp setCurrentView={setCurrentView} mouseHovered={mouseHovered} setMouseHovered={setMouseHovered} />
}


function Home({setCurrentView, mouseHovered, setMouseHovered, mouseHovered1, setMouseHovered1}) {
  
  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  };

  const hazyCardStyle = {
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(20, 41, 46, 0.05)', 
    backdropFilter: 'blur(10px)',                
    padding: '50px',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
  };
  
  const buttonStyle1 = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: mouseHovered ? '#5a5a5aff' : '#000000ff',
    color: '#d2b3b3ff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s ease'
  }

  const buttonStyle2 = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: mouseHovered1 ? '#5a5a5aff' : '#000000ff',
    color: '#d2b3b3ff',
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
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <ParticleBackground />
    </div>
    <div style={hazyCardStyle}>
      <form>
        <button 
        style={buttonStyle1}
        type='submit'
        onClick={() => setCurrentView(1)}
        onMouseEnter={() => setMouseHovered(true)}
        onMouseLeave={() => setMouseHovered(false)}
        >
          Log In
        </button>
        <button style={buttonStyle2}
        type='submit'
        onClick={() => setCurrentView(2)}
        onMouseEnter={() => setMouseHovered1(true)}
        onMouseLeave={() => setMouseHovered1(false)}
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
}

function LogIn ({ username, password, setUsername, setPassword, sendDataToBackend, setCurrentView, mouseHovered, setMouseHovered }) {
    const containerStyle1 = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  };

  const hazyCardStyle1 = {
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(20, 41, 46, 0.05)', 
    backdropFilter: 'blur(10px)',                
    padding: '50px',
    borderRadius: '16px',
    color: '#fff',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
  };
  
  const buttonStyle1 = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: mouseHovered ? '#5a5a5aff' : '#000000ff',
    color: '#d2b3b3ff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s ease'
  }
    const textBoxStyle1 = {
    width: '50%',
    padding: '8px 10px',
    borderRadius: '10px',
    marginTop: '5px',
    marginRight: '0.5px',
    border: '3px solid rgba(49, 49, 49, 1)',
    backgroundColor: 'rgba(20, 41, 46, 0.05)',
    color: '#ffffff',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box'
  }


  return <div style={containerStyle1}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <ParticleBackground />
    </div>
    <div style={hazyCardStyle1}>
      <input
        type='password'
        style={textBoxStyle1}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='give your set password'
      />
      <input 
        type='text'
        style={textBoxStyle1}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='give your username'
      />
      <button style={buttonStyle1}
      type='button'
      onMouseEnter={() => setMouseHovered(true)}
      onMouseLeave={() => setMouseHovered(false)} 
      onClick={sendDataToBackend}
      >
        Submit
      </button>
      <button style={buttonStyle1}
      type= 'button'
      onClick={() => setCurrentView(0)}>
        Go back Home
      </button>
    </div>
  </div>
};
function SignUp({ setCurrentView, username, password, setUsername, setPassword, sendDataToBackend, mouseHovered, setMouseHovered }) {
      const containerStyle1 = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  };

  const hazyCardStyle1 = {
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(20, 41, 46, 0.05)', 
    backdropFilter: 'blur(10px)',                
    padding: '50px',
    borderRadius: '16px',
    color: '#fff',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
  };
  
  const buttonStyle1 = {
    padding: '12px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: mouseHovered ? '#5a5a5aff' : '#000000ff',
    color: '#d2b3b3ff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    transition: 'background-color 0.2s ease'
  }
      const textBoxStyle1 = {
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
  
  
  
  return (
    <div style={containerStyle1}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <ParticleBackground />
    </div>
    <div style={hazyCardStyle1}>
      <input
        type='password'
        style={textBoxStyle1}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='give your set password'
      />
      <input 
        type='text'
        style={textBoxStyle1}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='give your username'
      />
      <button style={buttonStyle1}
      type='button'
      onClick={sendDataToBackend}
      >
        Submit
      </button>
      <button style={buttonStyle1}
      type= 'button'
      onMouseEnter={() => setMouseHovered(true)}
      onMouseLeave={() => setMouseHovered(false)}
      onClick={() => setCurrentView(0)}>
        Go back Home
      </button>
    </div>
  </div>
  )
}

export default App;