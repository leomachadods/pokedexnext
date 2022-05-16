import Link from "next/link";
import Sobre from "./sobre";
import Navbar from '../Components/Navbar';
import styles from '../styles/Main.module.css'

// export async function getStaticPaths() {
//   const resp = await fetch('http://pokeapi.co/media/sprites/pokemon/${pokemonIndex}.png')
// }

export async function getStaticProps() {
  const resp = await fetch("https://pokeapi.co/api/v2/pokedex/2");
  const data = await resp.json();

  //Pega todos os arrays de pokemons
  const pokemons = data.pokemon_entries.map(
    (pokemon: { pokemon_species: any }) => pokemon.pokemon_species
  );

  const names = pokemons.map((pokemon: { name: string[] }) => pokemon.name);
  const urls = pokemons.map((pokemon: { url: string[] }) => pokemon.url);

  //Manda o nome e a url via props para a função main
  return {
    props: {
      name: names,
      url: urls,
    },
  };
}

function Main({ name, url }) {
  return (
    <>
     <Navbar></Navbar>
    <div>
     
      <ul>
        {name.map((name: string, index: number) => (
          <li className={styles.list}key={index}>
            <a className={styles.a}href={url[index]}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Main;
