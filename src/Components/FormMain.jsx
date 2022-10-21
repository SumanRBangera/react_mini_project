import { useState, useEffect } from "react";
import './Form.css';


const FormMain = () =>{
const initialValues = { username: "", email: "", password: "" , message: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    
    } else if (values.phone.length == 11) {
      errors.phone = "Phone Number cannot exceed more than 10 characters";
    }
    if (!values.message) {
        errors.message = "This field is required";
    }
    
    return errors;
  };

  return (
    <div className="back">
          <br></br>
          <br></br>
          <h1>QUICK CONTACT</h1>
        <br></br>
      <form onSubmit={handleSubmit}>
   
      <input type="text" class="form-control" id="exampleFormControlInput1" 
      name="username"
      placeholder="NAME:"
      value={formValues.username}
      onChange={handleChange}
    />

     <p>{formErrors.username}</p>
 
    <input
    class="form-control" id="exampleFormControlInput1" 
              type="text"
              name="email"
              placeholder="EMAIL:"
              value={formValues.email}
              onChange={handleChange}
            />
             <p>{formErrors.email}</p>
      
            <input
             class="form-control" id="exampleFormControlInput1" 
              type="phone"
              name="phone"
              placeholder="PHONE:"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p>{formErrors.phone}</p>
            
      
            <textarea type="text"name="message" class="form-control" id="exampleFormControlTextarea1"  placeholder="MESSAGE:"rows="3"
            value={formValues.message}
            onChange={handleChange}
            />

            <button type="submit" ><b>SEND</b></button>

          
      </form>
      </div>
  ); 
}

export default FormMain;