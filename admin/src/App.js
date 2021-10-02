import "./assets/css/style.css";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  Home,
  ListUser,
  User,
  CreateUser,
  ListMovie,
  Movie,
  CreateMovie,
  List,
  ListContent,
  CreateList
} from "./pages";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const history = createBrowserHistory({
    baseUrl: process.env.PUBLIC_URL,
  });

  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/users" component={ListUser}></Route>
            <Route exact path="/users/detail/:id" component={User}></Route>
            <Route exact path="/users/create" component={CreateUser}></Route>
            <Route exact path="/movie" component={ListMovie}></Route>
            <Route exact path="/list" component={List}></Route>
            <Route exact path="/list/content/:id" component={ListContent}></Route>
            <Route
              exact
              path="/movie/detail/:id"
              component={Movie}
            ></Route>
            <Route
              exact
              path="/movie/create"
              component={CreateMovie}
            ></Route>
            <Route
              exact
              path="/list/create"
              component={CreateList}
            ></Route>
            <Route
              exact
              path="/list/:id/edit"
              component={CreateList}
            ></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
