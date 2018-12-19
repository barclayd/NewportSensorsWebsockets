import React from 'react';
import classes from './Logo.css';
import newportLogo from '../../assets/images/newportLogo.png'

const logo = (props) => (
    <div
        className={classes.Logo}
        style={{
            height: props.height
        }}>
        <img src={newportLogo} alt='NewportCouncil'/>
    </div>
);

export default logo;
