import React from "react";

export default function DashboardCards() {
  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>

        <div
          className="content-wrapper "
          style={{ backgroundColor: "antiquewhite;" }}
        >
          <div className="content-header row">
            <div className="content-header-left col-md-6 col-12 mb-2">
              <h3 className="content-header-title mb-0">Project Summary</h3>
              <div className="row breadcrumbs-top">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Project</a>
                    </li>
                    <li className="breadcrumb-item active">Project Summary</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section id="minimal-statistics">
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="warning">20.89 %</h3>
                          <span>PROJECT 1</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-pie-chart warning font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="success">95.89 %</h3>
                          <span>PROJECT 2</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-direction success font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="96"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="info">72 %</h3>
                          <span>
                            <a href="/report.html">PROJECT 3</a>
                          </span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-rocket  info font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="danger">10.89 %</h3>
                          <span>PROJECT 4</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-graph danger font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="amber">40.89 %</h3>
                          <span>PROJECT 5</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-book-open amber font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-amber"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="warning">30%</h3>
                          <span>PROJECT 6</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-speech  warning font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div
                        className="progress mt-1 mb-0"
                        style={{ height: "7px;" }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="info">64.89 %</h3>
                          <span>PROJECT 7</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-globe info font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div
                        className="progress mt-1 mb-0"
                        style={{ height: "7px;" }}
                      >
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="info">75.65 %</h3>
                          <span>PROJECT 8</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-support   info font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="amber">50.9 %</h3>
                          <span>PROJECT 9</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-notebook amber font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-amber"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className=" success">80.89 %</h3>
                          <span>PROJECT 10</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-bar-chart  success font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-success "
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="success">100 %</h3>
                          <span>PROJECT 11</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-screen-tablet success font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="danger">6 %</h3>
                          <span>PROJECT 12</span>
                        </div>
                        <div className="align-self-center">
                          <i className="icon-screen-desktop danger font-large-2 float-right"></i>
                        </div>
                      </div>
                      <div className="progress mt-1 mb-0">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">PROJECT PROGRESS CHART</div>
                    <div id="column-basic-chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
