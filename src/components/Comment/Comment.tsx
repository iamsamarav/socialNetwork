import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comment (){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/77129732?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samara Vitória</strong>
                            <time title="20 de Maio às 16:42h" dateTime="2023-05-20 08:00">Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'><Trash size={24}/></button>
                    </header>
                    <p>
                        Muito bom, Richard!! Parabéns!!
                    </p>
                </div>
                    <footer>
                        <button>
                       <ThumbsUp size={20}/> 
                       Aplaudir <span>20</span>
                        </button>
                    </footer>
            </div>
        </div>
    )
}