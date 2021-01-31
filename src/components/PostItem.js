import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const PostItem = ({ id, title, createdAt }) => (
    <Link to={`/edit/${id}`} className='list-item'>
        <h3 className='list-item__title'>{title}</h3>
        <p className='list-item__data'>{moment(createdAt).format("MMM Do YY")}</p>
    </Link>
)

export default PostItem