import React, {FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import * as model from './model/models'
import {Move} from "./model/models";
import Sqaure_board from "./sqaure_board/sqaure_board";

const App = () => {
    let full_arr_of_moves: Move[] = [{index: 0, label: 'Go to game start'}];
    const [sub_arr_of_moves, sub_arr_of_points_update] = useState(full_arr_of_moves);
    const [pannel_char, pannel_char_update] = useState('X');
    const [pannel_label, pannel_labelupdate] = useState('Next player');

    return (
        <Sqaure_board sub_arr_of_moves={sub_arr_of_moves}/>
    )
}


export default App;
