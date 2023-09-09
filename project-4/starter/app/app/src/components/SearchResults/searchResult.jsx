import React from 'react'
import styled from 'styled-components';
import {BASE_URL , Button , Container} from "../../App";


const searchResult = ({data}) => {
  return (
    <FoodCardContainer>
        <Container>
    <FoodCards>
      {data?.map(({name , image , text , price}) => (
        <FoodCard key={name}>
          {/* {food.text} */}
            <div className='food_image'>
                <img src={ BASE_URL + image} />
            </div>

            <div className="foodInfo">
                 <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                 </div>

                <Button>${price.toFixed(2)}</Button>

            </div>

        </FoodCard>
      ))}
    </FoodCards>
    </Container>
  </FoodCardContainer>
);
};

export default searchResult

const FoodCardContainer = styled.section`
background-image : url("./public/images/bg.png");
background-size : cover;
min-height: calc(100vh - 210px);
`;

const FoodCards = styled.div`
 display : flex;
 flex-wrap : wrap;
 row-gap: 32px;
 column-gap: 20px; 
 justify-content: center;
 aligin-iten: center;
 padding-top:80px;
`;

const FoodCard = styled.div`

width: 346px;
 height: 167px;
 border: 0.66px solid;

border: 0.88px solid;

border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #eabfff 0%, rgba(235, 175, 255, 0) 0%, rgba(135, 38, 183, 0) 100%);

radial-gradient(
    86.38% 222.5% at -13.75% -12.36%,
    #98f9ff 0%,
    rgba(152, 249, 255, 1),
    rgba(255, 255, 6, 1)
  )
background: url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.23) 27.08%, rgba(0, 0, 0, 0.15));
background-blend-mode: overlay, normal;
-webkit-backdrop-filter: blur(13.184px);
border-radius: 19.4467px;

display : flex;
padding : 8px;

.foodInfo{
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: end;

    h3 {
        margin-top: 8px; 
        font-size: 16px; 
        font-weight: 500;
}

p{
    margin-top: 4px;
     font-size: 12px;
}

button{
    font-size: 12px;
}



`;