import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="lost-heading">Lost Your Way ?</h1>
    <p>
      we are sorry the page you requested could not be found <br />
      please go back to the homepage.
    </p>
    <button type="button" className="go-to-home-button">
      Go to Home
    </button>
  </div>
)

export default NotFound
