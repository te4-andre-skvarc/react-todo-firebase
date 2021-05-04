import React, { Component } from "react";

export default class Info extends Component {
    constructor() {
       super();
       this.state = {
           name: "React"
       };
    }


    render() {
        return <div>Enter a Todo you have to do this week, day, year!</div>
    }

}