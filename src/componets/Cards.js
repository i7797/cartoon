const Cards = ({
    img,
    name,
    title,
          }) => {
    return (

        <div className="card-container">
            <div class="card">
         <img className='img' src={img} alt="Avatar" />
        <div class="container">
           <h4><b className='word'>{name}</b></h4>
            <p className='word'>{title}</p>
         </div>
        
      </div>
    
  
     
   
        </div>

        
      );
}
 
export default Cards;