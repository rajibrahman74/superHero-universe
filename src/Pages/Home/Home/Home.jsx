import useTitle from "../../../hooks/useTitle";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import HeroCategories from "../HerosCategories/HeroCategories";
import Statistics from "../Statistics/Statistics";
import SuperHeroStudio from "../SuperHeroStudio/SuperHeroStudio";

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Header />
      <Gallery />
      <HeroCategories />
      <SuperHeroStudio />
      <Statistics />
    </div>
  );
};

export default Home;
