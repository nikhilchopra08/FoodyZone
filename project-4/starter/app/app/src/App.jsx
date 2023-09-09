
import styled from 'styled-components';

function App() {

  return (

    // <div>hi</div>
    <MainContainer>
      <TopContainer>
        <div className='logo'>
          <img src='./images/logo.svg' alt='Logo' />
        </div>

        <div className='Search'>
          <input placeholder='Search Food' />
        </div>
      </TopContainer>
    </MainContainer>
  );
}

export default App;


const MainContainer = styled.div`
background-color: #323334`;
const TopContainer = styled.section``;