import ProductDetailHeader from "../components/ProductDetailComponents/ProductDetailHeader";
import ProductDetailProduct from "../components/ProductDetailComponents/ProductDetailProduct";
import ProductDetailDescription from "../components/ProductDetailComponents/ProductDetailDescription";
import ProductDetailBestSeller from "../components/ProductDetailComponents/ProductDetailBestSeller";
import Brands from "../components/Brands";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetailHeader />
      <ProductDetailProduct />
      <ProductDetailDescription />
      <ProductDetailBestSeller />
      <Brands />
    </>
  );
}
