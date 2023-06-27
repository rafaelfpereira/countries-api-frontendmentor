import "./App.scss";

import { CountryCard } from "./components";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Where in the world?</h1>
        <div>dark mode</div>
      </header>

      <section className="filter">
        <input type="text" />
        <select>
          <option selected disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>

      <section className="content">
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
