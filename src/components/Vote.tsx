import React from "react";

export interface VotesProps {
    votes: number;
    onVote: (votes: number) => void;
    hasVoted: boolean;
}

const voteStyle ={
    color: 'purple',
    outline: '1px solid purple'
}

const voteArrow = {
    background: 'red',
    width: '30px',
    height: '30px'
}


class Vote extends React.Component<VotesProps, {}> {

    private handleOnClick = () => {
        !this.props.hasVoted && this.props.onVote(this.props.votes+1);
    }

    render() {
        const {votes, hasVoted} = this.props;

        return(
            <div style={voteStyle}> 
                <div style={voteArrow} onClick={this.handleOnClick}> VOTE </div>
                <div>{votes}</div>
            </div>
        )
    }
}

export default Vote;