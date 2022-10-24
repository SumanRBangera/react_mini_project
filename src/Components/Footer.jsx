import React from "react";
import './Footer.css';
import img from '../Assets/footerimage.jpg';

export default function Footer()
{
    return(
        <>
        <div className="container-fluid contact">
            <div className="row">
                <div className="col col-md-4">
                    <div className="row col-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-location.png"></img>
                    </div>
                    <div className="col col-8 p" style={{marginTop:-60,marginLeft:60}}>
                        <p className="pp">NEW YORK 9870 ST <br></br>VINCENT GLASGOW</p>
                    </div>

                </div>

                <div className="col col-md-4">
                    <div className="row col-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png"></img>
                    </div>
                    <div className="col col-8 p" style={{marginTop:-60,marginLeft:60}}>
                        <p className="pp">CONTACT@DEMOLINK.ORG</p>
                    </div>

                </div>

                <div className="col col-md-4">
                    <div className="row col-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-phone.png"></img>
                    </div>
                    <div className="col col-8 p" style={{marginTop:-60,marginLeft:60}}>
                        <p className="pp">CALL US: <br></br>+1 800 603 6035</p>
                    </div>

                </div>
            </div>
        </div>
        <img src={img} id="img"/>
     </>
    )
}
