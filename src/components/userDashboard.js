import React, { useEffect } from "react";
import { userDashboard, specificUser } from "../actionCreators/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Dashboard({ dashboard, userDashboard, specificUser }) {
  useEffect(() => {
    userDashboard(1);
  }, []);
  return (
    <div>
      <Link
        type='button'
        className='btn btn-primary float-right mt-2'
        onClick={() => localStorage.removeItem("token")}
        to='/login'
      >
        Log Out
      </Link>
      <table className='table responsive '>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Email</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Image</th>
          </tr>
        </thead>
        <tbody>
          {dashboard &&
            dashboard.data.map((usersDetails, i) => {
              return (
                <tr key={i} onClick={() => specificUser(usersDetails.id)}>
                  <th scope='row'>{usersDetails.email}</th>
                  <td>{usersDetails.first_name}</td>
                  <td>{usersDetails.last_name}</td>
                  <td>
                    <img src={usersDetails.avatar} alt='' />
                    <br />
                    <Link
                      to={`/users/${usersDetails.id}`}
                      style={{ textDecoration: "none" }}
                      type='button'
                      className='btn btn-primary mt-1 ml-2'
                    >
                      Detail Page
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary' onClick={() => userDashboard(1)}>
          1
        </button>
        <button
          className='btn btn-primary ml-1'
          onClick={() => userDashboard(2)}
        >
          2
        </button>
      </div>
    </div>
  );
}
const stateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};
export default connect(stateToProps, { userDashboard, specificUser })(
  Dashboard
);
