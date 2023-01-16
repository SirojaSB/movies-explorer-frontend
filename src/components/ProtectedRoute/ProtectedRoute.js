import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({ Component, isLoggedIn, ...props }) => {

    return isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
