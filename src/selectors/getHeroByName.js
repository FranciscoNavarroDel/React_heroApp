import { heroes } from "../data/heroes";

export const getHeroByName = (nombre) => {
    if (nombre === ''){
        return []
    }
    const nombreLowercase=nombre.toLocaleLowerCase() ;
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(nombreLowercase))
}
