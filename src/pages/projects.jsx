import Sphere from './sphere.jsx';
import './projects.css';
function Projects() {
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
      <div className='projects-container' style={{
        backgroundColor: '#303030ff',
        color: 'white',
        minHeight: '100vh',
        width: '100vw',           // ensure full viewport width
        paddingTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        

        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: '80px',
          color: '#FFFFFF',
          marginBottom: '40px',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          My Skills & Experience
        </h1>

        <p style={{
          fontSize: '24px',
          color: '#E0F6FF',
          marginBottom: '60px',
          fontFamily: "'Times New Roman', serif",
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          Check out my resume to see all my projects and experience
        </p>

        {/* Skills Boxes Container */}
        <div style={{
          display: 'flex',
          gap: '40px',
          marginBottom: '80px',
          justifyContent: 'space-between',
          width: '90%',
          maxWidth: '1200px'
        }}>
          {/* Programming Languages Box */}
          <div style={{
            backgroundColor: 'rgba(179, 229, 252, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            border: '2px solid rgba(179, 229, 252, 0.6)',
            flex: 1,
            minWidth: '300px'
          }}>
            <h3 style={{
              color: '#E0F6FF',
              fontSize: '24px',
              marginBottom: '20px',
              fontFamily: "'Times New Roman', serif",
              fontStyle: 'italic'
            }}>
              Programming Languages
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>JavaScript</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>HTML</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>CSS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Python</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Java</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>C++</span>
              </div>
            </div>
          </div>

          {/* Libraries/Frameworks Box */}
          <div style={{
            backgroundColor: 'rgba(179, 229, 252, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            border: '2px solid rgba(179, 229, 252, 0.6)',
            flex: 1,
            minWidth: '300px'
          }}>
            <h3 style={{
              color: '#E0F6FF',
              fontSize: '24px',
              marginBottom: '20px',
              fontFamily: "'Times New Roman', serif",
              fontStyle: 'italic'
            }}>
              Libraries/Frameworks
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>React</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Pandas</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>NumPy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Scikit-Learn</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Matplotlib</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Node.js</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>Docker</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="https://lmstudio.ai/favicon.ico" alt="LM Studio" style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '18px', color: '#FFFFFF', fontFamily: "'Times New Roman', serif" }}>LM Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Block */}
        <a 
          href="https://drive.google.com/file/d/13IZpEHq_f_HvkLD6esLxWD6M7nDAleKO/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            width: '100%',
            maxWidth: '600px'
          }}
        >
          <div style={{
            backgroundColor: 'rgba(179, 229, 252, 0.1)',
            borderRadius: '20px',
            padding: '60px',
            border: '3px solid rgba(179, 229, 252, 0.6)',
            transition: 'all 0.3s',
            cursor: 'pointer',
            textAlign: 'center'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.borderColor = '#E0F6FF';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(179, 229, 252, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(179, 229, 252, 0.6)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            
            <div style={{
              fontSize: '80px',
              marginBottom: '30px'
            }}>
              📄
            </div>

            <h2 style={{
              fontSize: '42px',
              color: '#E0F6FF',
              marginBottom: '20px',
              fontFamily: "'Times New Roman', serif",
              fontStyle: 'italic'
            }}>
              View My Resume
            </h2>

            <p style={{
              fontSize: '20px',
              color: '#FFFFFF',
              marginBottom: '30px',
              fontFamily: "'Times New Roman', serif",
              lineHeight: '1.6'
            }}>
              Click here to download and view my complete resume with all my projects, 
              skills, and work experience
            </p>

            <div style={{
              display: 'inline-block',
              padding: '15px 40px',
              backgroundColor: '#B3E5FC',
              color: '#1a1a1a',
              borderRadius: '30px',
              fontSize: '20px',
              fontFamily: "'Times New Roman', serif",
              fontWeight: 'bold'
            }}>
              Download Resume →
            </div>

          </div>
        </a>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '30px',
          marginTop: '80px',
          justifyContent: 'center'
        }}>
          <a href="https://github.com/Angadslr" target="_blank" rel="noopener noreferrer" className="github-button1">
            <img 
              src="images/Github.png" 
              alt="GitHub" 
              style={{ width: '60px', height: '60px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>

          <a href="https://www.instagram.com/angadslr/#" target="_blank" rel="noopener noreferrer">
            <img 
              src="images/instagramOld.png" 
              alt="Instagram" 
              style={{ width: '60px', height: '60px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>

          <a href="https://www.linkedin.com/in/angad-srivastava-bba083388/" target="_blank" rel="noopener noreferrer">
            <img 
              src="images/LinkedinLogo.png" 
              alt="LinkedIn" 
              style={{ width: '60px', height: '60px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </a>
        </div>

      </div>
    </>
  );
}

export default Projects;