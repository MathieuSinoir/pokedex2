function NavBar({ pokemonList, changement }) {


    return (


        <div>
            {pokemonList.map((pokemon) => (

                <button key={pokemon.name} onClick={() => changement(pokemonList.indexOf(pokemon))}>{pokemon.name}</button>

            ))}
        </div>
    );


}




export default NavBar;
