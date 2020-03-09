import React, { useState } from 'react';
import './login.styles.scss'
import LogoAmiltone from "../../../img/LogoAmiltone.svg"
import LogoAmiltoneSeul from '../../../img/LogoASeul.png'
const Login = ({ switchRoute }) => {
    const [state, setState] = useState("")
    const handleSubmit = () => {
        if (state === "") {
            switchRoute("user")
        } else {
            switchRoute(state)
        }
    }
    return (
        <div className="Login">
            <div className='logoAmiltone'>
                <img src={LogoAmiltone} alt='logoAmiltone' />
            </div>
            <div className="LoginContente container-fluid">
                <div className='logoAmiltoneSeul'>
                    <img src={LogoAmiltoneSeul} alt='logoAmiltoneSeul' />
                </div>
                <div className="container">
                    <h2>Connexion</h2>
                    <form >
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={e => setState(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" name="pwd" />
                        </div>
                        <div className="login">
                            <div className="btn" onClick={() => handleSubmit()}>
                                <span>connexion</span>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;