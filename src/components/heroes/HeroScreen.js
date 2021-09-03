import React from "react";
import {useParams, Redirect} from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";
import "animate.css"





export const HeroScreen = ({history}) => {

  // extrae los parametros enviados por url mediante el hook
  const { heroId } = useParams();
  const hero = getHeroesById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =hero;

  const handleReturn = ()=>{
      if (history.length <=1){
          history.push("/")
      }else{
        history.goBack()
      } 
  }


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={require(`../../../public/img/${heroId}.jpg`).default} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeftBig"/>
      </div>
        <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Alter ego:{alter_ego}</b>
                </li>
                <li className="list-group-item">
                    <b>publisher:{publisher}</b>
                </li>
                <li className="list-group-item">
                    <b>First apearence:{first_appearance}</b>
                </li>
            </ul>

            <h5> Characters</h5>
            <p>{characters}</p>

            <button className="btn btn-outline-info" onClick={handleReturn}> Return</button>
        </div>

    </div>
  );
};
