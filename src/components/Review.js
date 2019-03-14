import React from 'react';
import "./Review.scss";

function Review(props){

    const rows = props.rounds.map((round, index) => {
        return(
            <tr key={index}>
                <td><a target="_blank" rel="noopener noreferrer" href={round.true.url}>{round.true.title}</a></td>
                <td><a target="_blank" rel="noopener noreferrer"  href={round.false.url}>{round.false.title}</a></td>
            </tr>
        )
    });

    return(
        <div className="review">
            <table> 
                <thead>
                    <tr>
                        <th>/r/nottheonion <p>(real headline)</p></th>
                        <th>/r/theonion <p>(false headline)</p></th>
                    </tr>
                </thead>          
                <tbody>
                    {rows}
                </tbody> 
            </table>
        </div>
    );
}

export default Review;