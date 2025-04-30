import HeroSlider from "../components/HomePageComponents/HeroSlider";
import CategoryPick from "../components/HomePageComponents/CategoryPick";
import ProductCategoryList from "../components/HomePageComponents/ProductCategoryList";
import ProductSlider from "../components/HomePageComponents/ProductSlider";
import C2A from "../components/HomePageComponents/C2A";
import FeaturedPostsList from "../components/HomePageComponents/FeaturedPostsList";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
      <ProductSlider />
      <C2A />
      <FeaturedPostsList />
    </>
  );
}
