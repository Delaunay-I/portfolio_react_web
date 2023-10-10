import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+1 604-861-4711</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>amirmsh@student.ubc.ca</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>

    </div>
  )
}
