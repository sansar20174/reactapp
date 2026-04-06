import React from "react";

function Article(props) {
    const [inputValue, setInputValue] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    const handleClick2 = () => {
        setCount(count - 1);
    }
    const handleClick3 = () => {
        setCount(0);
    }
    const handleClick4 = () => {
        setCount(count * inputValue);
    }
    return (
        
        <div >
            <h1>Article</h1>
            <h3>Title: {props.title}</h3>
            <p>This is count: </p>
            <h2>{count}</h2>
            <button onClick={handleClick}>Increament</button>
            <br/>
            <button onClick={handleClick2}>Decreament</button>
            <br/>
            <button onClick={handleClick3}>Reset</button>
            <br/>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
            <button onClick={handleClick4}>Double</button>
        </div>
    )
}

export default Article;

// import React, {Component} from "react";

// class Article extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     handleClick2 = () => {
//         this.setState({ count: this.state.count - 1 })
//     }

//     render() {
//         return (
//             <div >
//                 <h1>Article</h1>
//                 <h3>Count: {this.state.count}</h3>
//                 <h3>Title: {this.props.title}</h3>
//                 <p>lorem ipsum dolor sit amet</p>
//                 <button onClick={this.handleClick}>Increament</button>
//                 <br/>
//                 <button onClick={this.handleClick2}>Decreament</button>
//             </div>
//         )
//     }
// }
// export default Article;