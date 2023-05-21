import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import HeroCategories from "../HerosCategories/HeroCategories";
import SuperHeroStudio from "../SuperHeroStudio/SuperHeroStudio";

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <HeroCategories />
      <SuperHeroStudio />
    </div>
  );
};

export default Home;
