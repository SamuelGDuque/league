import styled from 'styled-components';

export const Bar = styled.div`
  background-color: #111111;
  padding: 15px 0px;
  img {
    width: 50px;
  }

  .container {
    display: flex;
    align-items: center;
    max-width: 85%;
    width: 100%;
    margin: auto;
  }

  .menu {
    margin-left: 30px;
    ul {
      list-style: none;
      display: flex;
      li {
        font-size: 22px;
        color: white;
        &:not(:last-child){
          margin-right: 20px;
        }
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;