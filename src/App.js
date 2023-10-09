// App.js

import React, { useState, useRef } from 'react';
import FaceSwapResult from './FaceSwapResult';
import './App.css';
import './EmailForm.css';

function App() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleFaceSwap = async () => {
    // Placeholder logic for face swap
    console.log('Face swap button clicked');
  };

  const handleFileUpload = (position) => {
    if (position === 1) {
      fileInputRef1.current.click();
    } else if (position === 2) {
      fileInputRef2.current.click();
    }
  };

  const handleFileChange = (event, position) => {
    const file = event.target.files[0];
    if (position === 1) {
      setImage1(file);
    } else if (position === 2) {
      setImage2(file);
    }
  };

  return (
    <div className="home-page">
      <nav className="top-nav">
        <h1>Faceswap Pro</h1>
      </nav>
      <div className="hero-section">
        <div className="left-section">
          <div>
            <img src={require('./dots.jpg')} alt ="Dots" className='dots'/>
            <img src={require('./char.gif')} alt="Faceswap" className='gif' />
          </div>
          <div className='hero-text'>
            <h1 className="slogen">Transform Your Photos with FaceSwapPro</h1>
            <h3 className="semi-slogen">
              Automated and 100% Free
            </h3>
          </div>
          
        </div>
        <div className="right-section">
          <div className="upload-section">
            <div className='preview'>
            {image1 && (
              <img src={URL.createObjectURL(image1)} alt="Uploaded Image" className="uploaded-image1" />
            )}
            {image2 && (
              <img src={URL.createObjectURL(image2)} alt="Uploaded Image" className="uploaded-image2" />
            )}
            </div>
            <div className="upload-button">
            <input
              type="file"
              ref={fileInputRef1}
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, 1)}
            />
            <button onClick={() => handleFileUpload(1)}>Upload Bg Image</button>

            <input
              type="file"
              ref={fileInputRef2}
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, 2)}
            />
            <button onClick={() => handleFileUpload(2)}>Upload Face Image</button>
            </div>
            
            
          </div>
          <button onClick={handleFaceSwap} className='res'>Swap Face</button>
        </div>
      </div>


      <div className='features'>
        <div className='feature'>
        <img src={require('./1.png')} alt ="Image1" className='contain'/>
        <div className='contain'>
          <h1 className="feature-slogen">Easy and intuitive interface</h1>
          <h3 className="feature-semi-slogen">
          FaceSwapPro provides a user-friendly interface that makes it easy for anyone to swap faces in their photos, no technical skills required.
          </h3>
        </div>

        </div>
        <div className='feature'>
        <div className='contain'>
          <h1 className="feature-slogen">High-quality face swapping</h1>
          <h3 className="feature-semi-slogen">
          Our advanced algorithms ensure that the face swapping results are seamless and natural-looking, giving your photos a professional touch.
          </h3>
        </div>
        <img src={require('./2.png')} alt ="Image2" className='contain'/>
        </div>

        <div className='feature'>
        <img src={require('./3.png')} alt ="Image3" className='contain'/>
        <div className='contain'>
          <h1 className="feature-slogen">Endless creative possibilities</h1>
          <h3 className="feature-semi-slogen">
          With FaceSwapPro, you can let your imagination run wild and create hilarious or artistic photos by swapping faces in various scenarios.
          </h3>
        </div>
        </div>
      </div>


      <div className='quote-container'>
        <div>
        <h1 className='quote'>“FaceSwapPro is incredibly fun and addictive! I've spent hours swapping faces with my friends and laughing at the hilarious results.”</h1>
        <h3 className='person'>Akshay Kudalkar</h3>
        </div>
        <div>
        <img src={require('./pinkdots.png')} alt ="dots" className='pinkdots'/>
        </div>
      </div>


      <div className='login-containers'>
        <h1 className='join-text'>Join the FaceSwapPro community today.</h1>
        <h3 className='mukul-quote'>"FaceSwapPro has been a game-changer for my photography business. Clients love the unique and creative photos I can create with this tool.” - Mukul Salvi</h3>
        <div className='login-container'>
          <div className='email-box'>
            Enter your name
          </div>
          <h3 className='signin-button'>Get Started</h3>

        </div>
      </div>


      <div className="result-section">{resultImage && <FaceSwapResult image={resultImage} />}</div>
    </div>
  );
}

export default App;
