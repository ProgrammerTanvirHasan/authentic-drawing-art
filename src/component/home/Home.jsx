import { Helmet } from "react-helmet-async";
import Slider from "../slider/Slider";
import { useLoaderData } from "react-router-dom";
import CraftItem from "../craftItem/CraftItem";
import Exhibition from "../exhibition/Exhibition";
import UpComing from "../upComing/UpComing";

const Home = () => {
  const item = useLoaderData();
  const slicedItems = item.slice(0, 6);
  return (
    <div>
      <Helmet>
        <title>Enthusiast || Home</title>
      </Helmet>

      <Slider></Slider>

      <div>
        <h2 className="text-center font-bold text-3xl text-white mt-4">
          All craft item here
        </h2>
        <p className="text-white mt-2">
          Craft items are handmade objects created using various materials and
          techniques, often showcasing creativity, skill, and cultural
          significance. They encompass a wide range of products, from functional
          items like pottery, textiles, and furniture, to decorative pieces like
          jewelry, artwork, and home decor. Craft items are typically unique,
          reflecting the individuality and craftsmanship of the maker.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-8 gap-4">
          {slicedItems.map((card) => (
            <CraftItem key={card._id} card={card}></CraftItem>
          ))}
        </div>
      </div>
      <UpComing></UpComing>
      <div className="mt-10">
        <Exhibition></Exhibition>
      </div>
    </div>
  );
};

export default Home;
