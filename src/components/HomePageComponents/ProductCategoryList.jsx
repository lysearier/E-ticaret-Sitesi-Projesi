import ProductCard from ".././cards/ProductCard";

import model1 from "../../assets/photos/model1.jpg";
import model2 from "../../assets/photos/model2.jpg";
import model3 from "../../assets/photos/model3.jpg";
import model4 from "../../assets/photos/model4.jpg";
import model5 from "../../assets/photos/model5.jpg";
import model6 from "../../assets/photos/model6.jpg";
import model7 from "../../assets/photos/model7.jpg";
import model8 from "../../assets/photos/model8.jpg";

const productData = [
  {
    image: model1,
    title: 'Graphic Design',
    subtitle: 'English Department',
    price: 16.48,
    discountedPrice: 6.48,
    colors: ['#3B82F6', '#10B981', '#F97316', '#1E3A8A'], // Tailwind renk hex'leri
  },
  {
    image: model2,
    title: 'UX Research',
    subtitle: 'Psychology',
    price: 22.99,
    discountedPrice: 12.99,
    colors: ['#DC2626', '#9333EA', '#3B82F6'],
  },
  {
    image: model3,
    title: 'Web Development',
    subtitle: 'Engineering',
    price: 18.99,
    discountedPrice: 9.49,
    colors: ['#16A34A', '#FACC15'],
  },
  {
    image: model4,
    title: 'Illustration',
    subtitle: 'Fine Arts',
    price: 20.0,
    discountedPrice: 10.0,
    colors: ['#E11D48', '#7C3AED'],
  },
  {
    image: model5,
    title: 'Digital Marketing',
    subtitle: 'Business',
    price: 25.5,
    discountedPrice: 15.99,
    colors: ['#0EA5E9', '#D97706'],
  },
  {
    image: model6,
    title: 'Photography',
    subtitle: 'Media',
    price: 30.0,
    discountedPrice: 21.99,
    colors: ['#4B5563', '#F59E0B', '#8B5CF6'],
  },
  {
    image: model7,
    title: 'Animation',
    subtitle: 'Film School',
    price: 19.5,
    discountedPrice: 13.5,
    colors: ['#F43F5E', '#10B981', '#6366F1'],
  },
  {
    image: model8,
    title: 'Game Design',
    subtitle: 'Computer Science',
    price: 40.0,
    discountedPrice: 29.99,
    colors: ['#6D28D9', '#DC2626', '#14B8A6'],
  },
];

export default function ProductCategoryList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {productData.map((item, i) => (
        <ProductCard key={i} {...item} />
      ))}
    </div>
  );
}
