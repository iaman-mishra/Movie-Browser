import { useState } from "react";
import './Searchbar.css'
export default function Searchbar({onSearch}) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="dropdown-search">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search movies..."
            />
        </div>

    );
}
