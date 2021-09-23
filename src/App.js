import './App.css';
import Navbar from './components/NavBar';
import { Route, Switch } from 'react-router';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import countries from "./countries.json"
import axios from 'axios';


function App() {
  const [Countries, SetCountries] = useState([])  //<-----State Storing the original country lIst ------>
  const [Country, setCountry] = useState("")  //<-----State Storing the selected country from Countries lIst ------>


    useEffect(()=>{

      axios.get("https://web.archive.org/web/20210723151325/https://restcountries.eu/rest/v2/all")
      .then(response => {SetCountries(response); console.log(response)})
      
      },

    []
    )

  const select = (info) =>{

    setCountry(countries.find(country => country.name === info))
    console.log(Country)
  }


  return (
    <div className="App">
    <Navbar />
    


    <Switch>
      <Route exact path="/countries" render={(props) =><CountriesList {...props} select = {select} />} />
      <Route  path="/countrydetails/:name" render={(props) =><CountryDetails {...props}  countryInfo = {Country} />} />
    </Switch>

    </div>
  );
}

export default App;
