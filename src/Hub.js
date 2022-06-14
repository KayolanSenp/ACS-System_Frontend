import React from 'react';
import "./styles.css"

function Hub(){

    return(
        <div>
             <head>
        <title>ACSS</title>
        <link rel="stylesheet" href="styles.css"></link>
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li class="logo"><a href="/hub">ACSS LOGO</a></li>
                </ul>
            </nav>
        </header>
        <section>
            <ul class="hpcontainer">
                <div class="move">
                    <li><button class="hp-form__button" type="submit"><a href="/logs">View Employee Information</a></button></li>                    
                    <li class="lilogout"><button class="hp-form__button logout__button" type="submit"><a href="/">Log Out</a></button></li>
                </div>
            </ul>
        </section>
        <footer>Made by: ACSS Developers - Version 2.87 - Automated Covid Screening System Website © - Contact: info.help@acss.com</footer>
    </body>
        </div>

    )
}
export default Hub;
