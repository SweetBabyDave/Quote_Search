import { Quote } from "../components/Quote";
import { SearchBar } from "../components/SearchBar";
import { useEffect, useState } from "react";

export function QuotePage() {

    async function loadQuotes() {
        try {
            const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=Thomas Jefferson");
            const quote = await result.json();
            console.log(quote);
            
        } catch (error) {
            console.log("Quote API did not succeed.");
        }
    }
    
    useEffect(() => {
    
    }, []);

    return (
        <div>

        </div>
    );
}