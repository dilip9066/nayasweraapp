import React from "react";

export default function Profile() {
  return (
    <>
      <section id="page-account-settings">
        <div className="row">
          <div className="col-md-3 mb-2 mb-md-0">
            <ul className="nav nav-pills flex-column mt-md-0 mt-1">
              <li className="nav-item">
                <a
                  className="nav-link d-flex active"
                  id="account-pill-general"
                  data-toggle="pill"
                  href="#account-vertical-general"
                  aria-expanded="true"
                >
                  <i className="feather icon-globe"></i>
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex"
                  id="account-pill-password"
                  data-toggle="pill"
                  href="#account-vertical-password"
                  aria-expanded="false"
                >
                  <i className="feather icon-lock"></i>
                  Change Password
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="account-vertical-general"
                      aria-labelledby="account-pill-general"
                      aria-expanded="true"
                    >
                      <div className="media">
                        <a href="/">
                          <img
                            src="/app-assets/images/portrait/small/avatar-s-1.png"
                            className="rounded mr-75"
                            alt="profile image"
                            height="64"
                            width="64"
                          />
                        </a>
                        <div className="media-body mt-75">
                          <div className="col-12 px-0 d-flex flex-sm-row flex-column justify-content-start">
                            <label
                              className="btn btn-sm btn-primary ml-50 mb-50 mb-sm-0 cursor-pointer"
                              htmlFor="account-upload"
                            >
                              Upload new photo
                            </label>
                            <input type="file" id="account-upload" hidden="" />
                            <button className="btn btn-sm btn-secondary ml-50">
                              Reset
                            </button>
                          </div>
                          <p className="text-muted ml-75 mt-50">
                            <small>
                              Allowed JPG, GIF or PNG. Max size of 800kB
                            </small>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <form noValidate="">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label htmlFor="account-username">
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="account-username"
                                  placeholder="Username"
                                  required=""
                                  data-validation-required-message="This username field is required"
                                  spellCheck="false"
                                  data-ms-editor="true"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label htmlFor="account-name">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="account-name"
                                  placeholder="Name"
                                  required=""
                                  data-validation-required-message="This name field is required"
                                  spellCheck="false"
                                  data-ms-editor="true"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label htmlFor="account-e-mail">E-mail</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="account-e-mail"
                                  placeholder="Email"
                                  required=""
                                  data-validation-required-message="This email field is required"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="account-company">Company</label>
                              <input
                                type="text"
                                className="form-control"
                                id="account-company"
                                placeholder="Company name"
                                spellCheck="false"
                                data-ms-editor="true"
                              />
                            </div>
                          </div>
                          <div className="col-12 d-flex flex-sm-row flex-column justify-content-end">
                            <button
                              type="submit"
                              className="btn btn-primary mr-sm-1 mb-1 mb-sm-0"
                            >
                              Save changes
                            </button>
                            <button type="reset" className="btn btn-light">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="account-vertical-password"
                      role="tabpanel"
                      aria-labelledby="account-pill-password"
                      aria-expanded="false"
                    >
                      <form noValidate="">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label htmlFor="account-old-password">
                                  Old Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="account-old-password"
                                  required=""
                                  placeholder="Old Password"
                                  data-validation-required-message="This old password field is required"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label htmlFor="account-new-password">
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  name="password"
                                  id="account-new-password"
                                  className="form-control"
                                  placeholder="New Password"
                                  required=""
                                  data-validation-required-message="The password field is required"
                                  minLength="6"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label htmlFor="account-retype-new-password">
                                  Retype New Password
                                </label>
                                <input
                                  type="password"
                                  name="con-password"
                                  className="form-control"
                                  required=""
                                  id="account-retype-new-password"
                                  data-validation-match-match="password"
                                  placeholder="New Password"
                                  data-validation-required-message="The Confirm password field is required"
                                  minLength="6"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 d-flex flex-sm-row flex-column justify-content-end">
                            <button
                              type="submit"
                              className="btn btn-primary mr-sm-1 mb-1 mb-sm-0"
                            >
                              Save changes
                            </button>
                            <button type="reset" className="btn btn-light">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
