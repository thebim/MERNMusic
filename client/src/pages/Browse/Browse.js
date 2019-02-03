import React, { Component } from 'react';
import NewReleasesTab from './TabContent/NewReleasesTab';
import GenresTab from './TabContent/GenresTab';
import NavTabs from "./NavTabs";

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'New Releases'
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div>
        <NavTabs activeTab={this.state.activeTab} changeTab={this.changeTab} />
        <div className="container body-container">
          { (this.state.activeTab === 'New Releases') && (<NewReleasesTab />) }
          { (this.state.activeTab === 'Genres') && (<GenresTab />)}
        </div>
      </div>
    );
  }
}

export default Browse;
