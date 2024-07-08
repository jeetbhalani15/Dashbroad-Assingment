import React from 'react'
import { useLocation } from 'react-router-dom';
import { GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./PageHeader.css"

const PageHeader = ({pageHeader}) => {
    const location = useLocation();
    const getPageName = () => {
        switch (location.pathname) {
          case '/dashboard':
            return 'Dashbroad';
          case '/orders':
            return 'Ordes';
          case '/customers':
            return 'Customers';
          case '/inventory':
            return 'Inventory';
          case '/conversations':
            return 'Conversations';
          case '/settings':
            return 'Settings';
          case '/support':
            return 'Contact Support';
          case '/freegifts':
            return 'Free Gift Awaits You!';
          default:
            return '404 Not Found';
        }
      };
  return (
    <>
    <div className='header-box'>
    <div><h3>{getPageName()}</h3></div>
    <div className='header'>
        <div>Nany's Shop</div><RiArrowDropDownLine size={24}/>
        <div><GoBellFill color='#5570F1' size={17}/></div>
        <div><CgProfile color='#5570F1' size={17}/></div>
        <div><GoHomeFill color='#5570F1' size={17}/></div>
    </div>
    </div>
    </>
  )
}

export default PageHeader