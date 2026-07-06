import React, { useState, useEffect, useRef } from 'react';

// IMPORT YOUR DIPLOMA PROJECT IMAGES
import ciscoswitchImg from '../assets/ciscoswitch.png';
import packettracerImg from '../assets/packet tracer.png';
import wiresharkImg from '../assets/wireshark.png';
import routerImg from '../assets/router.png';
import blindstickImg from '../assets/blindstick.png';
import fypdipImg from '../assets/fypdip.jpeg';
import fypdip2Img from '../assets/fypdip2.jpeg';

// IMPORT YOUR DEGREE LOGO IMAGES
import blenderlogoImg from '../assets/blenderlogo.png';
import figmalogoImg from '../assets/figmalogo.png';
import unitylogoImg from '../assets/unitylogo.png';
import vscodelogoImg from '../assets/vscodelogo.png';

// FIXED CASE-SENSITIVE EXTENSIONS FOR FIGMA PROJECTS (.JPG)
import figmaGolfAppImg from "../assets/figma.JPG";
import figmaTravelAppImg from "../assets/figma-project.JPG";

// FIXED CASE-SENSITIVE EXTENSIONS FOR BLENDER PROJECTS (.JPG)
import blenderTerrainImg from "../assets/blender.JPG";
import blenderIsometricImg from "../assets/blenderasset.JPG";

// FIXED PARSE ERROR SYNTAX FOR UNITY ASSETS
import unityJomSainsImg from "../assets/jomsains.png";
import unityVrFireDrillImg from "../assets/VRFireDrillTrainingSimulation.png";

// CASE-SENSITIVE VISUAL CODE PROJECTS
import vscodeDashboardImg from "../assets/VideoSteganography.png";
import vscodeScriptsImg from "../assets/VideoSteganographyScripts.JPG";

// FINAL YEAR PROJECT (NGOPI AR APP) PIPELINE ASSETS
import fypHomepage from '../assets/fyp/homepage.png';
import fypAboutApps from '../assets/fyp/aboutapps.png';
import fypMainMenu from '../assets/fyp/mainmenu.png';
import fypArabicaBean from '../assets/fyp/arabicabean.jpeg';
import fypArabicaBeanZoom from '../assets/fyp/arabicabeanzoomin.jpeg';
import fypArabicaMap from '../assets/fyp/arabicamap.jpeg';
import fypRobustaMap from '../assets/fyp/robustamap.jpeg';
import fypHarvesting from '../assets/fyp/harvesting.jpeg';
import fypInfoRoasting from '../assets/fyp/infocanvasroasting.png';
import fypRoastingScene from '../assets/fyp/roastingscene.png';
import fypBrewing from '../assets/fyp/brewing.png';
import fypCoffeeRoots from '../assets/fyp/coffeeroots.jpeg';

// NEW EXHIBITION PHOTOS IMPORTS
import drmihaImg from '../assets/drmiha.jpeg';
import duringexhibitionImg from '../assets/duringexhibition.jpeg';

// NETWORKING INTERNSHIP PHOTOS IMPORTS
import intern1Img from '../assets/intern1.jpeg';
import intern2Img from '../assets/intern2.jpeg';
import intern3Img from '../assets/intern3.jpeg';
import intern4Img from '../assets/intern4.jpeg';
import intern5Img from '../assets/intern5.jpeg';
import intern6Img from '../assets/intern6.jpeg';
import intern7Img from '../assets/intern7.jpeg';
import notes1Img from '../assets/notes1.jpeg';
import notes2Img from '../assets/notes2.jpeg';

// ACHIEVEMENT IMAGES
import graduation1Img from '../assets/graduation1.jpeg'; 
import graduation2Img from '../assets/graduation2.jpeg';
import achievementImg from '../assets/achievements.jpeg';
import certificateImg from '../assets/certificate.jpeg';

<p style={{
  fontFamily: "'Open Sauce', sans-serif",
  fontSize: '0.78rem',
  color: 'rgba(43, 48, 32, 0.4)',
  margin: '15px 0 5px 0',
  fontStyle: 'italic',
  fontWeight: 'bold'
}}>
...
</p>

// Optional: Import these if you want to expand your gallery later
// NEW INTERACTIVE TRIGGER & NOTICE STICKER IMAGES
import noticeImg from '../assets/notice.png';
import stickerImg from '../assets/sticker.png';

export default function FolderContent({ id }) {
  // STATE TO TRACK INDEPENDENT CREDENTIAL SLOTS
  const [subView, setSubView] = useState(null); 
  
  // SUB-STATE FOR EXPANDING SPECIFIC PROJECT EXPLANATIONS (EDUCATION)
  const [activeProject, setActiveProject] = useState(null); 

  // SUB-STATE FOR EXPANDING SPECIFIC DESIGN FILE SHOWCASES
  const [activeDesignDoc, setActiveDesignDoc] = useState(null); 

  // HOVER STATE SPECIFICALLY FOR THE BLINDSTICK CONTAINER
  const [isStickHovered, setIsStickHovered] = useState(false);

  // LIGHTBOX MODAL CORE WINDOW STATES (UPGRADED FOR TEXT INJECTIONS)
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalDescription, setModalDescription] = useState(null);

  // TRACKS THE DYNAMIC ZOOM SCALE VALUE FOR THE SLIDER INTERFACE
  const [zoomScale, setZoomScale] = useState(1);

  // NEW STATE: TRACKS IF THE STICKER NOTICE IS OPENED
  const [showNotice, setShowNotice] = useState(false);

  // Refs for auto-scroll on hover functionality
  const fypScrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // Object collection for the clean mapping of your 12 FYP assets + Contextual Details
  const fypGallery = [
    { 
      src: fypHomepage, 
      title: "Homepage Screen", 
      desc: "The opening or splash screen of the Ngopi application. It features the primary logo along with a rustic illustration depicting a traditional local coffee-drinking gathering, introducing users to the app's focus on interactive and augmented reality (AR) coffee education." 
    },
    { 
      src: fypAboutApps, 
      title: "About App Hub", 
      desc: "This screen provides foundational reading material regarding Malaysia's long coffee heritage specifically highlighting local bean varieties like Liberica and introduces users to the overall goals of the application." 
    },
    { 
      src: fypMainMenu, 
      title: "Main Menu Selection", 
      desc: "Acts as the central menu where users can select and access the three core learning paths of the application: All About Beans, Bean To Brew, and Coffee Roots." 
    },
    { 
      src: fypArabicaBean, 
      title: "Arabica Bean Mesh", 
      desc: "This screen renders a 3D coffee beans model such as Arabica, Liberica and Robusta paired with a short text overview explaining its flavor profile and traits in All About Beans module." 
    },
    { 
      src: fypArabicaBeanZoom, 
      title: "Arabica Macro Close-up", 
      desc: "The image of each object detected by the camera can be zoomed, rotated, and scaled, allowing users to view the details more precisely." 
    },
    { 
      src: fypArabicaMap, 
      title: "Arabica Cultivation Map", 
      desc: "The display provides a short overview of how Sabah's high-altitude climate supports premium local Arabica plantations." 
    },
    { 
      src: fypRobustaMap, 
      title: "Robusta Cultivation Map", 
      desc: "The interactive AR map interface showcasing the Robusta bean variety localized to Kedah. It offers a concise summary of Kedah’s regional farming roots and its contribution to northern Malaysia's coffee industry." 
    },
    { 
      src: fypHarvesting, 
      title: "AR Harvesting", 
      desc: "It features a surface-spawned 3D coffee tree alongside guidance from a farmer NPC who gives instructions on how to select and pick ripe coffee cherries." 
    },
    { 
      src: fypInfoRoasting, 
      title: "Roasting Canvas", 
      desc: "An educational Info Canvas overlay that appears before the roasting gameplay begins. It provides a brief introduction to the roasting process, explaining how green coffee beans transform into aromatic brown beans." 
    },
    { 
      src: fypRoastingScene, 
      title: "AR Roasting", 
      desc: "The active interface for the Roasting Scene. It features an interactive 3D coffee roaster machine where users initiate the process, supplemented by a visual progress bar that tracks the dynamic color changes of the beans." 
    },
    { 
      src: fypBrewing, 
      title: "Interactive Brewing Engine", 
      desc: "The interactive AR interface for the Brewing Scene. It displays a 3D coffee machine being operated to fill a cup, accompanied by text dialogue and performance validation from a helpful 3D barista NPC to mark the completion of the lifecycle module." 
    },
    { 
      src: fypCoffeeRoots, 
      title: "Coffee Heritage ", 
      desc: "The top portion features the topVideoContainer showing the video of the coffee beans heritage alongside an active timeline slider. This slider acts as a visual progress indicator from the instructional video phase that precedes the quiz." 
    },
  ];

  // REGISTER ALL CSS CORE TRANSITIONS, HOVER-EFFECTS, AND LIGHTBOX MODALS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes hoverBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .bouncy-hover-target {
        transition: transform 0.2s ease-out;
        cursor: pointer;
      }
      .bouncy-hover-target:hover {
        animation: hoverBounce 0.6s infinite ease-in-out;
      }
      @keyframes quickPopIn {
        from { opacity: 0; transform: translate(-50%, 5px); }
        to { opacity: 1; transform: translate(-50%, 0); }
      }
      @keyframes pulseslow {
        0%, 100% { transform: translate(-50%, 0) scale(1); }
        50% { transform: translate(-50%, 0) scale(1.05); }
      }

      /* HIGHLY NOTICEABLE CONSTANT ATTENTION-GRABBING SHAKE */
      @keyframes aggressiveWobble {
        0%, 100% { transform: rotate(0deg) scale(1.05); }
        5%, 15%, 25%, 35% { transform: rotate(-6deg) scale(1.08); }
        10%, 20%, 30%, 40% { transform: rotate(6deg) scale(1.08); }
        45% { transform: rotate(0deg) scale(1.05); }
        100% { transform: rotate(0deg) scale(1.05); }
      }
      .animated-notice-trigger {
        animation: aggressiveWobble 1.6s infinite ease-in-out;
        transform-origin: center center;
        transition: all 0.2s ease-in-out;
      }
      .animated-notice-trigger:hover {
        animation-play-state: paused;
        transform: scale(1.25) !important;
        filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3)) !important;
        cursor: pointer;
      }

      /* POPOUT NOTIFICATION STICKER MODAL OVERLAY */
      .sticker-overlay {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(15, 17, 23, 0.4);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 100001;
        display: flex; align-items: center; justify-content: center;
        opacity: 0;
        animation: fadeInOverlay 0.2s forwards ease-out;
      }
      .sticker-container {
        position: relative;
        max-width: 85%;
        max-height: 80vh;
        display: flex; align-items: center; justify-content: center;
        animation: quickStickerPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25) forwards;
      }
      @keyframes quickStickerPop {
        from { opacity: 0; transform: scale(0.9) translateY(10px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .sticker-img {
        max-width: 100%;
        max-height: 80vh;
        height: auto;
        object-fit: contain;
      }
      .sticker-close-btn {
        position: absolute;
        top: -12px; right: -12px;
        background: #ff5f56; color: #ffffff;
        border: 2px solid #ffffff; border-radius: 50%;
        width: 28px; height: 28px; font-weight: bold; font-size: 1rem;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        transition: transform 0.2s ease;
      }
      .sticker-close-btn:hover {
        transform: scale(1.1);
      }
      
      /* UPGRADED DYNAMIC INTERACTIVE LIGHTBOX OVERLAY */
      .lightbox-overlay {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(15, 17, 23, 0.92);
        backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
        z-index: 99999; display: flex; flex-direction: column; align-items: center; justify-content: center;
        opacity: 0; animation: fadeInOverlay 0.25s forwards cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes fadeInOverlay { to { opacity: 1; } }
      .lightbox-scroll-container {
        width: 100%; height: 80vh; display: flex; align-items: center; justify-content: center;
        overflow: auto; padding: 20px; box-sizing: border-box;
      }
      .lightbox-zoom-bar {
        background: rgba(30, 35, 45, 0.85); border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 12px 24px; border-radius: 30px; display: flex; align-items: center; gap: 15px;
        margin-top: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); z-index: 100000; backdrop-filter: blur(5px);
      }
      .lightbox-zoom-slider { cursor: pointer; width: 150px; accent-color: #A2C2E8; }
      .lightbox-zoom-label { color: #ffffff; font-family: sans-serif; font-size: 0.85rem; min-width: 45px; text-align: center; }
      .lightbox-close-btn {
        position: absolute; top: 25px; right: 30px; background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.25); color: #ffffff; font-size: 1.5rem;
        width: 44px; height: 44px; border-radius: 50%; cursor: pointer;
        display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; z-index: 100000;
      }
      .lightbox-close-btn:hover { background: rgba(255, 255, 255, 0.3); transform: scale(1.05); }

      /* NEW DUAL-PANEL SHOWCASE INTERACTIVE TILES CARDS */
      .lightbox-modal-card.has-details {
        background: rgba(23, 28, 38, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 20px;
        overflow: hidden;
        max-width: 92%;
        max-height: 82vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 40px 90px rgba(0,0,0,0.8);
      }
      .lightbox-standalone-wrapper {
        display: flex; align-items: center; justify-content: center;
      }
      .lightbox-standalone-wrapper .lightbox-image {
        max-width: 90vw; max-height: 80vh; border-radius: 8px;
        box-shadow: 0 30px 70px rgba(0,0,0,0.6); transition: transform 0.1s ease-out;
      }

      @media (min-width: 768px) {
        .lightbox-modal-card.has-details {
          flex-direction: row;
          width: 960px;
        }
        .lightbox-image-wrapper {
          flex: 1; display: flex; align-items: center; justify-content: center;
          background: #0b0d13; padding: 20px; overflow: hidden;
        }
        .lightbox-modal-card.has-details .lightbox-image {
          max-width: 100%; max-height: 70vh; object-fit: contain; transition: transform 0.1s ease-out;
        }
        .lightbox-details-wrapper {
          width: 380px; flex-shrink: 0; padding: 40px 30px; box-sizing: border-box;
          border-left: 1px solid rgba(255, 255, 255, 0.1); display: flex; flex-direction: column;
          justify-content: center; background: rgba(30, 35, 45, 0.45); text-align: left;
        }
      }

      @media (max-width: 767px) {
        .lightbox-modal-card.has-details {
          max-height: 75vh; overflow-y: auto;
        }
        .lightbox-image-wrapper {
          width: 100%; background: #0b0d13; padding: 15px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .lightbox-modal-card.has-details .lightbox-image {
          max-width: 100%; max-height: 45vh; object-fit: contain; transition: transform 0.1s ease-out;
        }
        .lightbox-details-wrapper {
          width: 100%; padding: 25px 20px; box-sizing: border-box;
          border-top: 1px solid rgba(255, 255, 255, 0.1); background: rgba(30, 35, 45, 0.6);
          text-align: left;
        }
      }

      .lightbox-details-title {
        color: #ffffff; font-family: 'Open Sauce', sans-serif; font-size: 1.2rem;
        font-weight: 800; margin: 0 0 14px 0; letter-spacing: 0.5px; text-transform: uppercase;
        border-bottom: 1px dashed rgba(255,255,255,0.15); padding-bottom: 10px;
      }
      .lightbox-details-text {
        color: rgba(255, 255, 255, 0.85); font-family: 'Open Sauce', sans-serif;
        font-size: 0.92rem; line-height: 1.6; margin: 0;
      }

      /* ========================================================================= */
      /* STYLES FOR THE HORIZONTAL INTERACTIVE NGOPI FYP SYSTEM                    */
      /* ========================================================================= */
      .fyp-master-wrapper { text-align: center; padding: 10px 5px; animation: fadeIn 0.4s ease-out; position: relative; }
      
      /* VIEWPORT SUPPORTS NATIVE TOUCH SWIPING ON PHONES */
      .fyp-scroller-viewport {
        display: flex; gap: 28px; overflow-x: auto; padding: 45px 30px;
        scrollbar-width: none; -ms-overflow-style: none;
        position: relative;
        -webkit-overflow-scrolling: touch;
      }
      .fyp-scroller-viewport::-webkit-scrollbar { display: none; }
      
      /* DESKTOP-ONLY HOVER OVERLAY GLIDE ZONES */
      .fyp-hover-edge-zone {
        position: absolute; top: 120px; bottom: 60px; width: 70px; z-index: 100;
        transition: background 0.3s ease; pointer-events: auto;
      }
      .fyp-hover-edge-zone.left {
        left: 0; cursor: w-resize; background: linear-gradient(to right, rgba(255,255,255,0.15), transparent);
      }
      .fyp-hover-edge-zone.right {
        right: 0; cursor: e-resize; background: linear-gradient(to left, rgba(255,255,255,0.15), transparent);
      }
      .fyp-hover-edge-zone:hover {
        background: linear-gradient(to right, rgba(162, 194, 232, 0.08), transparent);
      }
      .fyp-hover-edge-zone.right:hover {
        background: linear-gradient(to left, rgba(162, 194, 232, 0.08), transparent);
      }

      /* HYBRID FIX: COMPLETELY HIDE HOVER OVERLAYS ON TOUCH-ONLY DEVICES */
      @media (hover: none) {
        .fyp-hover-edge-zone {
          display: none !important; pointer-events: none !important;
        }
      }

      .fyp-photo-card {
        flex: 0 0 240px; height: 460px; background: rgba(255, 255, 255, 0.45);
        border: 1px solid rgba(43, 48, 32, 0.12); box-shadow: 0 12px 28px rgba(0,0,0,0.06);
        border-radius: 20px; padding: 10px; box-sizing: border-box; cursor: zoom-in;
        display: flex; flex-direction: column;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .fyp-photo-card:nth-child(odd) { transform: rotate(-3deg) translateY(8px); }
      .fyp-photo-card:nth-child(even) { transform: rotate(3deg) translateY(-8px); }
      .fyp-photo-card:hover {
        transform: rotate(0deg) scale(1.08) translateY(-15px) !important; z-index: 50;
        background: rgba(255, 255, 255, 0.9); border-color: #A2C2E8; box-shadow: 0 22px 40px rgba(15,17,23,0.15);
      }
      .fyp-img-container { width: 100%; height: 86%; border-radius: 12px; overflow: hidden; background: #000; border: 1px solid rgba(0,0,0,0.05); }
      .fyp-img-container img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
      .fyp-photo-card:hover .fyp-img-container img { transform: scale(1.03); }
      .fyp-card-metadata { height: 14%; display: flex; align-items: center; justify-content: center; padding-top: 6px; }
      .fyp-card-title { font-size: 0.78rem; font-weight: 800; color: #2b3020; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); }; 
  }, []);

  // --- VELOCITY ANIMATION ENGINE ---
  const startGlideScroll = (speedPixels) => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    
    scrollIntervalRef.current = setInterval(() => {
      if (fypScrollRef.current) {
        fypScrollRef.current.scrollLeft += speedPixels;
      }
    }, 16); 
  };

  const stopGlideScroll = () => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
  };

  const handleMobileTouch = () => {
    setActiveProject('blindstick');
  };

  // UPGRADED TO CAPTURE CONTEXTUAL ASSIGNMENTS ON TARGET SLOTS
  const openImageModal = (imgSrc, title = null, description = null) => {
    setModalImage(imgSrc);
    setModalTitle(title);
    setModalDescription(description);
    setZoomScale(1); 
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle(null);
    setModalDescription(null);
  };

  // --- EDUCATION FOLDER CONTEXT ---
  if (id === 'education') {
    return (
      <div style={{ textAlign: 'center', position: 'relative' }}>
        
        {(subView || activeProject) && (
          <button 
            onClick={() => {
              if (activeProject) {
                setActiveProject(null);
              } else {
                setSubView(null);
              }
            }}
            style={{
              cursor: 'pointer', background: 'rgba(255, 255, 255, 0.7)', border: '1px solid #2b3020',
              padding: '6px 16px', borderRadius: '20px', marginBottom: '25px', fontFamily: "'Open Sauce', sans-serif",
              fontSize: '0.8rem', fontWeight: 'bold', color: '#2b3020', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', transition: 'all 0.2s'
            }}
          >
            {activeProject ? '← Back to Diploma Specifications' : '← Back to Credentials Overview'}
          </button>
        )}

        {!subView && !activeProject && (
          <div style={{ fontFamily: "'Open Sauce', sans-serif" }}>
            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', textAlign: 'center' }}> Academic Foundation &amp; Strategy </p>
            <p style={{ margin: '0 auto 35px auto', maxWidth: '750px', lineHeight: '1.6', textAlign: 'center' }}> Curious about my academic journey? Click a folder below to explore </p>
            
            <div className="sub-files-center-wrapper">
              <div className="glass-doc-card" onClick={() => setSubView('diploma')}>
                <div className="glass-doc-sheet" />
                <div className="glass-doc-front-lip" />
                <span className="glass-doc-label" style={{ color: '#2b3020', fontFamily: "'Open Sauce', sans-serif" }}>Diploma</span>
              </div>

              <div className="glass-doc-card" onClick={() => setSubView('degree')}>
                <div className="glass-doc-sheet" style={{ transform: 'rotate(2deg)' }} />
                <div className="glass-doc-front-lip" />
                <span className="glass-doc-label" style={{ color: '#2b3020', fontFamily: "'Open Sauce', sans-serif" }}>Degree</span>
              </div>
            </div>
          </div>
        )}

        {subView === 'diploma' && !activeProject && (
          <div style={{ textAlign: 'left', padding: '15px 25px', color: '#2b3020', animation: 'fadeIn 0.25s ease-out', fontFamily: "'Open Sauce', sans-serif" }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Diploma Qualifications </h3>
            <p style={{ margin: '12px 0' }}><span style={{ fontWeight: '900', marginRight: '5px' }}>Institution:</span> Politeknik Muadzam Shah, Pahang</p>
            <p style={{ margin: '12px 0' }}><span style={{ fontWeight: '900', marginRight: '5px' }}>Course Major:</span> Diploma in Networking</p>
            <p style={{ margin: '12px 0', lineHeight: '1.6' }}>
              <span style={{ fontWeight: '900', marginRight: '5px' }}> Fundamental Coursework:</span> During my Diploma in Networking Technology, I developed a strong foundation in computer networking, routing and switching, system administration, and IoT technologies.
            </p>
            
            <div style={{ margin: '25px 0 10px 0' }}>
              <p style={{ margin: '0 0 15px 0' }}><span style={{ fontWeight: '900' }}> Technical Highlights &amp; Core Tools:</span></p>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
                
                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={ciscoswitchImg} alt="Cisco Hardware" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Cisco Hardware</span>
                </div>

                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={packettracerImg} alt="Packet Tracer" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Packet Tracer</span>
                </div>

                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={wiresharkImg} alt="Wireshark" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Wireshark</span>
                </div>

                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={routerImg} alt="Infrastructure" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Infrastructure</span>
                </div>

                <div 
                  style={{ flex: '0 1 120px', textAlign: 'center', position: 'relative' }}
                  onMouseEnter={() => setIsStickHovered(true)}
                  onMouseLeave={() => setIsStickHovered(false)}
                  onTouchStart={handleMobileTouch} 
                >
                  {isStickHovered && (
                    <button
                      onClick={() => setActiveProject('blindstick')}
                      style={{
                        position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', zIndex: 10,
                        background: '#2b3020', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)',
                        padding: '5px 10px', fontSize: '0.65rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold',
                        whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', animation: 'quickPopIn 0.2s ease-out, pulseslow 2s infinite ease-in-out'
                      }}
                    >
                      Here, Click Me! 
                    </button>
                  )}
                  <div onClick={() => setActiveProject('blindstick')} className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={blindstickImg} alt="The 3rd Eye IoT" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>"The 3rd Eye" IoT</span>
                </div>

              </div>
            </div>
          </div>
        )}

        {activeProject === 'blindstick' && (
          <div style={{ textAlign: 'left', padding: '15px 25px', color: '#2b3020', animation: 'fadeIn 0.3s ease-out', fontFamily: "'Open Sauce', sans-serif" }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Project Showcase: "The 3rd Eye" Smart Walking Stick </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              <strong>Project Overview:</strong> This prototype is an innovative smart device designed to assist visually impaired individuals with safer navigation using responsive telemetry tracking.
            </p>

            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <p style={{ textAlign: 'left', fontWeight: '900', marginBottom: '15px' }}>Project Proof &amp; Blueprint (Click to expand):</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', width: '100%' }}>
                
                <div 
                  onClick={() => openImageModal(fypdipImg)}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px',
                    flex: '1 1 300px', maxWidth: '46%', boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(43,48,32,0.1)', cursor: 'zoom-in', transition: 'transform 0.2s ease'
                  }}
                >
                  <img src={fypdipImg} alt="Proof 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                </div>

                <div 
                  onClick={() => openImageModal(fypdip2Img)}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px',
                    flex: '1 1 300px', maxWidth: '46%', boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(43,48,32,0.1)', cursor: 'zoom-in', transition: 'transform 0.2s ease'
                  }}
                >
                  <img src={fypdip2Img} alt="Proof 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                </div>

              </div>
            </div>
          </div>
        )}

        {subView === 'degree' && (
          <div style={{ textAlign: 'left', padding: '15px 25px', color: '#2b3020', animation: 'fadeIn 0.25s ease-out', fontFamily: "'Open Sauce', sans-serif" }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Degree Qualifications </h3>
            <p style={{ margin: '12px 0' }}><strong>Institution:</strong> Universiti Tun Hussein Onn Malaysia (UTHM)</p>
            <p style={{ margin: '12px 0' }}><strong>Course Major:</strong> Bachelor of Computer Science (Multimedia Computing) with Honours</p>
            <p style={{ margin: '12px 0', lineHeight: '1.6' }}>
              Specialized coursework targeting spatial interfaces, modular engine assets, software engineering pipelines, and integrated visual architectures.
            </p>

            <div style={{ margin: '25px 0 10px 0' }}>
              <p style={{ margin: '0 0 15px 0' }}><span style={{ fontWeight: '900' }}> Core Projects &amp; Environment Toolsets:</span></p>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={blenderlogoImg} alt="Blender 3D" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Blender 3D</span>
                </div>
                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={figmalogoImg} alt="UI/UX Design" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>UI/UX Design</span>
                </div>
                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={unitylogoImg} alt="Unity Engine" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Unity Engine</span>
                </div>
                <div style={{ flex: '0 1 120px', textAlign: 'center' }}>
                  <div className="bouncy-hover-target" style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={vscodelogoImg} alt="Development" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>Development</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UNIVERSAL ADAPTIVE LIGHTBOX SYSTEM */}
        {modalImage && (
          <div className="lightbox-overlay" onClick={closeModal}>
            <button className="lightbox-close-btn" onClick={closeModal}>&times;</button>
            <div className="lightbox-scroll-container" onClick={closeModal}>
              
              <div 
                className={modalDescription ? "lightbox-modal-card has-details" : "lightbox-standalone-wrapper"}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lightbox-image-wrapper">
                  <img src={modalImage} className="lightbox-image" alt="Expanded Asset Node View" style={{ transform: `scale(${zoomScale})` }} />
                </div>
                {modalDescription && (
                  <div className="lightbox-details-wrapper">
                    <h3 className="lightbox-details-title">{modalTitle}</h3>
                    <p className="lightbox-details-text">{modalDescription}</p>
                  </div>
                )}
              </div>

            </div>
            <div className="lightbox-zoom-bar" onClick={(e) => e.stopPropagation()}>
              <span className="lightbox-zoom-label">Zoom Out</span>
              <input type="range" min="0.5" max="2.5" step="0.1" value={zoomScale} onChange={(e) => setZoomScale(parseFloat(e.target.value))} className="lightbox-zoom-slider" />
              <span className="lightbox-zoom-label">Zoom In</span>
              <span style={{ color: '#A2C2E8', fontSize: '0.8rem', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '10px' }}>
                {Math.round(zoomScale * 100)}%
              </span>
            </div>
          </div>
        )}

      </div>
    );
  }

  // --- DESIGN GALLERY FOLDER CONTEXT ---
  if (id === 'design') {
    return (
      <div style={{ fontFamily: "'Open Sauce', sans-serif", color: '#2b3020', animation: 'fadeIn 0.25s ease-out', position: 'relative', textAlign: 'center' }}>
        
        <div 
          className="animated-notice-trigger"
          onClick={() => setShowNotice(true)}
          style={{
            position: 'absolute', top: '-135px', left: '25px', zIndex: 9999, width: '125px', height: 'auto',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))'
          }}
        >
          <img src={noticeImg} alt="Notice Trigger" style={{ width: '100%', height: 'auto' }} />
        </div>

        {showNotice && (
          <div className="sticker-overlay" onClick={() => setShowNotice(false)}>
            <div className="sticker-container" onClick={(e) => e.stopPropagation()}>
              <button className="sticker-close-btn" onClick={() => setShowNotice(false)}>&times;</button>
              <img src={stickerImg} className="sticker-img" alt="Sticker Notification Board" />
            </div>
          </div>
        )}

        {activeDesignDoc && (
          <button 
            onClick={() => setActiveDesignDoc(null)}
            style={{
              cursor: 'pointer', background: 'rgba(255, 255, 255, 0.7)', border: '1px solid #2b3020',
              padding: '6px 16px', borderRadius: '20px', marginBottom: '25px', fontFamily: "'Open Sauce', sans-serif",
              fontSize: '0.8rem', fontWeight: 'bold', color: '#2b3020', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', transition: 'all 0.2s'
            }}
          >
            ← Back to Design Library
          </button>
        )}

        {!activeDesignDoc && (
          <>
            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', textAlign: 'center' }}> Visual Portfolio Assets </p>
            <p style={{ margin: '0 auto 35px auto', maxWidth: '750px', lineHeight: '1.6', textAlign: 'center' }}>
              A compilation of user interface designs, custom iconography vectors, typographical frameworks, and brand positioning components compiled across my works.
            </p>
            
            <div className="sub-files-center-wrapper">
              <div className="glass-doc-card" onClick={() => setActiveDesignDoc('figma')}>
                <div className="glass-doc-sheet">
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={figmalogoImg} alt="Figma" style={{ maxWidth: '40px', maxHeight: '40px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="glass-doc-front-lip" />
                <span className="glass-doc-label" style={{ color: '#2b3020', fontSize: '0.9rem', fontFamily: "'Open Sauce', sans-serif" }}>Figma</span>
              </div>

              <div className="glass-doc-card" onClick={() => setActiveDesignDoc('blender')}>
                <div className="glass-doc-sheet" style={{ transform: 'rotate(2deg)' }}>
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={blenderlogoImg} alt="Blender" style={{ maxWidth: '45px', maxHeight: '45px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="glass-doc-front-lip" />
                <span className="glass-doc-label" style={{ color: '#2b3020', fontSize: '0.9rem', fontFamily: "'Open Sauce', sans-serif" }}>Blender</span>
              </div>

              <div className="glass-doc-card" onClick={() => setActiveDesignDoc('unity')}>
                <div className="glass-doc-sheet" style={{ transform: 'rotate(-1deg)' }}>
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={unitylogoImg} alt="Unity" style={{ maxWidth: '42px', maxHeight: '42px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="glass-doc-front-lip" />
                <span className="glass-doc-label" style={{ color: '#2b3020', fontSize: '0.9rem', fontFamily: "'Open Sauce', sans-serif" }}>Unity</span>
              </div>

              <div className="glass-doc-card" onClick={() => setActiveDesignDoc('vscode')}>
                <div className="glass-doc-sheet" style={{ transform: 'rotate(3deg)' }}>
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={vscodelogoImg} alt="VS Code" style={{ maxWidth: '40px', maxHeight: '40px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="glass-doc-front-lip" />
                <span className="glass-doc-label" style={{ color: '#2b3020', fontSize: '0.85rem', fontFamily: "'Open Sauce', sans-serif" }}>Visual Code</span>
              </div>
            </div>
          </>
        )}

        {/* FIGMA ORIGINAL EXPLANATIONS */}
        {activeDesignDoc === 'figma' && (
          <div style={{ textAlign: 'left', padding: '15px 25px', animation: 'fadeIn 0.3s ease-out' }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Figma UI/UX Systems Showcase </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              Design specifications featuring high-fidelity screen mockups, component atomicity variants, interactive system wireframes, and responsive user flow prototypes built natively inside Figma.
            </p>

            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <p style={{ textAlign: 'left', fontWeight: '900', marginBottom: '20px' }}>Current UI Specifications (Click image to zoom in):</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
                
                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(figmaGolfAppImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={figmaGolfAppImg} alt="Golf Equipment Rental App" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Golf Equipment Rental App</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Goal:</strong> A streamlined mobile booking funnel to rent golf bays and sports equipment effortlessly for UTHM students and staff.</p>
                  </div>
                </div>

                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(figmaTravelAppImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={figmaTravelAppImg} alt="Travel App Prototype framework" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Travel App Prototype</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Goal:</strong> Fully interactive user journey mapping from personalized account discovery funnels to complete destination lookup cards.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* BLENDER  EXPLANATIONS */}
        {activeDesignDoc === 'blender' && (
          <div style={{ textAlign: 'left', padding: '15px 25px', animation: 'fadeIn 0.3s ease-out' }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Blender 3D Environment Design Showcase </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
               Three-dimensional surface meshes, spatial geometry compositions, texture mapping workflows, and low-poly visual optimizations generated for integrated runtime scenarios.
            </p>

            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <p style={{ textAlign: 'left', fontWeight: '900', marginBottom: '20px' }}>Current 3D Render Models (Click image to zoom in):</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
                
                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(blenderTerrainImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={blenderTerrainImg} alt="Low-Poly Terrain" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Low-Poly Terrain &amp; Scene Composition</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Goal:</strong> Building a stylized, low-poly 3D environment to use as an interactive map for my Final Year Project.</p>
                  </div>
                </div>

                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(blenderIsometricImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={blenderIsometricImg} alt="Isometric Interior Design Model" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Isometric Interior Asset Design</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Goal:</strong> Creating a detailed isometric room layout for application illustrations or gamified interfaces.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* UNITY ENGINE  EXPLANATIONS */}
        {activeDesignDoc === 'unity' && (
          <div style={{ textAlign: 'left', padding: '15px 25px', animation: 'fadeIn 0.3s ease-out' }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Unity Interactive Engine Showcase </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              Interactive logic layer assemblies, interactive spatial UI designs, multimedia scene management pipelines, and specialized deployment training builds configured within the Unity ecosystem.
            </p>

            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <p style={{ textAlign: 'left', fontWeight: '900', marginBottom: '20px' }}>Current Unity Engine Projects (Click image to zoom in):</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
                
                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(unityJomSainsImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={unityJomSainsImg} alt="JomSains Learning App Screen Spec" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>JomSains learning application</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Project:</strong> Interactive Unity mobile learning application tailored for Malaysian Primary School Science courses.</p>
                  </div>
                </div>

                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(unityVrFireDrillImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={unityVrFireDrillImg} alt="VR Fire Drill Training Simulation Blueprint Board" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>VR Fire Drill Training Simulation</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Project:</strong> Immersive VR safety training simulation engineered for students to practice campus crisis emergency protocols.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* VISUAL CODE  EXPLANATIONS */}
        {activeDesignDoc === 'vscode' && (
          <div style={{ textAlign: 'left', padding: '15px 25px', animation: 'fadeIn 0.3s ease-out' }}>
            <h3 style={{ borderBottom: '1px dashed rgba(43,48,32,0.3)', paddingBottom: '10px', marginTop: 0 }}> Visual Code Software Architecture Showcase </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
              Production frontend/backend engineering modules, custom data validation pipelines, and architectural frameworks built inside VS Code.
            </p>

            <div style={{ marginTop: '25px', textAlign: 'center' }}>
              <p style={{ textAlign: 'left', fontWeight: '900', marginBottom: '20px' }}>Current Development Specifications (Click image to zoom):</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
                
                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(vscodeDashboardImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={vscodeDashboardImg} alt="Video Steganography Application Dashboard" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Video Steganography Dashboard</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Function:</strong> A security application designed to securely embed encrypted secret data into individual frames of lossless video assets via the Least Significant Bit algorithm.</p>
                  </div>
                </div>

                <div style={{ flex: '1 1 300px', maxWidth: '48%', boxSizing: 'border-box' }}>
                  <div onClick={() => openImageModal(vscodeScriptsImg)} style={{ background: 'rgba(255, 255, 255, 0.4)', padding: '12px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(43,48,32,0.1)', marginBottom: '15px', cursor: 'zoom-in' }}>
                    <img src={vscodeScriptsImg} alt="C# Backend Logic Script" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255,255,255,0.4)', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Backend Logic &amp; Architecture</h4>
                    <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}><strong>The Architecture:</strong> Engineering desktop frameworks utilizing specialized object initialization pipelines and custom background worker tasks to protect user thread handling.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* UNIVERSAL ADAPTIVE LIGHTBOX SYSTEM */}
        {modalImage && (
          <div className="lightbox-overlay" onClick={closeModal}>
            <button className="lightbox-close-btn" onClick={closeModal}>&times;</button>
            <div className="lightbox-scroll-container" onClick={closeModal}>
              
              <div 
                className={modalDescription ? "lightbox-modal-card has-details" : "lightbox-standalone-wrapper"}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lightbox-image-wrapper">
                  <img src={modalImage} className="lightbox-image" alt="Expanded Asset Node View" style={{ transform: `scale(${zoomScale})` }} />
                </div>
                {modalDescription && (
                  <div className="lightbox-details-wrapper">
                    <h3 className="lightbox-details-title">{modalTitle}</h3>
                    <p className="lightbox-details-text">{modalDescription}</p>
                  </div>
                )}
              </div>

            </div>
            <div className="lightbox-zoom-bar" onClick={(e) => e.stopPropagation()}>
              <span className="lightbox-zoom-label">Zoom Out</span>
              <input type="range" min="0.5" max="2.5" step="0.1" value={zoomScale} onChange={(e) => setZoomScale(parseFloat(e.target.value))} className="lightbox-zoom-slider" />
              <span className="lightbox-zoom-label">Zoom In</span>
              <span style={{ color: '#A2C2E8', fontSize: '0.8rem', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '10px' }}>
                {Math.round(zoomScale * 100)}%
              </span>
            </div>
          </div>
        )}

      </div>
    );
  }

  // --- FINAL YEAR PROJECT ---
  if (id === 'fyp') {
    return (
      <div className="fyp-master-wrapper">
        
        <h2 style={{ fontFamily: "'Open Sauce', sans-serif", fontSize: '1.9rem', color: '#2b3020', fontWeight: '900', marginBottom: '8px' }}>
          Ngopi : An Augmented Reality Mobile Application
        </h2>
        <p style={{ fontFamily: "'Open Sauce', sans-serif", fontSize: '0.92rem', color: 'rgba(43, 48, 32, 0.75)', maxWidth: '680px', margin: '0 auto 15px auto', lineHeight: '1.6' }}>
          Explore Malaysia's coffee heritage through immersive Augmented Reality
        </p>

        {/* OUTER WRAPPER CONTAINING DEDICATED HOVER DECK TRACKS */}
        <div style={{ position: 'relative', width: '100%' }}>
          
          {/* LEFT TRIGGER TRACK (AUTO-HIDES ON PHONE) */}
          <div 
            className="fyp-hover-edge-zone left"
            onMouseEnter={() => startGlideScroll(-10)}
            onMouseLeave={stopGlideScroll}
          />

          {/* RIGHT TRIGGER TRACK (AUTO-HIDES ON PHONE) */}
          <div 
            className="fyp-hover-edge-zone right"
            onMouseEnter={() => startGlideScroll(10)}
            onMouseLeave={stopGlideScroll}
          />

          {/* THE SCROLLER VIEWPORT */}
          <div 
            ref={fypScrollRef}
            className="fyp-scroller-viewport"
          >
            {fypGallery.map((photo, index) => (
              <div 
                key={index}
                className="fyp-photo-card"
                onClick={() => openImageModal(photo.src, photo.title, photo.desc)}
              >
                <div className="fyp-img-container">
                  <img src={photo.src} alt={photo.title} />
                </div>
                <div className="fyp-card-metadata">
                  <span className="fyp-card-title">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* DYNAMIC FOOTER HELP MESSAGE FOR BOTH ENVIRONMENTS */}
        <p style={{ fontFamily: "'Open Sauce', sans-serif", fontSize: '0.78rem', color: 'rgba(43, 48, 32, 0.4)', margin: '15px 0 5px 0', fontStyle: 'italic', fontWeight: 'bold' }}>
          <span className="desktop-tip"> Desktop: Place your mouse cursor over the outer edges to glide.</span>
          <style dangerouslySetInnerHTML={{__html: `
            .desktop-tip { display: inline; }
            @media (hover: none) {
              .desktop-tip { display: none; }
            }
          `}} />
          <span> Mobile: Drag or swipe your thumb directly across the deck to scroll.</span>
        </p>
        
   <div style={{
        marginTop: '50px',
        padding: '20px',
        backgroundImage: 'url(../assets/paper-texture.png)', // optional texture
        backgroundSize: 'cover',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto'
      }}>
        {/* Section Title */}
        <h3 style={{
          fontFamily: "'Open Sauce', sans-serif",
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '25px',
          padding: '10px 20px',
          borderRadius: '12px',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
          display: 'inline-block'
        }}>
          Final Project Exhibition
        </h3>
        {/* Photos in Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px'
        }}>
          {/* Photo 1: duringexhibition.jpeg */}
          <div style={{
          position: 'relative',
          padding: '10px',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0,0,0,0.1)'
       }}>
         <img 
         src={duringexhibitionImg} 
         alt="During Exhibition" 
         style={{ width: '100%', borderRadius: '4px', display: 'block' }} 
         onClick={() => openImageModal(duringexhibitionImg, "During Exhibition")}
        />
       </div>
          {/* Photo 2: drMiha.jpeg */}
          <div style={{
  position: 'relative',
  padding: '10px',
  backgroundColor: 'rgba(255,255,255,0.8)',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  border: '1px solid rgba(0,0,0,0.1)'
}}>
  <img 
    src={drmihaImg} 
    alt="Dr. Miha during exhibition" 
    style={{ width: '100%', borderRadius: '4px', display: 'block' }} 
    onClick={() => openImageModal(drmihaImg, "Dr. Miha during Exhibition")}
  />
          </div>
        </div>
      </div>
      
        {/* UNIVERSAL ADAPTIVE LIGHTBOX SYSTEM */}
        {modalImage && (
          <div className="lightbox-overlay" onClick={closeModal}>
            <button className="lightbox-close-btn" onClick={closeModal}>&times;</button>
            <div className="lightbox-scroll-container" onClick={closeModal}>
              
              <div 
                className={modalDescription ? "lightbox-modal-card has-details" : "lightbox-standalone-wrapper"}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lightbox-image-wrapper">
                  <img src={modalImage} className="lightbox-image" alt="Expanded Asset Node View" style={{ transform: `scale(${zoomScale})` }} />
                </div>
                {modalDescription && (
                  <div className="lightbox-details-wrapper">
                    <h3 className="lightbox-details-title">{modalTitle}</h3>
                    <p className="lightbox-details-text">{modalDescription}</p>
                  </div>
                )}
              </div>

            </div>
            <div className="lightbox-zoom-bar" onClick={(e) => e.stopPropagation()}>
              <span className="lightbox-zoom-label">Zoom Out</span>
              <input type="range" min="0.5" max="2.5" step="0.1" value={zoomScale} onChange={(e) => setZoomScale(parseFloat(e.target.value))} className="lightbox-zoom-slider" />
              <span className="lightbox-zoom-label">Zoom In</span>
              <span style={{ color: '#A2C2E8', fontSize: '0.8rem', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '10px' }}>
                {Math.round(zoomScale * 100)}%
              </span>
            </div>
          </div>
        )}

      </div>
    );
  }

  // --- FULLY EXPANDED FALLBACK CONTEXTS ---
 if (id === 'skills') {
    const internAssets = [
      { src: intern1Img, label: 'Cable Termination', desc: 'Terminating Cat5e/Cat6 networking infrastructure following standard wiring pinouts.' },
      { src: intern2Img, label: 'Rack Hardware Install', desc: 'Physical deployment, mounting, and alignment of enterprise switch units.' },
      { src: intern3Img, label: 'Cable Management', desc: 'Dressing and mapping network patch panel lines inside server rooms.' },
      { src: intern4Img, label: 'OSP Site Survey', desc: 'Supervising outside plant backbone links and underground telecom fiber conduits.' },
      { src: intern5Img, label: 'Switch Diagnostics', desc: 'Disassembling network switch appliances for internal component maintenance.' },
      { src: intern6Img, label: 'CLI Configuration', desc: 'Setting up logical device protocols, VLAN structures, and terminal interfaces via console lines.' },
      { src: intern7Img, label: 'Rack Maintenance', desc: 'Preventative cleaning and thermal upkeep of distributed facility IDF remote boxes.' },
      { src: notes1Img, label: 'Sub-duct Mapping', desc: 'Documenting sub-duct systems within primary underground transmission tunnels.' },
      { src: notes2Img, label: 'PoE Deployment', desc: 'Analyzing Power over Ethernet delivery lines for access points.' }
    ];

    return (
      <div style={{ fontFamily: "'Open Sauce', sans-serif", padding: '15px 25px', color: '#2b3020' }}>
        {/* ========================================================= */}
        {/* NEW WORK EXPERIENCE ENTRY INJECTED HERE                   */}
        {/* ========================================================= */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.25)',
          border: '1px solid rgba(43, 48, 32, 0.15)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '25px',
          boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.4)'
        }}>
          <div
  style={{
    textAlign: 'center',
    marginBottom: '10px'
  }}
>
  <h4
    style={{
      margin: 0,
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#2b3020'
    }}
  >
    IT Networking Intern
  </h4>

  <div
    style={{
      fontSize: '0.9rem',
      color: 'rgba(43, 48, 32, 0.75)',
      fontWeight: '500',
      marginTop: '2px'
    }}
  >
    Universiti Teknikal Malaysia Melaka (UTeM)
  </div>

  <div
    style={{
      fontSize: '0.82rem',
      color: 'rgba(43, 48, 32, 0.6)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginTop: '5px'
    }}
  >
    August 2022 – December 2022

  </div>
</div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: '12px 0 0 0', color: '#3c4230' }}>
            During my internship at UTeM, I gained practical experience in maintaining and supporting campus network infrastructure. 
            I assisted with configuring routers and switches, troubleshooting LAN and Wi-Fi connectivity issues, performing network 
            cabling and hardware installations, and documenting network configurations. This experience strengthened my technical 
            problem-solving skills, attention to detail, and ability to work collaboratively in a professional IT environment.
          </p>
        </div>
        {/* ========================================================= */}

        {/* Networking Internship Fieldwork Carousel Section */}
        <h4 style={{ borderBottom: '1px dashed rgba(43,48,32,0.15)', paddingBottom: '8px', margin: '0 0 12px 0', fontSize: '1rem' }}>
          Networking Internship Fieldwork
        </h4>
        
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          overflowX: 'auto', 
          paddingBottom: '15px',
          scrollbarWidth: 'thin'
        }}>
          {internAssets.map((asset, index) => (
            <div 
              key={index} 
             onClick={() => openImageModal(asset.src, asset.label, asset.desc)}
style={{
                flex: '0 0 150px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '16px',
                border: '1px solid rgba(43,48,32,0.1)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '100%',
                height: '190px',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: 'rgba(0,0,0,0.05)',
                marginBottom: '10px'
              }}>
                <img 
                  src={asset.src} 
                  alt={asset.label} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ 
                fontSize: '0.72rem', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px',
                color: '#4a523a'
              }}>
                {asset.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

 // === ASSETS UNTUK FOLDER ACHIEVEMENTS ===
  const achievementAssets = [
    { 
      src: graduation1Img, 
      label: "Graduation Milestone 1 (Diploma)", 
      desc: "Academic accomplishment and graduation." 
    },
    { 
      src: graduation2Img, 
      label: "With My No.1 Support System", 
      desc: "They saw every struggle, so this win is theirs too." 
    },
    { 
      src: achievementImg, 
      label: "Honors & Achievements (Diploma)", 
      desc: "A recognition of academic excellence throughout my studies, reflecting consistency, discipline, and dedication." 
    },
    { 
      src: certificateImg, 
      label: "Certificate (Degree)", 
      desc: "Participated in the Project Innovation Excellence Showcase in Information Technologies 2026 (PIXEL-IT 26), receiving a certificate of participation." 
    }
  ];

  // --- ACHIEVEMENTS ---
  if (id === 'achievements') {
    return (
      <div style={{ fontFamily: "'Open Sauce', sans-serif", padding: '15px 25px', color: '#ffffff' }}>
        <h3 style={{ borderBottom: '1px dashed rgba(255, 255, 255, 0.3)', paddingBottom: '10px', marginTop: 0 }}> Honors, Certifications &amp; Milestones </h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>Graduation milestones, professional achievements, and core credentials.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {achievementAssets.map((asset, index) => (
            <div key={index} style={{ borderRadius: '16px', padding: '0 0 15px 0', backgroundColor: '#fff', overflow: 'hidden', cursor: 'pointer' }} onClick={() => openImageModal(asset.src, asset.label, asset.desc)}>
              <div style={{ width: '100%', height: '240px', display: 'flex', overflow: 'hidden' }}>
                <img src={asset.src} alt={asset.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 'bold', color: '#070606', display: 'block', padding: '15px 15px 0 15px', textAlign: 'center' }}>{asset.label}</span>
            </div>
          ))}
        </div>

        {modalImage && <LightboxMarkup src={modalImage} title={modalTitle} desc={modalDescription} scale={zoomScale} setScale={setZoomScale} onClose={closeModal} />}
      </div>
    );
  }

  return null;
}

// Sub-Component to avoid duplicating Lightbox structure across views
function LightboxMarkup({ src, title, desc, scale, setScale, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close-btn" onClick={onClose}>&times;</button>
      <div className="lightbox-scroll-container" onClick={onClose}>
        <div className={desc ? "lightbox-modal-card has-details" : "lightbox-standalone-wrapper"} onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-image-wrapper">
            <img src={src} className="lightbox-image" alt="Lightbox Visual node" style={{ transform: `scale(${scale})` }} />
          </div>
          {desc && (
            <div className="lightbox-details-wrapper">
              <h3 className="lightbox-details-title">{title}</h3>
              <p className="lightbox-details-text">{desc}</p>
            </div>
          )}
        </div>
      </div>
      <div className="lightbox-zoom-bar" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-zoom-label">Zoom Out</span>
        <input type="range" min="0.5" max="2.5" step="0.1" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} className="lightbox-zoom-slider" />
        <span className="lightbox-zoom-label">Zoom In</span>
        <span style={{ color: '#A2C2E8', fontSize: '0.8rem', fontWeight: 'bold', paddingLeft: '10px' }}>{Math.round(scale * 100)}%</span>
      </div>
    </div>
  );
}