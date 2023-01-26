import { useState } from "react";

export function SearchBar() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <label>
                <input type="text" placeholder="Search"/>
            </label>
        </div>
    );
}