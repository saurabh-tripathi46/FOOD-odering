const RestaurantCard = (props) =>{
    const  {avgRating, cuisines, veg, name, cloudinaryImageId} = props;
     const baseUrlForImg = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660';
    return  <div onClick = {(props)=>{
        console.log(props)
    }} className='card-container'>
         <div className='image-container'>
             <img className='img' src = {baseUrlForImg+'/'+cloudinaryImageId}>
             </img>
         </div>
         <div className='details-section'>
             <div className='res-name'>
                 {name}
             </div>
             <div>
                 {cuisines.join(', ')}
             </div>
         </div>
     </div> 
 }

 export default RestaurantCard;