import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Person() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {person && (
        <div className="card-body">
          <h1>Person Info</h1>
          <h1>{person.name}</h1>
          <h3>{person.height}</h3>
          <h3>{person.mass}</h3>
          <h3>{person.hair_color}</h3>
          <h3>{person.skin_color}</h3>
          <h3>{person.birth_year}</h3>
          <h3>{person.gender}</h3>
        </div>
      )}
    </div>
  );
}

export default Person;
