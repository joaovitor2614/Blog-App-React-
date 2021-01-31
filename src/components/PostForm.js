import React from 'react'
import moment from 'moment'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.post ? props.post.title : '',
            content: props.post ? props.post.content : '',
            createdAt: props.post ? moment(props.post.createdAt) : moment(),
            error: ''
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.content) {
            this.setState(() => ({ error: 'Por favor insira título e conteúdo' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                content: this.state.content,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (


            <form className='form' onSubmit={this.onSubmit}>

                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    className='text-input'
                    type='text'
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    placeholder='Insira título do post...'
                />
                <textarea
                    className='textarea'
                    value={this.state.content}
                    onChange={this.onContentChange}
                    placeholder='Insira conteúdo do post...'
                />
                <div>
                    <button className='button'>Salvar</button>
                </div>




            </form>


        )
    }
}