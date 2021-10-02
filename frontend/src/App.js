import "./assets/css/style.css";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Home, Watch, Login, Register } from "./pages";
import { GuestRoute, MemberRoute } from "./components";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const history = createBrowserHistory({
    baseUrl: process.env.PUBLIC_URL,
  });

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <MemberRoute exact path="/" component={Home}></MemberRoute>
            <MemberRoute exact path="/movie" component={Home}></MemberRoute>
            <MemberRoute exact path="/series" component={Home}></MemberRoute>
            <MemberRoute
              exact
              path="/watch/:id"
              component={Watch}
            ></MemberRoute>
            <GuestRoute exact path="/login" component={Login}></GuestRoute>
            <GuestRoute
              exact
              path="/register"
              component={Register}
            ></GuestRoute>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
