import { useLoaderData } from "react-router-dom";


const HeroDetails = () => {
    const heroToys = useLoaderData()
    console.log(heroToys);
    return (
        <div>
            <h2 className="text-5xl text-center">This is heor details</h2>
        </div>
    );
};

export default HeroDetails;