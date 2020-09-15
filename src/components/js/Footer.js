import React, { useState } from 'react';
import '../../static/Footer.css'


function Footer() {
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo('scroll', checkScrollTop)
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div id="footer">
      <button id="pagetop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
        <a href="#home">
          <i className="" aria-hidden="true"></i>
        </a>
      </button>
      <p>Inspired by Hideaki Nagaya</p>
    </div>
  )
}

export default Footer