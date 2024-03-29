import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from './../../firebase/firebase.utils';

import { ReactComponent as Logo } from './../../assets/4.4 crown.svg.svg'

import './header.styles.scss';

const Header = (props) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
             </Link>
            <Link className="option" to="/contact">
                CONTACT
             </Link>
            {
                props.currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className="option" to="/sign">SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);