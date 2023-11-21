import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [inputvalues, setInputValues] = useState({

        username: '', password: " "
    })

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const storedPassword = "Livingstone"
    const storedName = "Shaka"
    const navigate = useNavigate()
    const logIn = (event) => {
        event.preventDefault()
        if (storedName === inputvalues.username && storedPassword === inputvalues.password) {


            setIsLoggedIn(true);

            navigate(`/allartists`)

        }
    };


    const handeTextChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputvalues, [name]: value })

    }





    return (<>
    <body >
    <div id='login-container'>
        <div className='login' onSubmit={logIn} >

            <form>
                <label>User&nbsp;&nbsp;➡️&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='text' name='username' onChange={handeTextChange}></input>
                </label>
                <br></br>
                <br></br>

                <label>Pass&nbsp;&nbsp;➡️&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='password' name='password' onChange={handeTextChange}></input>
                </label><br></br>
                <button id='log-frm-sub' type="submit" >Enter</button>



            </form>
        </div>

        </div>
        </body>




    </>)
}

export default LoginForm



