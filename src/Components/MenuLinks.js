import React from 'react';
import { Link } from 'react-router-dom';

class MenuLinks extends React.Component {
    getMenuItemTitle = (menuItem) => {
        return menuItem.title;
      };

    getMenuItem = (menuItem, index) => {
        let title = this.getMenuItemTitle(menuItem);
    
        if (menuItem.submenu && menuItem.submenu.length > 0) {
          return (
              <li key={index}>
              <Link to={{pathname :(menuItem.url) ? menuItem.url : "javaScript:void(0);" ,  state: { productid :  menuItem.id }}}>
                {title} {menuItem.submenu && <span className='caret'></span>}
              </Link>
              <MenuLinks config={menuItem.submenu} submenu={true} />
              </li>
          );
        } else {
          return <li key={index}><Link to={{pathname :(menuItem.url) ? menuItem.url : "javaScript:void(0);" ,  state: { productid :  menuItem.id }}}>{title}</Link></li>;
        }
      };

      render() {
        let options = [];
        this.props.config.map((item, index) => {
          options.push(this.getMenuItem(item, index));
        });
    
        if (this.props.submenu && this.props.submenu === true)
          return <ul className="dropdown-menu">{options}</ul>;
    
        return <ul className="nav navbar-nav">{options}</ul>;
      };
}

export default MenuLinks;  