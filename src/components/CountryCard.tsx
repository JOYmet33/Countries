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
    <div
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform "
      onClick={() => handleSelectCountry(country)}
    >
      <img className="w-20 h-auto mx-auto mb-4" src={country.flags.svg} />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital}</p>
    </div>
  );
};

export default CountryCard;
