import React from 'react'
import { startEditPost, startRemovePost } from '../actions/posts'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import ConfirmModal from './ConfirmModal'
import selectPostTitle from '../selectors/post-title'

export class EditPostPage extends React.Component {
    state = {
        selectedPost: undefined,
        postId: undefined
    }
    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post)
        this.props.history.push('/dashboard')
    }
    onRemove = (post) => {
        this.props.startRemovePost(this.props.post.id)
        this.props.history.push('/dashboard')

    }

    onOpenModal = (posts, post) => {
        const selectedTitle = selectPostTitle(this.props.posts, this.props.post.id)
        const { title } = post
        this.setState(() => ({ selectedPost: selectedTitle }))
        this.setState(() => ({ postId: this.props.post.id }))
    }
    onCancelRemove = () => {
        this.setState(() => ({ selectedPost: '' }))
    }

    render(props) {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h3 className='page-header__title'>Compartilhe seu post através do link: <span>http://localhost:8080/edit/{this.props.post.id}</span></h3>
                    </div>

                </div>
                <div className='content-container'>
                    <PostForm post={this.props.post}
                        onSubmit={this.onSubmit}
                    />
                    <button className='button button--secondary' onClick={this.onOpenModal}>Remover</button>
                </div>


                <ConfirmModal
                    selectedPost={this.state.selectedPost}
                    onCancelRemove={this.onCancelRemove}
                    removePost={this.onRemove}
                    postId={this.state.postId}
                />
            </div>

        )
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id),
    posts: state.posts

})

const mapDispatchToProps = (dispatch) => ({
    startEditPost: (id, updates) => dispatch(startEditPost(id, updates)),
    startRemovePost: (data) => dispatch(startRemovePost(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)