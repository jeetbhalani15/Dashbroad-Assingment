import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./PageHeader.css";

const PageHeader = ({ pageHeader }) => {
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Dashbroad";
      case "/orders":
        return "Orders";
      case "/customers":
        return "Customers";
      case "/inventory":
        return "Inventory";
      case "/conversations":
        return "Conversations";
      case "/settings":
        return "Settings";
      case "/support":
        return "Contact Support";
      case "/freegifts":
        return "Free Gift Awaits You!";
      case "/logout":
        return "Logout";
      default:
        return "404 Not Found";
    }
  };
  return (
    <>
      <div className="header-box">
        <div>
          <h1>{getPageName()}</h1>
          <div class="flex gap-1 justify-center items-center cursor-pointer mt-2">
            <div>
              <Link to="/">
                <GoHomeFill color="#5570F1" size={17} />
              </Link>
            </div>
            <div class="text-sm font-light">{`/  ${getPageName()}`}</div>
          </div>
        </div>
        <div className="header">
          <div class="flex items-center gap-1 cursor-pointer">
            Nany's Shop
            <RiArrowDropDownLine size={24} />
          </div>
          <div>
            <GoBellFill color="#5570F1" size={17} />
          </div>
          <div>
            <CgProfile color="#5570F1" size={17} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
