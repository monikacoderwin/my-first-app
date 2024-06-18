import { FirstName } from "./Allhooks";


const CompB=()=>{
    return(<>
    <FirstName.consumer>{(fname)=>{
        return <h1>My name is {fname}</h1>
    }
        }

    </FirstName.consumer>
 
    </>)
}
export default CompB;