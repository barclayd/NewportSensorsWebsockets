import React, {Component} from 'react';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Record from '../../../components/Record/Record';
import classes from './airQuality.css';

class AirQuality extends Component {

    state={
        data: [],
        loading: true
    };

    componentDidMount() {
        axios.get('https://newportcouncil-88032.firebaseio.com/Air%20Quality.json')
            .then(res => {
                const fetchedData = [];
                for(let key in res.data) {
                    fetchedData.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({
                    loading: false,
                    data: fetchedData
                });
            })
            .catch(err => {
                this.setState({
                    loading: false
                });
            })
    }

    render() {
        let page = null;
        if(this.state.loading) {
            page = <Spinner />;
        }
        console.log(this.state.data);
        return (
            <div>
                <h2>Historical Air Quality Data</h2>
                <h5>First 6 months of 2018</h5>
                {/*<p>Data taken from {this.state.data[0].information.location}</p>*/}
                {page}
                {this.state.data.map(data => (
                    <Record
                        key={data.id}
                        data={data.data}
                        info={data.information}
                        loading={this.state.loading}/>
                ))}
            </div>
        )
    }
}
export default withErrorHandler(AirQuality, axios);
