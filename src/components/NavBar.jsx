function NavBar(props) {
    const { navigation, bar } = props

    return (
        <div>
            <button onClick={bar}>Suivant</button>
            <button onClick={navigation}>Precedent</button>
        </div>
    )
}






export default NavBar;
