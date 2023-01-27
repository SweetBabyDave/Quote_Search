import { useState } from "react";

interface SearchBarProps {
    name: string; 
}

export function SearchBar({name}: SearchBarProps) {
    const [description, setDescription] = useState("");

    return (
        <div>
            <label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Search Quotes"/>
            </label>
        </div>
    );
}