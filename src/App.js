import Cards from './componets/Cards';
import Nav from './componets/Nav';
import Hero from './componets/Hero';
import './App.css';
import './assets/in-love.png'

function App() {
 return (
   <div className='App'>
     
      <Nav/>
      <Hero/>
      <div className='decor-cards' >
      <Cards img ={'https://resizing.flixster.com/BBUvW9_bOqIWoVtdBtJtUWg8iO4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk1OWEyYjY2LTE1N2YtNGFlZS04NzhjLTRiMzlkY2M5MWRjZS53ZWJw '} 
       name={'Anstasia'} title ={'ans'} />
      <Cards  img ={'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg '} 
       name={'Naroto'} title ={'naroto'} />
      <Cards  img ={'https://i.pinimg.com/originals/8a/f6/d9/8af6d998175fff4072ae468bbb4d7a2a.jpg'} 
       name={'SlamDunk'} title ={'slamdunk'} />
        <Cards  img ={'https://m.media-amazon.com/images/M/MV5BODkxNGQ1NWYtNzg0Ny00Yjg3LThmZTItMjE2YjhmZTQ0ODY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg'} 
       name={'Mulan'} title ={'Mulan'} />
          <Cards  img ={'https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg'} 
       name={'rapunzel'} title ={'rapunzel'} />
          <Cards  img ={'https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_799_v3_f9abb2f3.jpeg?region=0%2C0%2C540%2C810'} 
       name={'Wish'} title ={'Wish'} />
      </div>
      
  </div>
 ); 
}

export default App;
