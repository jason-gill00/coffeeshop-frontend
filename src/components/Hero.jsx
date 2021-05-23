import React, {useState, useEffect} from 'react'
import LoginPopup from './LoginPopup';
import CreateAccountPopup from './CreateAccountPopup'

function Hero() {

    const [signInPopup, setSignInPopup] = useState(false);
    const [createAccountPopup, setCreateAccountPopup] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    // const getUser = async() =>{
    //     console.log("IN GET USER METHOD");
    //     try{
    //         const url = "http://localhost:5000/api/auth/get/user";
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data);
    //         return data.user;
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    useEffect(() =>{
        fetchData();
        async function fetchData(){
            const token = localStorage.getItem('auth-token')
            if(token){
                setIsLogged(true);
                console.log("IN GET USER METHOD");
                const url = "http://localhost:5000/api/auth/get/user";
                const response = await fetch(url, {
                    method: "GET", 
                    headers: {
                        'auth-token': `${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data);
                if(!data.success){
                    setUser()
                }
                else{
                    setUser(data.user);
                }
            }
        }
    })

    const zIndexAdd = () => {
        const item_1 = document.getElementsByClassName("card")[0];
        const item_2 = document.getElementsByClassName("card")[1];
        const item_3 = document.getElementsByClassName("card")[2];
        const item_4 = document.getElementsByClassName("card")[3];
        item_1.classList.add("z-index")
        item_2.classList.add("z-index")
        item_3.classList.add("z-index")
        item_4.classList.add("z-index")
        // console.log(item);
        // items.map((item) => item.classList.add("z-index"))
    }
    const zIndexRemove = () => {
        console.log("IN HERE")
        const item_1 = document.getElementsByClassName("card")[0];
        const item_2 = document.getElementsByClassName("card")[1];
        const item_3 = document.getElementsByClassName("card")[2];
        const item_4 = document.getElementsByClassName("card")[3];
        item_1.classList.remove("z-index")
        item_2.classList.remove("z-index")
        item_3.classList.remove("z-index")
        item_4.classList.remove("z-index")
    // console.log(item);
    // items.map((item) => item.classList.add("z-index"))
    }

    return (
        <section className="hero flex flex-ai-c container">
            <div className="hero__test">
                <div className="hero__image"></div>
                {isLogged && (<h2 className="username">Welcome: {user}</h2>)}
                <div className="hero__text">
                    <h1>LIFE IS BETTER WITH COFFEE</h1>
                    <p>We beleive a cup of coffe is one of the most important simple pleasures of life</p>
                    <div className="hero__login flex">
                        <div className="hero__signin-btn" onClick={()=> {zIndexAdd(); setSignInPopup(true)}}>
                                <a href="#/">Sign In</a>
                        </div>
                        <div className="hero__signin-btn" onClick={()=>{zIndexAdd();setCreateAccountPopup(true)}}>
                                <a href="#/">Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
                <LoginPopup zindex = {zIndexRemove} trigger={signInPopup} setTrigger={setSignInPopup} isLogged={isLogged} setIsLogged={setIsLogged} setUser={setUser} createAccountPopup={createAccountPopup} setCreateAccountPopup={setCreateAccountPopup}></LoginPopup>
                <CreateAccountPopup zindex = {zIndexRemove} trigger={createAccountPopup} setTrigger={setCreateAccountPopup}></CreateAccountPopup>
        </section>
    )
}

export default Hero;