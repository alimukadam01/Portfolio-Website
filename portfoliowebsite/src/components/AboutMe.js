import "./AboutMe.css";

function AboutMe() {
  var myID = document.getElementById('about-me');

  var aboutMeScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
      myID.className = "aboutme show";
    } else {
      myID.className = "aboutme hide";
    }
  };

  window.addEventListener("scroll", aboutMeScrollFunc);

  return (
    <div id="about-me" className="aboutme">
      <div className="aboutme-container">
        <div className="aboutme-pic-container">
          <img className="aboutme-pic" src="images/WappDP.jpeg" alt="/" />
        </div>
        <div className="caption">
          <h1>About Me</h1>
          <p className="caption-text">
            I've been fascinated by programming since as long as I can remember. From designing simple web pages solely based on
            HTML to designing web apps that provide actual functionality and purpose to it's organization, it's been one hell of
            a ride. I'm also intrigued by the ways a programmer can manipulate data structures to cater to their needs and mimic
            real life objects in their code to obtain a certain behavior required from them which led me to pursue my bachelors
            in Software Engineering from NED University of Engineering & Technology, Karachi, Pakistan. <br/>
            On the road to a software graduate, I've developed interest in graphics and love the way they can add to the aesthetic
            & attractiveness to anything they compliment.<br/> 
            I've mainly worked on fiverr in both graphics & software and have an experience of 5 years with an international client 
            base with Graphic Designing & Software Development, however, you can place an order here too! Looking forward to work 
            with you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
