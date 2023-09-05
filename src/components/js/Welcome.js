import React from 'react';
import '../../static/Welcome.css';
import Typist from 'react-typist';
import Typical from 'react-typical';


function Welcome() {
  return (
    <div>
      <section id="welcome-section">
        <Typist startDelay={1000} >
          <span id="welcome-hello">Hello Everyone</span><br /><br />
          <span>I'am Hideaki</span><br /><br />
        </Typist>
        <br />
        <Typical
          loop={1}
          warpper="span"
          steps={[
            "",
            3000,
            "Enjoying Software Development",
            1000,
            "Coding",
            1000,
            "Data Analytics",
            1000,
            "A Data Scientist and Software Engineer",
            1000,
          ]}
        />
      </section>
    </div>
  )
}

export default Welcome