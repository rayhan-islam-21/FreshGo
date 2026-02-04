import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: "Fresh Fruit", slug: "fresh-fruit", image: "/category-1.png" },
  { name: "Fresh Vegetables", slug: "fresh-vegetables", image: "/category-12.png" },
  { name: "Meat & Fish", slug: "meat-fish", image: "/category-3.png" },
  { name: "Snacks", slug: "snacks", image: "/category-5.png" },
  { name: "Beverages", slug: "beverages", image: "/category-1.png" },
  { name: "Beauty & Health", slug: "beauty-health", image: "/category-2.png" },
  { name: "Bread & Bakery", slug: "bread-bakery", image: "/category-3.png" },
  { name: "Baking Needs", slug: "baking-needs", image: "/category-4.png" },
  { name: "Cooking", slug: "cooking", image: "/category-5.png" },
  { name: "Diabetic Food", slug: "diabetic-food", image: "/category-6.png" },
  { name: "Dish Detergents", slug: "dish-detergents", image: "/category-7.png" },
  { name: "Oil", slug: "oil", image: "/category-4.png" }
];

const PopularCategory = () => {
  return (
    <section className="py-12 ">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Popular Categories</h2>
          <Link href="/categories" className="text-green-600 hover:text-green-700 font-medium transition">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.slug} 
              className="group bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-500 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={cat.image}
                  fill
                  className="object-contain"
                  alt={cat.name}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularCategory;