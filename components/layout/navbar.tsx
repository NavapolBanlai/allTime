// import Navbar from './navbar'
// import Footer from './footer'
import React, { useContext, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Icon from "../global/Icon";
import menu from "../../data/menu.json"
import MenuGroup from '../global/menuGroup';
import AuthContext from "../../store/authContext";
import Router from 'next/router'

export default function navbar(props: any) {
      const [openSide, setOpenSide] = useState(false)
      const showSidebar = () => setOpenSide(!openSide);
      const authContex = useContext(AuthContext);

      return (
            <>
                  <nav className="navbar navbar-dark bg-light bg-gradient border border-secondary border-opacity-25 " >
                        <div className="container-fluid">
                              <button className='btn btn-link' onClick={() => { showSidebar() }}><Icon iconName="GoGrabber" size={32} /></button>
                              <div className="navbar-button">
                                    <button className="btn btn-outline-primary" type="submit" onClick={() => Router.push('./profile')}><Icon iconName="GoOrganization" /></button>
                                    <button className="btn btn-outline-primary" type="submit" onClick={() => authContex.singOut()}><Icon iconName="GoSignOut" /></button>
                              </div>

                        </div>
                  </nav>
                  <Offcanvas show={openSide} onHide={showSidebar}>
                        <Offcanvas.Header>
                              <Offcanvas.Title>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJndRDODkL20D3TtpQ9Hu70dqar6gvl8RWSg&usqp=CAU" onClick={showSidebar} className="img-fluid" alt="Responsive image" />
                              </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="nav-menu">
                              <MenuGroup menuList={menu} {...props} />

                        </Offcanvas.Body>
                  </Offcanvas>


            </>
      )
}