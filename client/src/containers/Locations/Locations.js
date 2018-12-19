import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    getPlaces,
    getDescriptions, getImages, getLocations
} from "../../serverData";
import * as actionTypes from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from "./Locations.css";

export class Locations extends Component {

    state = {
      loading: true
    };

    componentDidMount()  {
        getPlaces((err, placeNames) =>
            this.props.onRetrievePlaces(placeNames)
        );
        // getDescriptions((err, descriptions) => this.setState({
        //     descriptions: descriptions
        // }));
        getDescriptions((err, descriptions) =>
            this.props.onRetrieveDescription(descriptions)
        );
        getImages((err, images) =>
            this.props.onRetrieveImages(images)
        );
        getLocations((err, locations) =>
            this.props.onRetrieveAddresses(locations),
            this.setState({
                loading: false
            })
        );
    }

    locationSelectedHandler = (place) => {
        const location = place.toString().replace(/\s/g, '');
        this.props.history.push(location);
    };

    render() {

        let frontPage = null;
        if(this.state.loading) {
            frontPage = <Spinner />;
        }

        const places = Object.values(this.props.placeNames).map((place) => {
            return <div key={place} className={classes.card}>
                <div>
                    <img src={`/images/backgrounds/${this.props.images[place]}`} alt='background'/>
                    <h3 className={classes.card__title}> {place} </h3>
                    <p className={classes.card__description}>{this.props.descriptions[place]}.</p>
                    <p className={classes.card__locations}>Address: {this.props.addresses[place]}</p>
                    <button className={classes.button} onClick={() => this.locationSelectedHandler(place)}>VIEW SENSORS DATA </button>
                </div>
            </div>
        });

        return (
            <React.Fragment>
            <div className={classes.cardContainer}>
                {frontPage}
                {places}
            </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        descriptions: state.descriptions,
        placeNames: state.placeNames,
        images: state.images,
        addresses: state.addresses
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRetrieveDescription: (descriptionsData) => dispatch({type: actionTypes.GET_DESCRIPTIONS, description: descriptionsData}),
        onRetrievePlaces: (placeNames) => dispatch({type: actionTypes.GET_PLACES, places: placeNames}),
        onRetrieveImages: (images) => dispatch({type: actionTypes.GET_IMAGES, images: images}),
        onRetrieveAddresses: (address) => dispatch({type: actionTypes.GET_ADDRESSES, addresses: address})
    }
};

Locations.propTypes = {
    descriptions: PropTypes.object,
    onRetrieveDescription: PropTypes.func,
    onRetrievePlaces: PropTypes.func,
    onRetrieveImages: PropTypes.func,
    onRetrieveAddresses: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
