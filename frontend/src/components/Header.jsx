function Header ({setPhase}) {
    return (
        <header>
            <p className="menu">///</p>
            <button onClick={() => setPhase('start')}>
                <img src="/assets/on-logo.png" alt="On logo" />
            </button>
        </header>
    )
}

export default Header