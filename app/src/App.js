// Good job here. Keep imports organized in the same order helps to find thigs easier when we have too much imports
// React imports > components > styles > types
import { useState } from "react";
import { CountryCard, TextInput, SelectInput } from "./components";
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

  return (
    <main className="App">
      <header>
        <h1>Where in the world?</h1>
        <div>dark mode</div>
      </header>

      <section className="filter">
        <TextInput
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search for a country..."
          leftIcon="/icons/magnifying-glass.svg"
        />
        <SelectInput
          options={mockSelectOptions}
          defaultValue={"Filter by Region"}
          selectedOption={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </section>

      <section className="content">
        {/* I would start creating a map function here already */}
        <CountryCard
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
          flagUrl={"https://flagcdn.com/de.svg"}
        />
        <CountryCard
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
          flagUrl={"https://flagcdn.com/br.svg"}
        />
        <CountryCard
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
          flagUrl={"https://flagcdn.com/pt.svg"}
        />
      </section>
    </main>
  );
}

export default App;
