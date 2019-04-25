import React from "react";

export interface CommentProps {
    onShowComment: (text: string, date: string ) => void;
}

const commentStyle = {
    color: 'green',
    outline: '1px solid green'
}
class CreateComment extends React.Component<CommentProps, {}> {

    private text: string = '';
    private onSubmit = () => {
        this.props.onShowComment(this.text, new Date().toString())
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.text = event.currentTarget.value;
    }

    render() {

        return (
            <div style={commentStyle}>
                <input type='text' onChange={this.handleChange}></input>
                <button onClick={this.onSubmit}></button>
            </div>
        )
    }
}

export default CreateComment;