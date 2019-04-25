import React from "react";
import styled from "styled-components";

export interface VotesProps {
    isLoggedIn: boolean;
    votes: number;
    onVote: (votes: number) => void;
    hasVoted: boolean;
};

const BlueArrow = styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #4ca4ff;
`;

const GreyArrow = styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid grey;
`;

const VoteWrapper = styled.div`
    width: 70px;
    height: 70px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65px;
    align-items: center;
    >div {
        padding-top: 10px;
        font-weight: bold;
    }
`;

class Vote extends React.Component<VotesProps, {}> {
    private handleOnClick = () => this.props.isLoggedIn && !this.props.hasVoted && this.props.onVote(this.props.votes + 1);
    
    render() {
        const { votes, hasVoted } = this.props;
        return (
            <VoteWrapper>
                {hasVoted ?
                    <BlueArrow onClick={this.handleOnClick}></BlueArrow>
                    :
                    <GreyArrow onClick={this.handleOnClick}></GreyArrow>
                }
                <div style={hasVoted? {color: '#4ca4ff'} : {color: 'grey', }}>{votes}</div>
            </VoteWrapper>
        )
    }
}

export default Vote;