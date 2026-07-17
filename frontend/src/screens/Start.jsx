function Start () {
    return (
        <div>
            <div className="home-info">
                <h1>Take the quiz and try your first pair!</h1>
                <button onClick={() => (console.log("you clicked this button"))}  
                        id="btn-start">
                        Try On Trial</button>
                <h3>30 Days risk free</h3>
                <img src="/assets/Background Image Start Screen.png" alt="Background Image Start Screen" />
            </div>
        </div>
    )
}

export default Start