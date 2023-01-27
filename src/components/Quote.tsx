interface QuoteProps {
    id: string;
    author: string;
    content: string;
}

export function Quote({author, content}: QuoteProps) {
    return (
        <div>
            {content}
            {author}
        </div>
    );
}