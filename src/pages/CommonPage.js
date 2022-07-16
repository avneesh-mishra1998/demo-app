import React from 'react'
import { NavLink } from "react-router-dom";

function CommonPage(props) {
  return (
    <div>
         <section>
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex  flex-collumn">
                <div className="col-md-6 pt-0 order-2 order-lg-1"  id="Home-text">
             <div className="text">
                    <h1>
                      Here Is the Method To Grow Your <b style={{"color":"#1e1e"}}>{props.heading}</b>
                    </h1>
                    <h3 className="my-3">
                      For Getting the Instant profit from Your work contact us
                      immedietly
                    </h3>
                    <p>You can explore as many things you want for your Bussinesses</p>
                    <div className="mt-3 btn">
                      <NavLink to="/service">{props.buttons}</NavLink>
                    </div>
                    </div>
                </div>
                <div className="col-md-6  pt-0 order-2 order-lg-1 justify-items-center">
                  <img src={props.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommonPage