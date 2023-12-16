import LayoutFirst from "@/components/layouts/LayoutPrimary/LayoutPrimary";
import AboutUs from "@/components/sections/AboutUs/AboutUs";
import FoodCategories from "@/components/sections/FoodCategories/FoodCategories";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import MoreInfo from "@/components/sections/MoreInfo/MoreInfo";
import LatestNews from "@/components/sections/LatestNews/LatestNews";
import About from "@/components/sections/About/About";

export default function Home() {
  return (
    <LayoutFirst>
      <main className="main">
        <AboutUs />
        <FoodCategories />
        <WhyChooseUs />
        <MoreInfo />
        <LatestNews />
        <About />
      </main>
    </LayoutFirst>
  );
}
