import React from 'react';

const ListItem = ({ item: { name, year, description }}) => (
  <li className="card">
    <div className="heading" />
    <div>
      <h2>{name} {year}</h2>
      <p>{description}</p>
    </div>
  </li>
)

export default ListItem;