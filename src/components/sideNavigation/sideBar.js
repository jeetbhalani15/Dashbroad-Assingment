import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHeadphonesBold } from "react-icons/pi";
import { PiGift } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import "./Sidebar.css";

const SideNavigation = ({ isCollapsed, setIsCollapsed }) => {
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="logo">
          <MdOutlineIncompleteCircle size={20} color="#5570F1" />
          <h3>Metrix</h3>
        </div>
        <div className="nav-items">
          <div>
            <ul className="navigation">
              <li className="active">
                <Link to="/">
                  <RxDashboard className="icon" size={16} />
                  <span className={`${isCollapsed ? "hide" : "link-text"}`}>
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <TbShoppingBag className="icon" size={16} />
                  <span className={`${isCollapsed ? "hide" : "link-text"}`}>
                    Orders
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/customers">
                  <TbUsers size={16} className="icon" />
                  <span className={`${isCollapsed ? "hide" : "link-text"}`}>
                    Customers
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/inventory">
                  <MdOutlineInventory2 size={16} className="icon" />
                  <span className={`${isCollapsed ? "hide" : "link-text"}`}>
                    Inventory
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/conversations">
                  <IoChatbubbleEllipsesOutline className="icon" size={16} />
                  <span className={`${isCollapsed ? "hide" : "link-text"}`}>
                    Conversations
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <IoSettingsOutline size={16} className="icon" />
                  <span className={`${isCollapsed ? "hide" : "link-text"}`}>
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="below-nav-button
        "
          >
            <ul className="navigation">
              <li>
                <Link to="/support">
                  <PiHeadphonesBold size={18} className="icon" />
                  <span
                    className={`${isCollapsed ? "hide" : "below-link-text"}`}
                  >
                    Contact Support
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/freegifts">
                  <PiGift size={18} className="icon" />
                  <span
                    className={`${isCollapsed ? "hide" : "below-link-text"}`}
                  >
                    Free Gift Awaits You!
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/logout">
              <IoLogOut size={18} className="icon" color="rgb(251 129 93)" />
              <span
                className={`${isCollapsed ? "hide" : "logout"}`}
                style={{ color: "rgb(251 129 93)", marginLeft: "0.5rem" }}
              >
                Logout
              </span>
            </Link>
          </li>
          <button className="collapse-btn" onClick={() => toggleCollapse()}>
            {isCollapsed ? (
              <IoIosArrowDropright size={20} color="black" />
            ) : (
              <IoIosArrowDropleft size={18} color="black" />
            )}
          </button>
        </ul>
      </nav>
    </>
  );
};

export default SideNavigation;
