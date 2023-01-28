import { Quote, ListQuotes } from "../quotefunctions";
import { useEffect, useState } from "react";

interface QuotePageProps {
    name: string;
}

export function QuotePage({name}: QuotePageProps) {
    const [quotes, setQuote] = useState<Quote[] | undefined>(undefined);

    async function fetchMyQuotes() {
        const quote = await ListQuotes(name);
        setQuote(quote);
    }
    
    useEffect(() => {
        fetchMyQuotes();
    }, []);
    
    if (quotes === undefined) {
        return <p> Loading... </p>
    }

    return (
        <div>    
            {quotes.map((quote) => {
                return (
                    <div id="quotediv" key={quote._id}>
                        <p>{quote.content}</p>
                        <p>-{quote.author}</p>
                    </div>
                );
            })}
        </div>
    );
}