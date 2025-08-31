import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedItems />
        <Categories />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
