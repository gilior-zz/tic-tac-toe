import React, {FunctionComponent} from 'react';
import {Move} from "../model/models";
import './sqaure_board.module.css'

interface OwnProps {
    sub_arr_of_moves: Move[]
}

type Props = OwnProps;

const Sqaure_board: FunctionComponent<Props> = (props) => {

    return (
        <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
                    const item = props.sub_arr_of_moves.find(item => item.x == number / 3 && item.y == number % 3);
                    if (number % 3 == 0) {

                        return (
                            <>
                                <br/>
                                <span></span>
                            </>
                        )
                    } else
                        return (
                            <span>{item && item.sign}</span>
                        )
                }
            )
            }
        </>

    )
};

export default Sqaure_board;
