import { Quote } from "../components/Quote";
import { SearchBar } from "../components/SearchBar";
import { useEffect, useState } from "react";

export function QuotePage() {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [randomQuote, setRandomQuote] = useState<typeof Quote | null>(null);

    async function loadQuote() {
        const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
        const quote = await result.json();
        console.log(await result.json());
    
    }

    useEffect(() => {
        loadQuote();
    }, []);

    return (
        <div>
            <h2>Quote Search</h2>
            <SearchBar />
            <Quote author="Hello" content="World"/>
        </div>
    );
}