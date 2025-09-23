import  Home from "./Home";
export default function Greeting(props) {
    let greet = "Good Afternoon";
    return (
        <div>
            <h1>Hello {props.name}, how are you?</h1>
            <h1>Your age is{props.age}</h1>
             <Home g={greet}/>
        </div>
       
    )
}