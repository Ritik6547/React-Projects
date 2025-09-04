import BestSeller from "../components/Home/BestSeller";
import Hero from "../components/Home/Hero";
import LatestCollection from "../components/Home/LatestCollection";
import Policy from "../components/Home/Policy";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <Policy/>
      <NewsletterBox/>
    </div>
  );
};

export default Home;
