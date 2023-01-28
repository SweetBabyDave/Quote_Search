import { Quote, RandomQuote } from "../quotefunctions";
import { useEffect, useState } from "react";

export function HomeQuotePage() {
    const [quote, setQuote] = useState<Quote | undefined>(undefined);

    async function fetchMyQuote() {
        const quote = await RandomQuote();
        setQuote(quote);
    }

    useEffect(() => {
        fetchMyQuote();
    }, []);
    if (quote === undefined) {
        return <p>Loading...</p>
    }
    if(quote.author === "") {
        quote.author = "Unknown";
    }
    return (
        <div id="quotediv">
            <p>{quote.content}</p>
            <p>-{quote.author}</p>
        </div>
    );
}