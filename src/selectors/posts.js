import moment from 'moment'
// pegar posts 

export default (posts, { text }) => {
    return posts.filter((post) => {
        const textMatch = post.title.toLowerCase().includes(text.toLowerCase())

        return textMatch
    }).sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1
    })
}