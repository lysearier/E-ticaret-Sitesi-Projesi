import ShopPageNavMenu from "../components/ShopPageComponents/ShopPageNavMenu";
import ShopPageCategory from "../components/ShopPageComponents/ShopPageCategory";
import ShopPageProducts from "../components/ShopPageComponents/ShopPageProducts";
import ShopPageBrands from "../components/ShopPageComponents/ShopPageBrands";

export default function ShopPage() {
  return (
    <>
      <ShopPageNavMenu />
      <ShopPageCategory />
      <ShopPageProducts />
      <ShopPageBrands />
    </>
  );
}
