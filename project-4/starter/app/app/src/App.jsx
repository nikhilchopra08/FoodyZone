
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from "./components/SearchResults/searchResult.jsx";




const BASE_URL = "http://localhost:9000/"


function App() {

  const [data,setData] = useState(null);

  const [loading , setloading] = useState(false);

  const [error , setError] = useState(null)


  useEffect(() => {
    

  const FetchFoodData = async() => {

    setloading(true);
try{
    const response = await fetch(BASE_URL);

    const json = await response.json();
    

    setData(json);
  setloading(false);

}
  catch(error){
    setError("unable to fetch data");

  }
    // console.log(json);

  };
      FetchFoodData();
}, []);
  // FetchFoodData();

  console.log(data);
  

  if(error) return <div>{error}</div>
  if(loading) return <div>loading</div>

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

      <SearchResult data={data}/>
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

