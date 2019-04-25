import React from "react";

export interface CreateArticleProps {
    author: string;
}

class CreateArticle extends React.Component<CreateArticleProps, {}> {

    private title: string = '';
    private body: string = '';
    private votes: number = 1;

    private onSubmit = () => {
        console.log('submitted');
    }

    render() {
        const { author } = this.props;
        return(
            <div>  
                <div>by: {author} </div>
                <input type='text' name='title'></input>
                <div>
                    <input type='textArea' name='body'></input>
                </div>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default CreateArticle;