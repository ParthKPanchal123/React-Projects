import React, { Component, createRef } from 'react'

export default class Classref extends Component {
    constructor() {
        super()
        this.inputRef = createRef()
    }

    handleRef = (ref) => {
        ref.current.style.color = "red"
        ref.current.style.backgroundColor = "blue"
    }
    render() {



        return (
            <>
                <h1 ref={this.inputRef}>Parth Panchal</h1>
                <button on onClick={() => this.handleRef(this.inputRef)}>Click Me</button>
            </>
        )
    }
}
