import React, { useState, useEffect } from 'react';

function RegistrationForm({formValue, addUserDetails, handleUpdateUser}) {
    
    const [registrationDetails,setRegistrationDetails] = useState(formValue)

    function handleChange(event) {
        const {name,value} = event.target;

        setRegistrationDetails ((prevValue) => {
            return {...prevValue, [name]:value};

        })
    }
      function submitForm (event) {
         if(formValue.update){
          event.preventDefault();
        
          handleUpdateUser(registrationDetails)
          setRegistrationDetails({firstName:"",lastName:"",email:"",mobileNumber:""});
         }else {
          event.preventDefault();
          addUserDetails(registrationDetails);
          setRegistrationDetails({firstName:"",lastName:"",email:"",mobileNumber:""});
         }
     

      }


      
      useEffect(()=> {
        setRegistrationDetails(formValue)
      },[formValue])
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