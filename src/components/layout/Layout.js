import React, { useEffect } from "react";

import SideBar from "../sidebar/SideBar";
import Routes from "../../Routes";
import TopNav from "../topnav/TopNav";
import "./layout.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

function Layout() {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const themeColor = localStorage.getItem("themeColor", "theme-color-blue");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(themeColor));
  }, [dispatch]);

  return (
    <Router>
      <Route
        render={(props) => (
          <div
            className={`layout 
           ${themeReducer.mode} ${themeReducer.color}
          `}
          >
            <SideBar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </Router>
  );
}

export default Layout;
