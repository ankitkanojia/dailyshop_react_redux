import React, { Component } from 'react';
import { fetchMenu } from './../Redux/Actions/StaticItems';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuLinks from './../Components/MenuLinks';

class Menu extends Component {

  static propTypes = {
    fetchMenu: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return (
      <section id="menu">
        <div className="container">
          <div className="menu-area">
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <MenuLinks config={this.props.menuItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = state => ({
  menuItems: state.staticitems.menu
});

export default connect(mapStateToProps, { fetchMenu })(Menu);