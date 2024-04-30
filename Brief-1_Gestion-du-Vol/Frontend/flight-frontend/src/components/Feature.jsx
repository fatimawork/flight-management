import React from 'react'

export default function Feature() {
  return (
    <div>
        <div className="container-fluid pb-5">
        <div className="container pb-5">
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: '100px', width: '100px' }}>
                  <i className="fa fa-2x fa-money-check-alt text-white"></i>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="">Competitive Pricing</h5>
                  <p className="m-0">Explore the world without breaking the bank with our budget-friendly options.</p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: '100px', width: '100px' }}>
                  <i className="fa fa-2x fa-award text-white"></i>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="">Best Services</h5>
                  <p className="m-0"> From planning to execution, we ensure every detail of your journey is impeccable.</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{ height: '100px', width: '100px' }}>
                  <i className="fa fa-2x fa-globe text-white"></i>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="">Worldwide Coverage</h5>
                  <p className="m-0"> Wherever your wanderlust takes you, we've got you covered with our global network of partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
