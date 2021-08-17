function Greeter() {
    let datum = new Date();
    console.log('datum: ', datum)
    return (
        <header>
            <p>Hallo Max</p>
            <p>Heute ist: {datum.toLocaleDateString()}</p>
        </header>
    )
}
export default Greeter;