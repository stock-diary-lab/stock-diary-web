import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '@utils/auth';

type RoutePageComponent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

interface Props extends RouteProps {
  component: RoutePageComponent;
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  return <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/signin" />)} />;
}

export default PrivateRoute;
