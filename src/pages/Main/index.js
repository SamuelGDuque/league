import React, {Component} from 'react';
import Search  from '../../Components/Search';
import Champions from './Champions';

export default class Main extends Component {

  render(){
    return (
      <>
        <Search></Search>
        <Champions></Champions>
      </>
    )
  }
}

