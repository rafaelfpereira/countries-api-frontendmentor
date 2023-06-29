// Good job here. Keep imports organized in the same order helps to find thigs easier when we have too much imports
// React imports > components > styles > types
import { useState, useEffect } from "react";
import { CountryCard, TextInput, SelectInput, Icon } from "./components";
import "./App.scss";

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

function App() {
  const [mode, setMode] = useState("dark");
  const [countryData, setCountryData] = useState([]);
  const [availableRegionFilters, setAvailableRegionFilters] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [countryNameFilter, setCountryNameFilter] = useState("");

  const toggleTheme = () => {
    if (mode === "dark") {
      localStorage.setItem("theme", "light");
      setMode("light");
    } else {
      localStorage.setItem("theme", "dark");
      setMode("dark");
    }
  };

  const fetchCountryData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  };

  useEffect(() => {
    // data fetching
    fetchCountryData();

    // theme logic
    if (localStorage.getItem("theme")) {
      setMode(localStorage.getItem("theme"));
    } else if (!window.matchMedia) {
      return;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, []);

  useEffect(() => {
    if (countryData.length > 0) {
      const regions = countryData.map((country) => country.region);

      const uniqueRegions = regions.filter(
        (region, index) => regions.indexOf(region) === index
      );

      setAvailableRegionFilters(
        uniqueRegions.map((region) => ({ value: region, label: region }))
      );
    }
  }, [countryData]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const filteredData = countryData.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(countryNameFilter.toLowerCase());

    const matchesRegion = country.region === selectedOption || !selectedOption;
    return matchesName && matchesRegion;
  });

  return (
    <main className="App">
      <header>
        <h1>Where in the world?</h1>

        <button
          className="theme-selector theme-selector__container"
          onClick={toggleTheme}
        >
          <Icon name={uiMode[mode].icon} width={16} />
          <span>{uiMode[mode].label}</span>
        </button>
      </header>

      <section className="filter">
        <TextInput
          value={countryNameFilter}
          onChange={(e) => setCountryNameFilter(e.target.value)}
          placeholder="Search for a country..."
          leftIcon="magnifying-glass"
        />
        <SelectInput
          options={availableRegionFilters}
          defaultValue={"Filter by Region"}
          selectedOption={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </section>

      <section className="content">
        {filteredData.length > 0
          ? filteredData.map((country) => (
              <CountryCard
                key={country?.cca3}
                name={country?.name?.common}
                population={country?.population}
                region={country?.region}
                capital={country?.capital}
                flagUrl={country?.flags["svg"]}
              />
            ))
          : "There's Nothing Here"}
      </section>
    </main>
  );
}

export default App;
