import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/my_prof_pic.png" alt="my profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Amirhossein Mirshahi</h1>
          <h3>
            Data Scientist <span>
              <Typewriter
                options={{
                  strings: [
                    "Developer",
                    "Data",
                    "Scientific Software developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
