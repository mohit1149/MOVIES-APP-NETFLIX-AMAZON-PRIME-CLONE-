import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="main-bg-container">
    <div className="home-container">
      <Header />

      <div className="home-content">
        <h1 className="home-heading">Super Man</h1>
        <p className="home-description">
          Superman is a fictional superhero who first <br />
          appeared in American comic books published by <br />
          DC Comices.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Play
          </button>
        </Link>
      </div>
    </div>
    <h1 className="home-heading-trending">Trending Now</h1>
    <h1 className="home-heading-trending">Originals</h1>
    <h1 className="home-heading-trending">Top Rated</h1>
  </div>
)

export default Home
