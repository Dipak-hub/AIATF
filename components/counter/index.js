import React from "react";

const CounterSection = (props) => {
  return (
    <div className={`tp-counter-area ${props.countclass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-counter-grids">
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="6200">
                      6200
                    </span>
                    +
                  </h2>
                </div>
                <p>Registration</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="80">
                      80
                    </span>
                    +
                  </h2>
                </div>
                <p>Events</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="245">
                      245
                    </span>
                    +
                  </h2>
                </div>
                <p>Partners</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="605">
                      2
                    </span>
                    +
                  </h2>
                </div>
                <p>Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
