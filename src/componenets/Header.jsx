import {Link} from "react-router-dom"

const Header=(isLoggedIn)=>{
    return (
<>
        <header className="header">
            
          <div id="header-text"> <strong>Music Connection</strong></div>
          {isLoggedIn ? (
            <Link to={`/`}> <button id='sign-out' >SignOut</button></Link>
            ) : (
              <button >SignIn</button>
              )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
              <Link to="/create"><button id="create">Create Profile</button></Link> 

          
        </header>
</>
    )





}

export default Header