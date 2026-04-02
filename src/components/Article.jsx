// import React from "react";

// function Article(props) {
//     return (
//         <div >
//             <h1>Article</h1>
//             <h3>Title: {props.title}</h3>
//             <p>lorem ipsum dolor sit amet</p>
//         </div>
//     )
// }

// export default Article;

import React, {Component} from "react";

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleClick2 = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div >
                <h1>Article</h1>
                <h3>Count: {this.state.count}</h3>
                <h3>Title: {this.props.title}</h3>
                <p>lorem ipsum dolor sit amet</p>
                <button onClick={this.handleClick}>Increament</button>
                <br/>
                <button onClick={this.handleClick2}>Decreament</button>
            </div>
        )
    }
}
export default Article;