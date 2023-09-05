
import React from 'react'


const Post = ({ post }) => {
	return (
		<div className='Post' style={{border: '1px solid black', margin: '1px', padding: '10px'}}>
			<p> 
				Author: {post.author} &nbsp; | &nbsp;
				Subject: {post.subject}
			</p>

			<p>{post.body}</p>
		</div>
	)
}

export default Post
