/*
export default function Home(props) {
    return (
        <h2>{props.g}This is a Home Component.....</h2>
    );
}
   */ 

// class component
import { Component } from "react";
class Home extends Component {
    render() {
        return (
             <h3>{this.props.name} This is class component</h3>
        )
    }
}
export default Home;