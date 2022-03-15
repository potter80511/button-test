import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

import TestContainer from 'src/features/test_feature/TestContainer'
import IndexContainer from 'src/features/IndexContainer'
import 'src/scss/theme.scss';

export class AppPath {
  static get index() {
    return '/';
  }

  static get testFeature() {
    return '/test_feature';
  }
}

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
          <Link to="/">index</Link>
          <Link to="/test_feature">test feature</Link>
        </header> */}
        <Switch>
          <Route exact={true} path={AppPath.index} component={IndexContainer} />
          <Route
            exact={true}
            path={AppPath.testFeature}
            component={TestContainer}
          />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
