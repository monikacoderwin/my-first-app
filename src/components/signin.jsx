
import './signin.css';

function Signin(){
  return(
<div className= "container-fluid" id='101'>
    <h1> <img src="unnamed.jpg" alt="logo" width="35" height="35"/>  MetaBook  </h1>
    <br></br>
  <div className="mb-3 row" id='102'>
  <label for="staticName" class="col-sm-2 col-form-label">Username</label>
  <div className="col-sm-10">
    <input type="text"  class="form-control" id="inputUsername"/>
  </div>
  </div>
  <br></br>
<div className="mb-3 row" id='103'>
  <label for="inputPassword"  class="col-sm-2 col-form-label">Password</label>
  <div className="col-sm-10">
    <input type="password" class="form-control" id="inputPassword"/>
  </div>
</div>
<br></br>
<div class="col-8" id='104'>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Remember me
      </label>
    </div>
  </div>
 
    <br></br>
    <div className= "d-flex justify-content-center">
    <button class="btn btn-primary" type="submit">Login</button>
</div>

  <br></br>
 
  <div className= "d-flex justify-content-center">
<button type="button" id='106' class="btn btn-success">Create new account</button>
</div>
</div>

  );
};

export default Signin ;