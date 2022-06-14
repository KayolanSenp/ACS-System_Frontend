import React from 'react';
import "./styles.css"

function Login(){

    return(
        <div>
            <head> 
        <title>ACSS</title>
        <link rel="stylesheet" href="styles.css"/>
    </head>
    <body>
        <header> 
            <nav>
                <ul>
                    <li class="logo"><a href="/">ACSS LOGO</a></li>
                </ul>
            </nav>
        </header> 
        <section> 
            <div class="container"> 
                <form class="form" id="login">
                    <h1 class="form__title">Hello.</h1>
                    <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" class="form__input" autofocus placeholder="ID"/> 
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="password" class="form__input" autofocus placeholder="Password"/> 
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit"><a href="/hub">Login</a></button>
                   
                </form>
            </div>
        </section> 
        <footer>Made by: ACSS Developers - Version 2.87 - Automated Covid Screening System Website © - Contact: info.help@acss.com</footer> 
    </body>
        </div>

    )
}
export default Login;
