import React, {Component} from 'react';
import Container from '../../Components/Container'
import { ChampionsBar } from './styles'
import apidragon from '../../services/api_dragon'

const Champion = props => {
    const linhas = Object.keys(props.champions).map((e, i) => {
        return(
            <div key={props.champions[e].key}>
                <a href="/champions/1"> <img src={'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+props.champions[e].id+'_0.jpg'} ></img> </a>
            </div>
        );
    });
    
    const champs = [] 
    for (let index = 0; index < 3; index++) {
        let valor = Math.floor(Math.random() * (linhas.length - 1) + 1)
        champs.push(linhas[valor])
    }
    return(
        <>
            {champs}
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
            <ChampionsBar>
                <Container className="container">  
                    <div className="title">
                        <h2> Conheça mais sobre os personagens de Runeterra !</h2>
                    </div>
                    <div className="champs">
                        <Champion  champions = { champions } />
                    </div>
                </Container>
            </ChampionsBar>
        );
    }

}

export default Champions;