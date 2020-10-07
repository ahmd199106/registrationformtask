import React, {useState} from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm.js'
import RegisteredUsersList from './components/RegisteredUsersList.js'


  function App() {

    const [usersList,setUsersList] = useState([]);
    const [formValue, setFormValue] = useState({firstName:"", lastName:"",email:"",mobileNumber:""})
 

    // simply add the new user to the userList Array
    const addUserDetails = (registrationDetails) => {
      setUsersList(prevValue =>  ([...prevValue,registrationDetails]))
    }

    // got call
    // function to delete the user from userList
     const deleteUserList = (index)=> {  
       setUsersList(prevValue =>  prevValue.filter((userList,ind) =>  ind !== index ) )
      }
       
   

    // this function updates the state of formField (formValue)
    const handleformValue = (data, index) => {
      setFormValue({...data, update:true, indx:index})
      }

    // this function first delete old user delete then add that array to the userlist
    //then add updated user details that passed from the form field
    const handleUpdateUser = (data) => {
      const filterOldrow = usersList.filter((row, index)=> index !== data.indx )
      setUsersList(prevValue =>  ([...filterOldrow,data]))
    }
  
        return (
          <div className="App">
            <h1>Registration Form task</h1>
                 <RegistrationForm addUserDetails={addUserDetails} 
                 formValue={formValue} handleUpdateUser={handleUpdateUser} />
                 <RegisteredUsersList registereduserlist={usersList} 
                 handleformValue={handleformValue} handleFormChange={setFormValue} 
                 deleteUserList={deleteUserList} />
          </div>
        )
    }

export default App;
