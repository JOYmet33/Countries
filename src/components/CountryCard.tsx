import { Country } from "../type/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div onClick={() => handleSelectCountry(country)}>
      <img src={country.flags.svg} style={{ width: "40px", height: "40px" }} />
      <h4>{country.name.common}</h4>
      <p>{country.capital}</p>
    </div>
  );
};

export default CountryCard;
