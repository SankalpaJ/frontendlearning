import Home from './Home';
export default function Greeting(props) {
    let greet = "Good Morning!";
    return (
        <div>
            <h1>Hello {props.name}, How are you???</h1>
            <h2>your age is {props.age}</h2>
            <Home g={greet}/>
        </div>
    );
}