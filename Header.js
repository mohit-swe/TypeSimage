import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import './css/style.css'
import icon from './assets/logo-hover.png'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    


    render() {
        const { login, sign } = this.state;
        return (

            <>
                <header className="header header-animated opaque" style={{ "display": 'block', "paddingTop": "5px", "paddingBottom": "5px" }}>
                    <div className="container">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="navbar-header" style={{ "font-size": "35px","font-family":"century gothic","font-color":"blue"}} >
                                MyImageBar 😃<h6><i>an online image bar </i></h6>
                            </div>


                            <div className="nav-toggle collapsed" data-toggle="collapse" data-target="#navbarMain" aria-expanded="false" style={{ "top": "15px" }}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
								<span></span>
                            </div>
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{ top: "65px" }}>

                                <ul className="nav navbar-nav navbar-right">
                                  
                                    
                                </ul>
                                <ul className="nav navbar-nav collapsed-color">

                                    <li>
                                        <a href="https://www.google.com">Google</a>
                                    </li>

                                    <li>
                                        <a href="https://www.bing.com/?toWww=1&redig=CEB69F7536614E12843DCB830EFB029E">Bing</a>
                                    </li>

                                   
                                    <li>
                                        <a href="#">MyImageBar ⏬</a>
                                    </li>

                                </ul>

                            </div>

                            {/* <!-- .navbar-collapse --> */}
                        </nav>
                    </div>

                </header>
                
</>
               
                   
                      
          

        );
    }
}




export default Header
