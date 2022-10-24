import './Info.css';
import main from '../Assets/main1.jpg';
import c from '../Assets/carouselsmall.jpg'

const Info = () => {
    return ( 
<>
        <img style={{height:"390px",width:"1280px"}} src={main} />
        <img style={{height:"100px",width:"1265px"}} src={c}/>
        </>
        // <div className="row">
        //     <div className="col col-6" id="col1">
        //         <p className="h1" style={{color:"white"}}>Fresh Investment</p>
        //         {/* <p  className="h1" style={{color:"white"}}>Fresh Investment</p>
        //         <p  className="h1" style={{color:"white"}}>Solutions!</p> */}
        //     </div>
        //     <div className="col col-6" id="col2">
        //     <h1 className="h2" style={{color:"white"}}>Learning to Save </h1>
        //     <h1  className="h2" style={{color:"white"}}>Money</h1>
        //     </div>
        // </div>
     );
}
 
export default Info;