const coresTipos = {
  fire: "#f97316",
  water: "#38bdf8",
  grass: "#4ade80",
  electric: "#facc15",
  psychic: "#f472b6",
  ice: "#7dd3fc",
  dragon: "#818cf8",
  dark: "#44403c",
  fairy: "#f9a8d4",
  fighting: "#fb7185",
  poison: "#a855f7",
  ground: "#c08457",
  flying: "#60a5fa",
  bug: "#84cc16",
  rock: "#a8a29e",
  ghost: "#a78bfa",
  steel: "#94a3b8",
  normal: "#d4d4d4",
};

export function PokemonCardSimples(props) {
  const corDoCard = coresTipos[props.tipoPrincipal] || "#e5e7eb";

  return (
    <section
      className="pokemon-card"
      style={{ backgroundColor: corDoCard }}
    >
      <div className="pokemon-topo">
        <span className="pokemon-numero">#{props.numero}</span>
        <h2 className="pokemon-nome">{props.nome}</h2>
      </div>

      <div className="pokemon-imagem-area">
        <img className="pokemon-imagem" src={props.imagem} alt={props.nome} />
      </div>

      <div className="pokemon-info">
        <p><strong>Altura:</strong> {props.altura}</p>
        <p><strong>Peso:</strong> {props.peso}</p>
        <p><strong>Tipo 1:</strong> {props.tipo1}</p>
        <p><strong>Tipo 2:</strong> {props.tipo2}</p>
        <p><strong>Habilidade 1:</strong> {props.habilidade1}</p>
        <p><strong>Habilidade 2:</strong> {props.habilidade2}</p>
        <p><strong>Experiência base:</strong> {props.experiencia}</p>
      </div>
    </section>
  );
}