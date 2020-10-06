import React, {useState} from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm.js'
import RegisteredUsersList from './components/RegisteredUsersList.js'


  function App() {

    const [usersList,setUsersList] = useState([]);

    function addUserDetails (newUserDetails) {
      setUsersList(prevValue => {
        return [...prevValue,newUserDetails]
      })
      }
    // Always do arrow function, its a good practice
     const deleteUserList = (id)=> {  
      setUsersList(prevValue =>  prevValue.filter((userList,index) =>  index !== id ) )
  //  setUsersList(usersList.filter((user, index)=> index !== id ))
    }
       
    const editUserList = (newEditedUserDetails) => {
      const editedDetail = setUsersList(newEditedUserDetails) 
      console.log(editedDetail)
      //=> {
      //   return [...prevValue.v = newEditedUserDetails   
      // })

    }

        return (
          <div className="App">
            <h1>Registration Form task</h1>
          <RegistrationForm addUserDetails={addUserDetails} />
          { usersList.map((userList,index) => {return <RegisteredUsersList key={index} id={index}
          onEdit={editUserList} onDelete={deleteUserList}  firstName={userList.firstName} lastName={userList.lastName} 
          email={userList.email} mobileNumber={userList.mobileNumber} /> } 
          )}
          
          </div>
        )
    }

export default App;
