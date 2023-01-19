import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Person() {
  const { id } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="card">
      {people && (
        <div className="card-body">
          <h1>{people.name}</h1>
          <h3>{people.height}</h3>
          <h3>{people.mass}</h3>
          <h3>{people.hairColor}</h3>
          <h3>{people.skinColor}</h3>
        </div>
      )}
    </div>
  );
}

export default Person;
