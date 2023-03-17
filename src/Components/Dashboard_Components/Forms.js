import React from "react";

export default function Forms() {
  return (
    <div>
      <section id="form-action-layouts">
        <div className="row match-height">
          <div className="col-md-6">
            <div className="card" style={{ height: "1073.03px" }}>
              <div className="card-header">
                <h4 className="card-title" id="from-actions-top-left">
                  Project Info
                </h4>
                <a className="heading-elements-toggle">
                  <i className="fa fa-ellipsis-v font-medium-3"></i>
                </a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li>
                      <a data-action="collapse">
                        <i className="feather icon-minus"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="reload">
                        <i className="feather icon-rotate-cw"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="expand">
                        <i className="feather icon-maximize"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="close">
                        <i className="feather icon-x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-content collpase show">
                <div className="card-body">
                  <form className="form">
                    <div className="form-body">
                      <h4 className="form-section">
                        <i className="feather icon-user"></i> Required Details
                      </h4>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput1">Project Lead</label>
                          <input
                            type="text"
                            id="projectinput1"
                            className="form-control border-primary"
                            placeholder="First Name"
                            name="fname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput2">Last Name</label>
                          <input
                            type="text"
                            id="projectinput2"
                            className="form-control border-primary"
                            placeholder="Last Name"
                            name="lname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput1">Name of Project</label>
                          <input
                            type="text"
                            id="projectinput1"
                            className="form-control border-primary"
                            placeholder="Name of Project"
                            name="fname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput2">Label for Project</label>
                          <input
                            type="text"
                            id="projectinput2"
                            className="form-control border-primary"
                            placeholder="New ! Andriod ! Portal"
                            name="lname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="issueinput3">Start Date</label>
                          <input
                            type="date"
                            id="issueinput3"
                            className="form-control border-primary"
                            name="dateopened"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Date Opened"
                            data-original-title=""
                            title=""
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="issueinput4">Due Date</label>
                          <input
                            type="date"
                            id="issueinput4"
                            className="form-control border-primary"
                            name="datefixed"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Date Fixed"
                            data-original-title=""
                            title=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput1">
                            {" "}
                            No. of Project Users
                          </label>
                          <input
                            type="text"
                            id="projectinput1"
                            className="form-control border-primary"
                            placeholder="No. of Project Users"
                            name="fname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput2">
                            Estimated Project Task
                          </label>
                          <input
                            type="text"
                            id="projectinput2"
                            className="form-control border-primary"
                            placeholder="Estimated Project Task"
                            name="lname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput1"> No. of Bug </label>
                          <input
                            type="text"
                            id="projectinput1"
                            className="form-control border-primary"
                            placeholder="if available"
                            name="fname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput2"> No. of Tasks</label>
                          <input
                            type="text"
                            id="projectinput2"
                            className="form-control border-primary"
                            placeholder="Estimated Project Task"
                            name="lname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput2"> No. of Milestones</label>
                          <input
                            type="text"
                            id="projectinput2"
                            className="form-control border-primary"
                            placeholder="Estimated Project Task"
                            name="lname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput3">E-mail</label>
                          <input
                            type="text"
                            id="projectinput3"
                            className="form-control border-primary"
                            placeholder="E-mail"
                            name="email"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput4">Contact Number</label>
                          <input
                            type="text"
                            id="projectinput4"
                            className="form-control border-primary"
                            placeholder="Phone"
                            name="phone"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>

                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput5">Company</label>
                          <input
                            type="text"
                            id="projectinput5"
                            className="form-control border-primary"
                            placeholder="Company Name"
                            name="company"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label>Image Upload</label>
                          <label
                            id="projectinput8"
                            className="file center-block float-md-right"
                          >
                            <input type="file" id="file" />
                            <span className="file-custom"></span>
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput9">About Project</label>
                          <textarea
                            id="projectinput9"
                            rows="5"
                            className="form-control border-primary"
                            name="comment"
                            placeholder="About Project"
                            spellCheck="false"
                            data-ms-editor="true"
                          ></textarea>
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="projectinput1"> TaskLists </label>
                          <textarea
                            id="projectinput9"
                            rows="5"
                            className="form-control border-primary"
                            name="comment"
                            placeholder="About Project"
                            spellCheck="false"
                            data-ms-editor="true"
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-actions right">
                        <button type="submit" className="btn btn-primary">
                          <i className="fa fa-check-square-o"></i> Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card" style={{ height: "1073.03px" }}>
              <div className="card-header">
                <h4 className="card-title" id="from-actions-bottom-right">
                  Project Incharge
                </h4>
                <a className="heading-elements-toggle">
                  <i className="fa fa-ellipsis-v font-medium-3"></i>
                </a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li>
                      <a data-action="collapse">
                        <i className="feather icon-minus"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="reload">
                        <i className="feather icon-rotate-cw"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="expand">
                        <i className="feather icon-maximize"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="close">
                        <i className="feather icon-x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-content collpase show">
                <div className="card-body">
                  <form className="form">
                    <div className="form-body">
                      <h4 className="form-section">
                        <i className="fa fa-eye"></i>Incharge Details
                      </h4>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="userinput1">Fist Name</label>
                          <input
                            type="text"
                            id="userinput1"
                            className="form-control border-primary"
                            placeholder="Name"
                            name="name"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="userinput2">Last Name</label>
                          <input
                            type="text"
                            id="userinput2"
                            className="form-control border-primary"
                            placeholder="Company"
                            name="company"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="userinput3">Designation</label>
                          <input
                            type="text"
                            id="userinput3"
                            className="form-control border-primary"
                            placeholder="Designation"
                            name="username"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                        <div className="form-group col-md-12 mb-4">
                          <label htmlFor="userinput4">Company Name</label>
                          <input
                            type="text"
                            id="userinput4"
                            className="form-control border-primary"
                            placeholder="Company Name"
                            name="nickname"
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>

                      <h4 className="form-section">
                        <i className="feather icon-mail"></i> Contact Info &amp;
                        Bio
                      </h4>
                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="userinput5">Email</label>
                          <input
                            className="form-control border-primary"
                            type="email"
                            placeholder="email"
                            id="userinput5"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="userinput6">Company Website</label>
                          <input
                            className="form-control border-primary"
                            type="url"
                            placeholder="http://"
                            id="userinput6"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label>Contact Number</label>
                          <input
                            className="form-control border-primary"
                            type="tel"
                            placeholder="Contact Number"
                            id="userinput7"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="userinput8">Bio</label>
                          <textarea
                            id="userinput8"
                            rows="5"
                            className="form-control border-primary"
                            name="bio"
                            placeholder="Bio"
                            spellCheck="false"
                            data-ms-editor="true"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions right">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-check-square-o"></i> Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row match-height">
          <div className="col-md-6">
            <div className="card" style={{ height: "1048.53px" }}>
              <div className="card-header">
                <h4 className="card-title" id="from-actions-top-bottom-left">
                  Issue Tracking
                </h4>
                <a className="heading-elements-toggle">
                  <i className="fa fa-ellipsis-v font-medium-3"></i>
                </a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li>
                      <a data-action="collapse">
                        <i className="feather icon-minus"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="reload">
                        <i className="feather icon-rotate-cw"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="expand">
                        <i className="feather icon-maximize"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="close">
                        <i className="feather icon-x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-content collpase show">
                <div className="card-body">
                  <form className="form">
                    <div className="form-body">
                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="issueinput1">Issue Title</label>
                          <input
                            type="text"
                            id="issueinput1"
                            className="form-control border-primary"
                            placeholder="issue title"
                            name="issuetitle"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Issue Title"
                            data-original-title=""
                            title=""
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="issueinput2">Opened By</label>
                          <input
                            type="text"
                            id="issueinput2"
                            className="form-control border-primary"
                            placeholder="opened by"
                            name="openedby"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Opened By"
                            data-original-title=""
                            title=""
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="issueinput3">Date Opened</label>
                          <input
                            type="date"
                            id="issueinput3"
                            className="form-control border-primary"
                            name="dateopened"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Date Opened"
                            data-original-title=""
                            title=""
                          />
                        </div>
                        <div className="form-group col-md-6 mb-2">
                          <label htmlFor="issueinput4">Date Fixed</label>
                          <input
                            type="date"
                            id="issueinput4"
                            className="form-control border-primary"
                            name="datefixed"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Date Fixed"
                            data-original-title=""
                            title=""
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="issueinput5">Priority</label>
                          <select
                            id="issueinput5"
                            name="priority"
                            className="form-control border-primary"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Priority"
                            data-original-title=""
                            title=""
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="issueinput6">Status</label>
                          <select
                            id="issueinput6"
                            name="status"
                            className="form-control border-primary"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Status"
                            data-original-title=""
                            title=""
                          >
                            <option value="not started">Not Started</option>
                            <option value="started">Started</option>
                            <option value="fixed">Fixed</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 mb-2">
                          <label htmlFor="issueinput8">Comments</label>
                          <textarea
                            id="issueinput8"
                            rows="5"
                            className="form-control border-primary"
                            name="comments"
                            placeholder="comments"
                            data-toggle="tooltip"
                            data-trigger="hover"
                            data-placement="top"
                            data-title="Comments"
                            data-original-title=""
                            title=""
                            spellCheck="false"
                            data-ms-editor="true"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-check-square-o"></i> Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card" style={{ height: "1048.53px" }}>
              <div className="card-header">
                <h4 className="card-title" id="from-actions-top-bottom-right">
                  Team Details
                </h4>
                <a className="heading-elements-toggle">
                  <i className="fa fa-ellipsis-v font-medium-3"></i>
                </a>
                <div className="heading-elements">
                  <ul className="list-inline mb-0">
                    <li>
                      <a data-action="collapse">
                        <i className="feather icon-minus"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="reload">
                        <i className="feather icon-rotate-cw"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="expand">
                        <i className="feather icon-maximize"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="close">
                        <i className="feather icon-x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-content collpase show">
                <div className="card-body">
                  <section id="form-repeater">
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-content collapse show">
                            <div className="card-body">
                              <div className="repeater-default">
                                <div data-repeater-list="car">
                                  <div data-repeater-item="">
                                    <form className="form row">
                                      <div className="form-group mb-1 col-sm-12 col-md-3">
                                        <label htmlFor="email-addr">Name</label>
                                        <br />
                                        <input
                                          type="email"
                                          className="form-control border-primary"
                                          id="email-addr"
                                          placeholder="Name"
                                        />
                                      </div>
                                      <div className="form-group mb-1 col-sm-12 col-md-4">
                                        <label htmlFor="pass">
                                          {" "}
                                          No of Task Assign
                                        </label>
                                        <br />
                                        <input
                                          type="password"
                                          className="form-control border-primary"
                                          id="pass"
                                          placeholder="No of Task Assign"
                                        />
                                      </div>

                                      <div className="form-group mb-1 col-sm-12 col-md-3">
                                        <label htmlFor="profession">
                                          Profession
                                        </label>
                                        <br />
                                        <select
                                          className="form-control border-primary"
                                          id="profession"
                                        >
                                          <option>Select Option</option>
                                          <option>Developer</option>
                                          <option>Ui Developer</option>
                                          <option>
                                            Automation Engineering
                                          </option>
                                          <option>Jr. Developer</option>
                                        </select>
                                      </div>

                                      <div className="form-group col-sm-12 col-md-2 text-center mt-2">
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          data-repeater-delete=""
                                        >
                                          {" "}
                                          <i className="feather icon-x"></i>{" "}
                                          Delete
                                        </button>
                                      </div>
                                    </form>
                                    <hr />
                                  </div>
                                </div>
                                <div className="form-group overflow-hidden">
                                  <div className="col-12">
                                    <button
                                      data-repeater-create=""
                                      className="btn btn-primary "
                                    >
                                      <i className="icon-plus4"></i> Add
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      <i className="fa fa-check-square-o"></i>{" "}
                                      Save
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
