import React, { useState } from 'react';
import './App.css';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [showLoadingPage, setShowLoadingPage] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [textFieldContent, setTextFieldContent] = useState('');

  const handleButtonClick = () => {
    // Check if the text field is empty
    if (textFieldContent.trim() === '') {
      // If empty, show the error page
      setShowErrorPage(true);
    } else {
      // If not empty, show the loading page
      setShowLoadingPage(true);

      // Simulate a delay (you can replace this with an actual API call)
      setTimeout(() => {
        // After the delay, set showLoadingPage to false and showThankYou to true
        setShowLoadingPage(false);
        setShowThankYou(true);
      }, 2000); // Simulating a 2-second delay
    }
  };

  return (
    <div className={`body ${showThankYou ? 'thank-you' : ''}`}>
      <form>
        <div className="form-contbox">
          <div className="form">
            <div className="form-content">
              <h3 className="form-heading">FORM</h3>
              <hr className="line" />
              {showLoadingPage ? (
                <>
                <div className='loading-content'>
                  <p className="small">Loading...</p>
                </div>
                </>

              ) : showThankYou ? (
                <div className="thank-you-content show">
                  <h4>Form submitted</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <polyline
                      fill="none"
                      stroke="#42a047"
                      stroke-miterlimit="10"
                      stroke-width="4"
                      points="6,27.5 17,38.5 42,13.5"
                    ></polyline>
                  </svg>
                  <p className="small">Thank you</p>
                </div>

              ) : showErrorPage ? (
                <>
                <div className="error-content">
                  <p className="small">Error</p>
                </div>
                <div className='error2'>
                  <h1>You didn't input anything.</h1>
                </div>
                </>
              ) : (
                <>
                
                  <p className="small">Your suggestions</p>
                  <div
                    className="writen"
                    contentEditable="true"
                    onInput={(e) => setTextFieldContent(e.target.innerText)}
                  ></div>
                  <div className="button">
                    <button
                      type="button"
                      className="send-btn"
                      onClick={handleButtonClick}
                    >
                      SEND
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/30/FFFFFF/sent.png"
                        alt="sent"
                      />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
