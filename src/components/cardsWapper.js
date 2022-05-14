import React from "react";
import Cards from "./cards";
import data from "./data";

export default function CardList(props) {
  const elms = data.map((x) => {
    return <Cards key={x.id} items={x} />;
  });
  return <section>{elms}</section>;
}
