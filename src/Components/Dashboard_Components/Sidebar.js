import React from "react";

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
              <a href="index.html">
                <i className="feather icon-home"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Home
                </span>
              </a>
            </li>
            <li className="">
              <a href="report.html">
                <i className="feather icon-file-text"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Report
                </span>
              </a>
            </li>
            <li className="">
              <a href="details.html">
                <i className=" feather icon-edit"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Forms
                </span>
              </a>
            </li>
            <li className="">
              <a href="teamdetails.html">
                <i className="feather icon-airplay"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Team Info
                </span>
              </a>
            </li>
            <li className="">
              <a href="/account.html">
                <i className="feather icon-globe"></i>
                <span className="menu-title" data-i18n="Project Summary">
                  Account Setting
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
