import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// ProductPage.jsx

import { useCart } from '../components/CartContext';  // Adjusted import path
 






const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Tracks the selected category
  const [animate, setAnimate] = useState(false); // Tracks animation state

  const categories = ['All', 'Leafy Greens', 'Root Vegetables', 'Fruits', 'Herbs', 'Organic'];
  const navigate = useNavigate(); 
  const { addToCart } = useCart();

  useEffect(() => {
    // Set product data with at least 12 products
    setProducts([
      {
        id: 1,
        name: 'Fresh Tomato',
        description: 'Organic and fresh tomatoes.',
        price: 3.99,
        image: 'https://wallpapercave.com/wp/wp2030852.jpg',
        category: 'Fruits',
      },
      {
        id: 2,
        name: 'Carrot',
        description: 'Crunchy and sweet carrots.',
        price: 2.49,
        image: 'https://imgs.search.brave.com/YgKSjjc0FY3lSdYhbo2cKv-_wXjOiouQrajOGZLwSMo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTU5/ODA3NS5qcGc',
        category: 'Root Vegetables',
      },
      {
        id: 3,
        name: 'Spinach',
        description: 'Rich in iron and vitamins.',
        price: 1.99,
        image: 'https://imgs.search.brave.com/py1df258pGzMhhgtRKczhDHeui7Ha0HuuQ3aY0NyBGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY5/OTgzNzkxL3Bob3Rv/L3NwaW5hY2guanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTFM/OXFKTDNCVFl1ck85/N0h5RXhmRVNrS3lG/UkV6UjM1RVJlSEhs/aDlpYms9',
        category: 'Leafy Greens',
      },
      {
        id: 4,
        name: 'Basil',
        description: 'Fresh and aromatic herbs.',
        price: 0.99,
        image: 'https://imgs.search.brave.com/8tgV0Rkdn8I2lkEqoLjnZsJb2kjOGQpZmp78PNtmWSA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iYXNpbC1oaWdo/LXF1YWxpdHktNGst/aGRyXzg4OTA1Ni0y/MTIwMy5qcGc',
        category: 'Herbs',
      },
      {
        id: 5,
        name: 'Cucumber',
        description: 'Cool and refreshing cucumbers.',
        price: 2.99,
        image: 'https://imgs.search.brave.com/KmjQ3ahEkBxMWphc6wbfjlWeC1B8DfpGONOTx5y2Wow/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/aHJlZS1mcmVzaC1j/dWN1bWJlcnMtaXNv/bGF0ZWQtdGFibGVj/bG90aC1oaWdoLXF1/YWxpdHktcGhvdG9f/MTE0NTc5LTc4NDEz/LmpwZz9zZW10PWFp/c19oeWJyaWQ',
        category: 'Leafy Greens',
      },
      {
        id: 6,
        name: 'Beetroot',
        description: 'Rich in antioxidants and fiber.',
        price: 1.79,
        image: 'https://imgs.search.brave.com/NB3wjpj7txmc3MGgtA9Pf4fcDfofwYoqoXxp2e8KnK4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzEzLzgwLzYz/LzM2MF9GXzgxMzgw/NjM2N18yUlpweUh3/OWcybWpRZWJ3Tk1y/dHp1dmxvS1FBWnBC/Ty5qcGc',
        category: 'Root Vegetables',
      },
      {
        id: 7,
        name: 'Apple',
        description: 'Crisp and sweet apples.',
        price: 4.99,
        image: 'https://imgs.search.brave.com/v-csGRgB_Gc8_NlY7zOKacy61pIxHjKxIPbJpx4TfI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcHBsZS1pc29s/YXRlZF81NTg4My0x/MTEwNC5qcGc_c2Vt/dD1haXNfaHlicmlk',
        category: 'Fruits',
      },
      {
        id: 8,
        name: 'Coriander',
        description: 'Aromatic and flavorful coriander.',
        price: 0.89,
        image: 'https://imgs.search.brave.com/PutiAg32gHL_rW6bSNayl9TfVArsb7hmQuLi8ebyrg4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MDk4NTI5L3Bob3Rv/L2NvcmlhbmRlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/a3FOLVBPZlFzU2RK/SVRxVWlzTnFkbzdF/SWkxSTVkbXpqbTNu/Y0F1d2VMdz0',
        category: 'Herbs',
      },
      {
        id: 9,
        name: 'Broccoli',
        description: 'Fresh and healthy broccoli.',
        price: 3.49,
        image: 'https://imgs.search.brave.com/rBr2fPxWRpR-0ilIPdauOD9KZLEcIZdiBEpc_2NcvK4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cmVzaC1ncmVlbi1o/ZWFsdGh5LWJyb2Nj/b2xpLWlzb2xhdGVk/LWdyYXktYmFja2dy/b3VuZC1oaWdoLXF1/YWxpdHktcGhvdG9f/MTE0NTc5LTc4NDAx/LmpwZz9zZW10PWFp/c19oeWJyaWQ',
        category: 'Leafy Greens',
      },
      {
        id: 10,
        name: 'Sweet Potato',
        description: 'Delicious and nutritious sweet potatoes.',
        price: 2.29,
        image: 'https://imgs.search.brave.com/-_QFLyQJ4Is_aS-VqKaqUiDt1wr8zURfzF4MSCEgnjw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODIx/NTMxNzIyL3Bob3Rv/L3R3by1zd2VldC1w/b3RhdG9lcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9U3c4/MXdqN2RkSVRGMHpC/dG0xdTh0amdGd1At/ZGNoR1h5NXVDY3Zn/RFJkaz0',
        category: 'Root Vegetables',
      },
      {
        id: 11,
        name: 'Banana',
        description: 'Fresh and ripe bananas.',
        price: 1.99,
        image: 'https://imgs.search.brave.com/WGEW6zaGoe0hYmlOzYhDkKYfjg_wH-VBIU-gr7UOPVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI2NTQ0/OTIuanBn',
        category: 'Fruits',
      },
      {
        id: 12,
        name: 'Mint',
        description: 'Fresh and cooling mint.',
        price: 0.99,
        image: 'https://imgs.search.brave.com/CQTiirY8ICuEIJgN4lT8rINxicWF-hksnkPPO_fKU24/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbWludC1mbGx0/a3ZqYnQxYWl0bGxu/LmpwZw',
        category: 'Herbs',
      },
    ]);
  }, []);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Handle category selection with animation
  const handleCategoryClick = (category) => {
    setAnimate(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setAnimate(false);
    }, 300); // Match the animation duration
  };
  const handleAddToCart = (product) => {
    // Logic to add the product to the cart (e.g., update state or context)
    addToCart(product);  // For debugging
    navigate('/cart'); // Navigate to the CartPage
  };
  

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-green-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vegetable Market</h1>
          <ul className="flex space-x-6 text-sm md:text-base">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`hover:underline cursor-pointer transition duration-300 ease-in-out ${
                  selectedCategory === category ? 'font-bold' : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          {selectedCategory === 'All'
            ? 'Available Vegetables'
            : `Category: ${selectedCategory}`}
        </h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-transform duration-300 ${
            animate ? 'transform translate-x-full opacity-0' : 'transform translate-x-0 opacity-100'
          }`}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-lg font-semibold text-green-600 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-600">
              No products available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
