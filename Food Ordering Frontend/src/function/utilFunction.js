

export const addFood = async (name, description, price, imageUrl,foodType, resetFormFields) => {
  // Create a JSON object with the form fields
  const Data = {
    name: name,
    description: description,
    price: price,
    imageUrl: imageUrl,
    foodType:foodType
  };

  try {
    const response = await fetch('http://localhost:8080/add-food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(Data)  
    });

    if (response.ok) {
      alert('Food item added successfully!');
      resetFormFields(); // Reset form fields on success
    } 
  } catch (error) {
    console.error('Error:', error);
    alert('Error adding food item.');
  }
};



   export const getFoods = async (e)=>{

    try{
        const response = await fetch("http://localhost:8080/food");
       
        if(response.ok)
        {
            
          const data = await response.json();
  
          return data;
        }

        
    }
    catch(e)
    {
        alert("Internal error...")
    }

  };



  