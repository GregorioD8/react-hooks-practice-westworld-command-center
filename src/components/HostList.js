import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ hosts, onSelect }) {

  const viewableHosts = hosts.map((h) => (
    <Host
    key={h.id}
    host={h}
    onSelect={onSelect}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>{viewableHosts}</Card.Group>
  );
}

export default HostList;
