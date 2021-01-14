import styled from 'styled-components';

export const ChampionsInternaBar = styled.div`
  padding: 30px 0;
  background-color: #0E152F;
  .champion-title {
    margin-bottom: 60px;
    h1 {
      text-align: center;
      font-size: 48px;
      color: #cf9c5a;
    }
  }

  .champs {
    display: flex;
    justify-content: space-evenly;
  }
    .carousel-root {
        .thumbs-wrapper {
            .thumbs {
                overflow: auto;
                display: flex;
                justify-content: center;
                ::-webkit-scrollbar {
                    width: 10px;
                }

                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                ::-webkit-scrollbar-thumb {
                    background: #cf9c5a;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }  
            }
        }
    }
`;