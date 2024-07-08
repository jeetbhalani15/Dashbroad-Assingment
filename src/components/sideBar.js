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
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import "./Sidebar.css";

const SideNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="logo">
          <MdOutlineIncompleteCircle size={20} color="#5570F1" />
           <span>Metrix</span>
           </div>
        <div className="nav-items">
        <div>
        <ul className="navigation">
          <li>
            <Link  to="/dashboard">
              <RxDashboard size={16} color="#3f3f3f" />
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <TbShoppingBag size={16} color="#3f3f3f" />
              <span className="link-text">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/customers">
              <TbUsers size={16} color="#3f3f3f" />
              <span className="link-text">Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/inventory">
              <MdOutlineInventory2 size={16} color="#3f3f3f"/>
              <span className="link-text">Inventory</span>
            </Link>
          </li>
          <li>
            <Link to="/conversations">
              <IoChatbubbleEllipsesOutline size={16} color="#3f3f3f"/>
              <span className="link-text">Conversations</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <IoSettingsOutline size={16} color="#3f3f3f" />
              <span className="link-text">Settings</span>
            </Link>
          </li>
        </ul>
        </div>
        <div className="below-nav-button
        ">
          <ul className="navigation">
            <li>
              <Link to="/dashboard">
                <PiHeadphonesBold size={18} color="#3f3f3f" />
                <span className="link-text">Contact Support</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <PiGift size={18} color="#3f3f3f"/>
                <span className="link-text">Free Gift Awaits You!</span>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        <button className="collapse-btn" onClick={toggleCollapse}>
          {isCollapsed ? <>&#9654;</> : <>&#9660;</>}
        </button>
        <ul className="navigation">
        <li>
              <Link to="/dashboard">
                <IoLogOutOutline size={18} color='#CC5F5F'/>
                <span style={{color:'#CC5F5F'}}>Logout</span>
              </Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default SideNavigation;
