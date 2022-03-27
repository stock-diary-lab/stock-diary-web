import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '@utils/auth';
import { useGetUserQuery } from '@stores/user';

type RoutePageComponent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

interface Props extends RouteProps {
  component: RoutePageComponent;
  restricted: boolean;
}

function PublicRoute({ component: Component, restricted, ...rest }: Props) {
  const { isError } = useGetUserQuery({});

  return (
    <Route
      {...rest}
      render={(props) => (isLogin() && !isError && restricted ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
}

export default PublicRoute;
