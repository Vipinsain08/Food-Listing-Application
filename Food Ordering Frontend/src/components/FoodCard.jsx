import React, { useState } from 'react'
import styled from 'styled-components'
import { addFood } from '../function/utilFunction';



const FoodCard = ({addNewCard}) => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [foodType, setFoodType]= useState("");


  

   const  resetFormFields= ()=>{

      setName('');
      setDescription('');
      setPrice('');
      setImageUrl('')
      setFoodType('')

    }
    const handleSubmit = async (e)=>{

      e.preventDefault();
      await addFood(name,description,price,imageUrl,foodType,resetFormFields);       

      addNewCard();

    };


  return (

    <Overlay>
    
    <Card>

      <Title>Add New Food</Title>
      
      <Form  onSubmit={handleSubmit}>

      <Label>Name</Label>
        <Input 
          type="text" 
          value={(name)}
          onChange={(e) => setName(e.target.value)}
        />


      <Label>Description</Label>
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      
      />


      <Label>Price</Label>
        <Input 
          type="text" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Label>Food Type</Label>
        <Input 
          type="text" 
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />


        <Label>ImageUrl</Label>
        <Input 
          type="text" 
          value={imageUrl}
          onChange={(e)=> setImageUrl(e.target.value)}
        />
 
     

        <Button type="submit" >Submit</Button>


            
      </Form>

    </Card>
  </Overlay>
       
  )
}

export default FoodCard


const Overlay = styled.div`

  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 3;

`;


const Card = styled.div`

  width: 400px;
  margin:  auto;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 24px;
  z-index: 4;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;


const Form = styled.form`

  display: flex;
  flex-direction: column;

`;


const Label = styled.label`

  font-size: 14px;
  font-weight: medium;
  margin-bottom: 8px;
  color: #666;
`;


const Input = styled.input`

  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4f46e5;
  }


`;


const TextArea = styled.textarea`

  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4f46e5;
  }


`;


const ImagePreview = styled.img`
  margin-top: 8px;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #4f46e5;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #4338ca;
  }
`;