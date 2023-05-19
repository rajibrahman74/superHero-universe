import { useLoaderData } from "react-router-dom";


const HeroDetails = () => {
    const heroToys = useLoaderData()
    console.log(heroToys);
    return (
        <div>
            <h2>This is heor details</h2>
        </div>
    );
};

export default HeroDetails;