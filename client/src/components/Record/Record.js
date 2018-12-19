import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Record.css';

const record = (props) => {

    console.log(props.data);

    const data = [];
    data.push(props.data);

    const info = [];
    info.push(props.info);

    console.log(data);
    console.log(props.places);

    const recordOutput = data.map(month => {
        if(!props.loading) {
            return <div
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    padding: '5px'
                }}
                key={month.month}>
                <h3>
                    {month.month} </h3>
                <br/>
                Average: {month.averageReadingValue + '   '}
                Low: {month.lowReadingValue + '   '}
                High: {month.highReadingValue + '   '}
                Mode: {month.modeReadingValue}
                <br/>
            </div>
        } else {

        }
    });

    const infoOutput = info.map(month => {

        return <div
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px'
            }}
            key={month.location}>
            Address: {month.address + '   '}
            <br />
            Location: {month.location + '   '}
            <br />
            Units: {month.units + '   '}
        </div>
    });



    return (
        <div className={classes.Record}>
            {recordOutput}
            {infoOutput}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        places: state.placeNames
    }
};

export default connect(mapStateToProps)(record);
