import React, {Component} from 'react';
import apidragon from '../../services/api_dragon'

const Champion = props => {
    const linhas = Object.keys(props.champions).map((e, i) => {
        return(
            <div key={i}>
                <img src={'http://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/'+props.champions[e].image.full} ></img>
            </div>
        );
    });
    return(
        <>
            {linhas}
        </>
    );
}

class Champions extends Component {
    state = {
        champions: {},
        loading: true
    }

    async componentDidMount () {
        const [champions] = await Promise.all([
          apidragon.get(`/11.1.1/data/pt_BR/champion.json`), {
            params: {
              per_page: 5,
            },
          }
        ])
      
        this.setState({
          champions: champions.data.data,
          loading: false,
        })
    }

    render() {
        const { champions, loading } = this.state;
        if (loading){
          return <div>Carregando</div>
        }
        return (
            <Champion  champions = { champions } />
        );
    }

}

export default Champions;