import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      <h2>Home pages</h2>
      {/* Banner  */}
      <Banner></Banner>
      {/* Heading  */}
      <Heading
        title="Browse Coffees By Category "
        subtitle="Choose your desire Coffee category to browse through specific coffee that fit in your test."
      ></Heading>
      {/* Categories Tab Section  */}
      {/* Dynamic nested component  */}
    </div>
  );
};

export default Home;
