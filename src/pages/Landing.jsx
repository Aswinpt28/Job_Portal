import { Link } from "react-router-dom"
import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from "../components"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            A job is the cornerstone of a person's livelihood,
            representing a significant portion of their daily life.
            Whether in a traditional office setting, remote work arrangement, or within the gig economy,
            jobs serve as a means to earn income and support oneself and their family. Beyond financial aspects,
            a job can also offer opportunities for personal growth, skill development, and a sense of accomplishment.
          </p>
          <Link to="/register" className=' btn register-link'>
            Register
          </Link>
          <Link to="/loinr" className=' btn '>
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper >
  );
}


export default Landing