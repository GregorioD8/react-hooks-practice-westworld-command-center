import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, onSelect }) {
  const {firstName, imageUrl} = host
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  function handleSelect() {
    onSelect(host)
  }
  return (
    <Card
      className={host.selected? "host selected" : "host"}
      onClick={handleSelect}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
