import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <div
        className="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className=" navigation-header">
              <span>Menu</span>
              <i
                className=" feather icon-minus"
                data-toggle="tooltip"
                data-placement="right"
                data-original-title="Apps"
              ></i>
            </li>

            <li className="active">
              <Link to="/dashboard">
                <i className="feather icon-home"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="">
              <Link to="/profile">
                <i className="feather icon-file-text"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Profile
                </span>
              </Link>
            </li>
            <li className="">
              <Link to="/forms">
                <i className=" feather icon-edit"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Forms
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="teamdetails.html">
                <i className="feather icon-airplay"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Team Info
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/account.html">
                <i className="feather icon-globe"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Account Setting
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
