import React from 'react'
import "./stylesheets/Header.css"
import { Link } from 'react-router-dom'
import SearchIcon  from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './Data/StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* navigations */}
            <div className="header__nav">
                {/* first Link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
    <span className="header__optionLineOne">Hello {user? user.email : ''} </span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                {/* Second Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* Third Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionCheckout">
                        <ShoppingCartIcon className="header__optionCheckoutIcon"/>
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>

    // Search box
    )
}

export default Header
