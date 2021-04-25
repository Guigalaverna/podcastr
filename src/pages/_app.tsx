import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import PlayerProvider from '../contexts/PlayerContext';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const theme = Cookies.get('theme')

    switch (theme) {
      case 'dark':
        require('../styles/theme/dark.scss')
        break;
    
      case 'light':
        require('../styles/theme/light.scss')
        break;

      case 'default':
        require('../styles/theme/light.scss')
        break;

      default:
        require('../styles/theme/light.scss')
        break;
    }
  }, [])

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
