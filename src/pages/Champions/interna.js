import React, {Component} from 'react';
import Container from '../../Components/Container'
import { ChampionsInternaBar } from './styleInterna'
import { useState } from 'react';
import apidragon from '../../services/api_dragon'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Champion = props => {
    const [value, setValue] = useState(0);
    const onChange = value => {
        setValue(value);
    }

    const champion = Object.values(props.champions);
    const images = champion[0].skins.map((e, i) => { 
        return(
            <div key={i}>
                <img src={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+champion[0].id+'_'+e.num+'.jpg'}></img>
            </div>
        );
    });
    
    return(
        <>           
        
            <div class="champion-title">
                <h1>{champion[0].name}</h1>
            </div>
            <Carousel
                showStatus={false}
                autoPlay={true}
                interval={6000}
            >
                {images}
            </Carousel>
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
            <ChampionsInternaBar>
                <Container className="container">  
                    <Champion champions = { champions } />
                </Container>
            </ChampionsInternaBar>
        );
    }

}

export default ChampionsInterna;