import React from 'react'
import { connect } from 'react-redux'
import selectPosts from '../selectors/posts'
import { Link } from 'react-router-dom'

export const PostSummary = ({ postsTotal }) => {
    const postWord = postsTotal === 1 ? 'post' : 'posts'
    return (
        <div className='page-header'>
            <div className='content-container'>
                {
                    postsTotal === 0 ? '' : (
                        <h1 className='page-header__title'>Você tem <span>{postsTotal}</span> {postWord}</h1>
                    )
                }
                <Link to='/create'>
                    <button className='button page-header__actions'>Criar post</button>
                </Link>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    const visiblePosts = selectPosts(state.posts, state.filters)
    return {
        postsTotal: visiblePosts.length
    }
}

export default connect(mapStateToProps)(PostSummary)