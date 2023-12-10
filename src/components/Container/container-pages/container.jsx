import styles from '../styles/container-pages.module.css'

const ContainerPages = ({children}) => {
  return (
    <div className={styles.pages}>
      {children}
    </div>
  )
}

const ContainerContent = ({children}) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export {
  ContainerPages,
  ContainerContent
}