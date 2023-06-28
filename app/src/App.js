// Good job here. Keep imports organized in the same order helps to find thigs easier when we have too much imports
// React imports > components > styles > types
import { useState, useEffect } from "react";
import { CountryCard, TextInput, SelectInput, Icon } from "./components";
import data from "./mocks/data.json";
import "./App.scss";

// ok for now but I always recomend separating the mock data in a separated file.
const mockSelectOptions = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

function App() {
  const [filter, setFilter] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [mode, setMode] = useState("dark");

  const uiMode = {
    light: {
      icon: "sun",
      label: "Light Mode",
    },
    dark: {
      icon: "moon",
      label: "Dark Mode",
    },
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  return (
    <main className="App">
      <header>
        <h1>Where in the world?</h1>

        <button
          className="theme-selector theme-selector__container"
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        >
          <Icon name={uiMode[mode].icon} width={16} />
          <span>{uiMode[mode].label}</span>
        </button>
      </header>

      <section className="filter">
        <TextInput
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search for a country..."
          leftIcon="magnifying-glass"
        />
        <SelectInput
          options={mockSelectOptions}
          defaultValue={"Filter by Region"}
          selectedOption={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </section>

      <section className="content">
        {data.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flagUrl={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
