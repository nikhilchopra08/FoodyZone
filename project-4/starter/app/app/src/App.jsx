
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

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>
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

const FilterContainer = styled.section`
display : flex;
justify-content : center;
gap : 12px;
padding-bottom : 40px
`;

const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

const FoodCardContainer = styled.section`
background-image : url("./public/images/bg.png");
background-size : cover;
height: calc(100vh - 210px);
`;

const FoodCards = styled.div``;