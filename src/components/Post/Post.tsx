import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/77129732?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Samara Vitória</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="20 de Maio às 16:42h" dateTime="2023-05-20 08:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p> <a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
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
