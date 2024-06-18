import './home.css';
import React from 'react';

import { BiSolidSpreadsheet, BiSpreadsheet } from "react-icons/bi";

import { FaFacebookMessenger, FaUserFriends} from "react-icons/fa";

import { TbClockHour5 } from 'react-icons/tb';
import {BsCameraReelsFill} from 'react-icons/bs';
import {FaCcAmazonPay } from 'react-icons/fa';
import {GiGamepad} from 'react-icons/gi';
import {BiSolidNews} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {RiBatterySaverFill} from 'react-icons/ri';
import { MdGroups2, MdOndemandVideo } from 'react-icons/md';


function Home(){
  return(

       <>
  
      <ul className="list-group row mb-6 col-sm-10 list-group-item-primary side-icon">
  <li className="list-group-item d-flex justify-content-between align-items-center">
  <CgProfile/> Username
    <span className="badge bg-primary rounded-pill">1</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  < FaUserFriends/> Friends
    <span className="badge bg-primary rounded-pill">1000+</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
   <TbClockHour5/>Memories
    <span className="badge bg-primary rounded-pill">2</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
    < RiBatterySaverFill/>Saved
    <span className="badge bg-primary rounded-pill">1</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <BsCameraReelsFill />Reels
    <span className="badge bg-primary rounded-pill">12</span>
  </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
    <MdGroups2/>  Groups
    <span className="badge bg-primary rounded-pill">20+</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
    <MdOndemandVideo /> Videos
    <span className="badge bg-primary rounded-pill">4</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
    < BiSolidNews/>Feeds
    <span class="badge bg-primary rounded-pill">500+</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
    <BiSpreadsheet/>Recent ad activity
    <span class="badge bg-primary rounded-pill">50+</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
   
 <FaCcAmazonPay />Metabook pay
    <span class="badge bg-primary rounded-pill">0</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
   <FaFacebookMessenger />Messenger
    <span class="badge bg-primary rounded-pill">20+</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <BiSolidSpreadsheet/>Pages
    <span class="badge bg-primary rounded-pill">2</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <BiSolidSpreadsheet/>Ads
    <span class="badge bg-primary rounded-pill">200+</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <GiGamepad/> Play games
    <span class="badge bg-primary rounded-pill">2</span>
    </li>

</ul>



              
              </>
    );
}
export default Home;