import React from 'react';


function RegisteredUsersList ({registereduserlist, deleteUserList, handleformValue}) {
  
    function handleDeleteUserList(index) {
        deleteUserList(index);
    }

    function handleEditUserList(editdata, index) {
        handleformValue(editdata, index)
    };


//

    return <>
     {registereduserlist.map((row, index)=> (
         <div className="registered-users-list">
         <span>{row.firstName}</span>
         <span>{row.lastName}</span>
         <span>{row.email}</span>
         <span>{row.mobileNumber}</span>   
         <button onClick={()=>handleDeleteUserList(index)} >delete</button>   
         <button onClick={()=>handleEditUserList(row, index)} >edit</button>
     </div>
     ))}
    </>


    
}

export default RegisteredUsersList;