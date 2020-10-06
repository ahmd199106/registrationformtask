import React, { useState } from 'react';


    function EditUserlist(props) {
        const [editUserList,setEditUsersList] = useState({firstName:"",lastName:"",email:"",mobileNumber:""})

        function handleChange(event) {
            const {name,value} = event.target;

            setEditUsersList ((prevValue) => {
                return prevValue.name = value;
    
            })
        
        
        }

        function submitEdit (event) {
            event.preventDefault();
            props.editUserDetails(editUserList);
  
  
        }
 

return <div>
                  <form className = "editUserList-Form">
                    <input 
                    name="newFirstName" placeholder="First Name" value={editUserList.newFirstName} 
                    onChange={handleChange} />
                    <input 
                    name="newLastName" placeholder="last Name" value={editUserList.newLastName} 
                    onChange={handleChange} />
                    <input 
                    name="newEmail" placeholder="email" value={editUserList.newEmail} 
                    onChange={handleChange} />
                    <input
                    name="newMobileNumber" placeholder="mobile Number" value={editUserList.newMobileNumber}
                    onChange={handleChange}  />
                    <button onClick={submitEdit}>Register</button>
                  </form> 

               </div>

        }


    export default EditUserlist;