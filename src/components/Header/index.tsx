import format from 'date-fns/format' //importando a lib para datas (tem que instalar (date-fns))
import ptBR from 'date-fns/locale/pt-BR' //importando o idioma

import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  }) //formatacao para a data atual

  return (
   <header className={styles.headerContainer}>
     <img src="/logo.svg" alt="Podcastr"/>

     <p>O melhor para você ouvir, sempre</p>

     <span>{currentDate}</span>
   </header>
  )
}