import "./App.css";
import { PokemonContainer } from "./componentes/PokemonContainer";

export default function App() {
  return (
    <main className="app">
      <h1 className="titulo-principal">Pokémon em React</h1>
      <PokemonContainer />
    </main>
  );
}