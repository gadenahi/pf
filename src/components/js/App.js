import React from 'react';
import '../../static/App.css';
import Header from '../js/Header'
import Welcome from '../js/Welcome'
import Project from '../js/Project'
import Skill from '../js/Skill'
import Certificate from '../js/Certificate'
import Contact from '../js/Contact'
import Footer from '../js/Footer'
import 'animate.css/animate.min.css';


function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Project />
      <Skill />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
