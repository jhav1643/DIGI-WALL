import React from "react";
import Navbar from "../Navbar/navbar";
import Box from "../Box/box";
import './myBoard.css';

function MyBoard() {
     return (
        <div className="container">
            <Navbar/>
            <br />
            <div>
                <h1 className="board">
                    My Board
                </h1>

                <Box />
            </div>
        </div>
    )
}

export default MyBoard;
