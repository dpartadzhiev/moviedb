import React from 'react'
import logo from "../images/GoF.svg";

const PageHeader = (props: any) => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <img src={logo} alt="" />
          </div>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default PageHeader;