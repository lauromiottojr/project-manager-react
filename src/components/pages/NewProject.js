import { useHistory } from 'react-router-dom'

import ProjectForm from '../projects/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    function createPost(project) {
        // initialize costs and services
        project.cost = 0
        project.service = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newprojectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projeto" />
        </div>
    )
}
export default NewProject

