import {useState, useEffect} from 'react'
import styles from './RepoList.module.css'



const ReposList = () => {

    const [repos, setRepos] = useState([])
    useEffect (() => {
        fetch('https://api.github.com/users/Talisson-b/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson)
            console.log(resJson)
        })
    }, [])
    return (
       <div className='container'>
         <ul className={styles.list}>
            {repos.map(repositorio => (
                <>
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.listName}>
                            <b>Nome:</b> {repositorio.name} 
                        </div>
                        <div className={styles.listLanguage}>
                            <b>Linguagem:</b> {repositorio.language} 
                        </div>
                      
                       <a className={styles.itemLink} target='blank' href={repositorio.html_url}>Visitar no Github</a> 
                       
                    </li> 
                </>
            ))}
           
        </ul>
       </div>
    )
}

export default ReposList