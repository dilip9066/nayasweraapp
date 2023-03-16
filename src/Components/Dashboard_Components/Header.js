import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top navbar-semi-dark navbar-shadow">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-lg-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs"
                  href="#"
                >
                  <i className="feather icon-menu font-large-1"></i>
                </a>
              </li>
              <li className="nav-item mr-auto">
                <a className="navbar-brand" href="#">
                  <h2 className="brand-text">DOSE&L</h2>
                </a>
              </li>
              <li className="nav-item d-none d-lg-block nav-toggle">
                <a
                  className="nav-link modern-nav-toggle pr-0"
                  data-toggle="collapse"
                >
                  <i
                    className="toggle-icon feather icon-toggle-right font-medium-3 white"
                    data-ticon="feather.icon-toggle-right"
                  ></i>
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link nav-link-expand" href="#">
                    <i className="ficon feather icon-maximize"></i>
                  </a>
                </li>
                <li className="nav-item nav-search">
                  <a className="nav-link nav-link-search" href="#">
                    <i className="ficon feather icon-search"></i>
                  </a>
                  <div className="search-input">
                    <input
                      className="input"
                      type="text"
                      placeholder="Explore"
                      tabIndex="0"
                      data-search="template-search"
                    />
                    <div className="search-input-close">
                      <i className="feather icon-x"></i>
                    </div>
                    <ul className="search-list"></ul>
                  </div>
                </li>
              </ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-language nav-item">
                  <a
                    className="dropdown-toggle nav-link"
                    id="dropdown-flag"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flag-icon flag-icon-gb"></i>
                    <span className="selected-language"></span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdown-flag"
                  >
                    <a className="dropdown-item" href="#" data-language="en">
                      <i className="flag-icon flag-icon-us"></i> English
                    </a>
                  </div>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon feather icon-bell"></i>
                    <span className="badge badge-pill badge-danger badge-up">
                      1
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Notifications</span>
                        <span className="notification-tag badge badge-danger float-right m-0">
                          1 New
                        </span>
                      </h6>
                    </li>
                    <li className="scrollable-container media-list">
                      <a href="/">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="feather icon-plus-square icon-bg-circle bg-cyan"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new order!
                            </h6>
                            <p className="notification-text font-small-3 text-muted">
                              Lorem ipsum dolor sit amet, consectetuer elit.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>

                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="feather icon-file icon-bg-circle bg-teal"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              Generate monthly report
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Last month
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item text-muted text-center"
                        href="/"
                      >
                        Read all notifications
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon feather icon-mail"></i>
                    <span className="badge badge-pill badge-warning badge-up">
                      3
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Messages</span>
                        <span className="notification-tag badge badge-warning float-right m-0">
                          4 New
                        </span>
                      </h6>
                    </li>
                    <li className="scrollable-container media-list">
                      <a href="/">
                        <div className="media">
                          <div className="media-left">
                            <div className="avatar avatar-online avatar-sm rounded-circle">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                                alt="avatar"
                              />
                              <i></i>
                            </div>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">Rakesh Singh</h6>
                            <p className="notification-text font-small-3 text-muted">
                              I like your portfolio, let's start.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Today
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="/">
                        <div className="media">
                          <div className="media-left">
                            <span className="avatar avatar-sm avatar-busy rounded-circle">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                                alt="avatar"
                              />
                              <i></i>
                            </span>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">Sneha Kumari</h6>
                            <p className="notification-text font-small-3 text-muted">
                              I have seen your work, there is
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Tuesday
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="/">
                        <div className="media">
                          <div className="media-left">
                            <div className="avatar avatar-online avatar-sm rounded-circle">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                                alt="avatar"
                              />
                              <i></i>
                            </div>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">Tahir Jama</h6>
                            <p className="notification-text font-small-3 text-muted">
                              Can we have call in this week ?
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Friday
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="/">
                        <div className="media">
                          <div className="media-left">
                            <span className="avatar avatar-sm avatar-away rounded-circle">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                                alt="avatar"
                              />
                              <i></i>
                            </span>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">Neha Mahto</h6>
                            <p className="notification-text font-small-3 text-muted">
                              We have project party this saturday.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                last month
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item text-muted text-center"
                        href="/"
                      >
                        Read all messages
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <div className="avatar avatar-online">
                      <img
                        src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                        alt="avatar"
                      />
                      <i></i>
                    </div>
                    <span className="user-name">Joint secretary</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <i className="feather icon-user"></i> Edit Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="feather icon-mail"></i> My Inbox
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="feather icon-check-square"></i> Task
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="feather icon-message-square"></i> Chats
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i className="feather icon-power"></i> Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
