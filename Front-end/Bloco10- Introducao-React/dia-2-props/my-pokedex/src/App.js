import './App.css';
import pokemons from './data';
import DataPokemon from './Pokemon';

function App() {
  return (
    <div>
      <h1 className='title'>Pokedex</h1>
      {pokemons.map((pokemon, index) => <DataPokemon key={index} dados={pokemon} />)}
    </div>
  );
}

export default App;
