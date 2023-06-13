import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

interface postProps{
    author: Object
    content: Object
    publishedAt: Date
}

export function Post(props: postProps) {

    const authorPost = Object.values(props.author)
    const contentPost = Object.values(props.content)
    console.log(contentPost)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://avatars.githubusercontent.com/u/77129732?v=4'/>
                    <div className={styles.authorInfo}>
                        <strong>{authorPost[1]}</strong>
                        <span>{authorPost[2]}</span>
                    </div>
                </div>
                <time title="20 de Maio às 16:42h" dateTime="2023-05-20 08:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                {contentPost.map(post => {
                     return(post.type =='paragraph' ? <p>{post.content}</p> : <p><a>{post.content}</a></p>)})}
            </div>

            <form className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Escreva um comentário...'></textarea>                
                <button type="submit">Comentar</button>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}
