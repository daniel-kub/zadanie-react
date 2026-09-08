function MovieCard(props) {
  return (
    <div id="box">
      <h2>
        Tytuł: {props.title}, Rok: {props.year}, Gatunek: {props.genre}
      </h2>

      <button onClick={props.oznaczJakoObejrzany}>
        {props.czyObejrzane ? "Obejrzane!" : "Dodaj do obejrzanych"}
      </button>
    </div>
  );
}

export default MovieCard;
