import './signup.css';
import { useFormik } from "formik";

const initialValues = {
  name: "",
  lname:"",
  number:"",
  email: "",
  password:"",
  confirm_password:""
}

const Signup = () => {
  const Formik= useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    }

  });
  return (
    <>
      <div className="container-fluid" id='101'>
        <h1><img src="unnamed.jpg" alt="logo" width="35" height="35" />  Sign up  </h1>
        <div className="col-md-8" id="102">
          <label for="validationCustom01" className="form-label">First name</label>
          <input type="text" name="name" className="form-control" id="validationCustom01" placeholder='Please Enter your name' required />
          <div className="valid-feedback">
            Looks good!

          </div>
        </div>
        <div className="col-md-8" id='103'>
          <label for="validationCustom02" className="form-label">Last name</label>
          <input type="text" name="lname" className="form-control" id="validationCustom02" placeholder='Please enter your last name' required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-8" id='104'>
          <label for="validationCustom02" className="form-label">Mobile number</label>
          <input type="number" name='number' className="form-control" id="validationCustom02" value="Otto" required />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-8" id='105'>
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          <div class="valid-feedback">
          </div></div>
        <div className="col-md-8" id='106'>
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-md-10">
            <input type="password" name='password' className="form-control" id="inputPassword" placeholder='New password' />
          </div>
        </div>
        <div className="col-md-8" id='106'>
          <label for="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-md-10">
            <input type="password" name='confirm_password' className="form-control" id="inputPassword" placeholder='Confirm password' />
          </div>
        </div>
        <h6>Date of birth</h6>
        <div className="btn-group">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Date
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">3</a></li>
            <li><a class="dropdown-item" href="#">4</a></li>
            <li><a class="dropdown-item" href="#">5</a></li>
            <li><a class="dropdown-item" href="#">6</a></li>
            <li><a class="dropdown-item" href="#">7</a></li>
            <li><a class="dropdown-item" href="#">8</a></li>
            <li><a class="dropdown-item" href="#">9</a></li>
            <li><a class="dropdown-item" href="#">10</a></li>
            <li><a class="dropdown-item" href="#">11</a></li>
            <li><a class="dropdown-item" href="#">12</a></li>
            <li><a class="dropdown-item" href="#">13</a></li>
            <li><a class="dropdown-item" href="#">14</a></li>
            <li><a class="dropdown-item" href="#">15</a></li>
            <li><a class="dropdown-item" href="#">16</a></li>
            <li><a class="dropdown-item" href="#">17</a></li>
            <li><a class="dropdown-item" href="#">18</a></li>
            <li><a class="dropdown-item" href="#">19</a></li>
            <li><a class="dropdown-item" href="#">20</a></li>
            <li><a class="dropdown-item" href="#">21</a></li>
            <li><a class="dropdown-item" href="#">22</a></li>
            <li><a class="dropdown-item" href="#">23</a></li>
            <li><a class="dropdown-item" href="#">24</a></li>
            <li><a class="dropdown-item" href="#">25</a></li>
            <li><a class="dropdown-item" href="#">26</a></li>
            <li><a class="dropdown-item" href="#">27</a></li>
            <li><a class="dropdown-item" href="#">28</a></li>
            <li><a class="dropdown-item" href="#">29</a></li>
            <li><a class="dropdown-item" href="#">30</a></li>
            <li><a class="dropdown-item" href="#">31</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Month
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Jan</a></li>
            <li><a class="dropdown-item" href="#">Feb</a></li>
            <li><a class="dropdown-item" href="#">Mar</a></li>
            <li><a class="dropdown-item" href="#">Apr</a></li>
            <li><a class="dropdown-item" href="#">May</a></li>
            <li><a class="dropdown-item" href="#">Jun</a></li>
            <li><a class="dropdown-item" href="#">Jul</a></li>
            <li><a class="dropdown-item" href="#">Aug</a></li>
            <li><a class="dropdown-item" href="#">Sep</a></li>
            <li><a class="dropdown-item" href="#">Oct</a></li>
            <li><a class="dropdown-item" href="#">Nov</a></li>
            <li><a class="dropdown-item" href="#">Dec</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Year
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">2023</a></li>
            <li><a class="dropdown-item" href="#">2022</a></li>
            <li><a class="dropdown-item" href="#">2021</a></li>
            <li><a class="dropdown-item" href="#">2020</a></li>
            <li><a class="dropdown-item" href="#">2019</a></li>
            <li><a class="dropdown-item" href="#">2018</a></li>
            <li><a class="dropdown-item" href="#">2017</a></li>
            <li><a class="dropdown-item" href="#">2016</a></li>
            <li><a class="dropdown-item" href="#">2015</a></li>
            <li><a class="dropdown-item" href="#">2014</a></li>
            <li><a class="dropdown-item" href="#">2013</a></li>
            <li><a class="dropdown-item" href="#">2012</a></li>
            <li><a class="dropdown-item" href="#">2011</a></li>
            <li><a class="dropdown-item" href="#">2010</a></li>
            <li><a class="dropdown-item" href="#">2009</a></li>
            <li><a class="dropdown-item" href="#">2008</a></li>
            <li><a class="dropdown-item" href="#">2007</a></li>
            <li><a class="dropdown-item" href="#">2006</a></li>
            <li><a class="dropdown-item" href="#">2005</a></li>
            <li><a class="dropdown-item" href="#">2004</a></li>
            <li><a class="dropdown-item" href="#">2003</a></li>
            <li><a class="dropdown-item" href="#">2002</a></li>
            <li><a class="dropdown-item" href="#">2001</a></li>
            <li><a class="dropdown-item" href="#">2000</a></li>
            <li><a class="dropdown-item" href="#">1999</a></li>
            <li><a class="dropdown-item" href="#">1998</a></li>
            <li><a class="dropdown-item" href="#">1997</a></li>
            <li><a class="dropdown-item" href="#">1996</a></li>
            <li><a class="dropdown-item" href="#">1995</a></li>
          </ul>
        </div>
        <h6>Gender</h6>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <br />
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <br />

        <div className="col-12">
          <button class="btn btn-primary" type="submit">Signup</button>
        </div>
      </div>

    </>
  )
}
export default Signup;