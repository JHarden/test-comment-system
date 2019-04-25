import React from "react";
import styled from "styled-components";

export interface CreateArticleProps {
    onCreateArticle: (title: string, body: string, date: string) => void;
}

const StyledArticle = styled.div`
    background: #eaeaea;
    margin: 20px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;


const StyledArticleInput = styled.input`
    font-size: 14px;
    min-width: 50%;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin: 20px;
`

const StyledTextArea = styled.textarea`
    font-size: 14px;
    min-width: 50%;
    height: 80px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin: 20px;
`
const SubmitArticleButton = styled.button`
    font-size: 20px;
    padding: 20px;
    background: #4ca4ff;
    left: 20px;
    border-radius: 5px;
    color: #fff;
    width: auto;
    height: 35px;
    cursor: pointer;
    position: relative;
    display: block;
    margin: 20px 20px 20px 0;
    line-height: 0.1;
`;


class CreateArticle extends React.Component<CreateArticleProps, {}> {

    private title: string = '';
    private body: string = '';

    private onSubmit = () => {
        const date = new Date().toLocaleString();
        this.props.onCreateArticle(this.title, this.body, date);
    }

    private handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.title = event.currentTarget.value;
    }

    private handleBodyChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        this.body = event.currentTarget.value;
    }

    render() {
        return(
            <StyledArticle>  
                <StyledArticleInput type='text' name='title' placeholder={'enter a title...'}onChange={this.handleTitleChange}></StyledArticleInput>
                <StyledTextArea name='body' placeholder={'enter some text...'} onChange={this.handleBodyChange}></StyledTextArea>
                <SubmitArticleButton onClick={this.onSubmit}>Submit</SubmitArticleButton>
            </StyledArticle>
        )
    }
}

export default CreateArticle;