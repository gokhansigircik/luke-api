import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Planet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState("");
  // console.log('i am here');

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {planet && (
        <div className="card-body">
          <h1>{planet.name}</h1>
          <h3>{planet.rotation_period}</h3>
          <h3>{planet.orbital_period}</h3>
          <h3>{planet.terrain}</h3>
        </div>
      )}
    </div>
  );
}

export default Planet;
