
import React from "react";
import{Link} from "react-router-dom";

class NavbarPage extends React.Component {


render() {
  return (
      
    <nav>
        
        <div>
    <ul>
      <li>
            <Link to="/"><p>Home</p></Link>
            </li>
            <li >
            <Link to="/profil">Profil</Link>
            </li>
            <li>
            <Link to="/search">Search</Link>
            </li>
            </ul>
        </div>
    </nav>
    );
  }
}


export default NavbarPage;