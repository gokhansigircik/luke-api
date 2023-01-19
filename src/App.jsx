import NavBar from './components/NavBar'
import {Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import StarWars from './StarWars';
import "./superhero.css";
import Person from './Person';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<StarWars />}> 
          {/* component up here is the parent of these 2 down below 
          thats why we remove the '/' */}
            <Route path="people" element={<People />}>
              <Route path="id" element={<Person />}/>
            </Route>
            <Route path="planets" element={<Planets />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;