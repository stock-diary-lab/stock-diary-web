import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '@utils/auth';
import { useGetUserQuery } from '@stores/user';

type RoutePageComponent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

interface Props extends RouteProps {
  component: RoutePageComponent;
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  const { isError } = useGetUserQuery({});

  return (
    <Route
      {...rest}
      render={(props) => (isLogin() && !isError ? <Component {...props} /> : <Redirect to="/signin" />)}
    />
  );
}

export default PrivateRoute;
