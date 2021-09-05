import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import SignIn from './pages/SignIn';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <div style={{ height: '80vh' }}>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/diary">
            <Diary />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div style={{ width: '100%', margin: '0 auto' }}>
        <nav style={{ margin: '0 auto', width: '50%' }}>
          <ul
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/diary">Diary</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/mypage">My Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
