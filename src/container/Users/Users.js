import React, { useState} from "react";

import "./Users.css";
import AddUsers from "../../components/AddUsers/AddUsers";
import EditUsers from "../../components/EditUsers/EditUsers";
import DisplayUsers from "../../components/DisplayUser/DisplayUser";

const Users = () => {

  const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false);

  // Add user
  const onAddUserHandler = user => {
		setUsers(prevUsers => [
      ...prevUsers,
      {id: Math.random().toString(), ...user}
    ])
    setEditing(false);
  }
  
  // Delete User
  const deleteUserHandler = (userId) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== userId))
  }

  // Update user when in edit mode
  const updateUserHandler = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (
      user.id === id ? updateUser : user
    )))
  }

  // Edit User
  const editUserHandler = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <section className="user-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            {editing ? (
              <React.Fragment>
                <EditUsers editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUserHandler} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <AddUsers onAddUser={onAddUserHandler} />
              </React.Fragment>
            )}
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <DisplayUsers
              users={users}
              onDeleteUser={deleteUserHandler}
              editUser={editUserHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
