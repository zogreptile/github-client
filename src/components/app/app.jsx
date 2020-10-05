import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from 'src/pages/home';
import User from 'src/pages/user';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users/:id' component={User} />
      </Switch>
    </HashRouter >
  </Provider>
);

export default App;
