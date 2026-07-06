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
      {/* UPDATED TITLE WITH MARGIN-BOTTOM SPACING */}
      <h1 style={{ 
        fontFamily: "'Radley', serif", 
        fontSize: '3rem', 
        fontWeight: '400', 
        letterSpacing: '2px', 
        margin: '0 0 12px 0', /* Changed from 0 to 12px on the bottom to fix overlap */
        color: '#1a1a1a' 
      }}>
        My Portfolio
      </h1>
      
      {/* UPDATED SUBTITLE WITH AN ADJUSTED TOP MARGIN FOR EXTRA BREATHING ROOM */}
      <p style={{ 
        fontSize: '0.85rem', 
        letterSpacing: '3px', 
        textTransform: 'uppercase', 
        color: '#7f8c8d', 
        margin: '8px 0 0 0' /* Bumped up slightly to cleanly clear font descenders */
      }}>
        CURATED BY @SACCHIRO
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        {/* UPDATED RESUME BUTTON */}
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

        {/* LINKEDIN BUTTON WITH YOUR LIVE PROFILE ROUTE */}
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
            e.currentTarget.style.background = '#0a66c2'; // Subtle LinkedIn Blue on hover
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