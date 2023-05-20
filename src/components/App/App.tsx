import { Post } from '../Post/Post';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import '../../global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar/>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
