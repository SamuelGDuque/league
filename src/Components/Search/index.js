import React, {Component} from 'react';
import Container from '../Container'
import { SearchBar } from './styles';

class Search extends Component {

    render() {
        return (
            <SearchBar>
                <Container className="container">
                    <input
                        type ="text"
                        placeholder="Buscar Campeão"
                    />
                </Container>
            </SearchBar>
        );
    }

}

export default Search;