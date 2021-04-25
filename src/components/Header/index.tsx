import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Cookies from 'js-cookie';
import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  const themeRef = useRef<HTMLSelectElement>(null)

  function setupChangeTheme() {
    Cookies.set('theme', themeRef.current.value)
  }

  return (
    <header className={styles.container}>
      <img src="/logo-light.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <select name="theme" ref={themeRef} onChange={setupChangeTheme} className="theme-select">
        <option value="default">Selecione um Tema</option>
        <option value="dark">Tema Escuro</option>
        <option value="light">Tema Claro</option>
      </select>
    </header>
  )
}