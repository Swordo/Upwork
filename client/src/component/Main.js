import React, { Component } from 'react'

import SideBar from "./SideBar"
import RightSide from "./RightSide"

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <SideBar></SideBar>
                    <RightSide></RightSide>
                </div>
            </div>
        )
    }
}
