import React, { useState } from 'react';
import Header from './components/Header';
import Folder from './components/Folder';
import { folderData } from './data/folders';
import './styles/Global.css';
import './styles/Folder.css';

function App() {
  const [openFolder, setOpenFolder] = useState('education');

  // AN ORGANIZED LOOKUP FOR ALL YOUR CUSTOM FOLDER COLORS
  const folderColors = {
    education: '#dddd7b',       // Sage/Muted Green
    design: '#A2C2E8',          // Baby Blue
    fyp: '#fdda0d',             // Yellow (Final Year Project)
    skills: '#ffa602',          // sunburst (Skills & Experience)
    videos: '#fbd9e5',          // Blush Pink (Video Editing & Animation)
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      <Header />
      
      <div className="folder-container">
        {folderData.map((folder, index) => {
          const isOpen = openFolder === folder.id;
          const openIndex = folderData.findIndex(f => f.id === openFolder);
          
          let customMarginTop = '-75px'; 
          if (index === 0) {
            customMarginTop = '0px';
          } else if (index === openIndex + 1) {
            customMarginTop = '25px';
          }

          // Grabs the mapped color if it exists, otherwise leaves it undefined for default fallback
          const folderColor = folderColors[folder.id];

          return (
            <Folder
              key={folder.id}
              folder={folder}
              index={index}
              isOpen={isOpen}
              onOpen={setOpenFolder}
              dynamicMargin={customMarginTop}
              customColor={folderColor} // Pass the custom color token down
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;