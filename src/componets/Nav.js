import { useState } from "react";


 const Nav = () => {

    const [text,setText]=useState('');
    console.log(text);
    return ( 
    <div><nav className='nav-container'>
    <input type="text" placeholder="enter your type"
     style={{width:"600px" ,height:"40px", borderRadius:"9px"}} 
     onChange={(e)=>setText(e.target.value)}

    />
    

    <a href='#'>Home</a>
    <a href='#'>Main</a>
    <a href='#'>Hello</a>
     </nav>
   
     <p className="p-text">{text !=''? text:'pls enter'}</p>
     </div>
        
     );
}
 
export default Nav;