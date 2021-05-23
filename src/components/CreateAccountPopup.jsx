import React, {useState} from 'react'
import restaurant from './images/restaurant.png';
import close from './images/cancel.png';
import check from './images/check.png';


function CreateAccountPopup(props) {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const [accountCreated, setAccountCreated] = useState(false);
    const [isError, setIsError] = useState(false);

    const createAccount = async() => {
        const createUser = {
            "username" : user,
            "password" : password,
            "verifyPassword" : verifyPassword
        }
        try{
            const url = "http://localhost:5000/api/auth/signup";
            const response = await fetch(url, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body : JSON.stringify(createUser)
            })
            const data = await response.json();
            if(data.success === true){
                setAccountCreated(true);
            }
            else{
                console.log(data);
                setAccountCreated(false);
                setIsError(true);
            }
            console.log(data);
        }
        catch(error){
            console.log(error);
        }

        setUser({});
    }

    // const isCreated = 

    return (props.trigger) ? (       
    <div className="login-page">
        <div className="login-container">
            <div className="login__close">
                <a href="#/" className="close_btn" onClick={()=>{props.zindex();props.setTrigger(false)}}>
                    <img src={close} alt="close"></img>
                </a>
            </div>
            {!accountCreated ? (
            <div className="login__header">
                <img src={restaurant} alt="pic"></img>
            </div>
            ) : (
            <div className="login__header">
                <img src={check} alt="pic"></img>
                <h1 className="form__title">Account Created</h1>
            </div>
            )}
                {/* <img src={restaurant} alt="pic"></img> */}
            {/* <button className="close-btn" onClick={()=>props.setTrigger(false)}>Close</button> */}
            <form className={`form ${accountCreated ? "user-created" : null}`} id="login">
                <h1 className="form__title">Create Account</h1>
                <div className="form__message form__message--error"></div>
                <div className="form__input-group">
                    <input type="text" className={`form__input ${isError ? 'input-error' : null}`} onChange={event => setUser(event.target.value)}  placeholder="Username"></input>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="password" className={`form__input ${isError ? 'input-error' : null}`} onChange={event => setPassword(event.target.value)} placeholder="Password"></input>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input type="password" className={`form__input ${isError ? 'input-error' : null}`} onChange={event => setVerifyPassword(event.target.value)} placeholder="Re-enter Password"></input>
                    <div className="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit" onClick={() =>createAccount()}>Continue</button>
                <p className="form__text">
                    <a href="#/" className="form__link">Forgot your password?</a>
                </p>
                <p className="form__text">
                    <a href="#/" id="linkCreateAccount" className="form__link">Don't have an account? Create account</a>
                </p>
            </form>
        </div>      
    </div>
    ) : "";
}

export default CreateAccountPopup;
