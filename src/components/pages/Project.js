import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../projects/ProjectForm'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                setProject(data)
            })
            .catch(err => console.log(err))
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }
    function editPost(project) {
        //budget validation
        if (project.budget < project.cost) {
            //message
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH", // método patch só atualiza o que você alterar
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                // message
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p><span>Categoria: </span>{project.category.name}</p>
                                    <p><span>Total de orçamento: </span>R${project.budget}</p>
                                    <p><span>Total de orçamento utilizado: </span>R${project.cost}</p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm handleSubmit={editPost} btnText="Concluir edição"
                                        projectData={project} />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project