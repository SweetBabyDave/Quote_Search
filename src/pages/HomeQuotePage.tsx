import { Quote } from "../components/Quote";
import { useEffect, useState } from "react";

export function HomeQuotePage() {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    async function loadRandomQuote() {
        try {
            const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
            const quote = await result.json();
            setAuthor(quote.author);
            setContent(quote.content);
            
        } catch (error) {
            console.log("Random quote API did not succeed.");
        }
    }

    useEffect(() => {
        loadRandomQuote();
    }, []);

    return (
        <div>
            <Quote 
            id="Random" 
            author={author} 
            content={content}
            />
        </div>
    );
}