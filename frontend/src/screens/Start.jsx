function Start ({startQuiz}) {
        return (
        <div className="start-page">
            <img src="/assets/Background Image Start Screen.png" alt="Background Image Start Screen" />
            
            <div className="home-info">
                <h1>Take the quiz and try your first pair!</h1>
                <button id="btn-start" onClick={startQuiz}>
                        Try On Trial</button>
                <h3>30 Days risk free</h3>
            </div>
            
        </div>
    )
}

export default Start