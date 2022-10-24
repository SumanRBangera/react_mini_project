import axios from "axios";
import { useState, useEffect } from "react";
import one from "../Assets/1.jpg";
import two from "../Assets/2.jpg";
import three from "../Assets/3.jpg";
import four from "../Assets/4.jpg";
import './Cards.css';

const Cards = () => {
  const [titles, setTitle] = useState([]);
  const [descp, setDescp] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7064/api/Cards").then((response) => {
      setTitle(response.data);
    });
  }, []);
  return (
    <>
      <br></br>
        <br></br>
        <br></br>
        <h2 style={{color:"#404b52",fontSize:"38px"}}>OUR FOCUS IS OUR CLIENTS' SUCCESS</h2>
    <br></br>
    <br></br>
      {titles.map((t) => (
        <>
          <div className="row">
            <div className="col col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={one} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{t.title}</h5>
                  <p className="card-text">{t.descr} which involves operations with client's money, preserving and increasing his state.</p>
                 
                  <a href="#" class="btn ">Read More</a>

                  
                </div>
              </div>
            </div>
            <div className="col col-3">
              <div className="col col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={two}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">TIME SAVING TIPS</h5>
                    <p className="card-text">If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income.</p>
                  

                    <a href="#" class="btn ">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-3">
              <div className="col col-3">
                <div className="col col-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={three}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">BUDGETING TIPS</h5>
                      <p className="card-text">Investment analysis and appraisal of investment projects (evaluation of ROI analysis of investment attractiveness of assets and branches)</p>
                      <a href="#" class="btn ">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-3">
              <div className="col col-3">
                <div className="col col-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={four}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">MONEY SAVING IDEAS</h5>
                      <p className="card-text">Business planning: drafting and elaboration of business plans and investment memorandums, financial modeling.</p>
                      <a href="#" class="btn ">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Cards;
