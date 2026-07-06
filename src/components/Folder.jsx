import React from 'react';
import FolderContent from './FolderContent';
import '../styles/Folder.css';

export default function Folder({ folder, index, isOpen, onOpen, dynamicMargin, customColor }) {
  // Use custom color if passed, otherwise fall back to the folder data color
  const currentBgColor = customColor || folder.bg;

  // UPDATED text color logic to ensure babyblue always uses readable dark text
  const isDarkText = customColor ? true : !['videos', 'achievements'].includes(folder.id);

  // Original precise coordinates for paperclips on each specific folder layer
  const clipPositions = {
    education: { clipLeft: '80%', paperLeft: '72%' },
    design: { clipLeft: '12%', paperLeft: '4%' },
    fyp: { clipLeft: '84%', paperLeft: '76%' },
    skills: { clipLeft: '14%', paperLeft: '6%' },
    videos: { clipLeft: '32%', paperLeft: '24%' },
    achievements: { clipLeft: '72%', paperLeft: '64%' }
  };

  const { clipLeft, paperLeft } = clipPositions[folder.id] || { clipLeft: '80%', paperLeft: '72%' };

  return (
    <div
      onClick={() => onOpen(folder.id)}
      /* UPDATED: Combines your original matte texture style with the new pull-up trigger (only when closed) */
      className={`stationery-card ${!isOpen ? 'main-folder-card' : ''}`}
      style={{
        backgroundColor: currentBgColor, // Dynamically updates color (e.g., baby blue for design)
        color: customColor ? '#2b3020' : folder.textColor, // Tweak text color variant cleanly if baby blue is active
        marginTop: index === 0 ? '0px' : '-55px', // Original tight overlap stack remains untouched
        zIndex: isOpen ? 50 : index + 1,
        height: isOpen ? 'auto' : '110px',
        minHeight: isOpen ? '400px' : 'auto',
        padding: '40px 45px 30px 45px',
        cursor: isOpen ? 'default' : 'pointer',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.4)',
        boxShadow: isOpen 
          ? '0 -15px 35px rgba(0,0,0,0.1), 0 20px 30px rgba(0,0,0,0.08)' 
          : '0 -8px 16px rgba(0,0,0,0.04)'
      }}
    >
      {/* THE STATIONERY DECORATIVE ACCENTS (Paperclip & Pinned Sheet) */}
      <div className="pinned-sheet" style={{ left: paperLeft }} />
      <div className="paperclip" style={{ left: clipLeft }} />

      {/* THE ASYMMETRIC TAB SHOULDER */}
      <div
        style={{
          position: 'absolute',
          top: '-32px',
          left: folder.tabLeft,
          padding: '8px 28px',
          backgroundColor: currentBgColor, // Matches folder body color seamlessly
          borderRadius: '16px 16px 0 0', // Original folder tab architecture remains untouched
          
          // UPDATED TO LOCAL OPEN SAUCE TYPOGRAPHY:
          fontFamily: "'Open Sauce', sans-serif",
          fontWeight: 'normal', // Lets the local SemiBold weight display naturally crisp
          
          fontSize: '0.78rem',
          letterSpacing: '1px',
          color: isDarkText ? '#111111' : '#ffffff',
          borderTop: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 -3px 6px rgba(0,0,0,0.02)',
          zIndex: 3
        }}
      >
        📁 {folder.tabLabel}
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ opacity: isOpen ? 1 : 0.75, marginTop: '10px', position: 'relative', zIndex: 4 }}>
        <h2 className="folder-heading" style={{ color: isDarkText ? '#111111' : 'inherit' }}>{folder.title}</h2>
        {isOpen && (
          <div className="folder-body-text">
            <hr style={{ border: 'none', borderBottom: `1px dashed ${customColor ? '#2b3020' : folder.textColor}40`, margin: '0 0 20px 0' }} />
            <FolderContent id={folder.id} />
          </div>
        )}
      </div>
    </div>
  );
}