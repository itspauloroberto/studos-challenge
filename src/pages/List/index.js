import React, { Component } from 'react';

import { fetchList } from '../../models/List/api'; //production
// import mockedList from '../../models/List/mock'; //development

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';


class List extends Component {

  state = {
    list: []
  }

  renderList = async filterString => {
    const list = await fetchList(); //production
    // const list = mockedList; //development
    const { status, data } = list;
    if (status === 'success'){
      console.log(data[0].description);
      console.log('filterString ', filterString);
      this.setState({
        list: filterString
        ? data.filter(
          item => {
            const title = item.name.toLowerCase();
            const text = item.description.toLowerCase();
            const year = item.year;
            if (title.includes(filterString) || text.includes(filterString) || year.includes(filterString))
              return item;
            else
              return null;
          }
        )
        : data
      });
    }
  }

  componentDidMount = () => this.renderList();
  onChangeSearchText = filterString => this.renderList(filterString.toLowerCase());

  render(){
    const { list } = this.state;
    return (
      <div>
        <Header
          onChangeSearchText={this.onChangeSearchText}
        />
        <div className="list-wrapper">
          <ul className="list">
            {
              list.map((item, index) => (
                <ListItem
                  key={index}
                  item={item}
                />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
