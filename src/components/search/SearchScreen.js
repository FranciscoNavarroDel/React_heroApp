import React,{useState,useEffect} from "react";
import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({history}) => {

    const [heroesFilter, setHerosFilter] = useState([])
    const location = useLocation()
    const {q:query =''} = queryString.parse(location.search)

 
    useEffect(() => {
        const heroesFiltrados = getHeroByName(query)
        setHerosFilter([...heroesFiltrados])
    }, [query])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const heroName= document.querySelector("input").value
        history.push(`?q=${heroName}`)
    }


  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-4">
            <h4>Search Form</h4>
            <form>
                <input name="superHero" type="text" placeholder="Find your Hero" className="form-control"></input>
                <button type="submit" className="btn m-1 btn-block btn-outline-primary" onClick={handleSubmit}>Search</button>
            </form>
        </div>
        <div className="col-8">
            <h4> Results</h4>
            <hr/>
            {
                heroesFilter.map(hero=> (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }


        </div>
      </div>
    </div>
  );
};
