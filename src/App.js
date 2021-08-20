import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
