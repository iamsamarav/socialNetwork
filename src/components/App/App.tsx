import { Post } from '../Post/Post';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import '../../global.css'
import styles from './App.module.css'

export function App() {

  const posts = [
    {
      id: 1,
      author:{
        avatarUrl:'',
        name: 'Samara Vitória',
        role: 'Developer Front-End'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return,'},
        { type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-05-03 20:00:03')
    },

    {
      id: 2,
      author:{
        avatarUrl:'',
        name: 'Maria Luísa',
        role: 'Bióloga'
      },
      content: [
        { type: 'paragraph', content: 'Fala Jubis,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return,'},
        { type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-05-04 20:00:03')
    }
  ]
  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              /> 
              ) 
            })}
        </main>
      </div>
    </div>
  )
}
