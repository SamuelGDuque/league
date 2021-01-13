import React, {Component} from 'react';
import Container from '../Container'
import { Bar } from './styles';

class Header extends Component {

    render() {
        return (
            <Bar>
                <div className="container">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} />
                    <div className="menu">
                        <ul>
                            <li> Home </li>
                            <li> <a href="/champions"> Campeões </a> </li>
                        </ul>
                    </div>
                </div>
            </Bar>
        );
    }

}

export default Header;