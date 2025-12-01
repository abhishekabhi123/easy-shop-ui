import "./App.css";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopProducts from "./components/TopProducts";
import FirstFeature from "../src/assets/first-feature.png";
import Footer from "./components/Footer";
import secondFeature from "../src/assets/second.png";
import thirdFeature from "../src/assets/third.png";
import fourthFeature from "../src/assets/four.png";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopProducts />
      <div className="flex flex-col  w-full  lg:w-[80%] m-auto">
        <Feature
          title="Why choose us?"
          description="We make online shopping simple, safe and rewarding with premium products, unbeatable prices and exceptional customer service."
          ctaTitle="Learn More"
          srcImage={FirstFeature}
        />
        <Feature
          classNames="flex-row-reverse"
          title="Fast & Free Shipping"
          description="Enjoy lightning-fast delivery on all orders over $50. We partner with trusted carriers to ensure your products arrive safely and on time, every time."
          ctaTitle="View Shipping Policy"
          srcImage={secondFeature}
        />

        <Feature
          title="30-Day Money Back Guarantee"
          description="Shop with complete confidence knowing that if you're not satisfied with your purchase, we offer hassle-free returns within 30 days of delivery."
          ctaTitle="Read Our Policy"
          srcImage={thirdFeature}
        />

        <Feature
          classNames="flex-row-reverse"
          title="24/7 Customer Support"
          description="Our dedicated support team is always here to help. Whether you have questions about products or need assistance with an order, we're just a click away."
          ctaTitle="Contact Support"
          srcImage={fourthFeature}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
