import React from 'react'
import styled from 'styled-components';


const searchResult = ({data}) => {
  return (
    <FoodCardContainer>
    <FoodCards>
      {data?.map((food) => (
        <FoodCard key={food.name}>
          {/* {food.text} */}
        </FoodCard>
      ))}
    </FoodCards>
  </FoodCardContainer>
);
};

export default searchResult

const FoodCardContainer = styled.section`
background-image : url("./public/images/bg.png");
background-size : cover;
height: calc(100vh - 210px);
`;

const FoodCards = styled.div``;

const FoodCard = styled.div``;