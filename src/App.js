import React from 'react'; 
import { useState, useEffect } from 'react';
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData} from './api';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
  
const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoodinates] = useState({lat:0 , lng:0});
    const [bounds, setBounds] = useState( null)

    useEffect(() => {
getPlacesData().then((data) =>{
    console.log(data);

    setPlaces(data);
})
    },[coordinates, bounds]);
    return(
        <>
        <CssBaseline/>
        <Header />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                 setCoodinates = {setCoodinates}
                 setBounds = {setBounds}
                 coordinates = { coordinates}
                />
            </Grid>
        </Grid>
        </>
    );
}

export default App;