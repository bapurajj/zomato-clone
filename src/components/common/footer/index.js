import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="max-width">
        <div className="footer">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Zomato-logo"
            className="header-logo"
          />
         
            <div className="country-language ">
              <div className="country-select cur-po absolute-center">
                <div className="country-opt absolute-center ">
                  <img
                      className="india-flag"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png"
                      alt="flag"
                    />
                  <span className="country-name">India</span>
                  <i class="uil uil-angle-down angle-down "></i>
                </div>
              </div>
              <div className="language-select cur-po absolute-center">
                <div className="language-opt absolute-center ">
                  <i className="uil uil-globe language-globe"></i>
                  <span className="country-name">English</span>
                  <i className="uil uil-angle-down angle-down "></i>
                </div>
              </div>
              
            </div>
    
        </div>

        <div className="blogs-list">
          <div className="blog-title">
            <h6>about zomato</h6>
            <a href="/" alt="">
              <p> Who We Are </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Blog </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Work With Us </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Investor Relations </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Report Fraud </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Contact Us </p>
            </a>
          </div>
          <div>
            <h6>zomaverse</h6>
            <a href="/" alt="">
              <p className="blog-title"> Zomato</p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Blinkit </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Feeding India </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Hyperpure </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Zomaland </p>
            </a>
          </div>
          <div>
            <h6>for restaurants</h6>
            <a href="/" alt="">
              <p className="blog-title"> Partner With US</p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Apps For You </p>
            </a>
            <h6>for enterprises</h6>
            <a href="/" alt="">
              <p className="blog-title"> Zomato For Work</p>
            </a>
          </div>
          <div>
            <h6>learn more</h6>
            <a href="/" alt="">
              <p className="blog-title"> Privacy </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Security </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Terms </p>
            </a>
            <a href="/" alt="">
              <p className="blog-title"> Sitemap </p>
            </a>
          </div>
          <div>
            <h6>social links</h6>
            <div className="socials">
              <a href="/" alt="">
                <i className="uil uil-linkedin soclink "></i>
              </a>
              <a href="/" alt="">
                <i className="uil uil-instagram-alt soclink"></i>
              </a>
              <a href="/" alt="">
                <i className="uil uil-twitter soclink"></i>
              </a>
              <a href="/" alt="">
                <i className="uil uil-youtube soclink "></i>
              </a>
              <a href="/" alt="">
                <i className="uil uil-facebook soclink"></i>
              </a>
            </div>

            <div className="app-store">
              <img
                className="app-store-image cur-po"
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt=""
              />
            </div>
            <div className="gpay">
              <img
                className="gpay-image cur-po"
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr className="footer-bottom-line" />

        <div className="purpose">
          This Zomato Clone is Made by 🔥 <b>BAPUGOUDA BIRADAR,</b> Only for Practice and Study Purpose.(11-06-2022)
        </div>
      </div>
    </div>
  );
};

export default Footer;
