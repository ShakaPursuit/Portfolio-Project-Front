import {Link} from "react-router-dom"

const Header=({isLoggedIn,logIn,logOut})=>{
    return (
<>
        <header className="header">
          <Link to="/create"><button id="create">Create Profile</button></Link> 
            
          <div id="header-text"> <strong>Music Connection</strong></div>
          

          
        </header>
</>
    )





}

export default Header