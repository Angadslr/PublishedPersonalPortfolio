import Sphere from './sphere.jsx';
import './index.css';

function Index() {
    return (
    <>
      <div style={{
        position: 'fixed',
        top: '90px',
        left: '100px',
        width: '120px',
        height: '120px',
        opacity: 0.15,
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <Sphere />
      </div>

    <body className='index-body' style={{  backgroundColor: '#303030ff',
  minHeight: '100vh', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'self-start', paddingLeft: '80px'}}>
      <h1 className='Hey'>Hey.</h1>
      <h1 className='myName'>I'm Angad</h1>
      <br />
      <h2 className='aDeveloper'>Computer Science & Business, Oregon State University 🦫</h2>
      
    </body>

    <img src="images/ALogo.png" className='groupPic'/>


    <a href="https://github.com/Angadslr" target="_blank" class="github-button">
      <img src="images/Github.png" alt="GitHub" />
    </a>

    <a href="https://www.instagram.com/angadslr/#" target="_blank" class="instagram-button">
      <img src="images/instagramOld.png" alt="Instagram"/>
    </a>

    <a href="https://www.linkedin.com/in/angad-srivastava-bba083388/" target="_blank" class="linkedin-button">
      <img src="images/LinkedinLogo.png" alt="Linkedin"/>
    </a>



    
    <footer className="footer">
        <p>© 2025 Angad Srivastava ⚛ Designed with React.js ⚛ angadmaserati@gmail.com</p>
    </footer>
    </>
  );
}

export default Index;
