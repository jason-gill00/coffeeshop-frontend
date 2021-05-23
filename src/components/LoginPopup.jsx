import React, {useState} from 'react'
import restaurant from './images/restaurant.png';
import close from './images/cancel.png';
import CreateAccountPopup from './CreateAccountPopup';

function LoginPopup(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    // const [isLogged, setIsLogged] = useState(false);

    const login = async() => {

        const userInput = {
            "username" : user,
            "password" : password
        };

        const url = "http://localhost:5000/api/auth/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userInput)
        })
        // console.log(response.headers.get("auth-token"))
        localStorage.setItem('auth-token', response.headers.get('auth-token'));
        // const token = localStorage.getItem('auth-token')
        // browserHistory.push('route');
        const data = await response.json();
        console.log(data);
        if(!data.success){
            setIsError(true);
        }
        else{
            // console.log("SUCCCCESSSSSSSSS");
            // const url = "http://localhost:5000/api/auth/get/user";
            // const response = await fetch(url, {
            //     method: "GET", 
            //     headers: {
            //         'auth-token': `${token}`,
            //         'Content-Type': 'application/json'
            //     }
            // });
            // console.log(response);
            // const data = await response.json();
            // console.log(data.user)
            // props.setUser(data.user);
            props.setIsLogged(true);
            props.setTrigger(false);
        }


        console.log(user, password);

    }


    return (props.trigger) ? (       
    <div className="login-page">
        <div className="login-container">
            <div className="login__close">
                <a href="#/" className="close_btn" onClick={()=>{props.zindex();props.setTrigger(false)}}>
                    <img src={close} alt="close"></img>
                </a>
            </div>
            <div className="login__header">
                <img src={restaurant} alt="pic"></img>
            </div>
            {/* <button className="close-btn" onClick={()=>props.setTrigger(false)}>Close</button> */}
            <form className="form" id="login">
                <h1 className="form__title">Login</h1>
                <div className="form__message form__message--error"></div>
                <div className="form__input-group">
                    <input type="text" className={`form__input ${isError ? 'input-error' : null}`} onChange={event => setUser(event.target.value)} placeholder="Username"></input>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="password" className={`form__input ${isError ? 'input-error' : null}`} onChange={event => setPassword(event.target.value)} placeholder="Password"></input>
                    <div className="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit" onClick={()=>login()}>Continue</button>
                <p className="form__text">
                    <a href="#/" className="form__link">Forgot your password?</a>
                </p>
                <p className="form__text">
                    <a href="#/" id="linkCreateAccount" className="form__link">Don't have an account? Create account</a>
                </p>
            </form>
        </div> 
        <CreateAccountPopup trigger={props.createAccountPopup} setTrigger={props.setCreateAccountPopup}></CreateAccountPopup>
     
    </div>
    ) : "";
}

export default LoginPopup;
