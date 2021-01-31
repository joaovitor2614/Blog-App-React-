import React from 'react'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import selectPosts from '../selectors/posts'

const PostList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-desktop'>Título</div>
            <div className='show-for-desktop'>Data</div>
            <div className='show-for-mobile'>Posts</div>
        </div>
        <div className='list-body'>
            {
                props.posts.length === 0 ? (
                    <p className='list-item--message'>Nenhum post adicionado</p>
                ) : (
                        props.posts.map((post) => {
                            return <PostItem key={post.id} {...post} />
                        })
                    )
            }

        </div>

    </div>
)

const mapStateToProps = (state) => ({
    posts: selectPosts(state.posts, state.filters)
})

export default connect(mapStateToProps)(PostList)