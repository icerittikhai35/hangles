import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faPlusCircle, faCommentDots, faUserCircle } from '@fortawesome/free-solid-svg-icons';

 
const tabs = [{
  route: "/feed",
  icon: faHome,
  label: "Feed"
}, {
  route: "/search",
  icon: faSearch,
  label: "Search"
}, {
  route: "/createdshop",
  icon: faPlusCircle,
  label: "Createdshop"
}, {
  route: "/chat",
  icon: faCommentDots,
  label: "Chat"
}, {
  route: "/profile",
  icon: faUserCircle,
  label: "Profile"
}]


const Navigation = (props) => {
  return (
    <div >
      <nav className="navbar fixed-bottom navbar-light  bottom-tab-nav " role="navigation" style={{ backgroundColor: 'white', height: 62, width: '100%', margin: 'auto' }}>
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="bottom-nav-link" activeClassName="active" >
                    <div>
                      <FontAwesomeIcon size="lg" icon={tab.icon} />
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
    </div>
  )
};

export default Navigation;