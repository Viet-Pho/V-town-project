import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={(_) => {
            props.setPage(0);
          }}
        >
          VPho
        </NavbarBrand>
        {/* <ul>
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Booking</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
        </ul> */}
      </Navbar>
    </div>
  );
};
