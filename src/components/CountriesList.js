
import { useState } from "react"
import { Link } from "react-router-dom"
import countries from "../countries.json"


const CountriesList = (props) =>{

   const[countryInfo, setCountryInfo]= useState("")



   const selectInfo = (e) =>{

    setCountryInfo(countries.find(country => country.name === e.target.className))
    
    props.select(e.target.className)
   }


    return(
        countries.map(country =>(
            <div key = {country.name} className="countryCard">
                <img src={` https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt="" />
                <Link to={`/countrydetails/${country.name}`} className={country.name}  onClick= {(e)=>(selectInfo(e)) }      >{country.name}</Link>
                <br/>
                
            </div>
        ))
    )

}

export default CountriesList