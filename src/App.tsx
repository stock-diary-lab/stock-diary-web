import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import SignIn from './pages/SignIn';
import MyPage from './pages/MyPage';
import Settlement from './pages/Settlement';
import Settings from './pages/Settings';
import News from '@pages/News';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import useKakao from './hooks/useKakao';

function App() {
  useKakao();
  return (
    <Router>
      <Switch>
        <PublicRoute path="/signin" component={SignIn} restricted={true} exact />
        <PrivateRoute path="/mypage" component={MyPage} exact />
        <PrivateRoute path="/diary" component={Diary} exact />
        <PrivateRoute path="/settlement" component={Settlement} exact />
        <PrivateRoute path="/settings" component={Settings} exact />
        <PrivateRoute path="/news" component={News} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
