import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, hosts, onSelect }) {

const allAreas = areas.map((a) => (
  
  
  <Area
  key={a.id}
  area={a}
  hosts={hosts}
  onSelect={onSelect}
  />
))

  return <Segment id="map">{/* What should we render on the map? */}
  {allAreas}
  </Segment>;
}

export default WestworldMap;
