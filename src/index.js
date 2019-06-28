import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./home.js"
import {BrowserRouter,Route, Switch} from "react-router-dom";
import NavbarPage from "./navBar.js";
import Profil from "./profil.js"
import Search from "./search.js"
import * as serviceWorker from './serviceWorker';



function App (){
    return(
    <BrowserRouter>  
    <NavbarPage/>
    <Switch>
    <Route path="/"  exact component={Home}/>
    <Route path="/profil"  component={Profil}/>
    <Route path="/search"  component={Search}/>
    </Switch>
    </BrowserRouter>
        
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
