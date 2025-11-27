import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useParams } from 'react-router-dom';
import SearchProductCard from './SearchProductCard';

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const endpoints = [
                    { url: 'http://localhost:3000/mobiles', category: 'mobiles' },
                    { url: 'http://localhost:3000/laptops', category: 'laptops' },
                    { url: 'http://localhost:3000/accessories', category: 'accessories' },
                    { url: 'http://localhost:3000/shoes', category: 'shoes' },
                    { url: 'http://localhost:3000/mensClothings', category: 'mensClothings' },
                    { url: 'http://localhost:3000/smartGadgets', category: 'smartGadgets' },
                    { url: 'http://localhost:3000/homeAppliances', category: 'homeAppliances' },
                    { url: 'http://localhost:3000/furnitures', category: 'furnitures' }
                ];

                const responses = await Promise.all(endpoints.map(endpoint =>
                    fetch(endpoint.url)
                        .then(res => res.json())
                        .then(data => data.map(item => ({ ...item, category: endpoint.category })))
                ));
                const allProducts = responses.flat();

                const filtered = allProducts.filter(item => {
                    const searchLower = query.toLowerCase();
                    return (
                        (item.title && item.title.toLowerCase().includes(searchLower)) ||
                        (item.model && item.model.toLowerCase().includes(searchLower)) ||
                        (item.category && item.category.toLowerCase().includes(searchLower))
                    );
                });

                setResults(filtered);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchData();
        } else {
            setResults([]);
            setLoading(false);
        }
    }, [query]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Search Results for "{query}"</h1>
            {loading ? (
                <p>Loading...</p>
            ) : results.length > 0 ? (
                <div id='products-group' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {results.map((product) => (
                        <SearchProductCard
                            key={product.id + product.model}
                            id={product.id}
                            category={product.category}
                            model={product.model}
                            image={product.image}
                        />
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}

export default SearchPage;
