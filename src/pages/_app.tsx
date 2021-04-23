import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import PlayerProvider from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <PlayerProvider>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </PlayerProvider>
    </div>
  )
}

export default MyApp
