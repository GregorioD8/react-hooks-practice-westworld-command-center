import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList"
function ColdStorage({ hosts, onSelect}) {
const inactiveHosts = hosts.filter((h)=> !h.active)
console.log(hosts)
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}
        <HostList hosts={inactiveHosts} onSelect={onSelect}/>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
