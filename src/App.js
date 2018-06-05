import React, { Component } from 'react';
import './Styles/App.css';
import logo from './assets/logo.png';
import whatIcon1 from './assets/what-1.png';
import whatIcon2 from './assets/illustration-2.png';
import whatIcon3 from './assets/illustration-3.png';
import how1 from './assets/layer-24.png';
import how2 from './assets/layer-25.png';
import how3 from './assets/layer-29.png';
import how4 from './assets/layer-28.png';
import explore from './assets/explore.png';
import tavt from './assets/twitter-avatar.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="top-bar">
            <div className="logo-background">
              <img src={logo} alt="Soqqle" />
            </div>

            <div className="menu-background">
              <ul>
                <li>The Games</li>
                <li>Forums</li>
                <li>Markets</li>
                <li className="button subscribe">
                  <p>Subscribe</p>
                </li>
                <li className="button enterprise">
                  <p>Enterprise Sign Up</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="title-background">
              <p className="title" style={{ marginLeft: '10px' }}>
                Game Up Your Passion
              </p>
              <p className="sub-title" style={{ marginLeft: '50px' }}>
                Plug in for the Future. Explore a world of quests with
              </p>
              <p className="sub-title" style={{ marginLeft: '25px' }}>
                friends and play them together to gain glory and rewards.
              </p>
            </div>
            <div className="mainbuttons-container">
              <div className="main-buttons button yellowBut">
                <p>Explore Soqqle</p>
              </div>
              <div className="main-buttons button whiteBut">
                <p> Sign In</p>
              </div>
            </div>
          </div>
          <div className="avail-top-slanted" />
        </header>
        <section className="avail">
          <p className="title">
            Available now on Alpha. <span>FREE</span>
          </p>
          <p className="sub-title">
            Soqqle is a novel game that brings your heartfelt aspirations to
            real life.
          </p>
          <p className="sub-title">
            Join quests across different roles for the #futureofwork and team up
            with others to accomplish common goals! <br /> We call this -
            <span>The Game For Life</span>. Isn’t this amazing?
          </p>
        </section>
        <section className="what">
          <div className="avail-bottom-slanted" />
          <p className="title">What is Soqqle</p>
          <div className="card-container">
            <div className="card">
              <img src={whatIcon1} className="whatIcon" />
              <p>
                Drive purposeful <br /> learning
              </p>
            </div>
            <div className="card">
              <img src={whatIcon2} className="whatIcon" />
              <p>
                Combine social and <br />learning goals
              </p>
            </div>
            <div className="card">
              <img src={whatIcon3} className="whatIcon" />
              <p>
                Helps identify networks <br />to join the journey
              </p>
            </div>
          </div>
        </section>
        <section className="how">
          <p className="title">How it works</p>
          <div className="how-container">
            <div className="how-img-container">
              <img src={how1} alt="" />
              <img src={how1} alt="" />
              <img src={how1} alt="" />
            </div>
            <div className="desc">
              <span className="bgNo">1</span>

              <div className="yellowBar" />
              <p className="title">1. Select your house.</p>
              <p>
                Join an environment where people <br /> similar to you gather
                and complete similar <br />tasks. Develop together the same way.
              </p>
              <p>There are 6 houses available in BETA.</p>
              <p className="more">Explore House ></p>
            </div>
          </div>
          <div className="how-container">
            <div className="desc">
              <span className="bgNo">2</span>

              <div className="yellowBar" />
              <p className="title"> 2. Select a Hero</p>
              <p>
                Select a hero and develop it through <br />
                tasks , answering questions, solving <br />
                challenges individually or with your friends.
              </p>
              <p>There are 4 heros available in BETA.</p>
              <p className="more">Explore Heroes ></p>
            </div>
            <div className="how-img-container">
              <img src={how2} className="left150" alt="" />
              <img src={how2} alt="" className="left100" />
              <img src={how2} alt="" />
            </div>
          </div>
          <div className="how-container">
            <div className="how-img-container">
              <img src={how3} alt="" />
              <img src={how3} alt="" />
              <img src={how3} alt="" />
            </div>
            <div className="desc">
              <span className="bgNo">3</span>

              <div className="yellowBar" />
              <p className="title"> 3. Get a Reward</p>
              <p>
                Cumulate SOQQ Sparks, Achievements <br />
                and Bonuses upon the completion <br />
                of tasks. Get more for doing Group Tasks.
              </p>
              <p className="more">Explore Rewards ></p>
            </div>
          </div>
          <div className="how-container">
            <div className="desc">
              <span className="bgNo">4</span>

              <div className="yellowBar" />
              <p className="title"> 4. Use your Rewards</p>
              <p>
                SOQQ Sparks are powered by Blockchain <br />
                Force. Use them to boost experience gain, <br />
                or obtain character upgrades.
              </p>
              <p className="more">Explore Character Progression ></p>
            </div>
            <div className="how-img-container">
              <img src={how4} alt="" className="left150" />
              <img src={how4} alt="" className="left100" />
              <img src={how4} alt="" />
            </div>
          </div>
          <div className="how-bottom-slanted" />
        </section>
        <section className="disc">
          <p className="title">Discover Soqqle</p>
          <img src={explore} className="explore" alt="" />
          <div className="main-buttons button yellowBut">
            <p>See All Videos</p>
          </div>
        </section>
        <section className="blog">
          <p className="title">Our Blog</p>
          <div className="blog-container">
            <div className="blog1">
              <p>15.05.18</p>
              <p className="heading">
                Can Blockchain be Trusted with <br /> all these Wallet
                Vulnerabilities?
              </p>
              <p>
                Can no news be good news in the <br /> Blockchain world?
              </p>
            </div>
            <div className="mini-container">
              <div className="blog2">
                <p>15.05.18</p>
                <p className="heading">
                  We closed our Soqqle Alpha last <br />
                  week — you won’t believe what we got.
                </p>
                <p>
                  Our Marvelous platform caught the eyes of <br />
                  everyone we demoed to.
                </p>
              </div>
              <div className="blog3">
                <p>15.05.18 </p>
                <p className="heading">Singapore for a Blockchain Hub?</p>
                <p>
                  spent 4 years in Hong Kong before moving back to Singapore.
                  The difference and why?<br />
                  It isn’t ALL about Blockchain.
                </p>
              </div>
            </div>
          </div>
          <div className="main-buttons button yellowBut">
            <p>See All News</p>
          </div>
        </section>
        <section className="talk">
          <p className="title">They talk about us</p>
          <div className="slider">
            <div className="card">
              <img src={tavt} />
              <div>
                <p className="head">Pek Yun Ning</p>
                <p className="sub-text">
                  I think the concept of a Game-Based experience <br /> to
                  explore a world of opportunities is superb. <br /> I can’t
                  wait to hear more about and take part <br />in the BETA!
                </p>
              </div>
            </div>
            <div className="card">
              <img src={tavt} />
              <div>
                <p className="head">Pek Yun Ning</p>
                <p className="sub-text">
                  I think the concept of a Game-Based experience <br /> to
                  explore a world of opportunities is superb. <br /> I can’t
                  wait to hear more about and take part <br />in the BETA!
                </p>
              </div>
            </div>
            <div className="card">
              <img src={tavt} />
              <div>
                <p className="head">Pek Yun Ning</p>
                <p className="sub-text">
                  I think the concept of a Game-Based experience <br /> to
                  explore a world of opportunities is superb. <br /> I can’t
                  wait to hear more about and take part <br />in the BETA!
                </p>
              </div>
            </div>
          </div>
          <div className="angle-buttons-container">
            <div className="angle-buttons button ">
              <p>&lt;</p>
            </div>
            <div className="angle-buttons button ">
              <p>&gt;</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-top-slanted" />
          <div>
            <img src={logo} alt="" />
            <p className="text">Subscribe to our Newsletter</p>
            <div className="subs-container">
              <div className="input">
                <p>E-mail</p>
              </div>
              <div className="button">
                <p>Subscribe</p>
              </div>
            </div>
            <p className="links">
              About &nbsp;&nbsp; | &nbsp;&nbsp;Support&nbsp; &nbsp;|
              &nbsp;&nbsp;Contact &nbsp;&nbsp;| &nbsp;Press
            </p>
            <p className="copyright">
              ©2018 SOQQLE, INC. ALL RIGHTS RESERVED. <br /> All trademarks
              referenced herein are the properties of their respective owners.
            </p>
            <p className="sm-links">PRIVACY &nbsp;&nbsp;|&nbsp;&nbsp; TERMS </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
