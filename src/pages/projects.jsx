function Projects() {
  return (
    <>
      <div style={{
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
          color: '#C15F3C',
          marginBottom: '40px',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          My Skills & Experience
        </h1>

        <p style={{
          fontSize: '24px',
          color: '#e8e8e8',
          marginBottom: '60px',
          fontFamily: "'Times New Roman', serif",
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          Check out my resume to see all my projects and experience
        </p>

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
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '60px',
            border: '3px solid rgba(213, 116, 132, 0.4)',
            transition: 'all 0.3s',
            cursor: 'pointer',
            textAlign: 'center'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.borderColor = '#C15F3C';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(213, 116, 132, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#C15F3C';
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
              color: '#C15F3C',
              marginBottom: '20px',
              fontFamily: "'Times New Roman', serif",
              fontStyle: 'italic'
            }}>
              View My Resume
            </h2>

            <p style={{
              fontSize: '20px',
              color: '#e8e8e8',
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
              backgroundColor: '#C15F3C',
              color: 'white',
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