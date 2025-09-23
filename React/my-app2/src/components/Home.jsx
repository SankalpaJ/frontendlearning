/*
export default function Home(props) {
    return (
        <h3>{props.g} Home Component</h3>
    )
}     */
//------------------------------------------------------

// class Component
import { Component } from "react";
class Home extends Component{
    render() {
        return (
            <h3>{this.props.name} This is class Component</h3>
        )
    }
}
export default Home;