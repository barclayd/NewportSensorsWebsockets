import React, {Component} from 'react';
import {
    getSensorData,
    sendLocation, newDate
} from "../../serverData";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import dateFormat from 'dateformat';
import classes from './Sensors';


class Sensors extends Component {

    state = {
        currentLocation: '',
        sensorData: '',
        light: '',
        AQI: '',
        noise: '',
        dateLastReading: ''
    };

    componentDidMount()  {
        console.log(this.props.match.path);
        let location = this.props.match.path.toString().substr(1);
        const updatedLocation = this.insertSpaces(location);
        this.setState({
            currentLocation: updatedLocation
        });
        sendLocation(updatedLocation);
        getSensorData((err, data) =>
            this.setState({
                sensorData: data,
                light: data['Light'],
                AQI: data['Air Quality'],
                noise: data['Noise']
            }));
        newDate((err, date) =>
            this.setState({
                dateLastReading: dateFormat(date, "dddd dS mmmm yyyy, h:MM:ss TT")
            }));
    }

    insertSpaces = (string) => {
        string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
        string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
        return string;
    };

     columnFormatter = (column) => {
        return (
            <h5 className={classes.test} style={{
                padding: '5px',
                margin: '5px',
                color: '#4b91ff'
            }}><strong>{ column.text }</strong></h5>
        );
    };

    styleReadings = (cell, sensor, min, max) => {
            switch (cell) {
                    case(sensor):
                        if (sensor > min && sensor < max) {
                            return {
                                backgroundColor: '#81c784',
                                padding: '5px',
                                margin: '5px'
                            };
                        } else {
                            return {
                                backgroundColor: '#c73030',
                                margin: '5px'
                            };
                        }
                    default:
                        return cell;
                }
    };

    render() {
        const columns = [{
            dataField: 'sensor',
            text: 'Sensor Type     ',
            sort: true,
            align: 'center',
            style: {
                padding: '5px'
            },
            headerFormatter: this.columnFormatter
        }, {
            dataField: 'reading',
            text: 'Current Reading',
            align: 'center',
            sort: true,
            style: (cell) => {
                if(cell === this.state.AQI) {
                    return this.styleReadings(cell, this.state.AQI, -1, 9);
                } else if(cell === this.state.light){
                    return this.styleReadings(cell, this.state.light, 499, 1001);
                } else {
                    return this.styleReadings(cell, this.state.noise, -1, 41);
                }

            },
            headerFormatter: this.columnFormatter
        }, {
            dataField: 'units',
            text: 'Units',
            sort: true,
            align: 'center',
            style: {
                    padding: '5px'
            },
            headerFormatter: this.columnFormatter
        }];
        console.log(this.state.sensorData);

        const { SearchBar } = Search;

        const data = [{
            sensor: 'Air Quality',
            reading: this.state.AQI,
            units: 'AQI'
        },{
            sensor: 'Light',
            reading: this.state.light,
            units: 'lux'
        },{
            sensor: 'Noise',
            reading: this.state.noise,
            units: 'dB'
        }
        ];

        const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
        }];

        const infoReading = {
            color: '#555555',
            fontStyle: 'italic',
            padding: '10px',
            marginTop: '25px'
        };

        const getInitialDate = () => {
            const reading = new Date ();
            return dateFormat(reading,  "dddd dS mmmm yyyy, h:MM:ss TT");
        };

        return (
            <div>
                <h1>{this.state.currentLocation}</h1>
                {/*<BootstrapTable keyField='sensor' data={data} columns={columns} defaultSorted={defaultSorted} bootstrap4/>*/}
                <ToolkitProvider
                    keyField="sensor"
                    data={data}
                    columns={ columns }
                    search
                    bootstrap4
                    striped
                    hover
                    defaultSorted={defaultSorted}
                >
                    {
                        props => (
                            <div>
                                <p>Search sensor data:</p>
                                 <SearchBar { ...props.searchProps } style={{border: '1px solid navy', borderRadius: '0.25rem'}} placeholder=' Search...' />
                                <hr />
                                <BootstrapTable
                                    { ...props.baseProps }
                                    striped={true}
                                    hover
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
                <div style={infoReading}>
                    {this.state.dateLastReading.length > 0 ? <p>Readings last updated: {this.state.dateLastReading}</p> : <p> Initial readings take on: {getInitialDate()} </p>}
                </div>
            </div>
        )
    }
}
export default Sensors;
