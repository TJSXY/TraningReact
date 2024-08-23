import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPAge from './page/login/LoginPAge';
import MyDashborad from './page/home/Dashborad';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPAge} />
        <Route exact path='/home' component={MyDashborad} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;