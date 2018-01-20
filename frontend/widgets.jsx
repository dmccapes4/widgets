import React from 'react';
import Clock from './clock';
import Tab from './tabs';
import Weather from './weather';


class Widget extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Clock />
        <br />
        <Tab />
        <br />
        <Weather />
      </div>
    );
  }
}

export default Widget;
