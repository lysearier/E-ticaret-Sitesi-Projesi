import HeroSlider from "../components/HeroSlider";
import CategoryPick from "../components/CategoryPick";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductSlider from "../components/ProductSlider";
import C2A from "../components/C2A";
import FeaturedPostsList from "../components/FeaturedPostsList";

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
