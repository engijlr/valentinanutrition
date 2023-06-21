import Banner from "../components/Banner";
import RecipesPreview from "../components/RecipesPreview";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <RecipesPreview />
      <Services />
      <Testimonial />
      <div>Contact Me</div>
    </>
  );
};

export default HomePage;
