
import styled from 'styled-components';

function App() {

  return (

    // <div>hi</div>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src='./images/logo.svg' alt='Logo' />
        </div>

        <div className='Search'>
          <input placeholder='Search Food' />
        </div>
      </TopContainer>
    </Container>
  );
}

export default App;


const Container = styled.div`
    max-width: 1200px;
    margin : 0 auto;

`;
const TopContainer = styled.section`
    min-height: 140px;
    display : flex;
    justify-content: space-between;
    padding: 16px;
    align-item: center;

    .Search {
      input{
        border: 1px solid red;
        background-color : transparent;
        color : white;
        border-radius: 5px;
        height : 40px;
        font-size: 16px;
        padding : 0 10px;
      }
    }
`;