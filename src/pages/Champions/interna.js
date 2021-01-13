import React, {Component} from 'react';
import Container from '../../Components/Container'
import { ChampionsBar } from './styles'
import apidragon from '../../services/api_dragon'

const Champion = props => {
    const champion = Object.values(props.champions);
    const linhas = champion[0].skins.map((e, i) => {
        return(
            <div key={i}>
                <img src={'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+champion[0].id+'_'+e.num+'.jpg'}></img>
            </div>
        );
    });
    console.log(linhas)
    return(
        <>
            {linhas}
        </>
    );
}

class ChampionsInterna extends Component {
    state = {
        champions: {},
        loading: true
    }

    async componentDidMount () {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.key)
        const [champions] = await Promise.all([
          apidragon.get(`/11.1.1/data/en_US/champion/${repoName}.json`), {
            params: {
              per_page: 5,
            },
          }
        ])
        console.log(champions.data.data)
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
                    <Champion  champions = { champions } />
                </Container>
            </ChampionsBar>
        );
    }

}

export default ChampionsInterna;