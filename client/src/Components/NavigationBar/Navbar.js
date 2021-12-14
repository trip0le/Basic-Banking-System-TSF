// import React from 'react';
// import * as Reactbootstrap from 'react-bootstrap';
// import './Navbar.css';
// import { motion } from 'framer-motion';
// import {LinkContainer} from 'react-router-bootstrap';

// //NavigationBar
// const Navbar = () => {
//     return (
//         <div className="NavigationBar">
//             <Reactbootstrap.Navbar collapseOnSelect expand="sm" variant="light">
//                 <LinkContainer to="/"><Reactbootstrap.Navbar.Brand href="#home" className="logo"><b><span className="sparks">Sparks</span> <span className='bank'>Bank</span></b></Reactbootstrap.Navbar.Brand></LinkContainer>
//                 <Reactbootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Reactbootstrap.Navbar.Collapse id="responsive-navbar-nav">
//                     <Reactbootstrap.Nav className="mr-auto home-history">
//                     <LinkContainer to="/"><Reactbootstrap.Nav.Link className="bank-links"><motion.div whileHover={{borderBottom: "2.5px solid #000000"}}>Home</motion.div></Reactbootstrap.Nav.Link></LinkContainer>
//                     <LinkContainer to="/users"><Reactbootstrap.Nav.Link className="bank-links"><motion.div whileHover={{borderBottom: "2.5px solid #000000"}}>Users</motion.div></Reactbootstrap.Nav.Link></LinkContainer>
//                     <LinkContainer to="/transactions"><Reactbootstrap.Nav.Link className="bank-links"><motion.div whileHover={{borderBottom: "2.5px solid #000000"}}>Transactions</motion.div></Reactbootstrap.Nav.Link></LinkContainer>

//                     </Reactbootstrap.Nav>
//                 </Reactbootstrap.Navbar.Collapse>
//             </Reactbootstrap.Navbar>
//         </div>

//     );
// }

// export default Navbar;
import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        TSF Bank
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/users" exact>
                <i 
                className="far fa-address-book">
                </i>Users
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/transactions" exact>
                <i 
                className="far fa-clone">
                </i>Transactions
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;