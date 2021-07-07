import React from "react";
import DropDown from "../dropdown/DropDown";
import { Link } from "react-router-dom";
import "./topnav.css";
import notifications from "../../assets/JSonData/notification.json";
import user_image from "../../assets/images/Hinh.jpg";
import user_menu from "../../assets/JSonData/user-menus.json";
import ThemeMenu from "../thememenu/ThemeMenu";

const renderNotificationItem = (item, i) => (
  <div className="notification-item" key={i}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const curr_user = {
  display_name: "Hinhwg",
  Image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user_image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, i) => (
  <Link to="/" key={i}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here ... " />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="profile topnav__right-item">
          <DropDown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, i) => renderUserMenu(item, i)}
          />
        </div>
        <div className="topnav__right-item">
          <DropDown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, i) => renderNotificationItem(item, i)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
