import React from 'react';
import Typed from 'typed.js'
import pic from '../assests/img11.png'
import pic2 from '../assests/circle.svg'
import pic3 from '../assests/triangle.svg'
import pic4 from '../assests/rectangle.svg'
import pic5 from '../assests/twitter_social_icon_rounded_square_white.svg'
import pic6 from '../assests/facebook-20logo.svg'
import pic7 from '../assests/insta.svg'

import {Link} from 'react-router-dom'
function Home() {
    const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['Services','Updates','Support'],
//       typeSpeed: 50,
//       loop:true
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);
      
    return (<><div className="menu-wrapper">
    <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item"><a href="/alert/how-were-responding-to-covid-19"
                    className="banner w-inline-block">
                    <div className="container">
                        <div className="banner-content-wrapper"></div>
                    </div>
                </a></div>
        </div>
    </div>
    <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease"
        data-easing2="ease" role="banner" className="navbar w-nav">
        <div className="container">
            <div className="nav-wrapper"><a href="/" aria-current="page" className="brand w-nav-brand w--current"><img style={{height:"75px", width:"75px"}}
                        src={pic} alt="E-Visa" /></a>
                <div className="cart-nav-wrapper">
                    <nav role="navigation" className="nav-menu w-nav-menu"><a href="/" aria-current="page"
                            className="nav-link w-nav-link w--current">Home</a><a href="/Login"
                            className="nav-link w-nav-link">Login</a><a href="/Apply" className="nav-link w-nav-link">Apply
                            VISA</a><a href="/check" className="nav-link w-nav-link">Checkstatus</a><a
                            href="/register" className="nav-link w-nav-link">Register</a></nav>
                    <div></div>
                    <div className="nav-button w-nav-button">
                        <div className="w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="hero-section">
    <div className="container">
        <div className="hero-wrapper">
            <h2 className="hero-heading">Welcome to E-Visa Processing System.</h2>
            <p className="hero-paragraph">E-visa processing system helps you to apply visa with ease and at home</p>
            <div className="hero-button-wrapper"></div>
        </div>
    </div>
</div>
<div className="support-section">
    <div className="container">
        <div className="support-top-wrapper">
            <div className="support-top-left">
                <h2 className="support-top-heading">E_VISA Processing</h2>
            </div>
            <div className="support-top-right">
                <p>Apply,checkStats of your Visa by sitting at your home now</p>
            </div>
        </div>
        <div className="support-wrapper">
            <div className="support-column">
                <div className="support-square">
                    <div className="support-square-number">01</div>
                    <div className="support-square-text">Apply </div><img src={pic2}
                        alt="Circle Decoration in Shop Products Block" className="support-square-image" />
                </div>
                <p>Our full product line is still available online here on our site! Getting outside and hiking is
                    still something you can do. Get your gear now!</p>
            </div>
            <div className="support-column">
                <div className="support-square">
                    <div className="support-square-number">02</div>
                    <div className="support-square-text">check stats</div><img src={pic3}
                        alt="Triangle Decoration in Donate Block" className="support-square-image triangle" />
                </div>
                <p>Since we&#x27;ve changed the way we operate to online only, and to ensure your safety, not all
                    our staff is working. Donate to keep them afloat.</p>
            </div>
            <div className="support-column">
                <div className="support-square">
                    <div className="support-square-number">03</div>
                    <div className="support-square-text">ABout us</div><img src={pic4}
                        alt="Rectangle Decoration in Buy Gift Cards Block" className="support-square-image rectangle" />
                </div>
                <p>Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with
                    friends and family. </p>
            </div>
        </div>
    </div>
</div>
<div className="safe-section">
    <div className="container">
        <div className="safe-wrapper">
            <h2 className="safe-heading">How we&#x27;re keeping you safe during VISA Approval</h2>
            <div className="safe-button-wrapper"><a href="/alert/how-were-responding-to-covid-19"
                    className="btn light hero safe w-button">Read Our Statement</a></div>
            <p className="safe-paragraph">As an outdoor shop, we’ve taken precautionary measures to ensure the safety of
                all our customers and team members.</p>
        </div>
    </div>
</div>
<div className="products-section">
    <div className="container">
        <div className="shop-top-wrapper">
            <div className="support-top-left">
                <h2 className="support-top-heading">Open 24/7/365.</h2>
            </div>
            <div className="support-top-right"></div>
        </div>
    </div>
</div>
<div className="footer">
    <div className="container">
        <div className="footer-wrapper">
            <div className="footer-logo-column"><a href="/" aria-current="page" className="w-inline-block w--current"><img
                        src={pic} alt="E-Visa" /></a></div>
            <div><a href="https://twitter.com/webflow" target="_blank"
                    className="social-footer-link w-inline-block"><img
                        src={pic5} width="30"
                        alt="Twitter Logo" /></a><a href="https://www.facebook.com/webflow"
                    className="social-footer-link w-inline-block"><img src={pic6} width="30"
                        alt="Facebook Logo" /></a><a href="https://www.instagram.com/webflow/" target="_blank"
                    className="social-footer-link w-inline-block"><img src={pic7} width="30"
                        alt="Instagram Logo" /></a></div>
        </div>
        <div className="footer-bottom-wrapper">
            <div className="small footer-small">Made In <a href="https://webflow.com" target="_blank">Webflow</a>. ©
                2020.</div>
        </div>
    </div>
</div>
</>)
}

export default Home
