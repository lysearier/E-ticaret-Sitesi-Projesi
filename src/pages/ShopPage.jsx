import ShopPageNavMenu from "../components/ShopPageComponents/ShopPageNavMenu";
import ShopPageCategory from "../components/ShopPageComponents/ShopPageCategory";
import ShopPageProducts from "../components/ShopPageComponents/ShopPageProducts";
import Brands from "../components/Brands";

export default function ShopPage() {
  return (
    <>
      <ShopPageNavMenu />
      <ShopPageCategory />
      <ShopPageProducts />
      <Brands />
    </>
  );
}
