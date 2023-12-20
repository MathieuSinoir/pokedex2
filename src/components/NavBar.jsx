function NavBar(props) {
    const { pokemonList, changement } = props


    const changementPokemon = (pokemon) => {
        changement(pokemon);

    }


    return (

        <div>
            {pokemonList.map((pokemon, index) => (

                <button key={index} onClick={() => changementPokemon(pokemon)}>{pokemon.nam}</button>

            ))}
        </div>
    );


}




export default NavBar;
