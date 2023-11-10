import { Link } from "react-router-dom";
import { useRef } from "react";
import VideoPlayer from "../Components/Videoplayer/Videoplayer";
import logo from "../Pages/logo.png";
import "./Home.scss";
import Insta from "../Components/Instagram_Logo.png";
import Fb from "../Components/Facebook_Logo.png";
import Twitter from "../Components/Twitter_Logo.png";
import LinkedIn from "../Components/LinkedIn_Logo.png";
import AboutUsPhoto from "../Pages/About-us-photo.jpg";

export default function Home(){
    const bgColour = useRef(null);
    function handleChildHover(className) {
        const parentElement = bgColour.current;
        switch (className) {
          case "red":
            parentElement.style.backgroundColor = "#826F6F";
            break;
          case "blue":
            parentElement.style.backgroundColor = "#1C2B4B";
            break;
          case "violet":
            parentElement.style.backgroundColor = "#024363";
            break;
          case "black":
            parentElement.style.backgroundColor = "#185672";
            break;
          default:
            parentElement.style.backgroundColor = "transparent"; // Default background color
            parentElement.style.backdropFilter = "blur(100vw)"; // Default blur
        }
      }

    return(
    <div  className="home-container">
        <VideoPlayer />
        <section id="Home">
            <div className="navigation">
                <div className="slogan ">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="tagline">
                            <h1>PPRD News</h1>
                            <p>Your daily dose of news</p>
                        </div>
                </div>
                <div className="AboutContact">            
                    <ul>
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#AboutUs">About Us</a>
                        </li>
                        <li>
                            <a href="#ContactUs">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <main>
        <header className="home-header">     
            <ul>
                <h1>Click to know about:</h1>
                {/* <li>
                    <Link to="content/sports">sports</Link>
                </li>
                <li>
                    <Link to="content/culture" >business</Link>
                </li>
                <li>
                    <Link to="content/politics">politics</Link>
                </li>
                <li>
                    <Link to="content/celebrity">celebrity</Link>
                </li>
                <li>
                    <Link to="content/education">education</Link>
                </li> */}
                <li>
                    OPTIONS
                    COMING SOON
                </li>
            </ul>
        </header>
            <div className="home-main-content">
                <div className="front-photo">
                    <Link to="/content">
                    <img src={logo} alt="logo"></img>
                    Let's Dive in...
                    </Link>
                </div>
            </div>
        </main>
        <section id="AboutUs">
            <div className="About-us">
                <div className="About-us-content">
                    <h1>WHO WE ARE:</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt, eligendi et consectetur aut, dicta recusandae illum eos expedita quidem, iusto hic soluta facere odit rem est placeat omnis. Placeat mollitia, totam, atque odio veniam optio neque modi nihil asperiores, hic minus quaerat vero assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo perferendis provident, neque culpa repellat iste reiciendis reprehenderit eligendi commodi eum, corrupti, voluptate minus quod similique distinctio porro tenetur quae. Aliquam architecto, fugit ullam ad quae sequi omnis in tempore vel rerum beatae dolor molestias.</p>
                </div>
                <div className="About-us-photo">
                        <img src={AboutUsPhoto} alt="about us image"/>
                </div>
            </div>
        </section>
        <section id="ContactUs">
            <div className="contact-us">
                <form action="">
                    <label>Enter Your Name</label>
                    <input type="text" required/>
                    <label>Type your message here</label>
                    <textarea required/>
                    <label>Your Email</label>
                    <input type="text" />
                </form>
                    <button>Submit</button>
            </div>
            <div className="Social-Media" ref={bgColour}>
                    <a href="https://www.instagram.com/" rel="noreferrer noopener" target="_blank">
                        <img src={Insta}  alt="instagram" className="red" onMouseEnter={()=>handleChildHover('red')} onMouseLeave={()=>handleChildHover('')}>
                        </img>
                    </a>
                    <a href="https://www.facebook.com/" rel="noreferrer noopener" target="_blank">
                        <img src={Fb} alt="facebook" className="blue" onMouseEnter={()=>handleChildHover('blue')} onMouseLeave={()=>handleChildHover('')}></img>
                    </a>
                    <a href="https://www.linkedin.com/" rel="noreferrer noopener" target="_blank">
                    <img src={LinkedIn} alt="linkedIn" className="violet" onMouseEnter={()=>handleChildHover('violet')} onMouseLeave={()=>handleChildHover('')}></img>
                    </a>
                    <a href="https://www.twitter.com/" rel="noreferrer noopener" target="_blank">
                        <img src={Twitter} alt="Twitter" className="black" onMouseEnter={()=>handleChildHover('black')} onMouseLeave={()=>handleChildHover('')}></img>
                    </a>
            </div>
        </section>
    </div>
    )
}