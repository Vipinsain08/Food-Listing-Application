import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FoodCard from './FoodCard';
import { getFoods } from '../function/utilFunction';

const Home = () => {
    const [newCard, setNewCard] = useState(false);
    const [allFood, setAllFood] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(false);
    
    const [filteredData,setFilteredData]= useState(null)

    const [selectedBtn, setSelectedBtn] = useState("all")
    
    
    function addNewCard() {
        setNewCard((prev) => !prev);
        setRefreshTrigger((prev) => !prev);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const data = await getFoods();
                setAllFood(data);
                setFilteredData(data)
            } catch (error) {
                alert('Error in fetching the data...');
            }
        };

        fetchData();
    }, [refreshTrigger]);


    const searchFood= (e)=>{
        const searchValue = e.target.value;
       
        if(searchValue==="")
        {
            setFilteredData(null);
        }

        const filter = allFood?.filter((food)=>food.foodName.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredData(filter);
    }


    const categorizeFood = (type)=>{

        if(type==="all")
        {
            setFilteredData(allFood);
            setSelectedBtn("all")
            return;
        }

        const filter = allFood?.filter((food)=>food.foodType.toLowerCase().includes(type.toLowerCase()));
        
            setFilteredData(filter)
            setSelectedBtn(type)

    }


    return (
        <Container>
            <TopSection>
                <div className="logo"></div>

                <div className="search">

                    <input  onChange={searchFood}  placeholder="Search Food" />
                    
                </div>

            </TopSection>

            <FilterContainer>
                <FilterBar>
                    <Button onClick={()=>categorizeFood("all")}>All</Button>
                    <Button  onClick={()=>categorizeFood("breakfast")} >BreakFast</Button>
                    <Button  onClick={()=>categorizeFood("lunch") }>Lunch</Button>
                    <Button  onClick={()=>categorizeFood("dinner")}>Dinner</Button>
                </FilterBar>

                <Button onClick={addNewCard}>Add +</Button>
            </FilterContainer>

            {newCard && <FoodCard addNewCard={addNewCard} />}

            <FoodList>
                {filteredData && filteredData.length > 0 ? (
                    filteredData.map((food, index) => (
                        <FoodItem key={index}>

                            <ImgContainer>
                                <img src={food.imageUrl} alt="Food Image"/>
                            </ImgContainer>
                           

                            <div className="content">
                                <h3>{food.foodName}</h3>
                                <p>{food.description}</p>
                                <Button>{food.price}.00 Rs</Button>
                            </div>
                        </FoodItem>
                    ))
                ) : (
                    <p>No food items available</p>
                )}
            </FoodList>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
`;

const TopSection = styled.section`
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo {
        background-image: url('/images/logo_3.png');
        background-size: cover;
        height: 240px;
        width: 240px;
    }

    .search {
        
        input {
            background-color: transparent;
            border: 1px solid #fea82f;
            color: white;
            border-radius: 5px;
            height: 40px;
            font-size: 16px;
            padding: 0 10px;
            &::placeholder {
                color: white;
            }
        }
    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;
`;

const FilterBar = styled.div`
    display: flex;
    gap: 12px;
`;

const Button = styled.button`
    background: ${({ isSelected }) => (isSelected ? '#f48b23' : '#fea82f')};
    outline: 1px solid ${({ isSelected }) => (isSelected ? 'white' : '#fea82f')};
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #f48b23;
    }
`;





const FoodList = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const FoodItem = styled.div`

     width: 400px;
  
    border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;
  gap:10px;
  
   

    h3 {
        margin: 0;
        font-size: 20px;
    }

    p {
        margin: 10px 0;
    }

    

    
`;


const ImgContainer = styled.div`

        img{
            height: 150px;
             width: 150px;
             border-radius: 50%;
             object-fit: cover;
        }
`;