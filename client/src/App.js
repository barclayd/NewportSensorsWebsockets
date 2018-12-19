import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Locations from "./containers/Locations/Locations";
import Sensors from "./containers/Sensors/Sensors";
import Light from './containers/HistoricData/Light/Light';
import Noise from './containers/HistoricData/Noise/Noise';
import AirQuality from './containers/HistoricData/Air Quality/airQuality';


class App extends Component {

  render() {

    return (
      <div>
        <Layout>
            <Switch>
                <Route path='/' exact component={Locations}/>
                {/*<Route path='/sensors' exact component={Sensors}/>*/}
                <Route path='/TredegarHouse' exact component={Sensors}/>
                <Route path='/CelticManorResort' exact component={Sensors}/>
                <Route path='/RodneyParade' exact component={Sensors}/>
                <Route path='/air-quality' exact component={AirQuality} />
                <Route path='/light' exact component={Light}/>
                <Route path='/noise' exact component={Noise}/>
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
