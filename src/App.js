import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import { useNavigate } from 'react-router-dom';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const navigate = useNavigate();

  const handlePrevious = (e) => {
    e.preventDefault();
    navigate.push(-1)
  }

  const handleNext = (e) => {
    e.preventDefault();
    let path = `/portfolio`
    navigate(path)
  }
  return (
    <div className="home">
       <aside class="left">
             <div class="page-control">
                {/* <a href="/portfolio.html.html" title="Portfolio" id="next"class="fa fa-angle-right">
                    <span>Portfolio</span>
                </a> */}
            </div>
        </aside>
        <div class="home-text">
            <div class="parallax"></div>
                <h1>Hi, I'm Meredith</h1>
                <p>I'm a student of Austin Coding Academy and a former teacher.<br /> I'm looking forward to      creating a brighter future for children through technology.
               </p>
            <div class="parallax"></div>
        </div>
        <aside class="right">
            <div class="page-control">
            <FontAwesomeIcon icon={faCircleArrowRight} className='fa fa-right' onClick={handleNext} />
                {/* <a href="./portfolio.html" title="Portfolio" id="next"class="fa fa-arrow-circle-right animated fadeInRight delay-2s">
                    <span>Portfolio</span>
                </a> */}
            </div>
        </aside>
    </div>
  );
}

export default App;
