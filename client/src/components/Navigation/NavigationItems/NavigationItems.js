import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (

    // pass props here for better tests

    <ul className={classes.NavigationItems}>
            <NavigationItem
                link='/'
                exact>
                    Home
            </NavigationItem>
            <NavigationItem
                link='/air-quality'>
                    Air Quality
            </NavigationItem>
            <NavigationItem
                link='/light'>
                Light
            </NavigationItem>
            <NavigationItem
                link='/noise'>
                Noise
            </NavigationItem>
    </ul>
);

export default navigationItems;
