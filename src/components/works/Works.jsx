import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  In the world of mechanical engineering, innovation is the
                  driving force behind progress. As a master's student, I'm
                  passionate about CFD, control, and stability of solvers.
                </p>
                <span>Project</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
