import React, { Component } from "react";
class PathNotFound extends Component{
    constructor(){
        super()
    }
    render(){
        return(
        <div className="not-found-container">
                <div className="path-not-found">
                    <h3>Error 404 : Path Not Found </h3>
                    <p>Path is not available</p>
                </div>
            </div>
    )}
}


export default PathNotFound;