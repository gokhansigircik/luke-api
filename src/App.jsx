import NavBar from './components/NavBar'
import {Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import StarWars from './components/StarWars';
import Person from './components/Person';
import Planet from './components/Planet';
import "./superhero.css";

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
              <Route path=":id" element={<Person />}/>
            </Route>
            <Route path="planets" element={<Planets />}>
              <Route path=":id" element={<Planet />}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;