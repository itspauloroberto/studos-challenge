import React from 'react';
import SearchField from "react-search-field";

const Header = ({ onChangeSearchText }) => (
  <div className="header">
    <h1>Studos</h1>
    <div>
      <SearchField
        classNames="search"
        placeholder="Pesquisar"
        onChange={onChangeSearchText}
      />
    </div>
  </div>
)

export default Header;