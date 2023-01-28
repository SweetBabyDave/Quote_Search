export interface Quote {
    _id: string
    author: string
    content: string
}

export async function RandomQuote(): Promise<Quote> {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const quote = await result.json();
    return quote;
}

export async function ListQuotes(name: string): Promise<Quote[]> {
    const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${name}`);
    const quote = await result.json();
    return quote.results;
}