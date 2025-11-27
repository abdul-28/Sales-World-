import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchProductCard.css'

function SearchBar() {
  const [input, setInput] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {

  fetch('/products.json')
  .then(r => r.json())
  .then(data => {
    const combined = [
      ...(data.mobiles || []).map(c => ({ ...c, category: 'mobiles' })),
      ...(data.laptops || []).map(c => ({ ...c, category: 'laptops' })),
      ...(data.accessories || []).map(c => ({ ...c, category: 'accessories' })),
      ...(data.shoes|| []).map(c => ({ ...c, category: 'shoes' })),
      ...(data.mensClothings || []).map(c => ({ ...c, category: 'mensClothings' })),
      ...(data.smartGadgets || []).map(c => ({ ...c, category: 'smartGadgets' })),
      ...(data.homeAppliances || []).map(c => ({ ...c, category: 'homeAppliances' })),
      ...(data.furnitures || []).map(c => ({ ...c, category: 'furnitures' })),
    ];
    setAllProducts(combined);
    // setLoading(false);
  })
        // const endpoints = [
        //   { url: 'http://localhost:3000/mobiles', category: 'mobiles' },
        //   { url: 'http://localhost:3000/laptops', category: 'laptops' },
        //   { url: 'http://localhost:3000/accessories', category: 'accessories' },
        //   { url: 'http://localhost:3000/shoes', category: 'shoes' },
        //   { url: 'http://localhost:3000/mensClothings', category: 'mensClothings' },
        //   { url: 'http://localhost:3000/smartGadgets', category: 'smartGadgets' },
        //   { url: 'http://localhost:3000/homeAppliances', category: 'homeAppliances' },
        //   { url: 'http://localhost:3000/furnitures', category: 'furnitures' }
        // ];

      //   const responses = await Promise.all(endpoints.map(endpoint =>
      //     fetch(endpoint.url)
      //       .then(res => res.json())
      //       .then(data => data.map(item => ({ ...item, category: endpoint.category })))
      //   ));
      //   const products = responses.flat();
      //   setAllProducts(products);
      // } 
}
      catch (error) {
        console.error("Error fetching products for suggestions:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim().length > 0) {
      const filtered = allProducts.filter(item => {
        const searchLower = value.toLowerCase();
        return (
          (item.title && item.title.toLowerCase().includes(searchLower)) ||
          (item.model && item.model.toLowerCase().includes(searchLower)) ||
          (item.category && item.category.toLowerCase().includes(searchLower))
        );
      });
      setSuggestions(filtered.slice(0, 10));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search?q=${encodeURIComponent(input)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const searchTerm = suggestion.model;
    setInput(searchTerm);
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setShowSuggestions(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder='Search the product'
          id='searchBar'
          value={input}
          onChange={handleInputChange}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => input.trim().length > 0 && setShowSuggestions(true)}
          autoComplete="off"
        />
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item)} className="suggestion-item">
              <div className="suggestion-text">
                {item.model} <span className="suggestion-category">in {item.category}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
