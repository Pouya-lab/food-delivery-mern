import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

function Add({url}) {

 
  const [ image , setImage ] = useState( false )
  // state below for storing the first give data from user and saving them as state
  const [ data , setData ] = useState({
    name : "" ,
    description : "",
    price : "" ,
    category : "Salad"
  })

  // this function is to check whether the input is being changed or not to get it and then store it in the data state 
  const onChangeHandler = ( event ) => {
    const name = event.target.name;
    const value = event.target.value;
    setData( data => ({...data , [name] : value }))
  }

  useEffect(() => {
    console.log(data);
  }, [data])
  

  const onSubmitHandler = async (event) =>{
    // prevent the page from refreshing
      event.preventDefault();
      const formData = new FormData();
      formData.append( "name" , data.name )
      formData.append( "description" , data.description )
      formData.append( "price" , Number(data.price))
      formData.append( "category" , data.category )
      formData.append( "image" , image )
      // the place to connect to the backend
      const response = await axios.post(`${url}/api/food/add` , formData);
      if(response.data.success){
        setData({
          name : "" ,
          description : "",
          price : "" ,
          category : "Salad"
        })
        setImage(false)
        toast.success(response.data.message)
        
      }
      else{
        toast.error(response.data.message)
      }


      
};

  
 
  return (
    <div className="add">
      <form className="flex-col" onSubmit={ onSubmitHandler } >
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            {/* condition below checks whether if any img is being selected to show or not  */}
            <img src={image ? URL.createObjectURL(image) :assets.upload_area } alt="" />
          </label>
          <input onChange={ (e)=> setImage(e.target.files[0]) } type="file" id="image" hidden required />
        </div>
        <div className="add-produckt-name flex-col">
          <p>Product Name</p>
          <input onChange={ onChangeHandler } value={ data.name } type="text" name="name" placeholder="Type Here" />
        </div>
        <div className="add-produckt-description flex-col">
            <p>Produckt Description</p>
            <textarea onChange={ onChangeHandler } value={ data.description } name="description" id="" rows="6" placeholder="Write Here" required />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={ onChangeHandler } name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Nodles">Nodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={ onChangeHandler }  value={ data.price } type="number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default Add;
