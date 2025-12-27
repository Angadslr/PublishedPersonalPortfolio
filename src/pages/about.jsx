import './about.css'
import Sphere from './sphere.jsx';
function About() {
  return (
    <>
      <div className='about-container' style={{
        color: 'white',
        minHeight: '100vh',
        paddingTop: '100px',
        paddingLeft: '80px',
        paddingRight: '80px',
        paddingBottom: '60px',
        marginRight: 'auto',
        marginLeft: '0',
      }}>
        
        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: '80px',
          color: '#C15F3C',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>
          About Me
        </h1>
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          marginTop: '40px'
        }}>
          
          <div style={{ flex: 1 }}>

            
            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#e8e8e8',
              marginBottom: '30px',
              fontFamily: "'Times New Roman', serif",
              width: '50%'
            }}>
            Result–driven freshman at Oregon State University studying Computer Science and
            Business. Contributing to machine learning projects as an active member of the OSU
            Artificial Intelligence Club. Demonstrated initiative through personal web development
            projects and self-directed learning in data science and full stack development.
            </p>
<div style={{ 
            flex: 0.8,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            
            
            <div style={{
              backgroundColor: 'rgba(89, 89, 89, 0.1)1)',
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid rgba(184, 120, 23, 0.4)',
              width: '50%'

            }}>
              <h3 style={{
                color: '#C15F3C',
                fontSize: '24px',
                marginBottom: '15px',
                fontFamily: "'Times New Roman', serif",
                fontStyle: 'italic'
              }}>
                Interests
              </h3>
              <ul style={{
                fontSize: '18px',
                lineHeight: '2',
                color: '#e8e8e8',
                listStyleType: 'none',
                padding: 0,
                fontFamily: "'Times New Roman', serif"
              }}>
                <li>• Full-Stack Development</li>
                <li>• Data Science & ML</li>
                <li>• Problem Solving</li>
                <li>• UI/UX Design</li>
                <li>• Team Collaboration</li>
              </ul>
            </div>
            
          </div>

          
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '30px',
          marginTop: '80px',
          justifyContent: 'center',
        }}>
          <a href="https://github.com/Angadslr" target="_blank" rel="noopener noreferrer" className="github-button1">
            <img 
              src="images/Github.png" 
              alt="GitHub" 
              style={{transition: 'transform 0.3s' }}
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

          <div class="cube">
            <div class="top"></div>
            <div class="right"></div>
            <div class="bottom"></div>
            <div class="left"></div>
            <div class="front"></div>
            <div class="back"></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;