import { BsFillCameraVideoFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import{ GoSmiley } from 'react-icons/go';
import { HiPhoto } from "react-icons/hi2";
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import { PiShareFatBold } from 'react-icons/pi';

import React from 'react';
import './middle.css';

function Middle(){
return(
    <>

<div class="container">
  <h1><img src="unnamed.jpg" alt="logo" width="35" height="35"/> Home </h1>
  <div class="row align-items-center img-part" >
    <div class="col" id="101">
      <img src="model1.jpg" alt="picture1" style={{height: "300px", width:"200px"}}/>
    </div>
    <div className="col" id="102">
        <img src="model2.jpg" alt="picture2" style={{height:"300px",width:"200px"}}/>
        </div>
        <div className="col" id="103">
            <img src="model3.jpg" alt="picture3" style={{height: "300px",width: "200px"}}/>
            </div>
            <div className="col" id="104">
            <img src="model6.jpg" alt="picture4" style={{height:"300px",width:"200px"}}/>
            </div>
    </div>
    
  <div className="row align-items-center">
  <div className=" col-md-9">Profile picture</div>
  <div className="mb-9">
  <label for="exampleFormControlTextarea1" class="form-label"><CgProfile/>What's on your mind write something here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" class="btn btn-light btn-lg"><BsFillCameraVideoFill/> Live video </button>
  <button type="button" class="btn btn-light btn-lg"><HiPhoto/> Photo/video </button>
  <button type="button" class="btn btn-light btn-lg"><GoSmiley/> Feeling activity </button>

</div>
<div className="col-md-9">
<h3>OnePlus Open Finally Debuts With Dual LTPO Displays, Hasselblad Cameras</h3>
<img src="news3.WEBP" class="img-thumbnail" alt="newsfeed" style={{height:"400px",width:"850px"}}/>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><AiOutlineLike/> Like</button>
  <button type="button" class="btn btn-outline-primary"><FaRegComments/> Comment</button>
  <button type="button" class="btn btn-outline-primary"><PiShareFatBold/> Share</button>
</div>
<br/>

<div class="form-floating">
  <textarea class="form-control" placeholder="Write a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
</div>
<br/>
<div className="col-md-9">
<h3>WhatsApp Multiple Accounts Feature Launched! Now use 2 accounts on the same phone; here's how</h3>
<img src="news5.jpg" class="img-thumbnail" alt="newsfeed" style={{height:"400px",width:"850px"}}/>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><AiOutlineLike/> Like</button>
  <button type="button" class="btn btn-outline-primary"><FaRegComments/> Comment</button>
  <button type="button" class="btn btn-outline-primary"><PiShareFatBold/> Share</button>
</div>
<br/>

<div class="form-floating">
  <textarea class="form-control" placeholder="Write a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
</div>
<br/>

<div className="col-md-9">
<h3>Tesla Cybertruck is parked outside the 44 Club during the Formula 1 Lenovo</h3>
<img src="news6.jpg" class="img-thumbnail" alt="newsfeed" style={{height:"400px",width:"850px"}}/>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><AiOutlineLike/> Like</button>
  <button type="button" class="btn btn-outline-primary"><FaRegComments/> Comment</button>
  <button type="button" class="btn btn-outline-primary"><PiShareFatBold/> Share</button>
</div>
<br/>
<br/>
<div class="form-floating">
  <textarea class="form-control" placeholder="Write a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
</div>
<br/>
<div className="col-md-9">
<h3>When Titans Meet: Samsung is set to supply EV batteries to Hyundai from 2026
</h3>
<img src="news7.jpg" class="img-thumbnail" alt="newsfeed" style={{height:"400px",width:"850px"}}/>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><AiOutlineLike/> Like</button>
  <button type="button" class="btn btn-outline-primary"><FaRegComments/> Comment</button>
  <button type="button" class="btn btn-outline-primary"><PiShareFatBold/> Share</button>
</div>
<br/>
<div class="form-floating">
  <textarea class="form-control" placeholder="Write a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
</div>
<br/>
<div className="col-md-9">
<h3>Google flags these two Samsung apps as harmful
</h3>
<img src="news8.jpg" class="img-thumbnail" alt="newsfeed" style={{height:"400px",width:"850px"}}/>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><AiOutlineLike/> Like</button>
  <button type="button" class="btn btn-outline-primary"><FaRegComments/> Comment</button>
  <button type="button" class="btn btn-outline-primary"><PiShareFatBold/> Share</button>
</div>
<br/>

<div class="form-floating">
  <textarea class="form-control" placeholder="Write a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
</div>
</div>

</div>
</>
);
}
export default Middle;