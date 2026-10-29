import { useState, useMemo, memo, useCallback } from 'react';

// It will not get re-rendered unless value of props changes.
// Props here are items and onAddToCard. If any one of them changes,
// then only the ProductList component gets re-rendered.
const ProductList = memo(({ items, onAddToCart }) => {
    console.log('Rendering large list of products...');

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name} 
                    <button onClick={() => onAddToCart(item.id)}>Add</button>
                </li>
            ))}
        </ul>
    );
});

function Practice3() {
    const [query, setQuery] = useState("");
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Orange' },
        { id: 3, name: 'Banana' },
    ];

    const filteredProducts = useMemo(() => {
        return items.filter(i => i.name.toLowerCase().includes(query));
    }, [query, items]);

    // In this case, useCallback is going to save us from re-rendering ProductList
    // component every time user clicks "Add" button.
    const handleAddToCart = useCallback((id) => {
        console.log(`Added product with id ${id} to card`);
    }, []);

    return (
        <div>
            <h3>Heavy Search Component</h3>
            <input value={query} placeholder="Search products..." 
                onChange={(e) => setQuery(e.target.value)}
            />

            <ProductList items={filteredProducts} onAddToCart={handleAddToCart} />
        </div>
    );
}

export default Practice3;