import { Quote, ListQuotes } from "../quotefunctions";
import { useEffect, useState } from "react";

interface QuotePageProps {
    name: string;
    button: string;
}

export function QuotePage({name, button}: QuotePageProps) {
    const [quotes, setQuote] = useState<Quote[] | undefined>(undefined);

    async function fetchMyQuotes() {
        if (name === "") {
            return null;
        }
        const quote = await ListQuotes(name);
        setQuote(quote);
    }
    
    useEffect(() => {
        fetchMyQuotes();
    }, [button]);
    
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