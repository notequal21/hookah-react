import './App.scss';
import Login from "./components/Login/Login";
import {Redirect, Route, withRouter} from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import {state} from "./state/state";

function App() {
    state.updateCost()
    state.updateCount()
    return (
      <div>
        <Route exact path={'/'} render={() => <Redirect to={'/login'}/>}/>
        <Route path={'/login'} render={() => <Login/>}/>
        <Route path={'/catalog'} render={() => <Catalog/>}/>
        <Route path={'/cart'} render={() => <Cart/>}/>
      </div>
  );
}

export default withRouter(App);
