import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm=()=>{
    const [inputvalues,setInputValues]=useState({

username:''  , password:" "      
    })
    // const[username,setUserName]=useState('')
    // const[password,setUserPassword]=useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
const storedPassword="Livingstone"
const storedName="Shaka"
const navigate=useNavigate()
  const logIn = () => {
    if(storedName === inputvalues.username&&storedPassword=== inputvalues.password){


        setIsLoggedIn(true);
        
        navigate(`/allartists`)
     
    }
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  const handeTextChange=event=>{
const {name,value}=event.target;
    setInputValues({...inputvalues,[name]:value})

  }
  




    return (<>
  <div className='login' onSubmit={logIn()} >

    <form>
        <label>User
            <input type='text' name='username' onChange={handeTextChange}></input>
        </label>
        <br></br>
        <br></br>

        <label>Pass
            <input type='text' name='password' onChange={handeTextChange}></input>
        </label>
        <button type="submit" onSubmit={logIn}>Enter</button>



    </form>
  </div>
    
    
    
    
    </>)
}

export default LoginForm



