import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
const [areas, setAreas] = useState([])
const [hosts, setHosts] = useState([])
const [selectedHost, setSelectedHost] = useState(null)
const [allActive, setAllActive] = useState(false)

  useEffect(() => (
    fetch("http://localhost:3001/areas")
    .then((res) => res.json())
    .then((data) => setAreas(data))
  ), [])

  useEffect(() => (
    fetch("http://localhost:3001/hosts")
    .then((res) => res.json())
    .then((data) => setHosts(data))
  ), [])

  function handleUpdateHost(selected) {
    const updatedHosts = hosts.map((h) => h.id === selected.id ? selected : h)
    const newUpdates = updatedHosts.map((h) => h.id === selected.id ? {...h, selected: true} : {...h, selected: false})
    setSelectedHost(selected)
    setHosts(newUpdates)
    
  }
  function handleActivateClick(toggle) {
    setAllActive(toggle)
    const allHosts = hosts.forEach((h)=> h.active = toggle)
  }

  const viewableHosts = hosts.filter((h) => h.active)
  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestworldMap
      areas={areas}
      hosts={viewableHosts}
      onSelect={handleUpdateHost}
      />
      <Headquarters
      hosts={hosts}
      onSelect={handleUpdateHost}
      selectedHost={selectedHost}
      onUpdateHost={handleUpdateHost}
      onActivateClick={handleActivateClick}
      allActive={allActive}
      areas={areas}
      
      />

    </Segment>
  );
}

export default App;
