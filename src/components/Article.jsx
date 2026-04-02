import React from "react";

function Article(props) {
    return (
        <div >
            <h1>Article</h1>
            <h3>Title: {props.title}</h3>
            <p>lorem ipsum dolor sit amet</p>
        </div>
    )
}

export default Article;