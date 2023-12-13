import PropTypes from "prop-types";

function PokemonCard(props) {
    const { pokemon } = props;

    return (
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}

            <figcaption>{pokemon.name}</figcaption>
        </figure>


    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default PokemonCard;
