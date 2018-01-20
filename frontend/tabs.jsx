import React from 'react';

class Tab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      content: "",
      index: 0
    };
    this.tab1 = this.tab1.bind(this);
    this.tab2 = this.tab2.bind(this);
    this.tab3 = this.tab3.bind(this);
  }

  tab1() {
    let contentDiv = document.getElementById("tabs-content");
    contentDiv.innerHTML = "I am the first";
  }

  tab2() {
    let contentDiv = document.getElementById("tabs-content");
    contentDiv.innerHTML = "I am the second";
  }

  tab3() {
    let contentDiv = document.getElementById("tabs-content");
    contentDiv.innerHTML = "I am the third";
  }

  render() {
    return(
      <div className="tabs">
        <h1>Tabs</h1>
        <div className="tabs-buttons">
          <button className="tabs-button" onClick={this.tab1}>Tab 1</button>
          <button onClick={this.tab2}>Tab 2</button>
          <button onClick={this.tab3}>Tab 3</button>
        </div>

        <div id="tabs-content">

        </div>
      </div>
    );
  }

}

export default Tab;
