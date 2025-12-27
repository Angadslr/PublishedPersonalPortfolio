import './App.css'
import { HashRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import About from './pages/about.jsx';
import Index from './pages/index.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <>


    <HashRouter>
      <div className='navContainer'>
      <nav className='navBar'>
        <Link to="/">Home</Link> 
        <Link to="/About">About Me</Link> 
        <Link to="/projects">Skills & Experience</Link> 
      </nav>
      </div>
      
      
      <Routes>
        <Route path="/" element={<Index />} />  
        <Route path="/About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>


    </HashRouter>

    {/*<header>
      
    </header>
    
    <body style={{backgroundColor: '#072a09ff', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'self-start', paddingLeft: '80px'}}>
      <h1 className='Hey'>Hey.</h1>
      <h1 className='myName'>I'm Angad</h1>
      <br />
      <h2 className='aDeveloper'>Computer Science, 2026 at Oregon State University 🦫</h2>
      
    </body>


    <footer>
    
    <img src="images/IMG_2530.JPG" className='groupPic'/>


    <a href="https://github.com/Angadslr" target="_blank" class="github-button">
      <img src="images/Github.png" alt="GitHub" />
    </a>

    <a href="https://www.instagram.com/angadslr/#" target="_blank" class="instagram-button">
      <img src="images/instagramOld.png" alt="Instagram"/>
    </a>

    <a href="https://www.linkedin.com/in/angad-srivastava-bba083388/" target="_blank" class="linkedin-button">
      <img src="images/LinkedinLogo.png" alt="Linkedin"/>
    </a>

    </footer>
    
    */}
    </>
  );
}

export default App;



