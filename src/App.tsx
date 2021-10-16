import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import SignIn from './pages/SignIn';
import MyPage from './pages/MyPage';
import Settlement from './pages/Settlement';
import Settings from './pages/Settings';
import News from '@pages/News';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/diary" component={Diary} />
        <Route path="/settlement" component={Settlement} />
        <Route path="/settings" component={Settings} />
        <Route path="/news" component={News} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
