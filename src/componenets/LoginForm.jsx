import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm=()=>{




    return (<>
  <div className='login' >

    <form>
        <label>User
            <input type='text'></input>
        </label>
        <br></br>
        <br></br>

        <label>Pass
            <input type='text'></input>
        </label>



    </form>
  </div>
    
    
    
    
    </>)
}

export default LoginForm