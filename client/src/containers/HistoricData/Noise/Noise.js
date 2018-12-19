import React, {Component} from 'react';
import axios from 'axios';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Record from '../../../components/Record/Record';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Noise.css';

class Noise extends Component {

    state={
        data: [],
        loading: true
    };

    componentDidMount() {
        axios.get('https://newportcouncil-88032.firebaseio.com/Noise.json')
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
        return (
            <div>
                {/*<p>Data taken from {this.state.data[0].information.location}</p>*/}
                <h2>Historical Noise Data</h2>
                <h5>First 6 months of 2018</h5>
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
export default withErrorHandler(Noise, axios);
