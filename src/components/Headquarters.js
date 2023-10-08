import React from "react";
import { Grid } from "semantic-ui-react";

import LogPanel from "./LogPanel"
import ColdStorage from "./ColdStorage"
import "../stylesheets/Headquarters.css";
import HostInfo from "./HostInfo"
function Headquarters( { hosts, onSelect, selectedHost, onUpdateHost, onActivateClick, allActive, areas} ) {


  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        {/* Something goes here.... */}
        
        <ColdStorage 
        hosts={hosts}
        onSelect={onSelect}
        />
        
        </Grid.Column>
      <Grid.Column width={5}>

        <HostInfo hosts={hosts}
        selectedHost={selectedHost} 
        onUpdateHost={onUpdateHost} 
        areas={areas}/>

      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        
        <LogPanel 
        onActivateClick={onActivateClick}
        allActive={allActive}
        />

      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
