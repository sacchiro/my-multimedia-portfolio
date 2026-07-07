import React from 'react';
// IMPORT THE RESUME FILE DIRECTLY FROM YOUR ASSETS FOLDER
import resumeFile from '../assets/Resume_Amirah.pdf'; 

export default function Header() {
  const handleViewResume = () => {
    // Opens the bundled asset path securely in a brand new tab
    window.open(resumeFile, '_blank', 'noopener,noreferrer');
  };

  return (
    <header style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
      
      {/* NAME */}
      <h1 style={{ 
        fontFamily: "'Radley', serif", 
        fontSize: '3rem', 
        fontWeight: '400', 
        letterSpacing: '2px', 
        margin: '0',
        color: '#1a1a1a' 
      }}>
        Nur'Amirah Abdul Razak
      </h1>

      {/* TITLE */}
      <h2 style={{
        fontFamily: "'Radley', serif",
        fontSize: '1.5rem',
        fontWeight: '400',
        letterSpacing: '1px',
        margin: '15px 0 10px 0',
        color: '#1a1a1a'
      }}>
        Multimedia Computing Student
      </h2>

      {/* SKILLS / ROLE */}
      <p style={{
        fontFamily: "'Radley', serif",
        fontSize: '1.1rem',
        letterSpacing: '1px',
        margin: '0',
        color: '#555'
      }}>
        UI/UX • Frontend Developer • Multimedia Designer
      </p>

      {/* CURATED TEXT */}
      <p style={{ 
        fontSize: '0.85rem', 
        letterSpacing: '3px', 
        textTransform: 'uppercase', 
        color: '#7f8c8d', 
        margin: '25px 0 0 0'
      }}>
        CURATED BY @SACCHIRO
      </p>

      {/* BUTTONS */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px', 
        marginTop: '20px' 
      }}>

        {/* RESUME BUTTON */}
        <button 
          onClick={handleViewResume} 
          style={{ 
            background: 'none', 
            border: '1px solid #1a1a1a', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            cursor: 'pointer', 
            fontFamily: 'sans-serif', 
            fontWeight: 'bold', 
            fontSize: '0.8rem',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1a1a1a';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = '#1a1a1a';
          }}
        >
          📄 My Resume
        </button>

        {/* LINKEDIN BUTTON */}
        <a 
          href="https://www.linkedin.com/in/myrarzak-37b06640a" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            textDecoration: 'none', 
            color: '#1a1a1a', 
            fontSize: '0.8rem', 
            border: '1px solid #1a1a1a', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontFamily: 'sans-serif', 
            fontWeight: 'bold',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0a66c2';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#0a66c2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = '#1a1a1a';
            e.currentTarget.style.borderColor = '#1a1a1a';
          }}
        >
          🔗 LinkedIn Profile
        </a>

      </div>
    </header>
  );
}