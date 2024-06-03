import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  // login: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool,
};
// ProtectedRoute

//   const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//   });

// export default connect(mapStateToProps, {login, isAuthenticated})(ProtectedRoute)
export default ProtectedRoute;
