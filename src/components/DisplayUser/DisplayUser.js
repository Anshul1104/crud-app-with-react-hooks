import React from "react";

const DisplayUsers = React.memo((props) => {
  
  return (
    <React.Fragment>
      <h2>View Users</h2>
      {/* If you want to display data in a list */}
      {/* <ul>
        { props.users.map(user => (
          <li key={user.id}>
            <span>User: {user.name} </span>
            <span>Username: {user.username}</span>
            <button className="btn btn-dark" onClick={() => props.onDeleteUser(user.id)}>Delete User</button>
            <button className="btn btn-primary ml-2" onClick={() => props.editUser(user)}>Edit User</button>
          </li>
        )) }
      </ul> */}
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>User</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
      { props.users.map(user => (
        <tbody key={user.id}>
          <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="btn btn-primary mr-3 mb-sm-0 mb-3" onClick={() => props.editUser(user)}>Edit User</button>
              <button className="btn btn-dark" onClick={() => props.onDeleteUser(user.id)}>Delete User</button>
            </td>
          </tr>
        </tbody>
      ))}
      </table>
    </React.Fragment>
  );
});

export default DisplayUsers;
