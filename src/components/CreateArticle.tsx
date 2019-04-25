import React from "react";

export interface CreateArticleProps {
    onCreateArticle: (title: string, body: string, date: string) => void;
}

const style = {
    outline: '1px solid blue',
    color: 'blue'
}
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
            <div style={style}>  
                <input type='text' name='title' onChange={this.handleTitleChange}></input>
                <div>
                    <textarea name='body' onChange={this.handleBodyChange}></textarea>
                </div>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default CreateArticle;