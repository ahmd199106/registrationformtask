import React, { useState } from 'react';

function RegistrationForm(props) {
    
    const [registrationDetails,setRegistrationDetails] = useState({firstName:"",lastName:"",email:"",mobileNumber:""})

    function handleChange(event) {
        const {name,value} = event.target;

        setRegistrationDetails ((prevValue) => {
            return {...prevValue, [name]:value};

        })
    }
      function submitForm (event) {
          event.preventDefault();
          props.addUserDetails(registrationDetails);


      }

    return <div>
            <form className = "registration-Form">
            <input 
            name="firstName" placeholder="First Name" value={registrationDetails.firstName} 
            onChange={handleChange} />
            <input 
            name="lastName" placeholder="last Name" value={registrationDetails.lastName} 
            onChange={handleChange} />
            <input 
            name="email" placeholder="email" value={registrationDetails.email} 
            onChange={handleChange} />
            <input
             name="mobileNumber" placeholder="mobile Number" value={registrationDetails.mobileNumber}
             onChange={handleChange}  />
            <button onClick={submitForm}>Register</button>
        </form>




        </div>
    }

export default RegistrationForm;