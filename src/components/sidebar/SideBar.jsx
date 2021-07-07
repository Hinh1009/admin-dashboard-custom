import React from "react";
import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import sidebar__items from "../../assets/JSonData/sidebar-routes.json";
import { Link } from "react-router-dom";
// import "boxicons";

const SidebarItem = (prop) => {
  const active = prop.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={prop.icon}>
          <span> {prop.title}</span>
        </i>
      </div>
    </div>
  );
};

const SideBar = (props) => {
  const activeItem = sidebar__items.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src={logo}
          alt="logo"
          // style={{ width: 100, height: 100 }}
        ></img>
      </div>

      {sidebar__items.map((item, i) => (
        <Link to={item.route} key={i}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={i === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
