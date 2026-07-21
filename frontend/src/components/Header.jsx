import { useState } from "react";

function Header ({setPhase, startQuiz}) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="menu-container">
                <img src="/assets/menu.png" alt="Menu Icon" onClick={() => setMenuOpen(!menuOpen)} />

                {menuOpen && (
                    <div className="menu-panel">
                        <button
                            onClick={() => {
                                setPhase("start");
                                setMenuOpen(false);
                            }}>
                            Home
                        </button>

                        <button onClick={() => {
                                setPhase("quiz");
                                startQuiz();
                                setMenuOpen(false);
                            }}> 
                            Start Quiz
                        </button>

                        <a href="https://www.on.com/de-ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)} > 
                            On Official Store
                        </a>
                    </div>
                )}
                
            </div>
            <button onClick={() => setPhase('start')}>
                <img src="/assets/on-logo.png" alt="On logo" />
            </button>
        </header>
    )
}

export default Header