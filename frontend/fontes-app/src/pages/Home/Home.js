import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/ProjectContext';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import Modal from 'react-modal';
import './styles.css';

Modal.setAppElement('#root');


export default function Home() {
  const { username } = useContext(ProjectContext);
  const [dataTable, setDataTable] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ zip_code: 0, title: '', cost: 0, deadline: '' });
  const [isDisabled, setDisabled] = useState(true)

  const handleChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  }

  const shouldEnableBtnnNewProject = () => {
    if (state.zip_code.length === 8
      && state.title.length > 0
      && state.cost > 0
      && state.deadline.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  useEffect(() => {
    shouldEnableBtnnNewProject();
  }, [state])
  

  const resetState = () => {
    setState({ zip_code: 0, title: '', cost: 0, deadline: '' });
  } 

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    resetState();
    setIsOpen(false);
  }
  const headers = {
    username,
    'Content-Type': 'application/json'
  }

  async function createProject(project) {
    const body = JSON.stringify({
      ...project,
      cost: Number(project.cost),
    });
    const res = await fetch('http://localhost:8080/project', {
      method: 'POST',
      headers,
      body,
    })
      .then((res) => res.json())
      .catch(res => console.log(res.ERROR));

      if (res.id) {
        const project = await getProjectById(res.id);
        setDataTable([...dataTable, project]);
      }
      
      closeModal();
  }

  async function getAllProjectsByUser() {
    const { projects } = await fetch('http://localhost:8080/projects', {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .catch(res => console.log(res.ERROR));

      projects.map((project) => {
        return getProjectById(project.id)
      });
      
  }

  async function getProjectById(id) {
  const { project } = await fetch(`http://localhost:8080/project/${id}`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .catch(res => console.log(res.ERROR));

    return project;
  }


  async function updateProjectById(project, id) {
  return fetch(`http://localhost:8080//projects/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(project)
  })
    .then(res => res.json())
    .catch(res => console.log(res.ERROR));
  }


  async function finalizeProjectById(id) {
  return fetch(`http://localhost:8080/projects/${id}/done`, {
    method: 'PATCH',
    headers,
  })
    .then(res => res.json())
    .catch(res => console.log(res.ERROR));
  }

  async function deleteProjectById(id) {
  return fetch(`http://localhost:8080/projects/${id}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res.json())
    .catch(res => console.log(res.ERROR));
  }

  const handleDeleteClick = (e, row) => {
    e.preventDefault();
    console.log("Deletar projeto", row);
  };

  const handleEditButton = (e, row) => {
    e.preventDefault();
    console.log("Editar projeto", row);
  };

  const columns = [
    {
      button: true,
      cell: (row) => (
        <button
            className="button-5"
            onClick={(e) => handleEditButton(e, row)}
        >
            Editar
        </button>
    ),
    },
    {
      name: 'Título',
      selector: (row) => row.title
    },
    {
      name: 'Cidade',
      selector: (row) => row.city
    },
    {
      name: 'Estado',
      selector: (row) => row.uf
    },
    {
      name: 'Preço',
      selector: (row) => row.cost
    }, 
    {
      name: 'Data de criação',
      selector: (row) => row.created_at,
      format: (row) => moment(row.created_at).locale('pt-br').format('DD/MM/YYYY - HH:mm')
    },
    {
      name: 'Prazo de Finalização',
      selector: (row) => row.deadline,
      format: (row) => moment(row.deadline).locale('pt-br').format('DD/MM/YYYY - HH:mm')
    },
    {
      name: 'Concluído',
      selector: (row) => row.done ? "Finalizado" : "Em andamento"
    },
    {
      button: true,
      cell: (row) => (
        <button
            className="button-5 del"
            onClick={(e) => handleDeleteClick(e, row)}
        >
            <span>X</span>
        </button>
    ),
    }
  ]

  return (
      <div>
        <DataTable
          title="Tabela de Projetos"
          columns={ columns }
          data={ dataTable }
        />
        <div className='button-container'>
          <button className='button-5 new' onClick={ openModal } type='button'>Novo Projeto</button>
          {/* <button className='button-5 new' onClick={() => createProject(newProject)} type='button'>Novo Projeto</button> */}

        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal de exemplo"
        > 
          <section className='modal-container'>
            <h2 className='modal-title'>Novo Projeto</h2>
            <input name="title" type="text" placeholder="Título do Projeto" autoFocus={ true } onChange={handleChange} />
            <input name="zip_code" type="number" placeholder="CEP" onChange={handleChange} />
            <input name="cost" type="number" placeholder="Valor" onChange={handleChange} />
            <input name="deadline" type="datetime-local" placeholder="Prazo" onChange={handleChange} />
            <input type="button" value="Criar projeto" className="button-5" disabled={ isDisabled } onClick={ () => createProject(state) } />
          </section>
        </Modal>
      </div>
  )
}