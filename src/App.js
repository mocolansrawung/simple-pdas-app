import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png";
import SiriImage from "./img/siri.png";
import CortanaImage from "./img/cortana.png";

function App() {
    return (
        <div>
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">Personal Digital Assistants</p>
                    </div>
                </section>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri27107"
                                image={SiriImage}
                                description="Siri was made Apple and is being phased out."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana11"
                                image={CortanaImage}
                                description="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
