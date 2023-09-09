
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from "./components/SearchResults/searchResult.jsx";




export const BASE_URL = "http://localhost:9000";


function App() {

  const [data,setData] = useState(null);

  const [loading , setloading] = useState(false);

  const [error , setError] = useState(null);

  const [filteredData , setfilteredData] = useState(null);

  const [selectedBtn , setSelectedBtn] = useState("all");


  useEffect(() => {
    

  const FetchFoodData = async() => {

    setloading(true);
try{
    const response = await fetch(BASE_URL);

    const json = await response.json();
    

    setData(json);
  setloading(false);
  setfilteredData(json)

}
  catch(error){
    setError("unable to fetch data");

  }
    // console.log(json);

  };
      FetchFoodData();
}, []);
  // FetchFoodData();

  // console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue)

    if (searchValue === "") {
      setfilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setfilteredData(filter);
  };






   const filteredFood = (type) =>{
if(type == "all"){
  setfilteredData(data);
  setselectedBtn("all");
  return;
}

const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setfilteredData(filter);
setSelectedBtn('type');

   };

   const filterBtns = [{
    name: "ALL",
    type: "all"},
    {
      name: "Breakfast",
      type: "breakfast"},
      {
        name: "Lunch",
        type: "lunch"},
        {
          name: "Dinner",
          type: "dinner"},
   ]


  //   const SearchValue = e.target.value;

  //   console.log(SearchValue);

  //   if(SearchValue==""){
  //     setfilteredData(null);
  //   }

  //   const filter = data?.filter((food) => food.name.toLowerCase().includes(SearchValue.toLowerCase()));
  //   setfilteredData(filter);
  
  //  const filteredFood = (type) =>{

  //  }

  if(error) return <div>{error}</div>
  if(loading) return <div>loading</div>

  return (
<>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src='./images/logo.svg' alt='Logo' />
        </div>

        <div className='Search'>
          <input onChange={searchFood} placeholder='Search Food' />
        </div>
      </TopContainer>

      <FilterContainer>

        {filterBtns.map((value) =>(
        <Button key={value.name} onClick={() => filteredFood(value.type)}>{value.name}</Button>))}
        
        
      </FilterContainer>

    
    </Container>

<SearchResult data={filteredData}/>

</>
  );
}

export default App;


export const Container = styled.div`
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

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

