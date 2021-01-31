export default (posts, id) => {
    return posts
        .filter((post) => post.id === id)
        .map((post) => post.title)
}