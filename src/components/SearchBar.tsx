interface SearchBarProps {
    name: string; 
    setName: (name : string) => void;
}

export function SearchBar({name, setName}: SearchBarProps) {

    return (
        <div id="searchbar">
            <label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Search Quotes"/>
            </label>
        </div>
    );
}