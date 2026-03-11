import { useEffect, useState } from "react";
import { PokemonCardSimples } from "./PokemonCardSimples";

export function PokemonContainer() {
  const [pokemon, setPokemon] = useState(null);
  const [busca, setBusca] = useState("pikachu");
  const [shiny, setShiny] = useState(false);

  function buscarPokemon(nomeOuNumero) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuNumero}`)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Pokémon não encontrado");
        }
        return resposta.json();
      })
      .then((dados) => {
        setPokemon(dados);
      })
      .catch(() => {
        alert("Pokémon não encontrado");
      });
  }

  useEffect(() => {
    buscarPokemon("pikachu");
  }, []);

  function proximoPokemon() {
    if (!pokemon) return;

    const proximoId = pokemon.id + 1;
    setBusca(String(proximoId));
    buscarPokemon(proximoId);
  }

  function pokemonAnterior() {
    if (!pokemon) return;
    if (pokemon.id === 1) return;

    const anteriorId = pokemon.id - 1;
    setBusca(String(anteriorId));
    buscarPokemon(anteriorId);
  }

  function buscar() {
    if (busca.trim() === "") return;

    buscarPokemon(busca.toLowerCase().trim());
  }

  function verificarEnter(e) {
    if (e.key === "Enter") {
      buscar();
    }
  }

  function alternarShiny() {
    setShiny(!shiny);
  }

  if (!pokemon) {
    return <p className="carregando">Carregando Pokémon...</p>;
  }

  return (
    <section className="pokemon-container">
      <div className="controles">
        <button onClick={pokemonAnterior}>Anterior</button>

        <input
          type="text"
          placeholder="Nome ou número"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={verificarEnter}
        />

        <button onClick={buscar}>Buscar</button>
        <button onClick={proximoPokemon}>Próximo</button>
        <button onClick={alternarShiny}>
          {shiny ? "Normal" : "Shiny"}
        </button>
      </div>

      <PokemonCardSimples
        nome={pokemon.name}
        imagem={
          shiny
            ? pokemon.sprites.front_shiny || pokemon.sprites.front_default
            : pokemon.sprites.front_default
        }
        altura={pokemon.height}
        peso={pokemon.weight}
        tipo1={pokemon.types[0].type.name}
        tipo2={pokemon.types[1] ? pokemon.types[1].type.name : "não possui"}
        habilidade1={pokemon.abilities[0].ability.name}
        habilidade2={
          pokemon.abilities[1] ? pokemon.abilities[1].ability.name : "não possui"
        }
        experiencia={pokemon.base_experience}
        numero={pokemon.id}
        tipoPrincipal={pokemon.types[0].type.name}
      />
    </section>
  );
}