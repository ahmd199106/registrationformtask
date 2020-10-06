import React from 'react';
import EditUserlist from "./EditUserList.js" ;

function RegisteredUsersList (props) {
   




    function handleDeleteUserList() {

        props.onDelete(props.id);
    }

    function handleEditUserList() {
        return <EditUserlist />
    };






return <div className="registered-users-list">


<span>{props.firstName}</span>
<span>{props.lastName}</span>
<span>{props.email}</span>
<span>{props.mobileNumber}</span>   
<button onClick={handleDeleteUserList} >delete</button>   
<button onClick={handleEditUserList} >edit</button>



    </div>
}


export default RegisteredUsersList;