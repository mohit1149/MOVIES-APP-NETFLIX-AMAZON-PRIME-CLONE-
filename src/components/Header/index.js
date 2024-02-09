import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <div className="nav-bar-left-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://res.cloudinary.com/du7dx5z0y/image/upload/v1707409072/Group_7399_2_dgdr3f.png"
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/products" className="nav-link">
                  Popular
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-bar-right-container">
            <Link to="/cart" className="nav-link">
              <img
                className="profile-logo"
                src="https://res.cloudinary.com/du7dx5z0y/image/upload/v1707403459/Avatar_sgqd40.png"
                alt="website logo"
              />
            </Link>

            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
