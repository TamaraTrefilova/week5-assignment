import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Characters from './Characters'
import Details from './Details'
export default class Home extends React.Component {
    render() {

        const styleObj = {
            fontSize: 50,
            color: "white",
            textAlign: "center",
            paddingTop: "100px",
        }
        return (
            <div>
                <Router>
                    <li ><Link style={styleObj} to='/swapi.dev/api/people/'> Star Wars Characters</Link></li>
                    <Switch>

                        <Route exact path="/swapi.dev/api/people/" component={Characters} />
                        <Route path="/swapi.dev/api/people/:id" component={Details} />

                    </Switch>
                </Router>
            </div>
        );
    }
}