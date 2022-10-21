import { useState } from "react";
import './Form.css';

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");



    //error states with empty obj
    const [nameError,setNameError] = useState({});
    const [emailError,setEmailError] = useState({});
    const onSubmit=(e)=>{
      e.preventDefault();
      const isValid = formValidation();
    }
      const formValidation = () =>{
          const nameError = {};
          const emailError = {};
          let isValid = true;  //flag

          if(name.trim().length <5){
            nameError.nameShort="Name is Too Short";
            isValid = false;
          }
          if(email!="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"){
            nameError.nameShort="Invalid Email format";
            isValid = false;
          }
          setNameError(nameError);//update error obj
          return isValid;
          setEmailError(emailError);//update error obj
          return isValid;
      }
    

    return (
      <div className="back">
          <h1>QUICK CONTACT</h1>
      <form onSubmit={onSubmit}>
      
        
        <input type="text" class="form-control" id="exampleFormControlInput1" 
        value={name} 
        onChange={(e)=>{setName(e.target.value)}}
        placeholder="NAME:" />
        
        {Object.keys(nameError).map((key)=>{
          return <div style={{color:"red", marginRight:"65em"}}>{nameError[key]}</div>
        })}
        <br></br>

        <input type="email" class="form-control" id="exampleFormControlInput1" 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="EMAIL:" />
        
        {Object.keys(emailError).map((key)=>{
          return <div style={{color:"red", marginRight:"65em"}}>{emailError[key]}</div>
        })}
        <br></br>

        {/* <input type="tel" class="form-control" id="exampleFormControlInput1" 
        value={name} 
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="EMAIL:" />
        
        {Object.keys(emailError).map((key)=>{
          return <div style={{color:"red", marginRight:"65em"}}>{emailError[key]}</div>
        })}
        <br></br>
      
        <div class="form-group">
       
       <textarea  type="text" class="form-control" id="exampleFormControlTextarea1"  placeholder="MESSAGE:"rows="3" required></textarea>
     </div>
     <br></br> */}
      {/* <div class="form-group">
        
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email:"/>
        <br></br>
      </div>
      <div class="form-group">
        
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone:"/>
        <br></br>
      </div>
      
      
      <div class="form-group">
       
        <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="Message:"rows="3"></textarea>
      </div>
      <br></br> */}
      <button type="submit" ><b>SEND</b></button>
    </form>
    </div>
    );
  };
  
  export default Form;