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
                const response = await fetch('/products.json');
                const data = await response.json();

                const combined = [
                    ...(data.mobiles || []).map(c => ({ ...c, category: 'mobiles' })),
                    ...(data.laptops || []).map(c => ({ ...c, category: 'laptops' })),
                    ...(data.accessories || []).map(c => ({ ...c, category: 'accessories' })),
                    ...(data.shoes || []).map(c => ({ ...c, category: 'shoes' })),
                    ...(data.mensClothings || []).map(c => ({ ...c, category: 'mensClothings' })),
                    ...(data.smartGadgets || []).map(c => ({ ...c, category: 'smartGadgets' })),
                    ...(data.homeAppliances || []).map(c => ({ ...c, category: 'homeAppliances' })),
                    ...(data.furnitures || []).map(c => ({ ...c, category: 'furnitures' })),
                ];

                const searchLower = query.toLowerCase();
                const filtered = combined.filter(item =>
                    (item.title && item.title.toLowerCase().includes(searchLower)) ||
                    (item.model && item.model.toLowerCase().includes(searchLower)) ||
                    (item.category && item.category.toLowerCase().includes(searchLower))
                );

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
