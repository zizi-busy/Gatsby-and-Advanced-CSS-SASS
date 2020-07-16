import React from 'react'
import logo from '../../images/logo-white.png'
import '../../scss/main.scss';

const Footer = () =>{
    return(
        <footer class="footer">
        <div class="footer__logo-box">
            <img src={logo} alt="Full logo" class="footer__logo" />
        </div>

        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Built by <a href="#" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" class="footer__link">Advanced CSS and Sass</a>.
                    Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                    and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                    Schmedtmann, is of course highly appreciated!
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer