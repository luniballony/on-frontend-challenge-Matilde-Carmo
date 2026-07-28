function Start ({startQuiz}) {
        return (
        <div className="start-screen">
            <div className="home-info">
                <h1>Take the quiz and try your first pair!</h1>
                <a href="/quiz">
                    <button className="btn-start" onClick={startQuiz}>
                            Try On Trial</button>
                </a>
                <h3>30 Days risk free</h3>
            </div>

            <div className="image-container">
                <img src="/assets/Background Image Start Screen.png" alt="Background Image Start Screen" className="background-img" />
            </div>
            
        </div>
    )
}

export default Start