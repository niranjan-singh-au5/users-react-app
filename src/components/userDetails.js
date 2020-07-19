import React, { useEffect } from "react";
import { connect } from "react-redux";
import { specificUser } from "../actionCreators/action";
function UserDetails(props) {
  let { user, specificUser } = props;
  useEffect(() => {
    specificUser(props.match.params.id);
  }, []);
  return (
    <div
      className='col-md-4 offset-md-4 text-center mt-5 p-4'
      style={{ backgroundColor: "#E4F3F7" }}
    >
      {user && (
        <>
          <img src={user.avatar} alt='' className='rounded-circle' />
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <div className='d-flex justify-content-around ml-5'>
            <span>
              <i className='fa fa-phone' area-hidden='true'></i> +1789904878
              {props.match.params.id}
            </span>
            <p>
              <i className='fa fa-envelope' area-hidden='true'></i> {user.email}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
const stateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(stateToProps, { specificUser })(UserDetails);
