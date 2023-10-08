import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"
function Area( { area, hosts, onSelect } ) {

  const { name } = area
  
  const hostsInArea = hosts.filter((h) => h.area === area.name)

  
  return (
    <div
      className="area"
      id={name}
    >
      <h3 className="labels">
        {/* Don't just pass in the name from the data...clean that thing up */}
      {name.replace(/_/g, " ").toUpperCase()}
      </h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
      <HostList hosts={hostsInArea} onSelect={onSelect}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
