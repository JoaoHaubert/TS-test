import React from 'react';

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

const Desctructuring = ({title, content, commentsQty, tags}: Props) => {
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
        </div>
    )
}

export default Desctructuring