import Home from "../../pages/home";
import Middle from "../../pages/middle";
import Navbar from "../../pages/navbar";

const Layout=({children})=> {
    return(
        <>
        <Navbar/>

      <div className="row">
        <div className="col-md-3">
          <Home/>
        </div>
        <div className="col-md-9">
        {children}
        </div>
        </div> 
        </>
    );
}
export default Layout;