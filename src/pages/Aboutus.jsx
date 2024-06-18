import { AiOutlineCamera } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";

  
 function Aboutus() {
    return (
      <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
       <img src="coverimage.avif" class="img-fluid" alt="cover pic">
       <button type="button" className="btn btn-outline-primary"><AiOutlineCamera/> Remove cover photo</button>
       <button type="button" className="btn btn-outline-primary"><MdEditSquare/> Edit cover photo </button>
        </img>
      </div>
      </div>
      </div>
      </>
    );
  }
  export default Aboutus;