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
        <select />
      </section>

      <section className="content">
        <CountryCard
          name="Germany"
          population={81770900}
          region="Europe"
          capital="Berlin"
          flagUrl={"https://flagcdn.com/de.svg"}
        />
      </section>
    </main>
  );
}

export default App;
