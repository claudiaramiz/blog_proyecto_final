import { Route, Redirect } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PublicRoute(props) {

    const {user} = useAuth();

    if (user)
        return <Navigate to="/bloglist" />

    return (
        <Route {...props} />
    )
}