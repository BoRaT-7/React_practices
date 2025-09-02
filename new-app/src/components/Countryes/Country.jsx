import { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data); // 👉 এখন proper data আসবে
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div>
      <h3>Good Country: {countries.length}</h3>

      {
        countries.map(countries => <Countries  countries={countries}></Countries>)
      }

      {/* <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name.common}{" "}
            <img src={country.flags.png} alt={country.name.common} width="30" />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
