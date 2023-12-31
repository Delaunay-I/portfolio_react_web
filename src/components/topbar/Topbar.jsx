import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <a href="tel:+16048614711"><span>+1 604-861-4711</span></a>
            
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <a href="mailto:amirmsh@student.ubc.ca">
              <span>amirmsh@student.ubc.ca</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

    </div>
  )
}
