import {  BiFontSize, BiSolidHomeHeart, BiSolidSpreadsheet } from "react-icons/bi";
import {  MdOndemandVideo } from "react-icons/md";
import { BiBookHeart } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import {  FaFacebookMessenger } from "react-icons/fa6";
import { MdNotifications } from "react-icons/md";
import {  CgProfile} from "react-icons/cg";
import './navbar.css';
import React from 'react';
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="unnamed.jpg" alt="logo" width="30" height="24"/>
    </a>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search metabook" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"> Search</button>
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 header-icon" >
        <li class="nav-item">
         <Link to={"/"}>  <BiSolidHomeHeart /></Link>
        </li>
        <li class="nav-item">
        <Link to={"/about"}> <MdOndemandVideo /></Link>
        </li>
        <li class="nav-item">
        <Link to={"/signin"}> <BiBookHeart/></Link>
        </li>
        <li class="nav-item">
        <Link to={"/signup"}> <MdGroups2/></Link>
        </li>
        </ul>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li class="nav-item">
        <Link to={"/"}>  <CgMenuGridR/> </Link>
        </li>
        <li class="nav-item">
        <Link to={"/"}> <FaFacebookMessenger /></Link>
        </li>
        <li class="nav-item">
        <Link to={"/"}> <MdNotifications/></Link>
        </li>
        <li class="nav-item">
        <div class="dropdown">
  
  <CgProfile className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="CgProfile dropdown" aria-expanded="false"/>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link to={"/signin"}>myprofile</Link></li>
    <li><Link to={"/logout"}>logout</Link></li>
      </ul>
          </div>
        </li>
        </ul>
        </div>
        </div>
        </div>

    </nav>
    </>
    );
    }
    export default Navbar;