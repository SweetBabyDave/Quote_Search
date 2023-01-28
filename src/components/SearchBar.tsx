interface SearchBarProps {
    name: string; 
    setName: (name : string) => void;
}

export function SearchBar({name, setName}: SearchBarProps) {

    return (
        <div>
            <label>
                <input id="searchbar" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Search Quotes"/>
            </label>
        </div>
    );
}