
import { Link } from "react-router-dom"

const CountryDetails = (props) =>{

const{name, capital, area, alpha2Code} = props.countryInfo


return(
    <div className="details">
        <img src={` https://www.countryflags.io/${alpha2Code}/flat/32.png`} alt="" />
        <p> <span>Name:</span> {name} </p>
        <p> <span>Capital:</span>  {capital}  </p>
        <p> <span>Area:</span> : {area}</p>
        <a href={`https://es.wikipedia.org/wiki/${name}`} target="_blank">More info</a>
    </div>
)
}

export default CountryDetails