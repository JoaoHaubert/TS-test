import React from 'react';

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    //Enum
        category: Category
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

const Desctructuring = ({title, content, commentsQty, tags, category}: Props) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantity of comments: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h2>Category: {category}</h2>
        </div>
    )
}

export default Desctructuring