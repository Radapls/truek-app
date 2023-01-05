// Components
// Funcion que retorna un HATML simple, tambien puede retornar Css o JS

// Props
// Atributos, por ejemplo un titulo, se puedne interpolar variabeles, etc

// State
// Información que el componente va a manipular. Informaciones mantenidas por el componente //TODO(Concepto: Inmutabilidad)

import React, { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';
import './global.css';
import './Main.css';
import './Sidebar.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
import Header from './components/Header';

function App() {
    const [devs, setDevs]= useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/users')

            setDevs(response.data)
        }

        loadDevs();
    }, [])

    async function handleAddDev(data){

        const response = await api.post('/users', data)

            setDevs([...devs, response.data])
    }

  return (

    <>
        <Header/>

        <div id="app">
              <aside>
                  <strong> Registrar</strong>
                  <DevForm onSubmit={handleAddDev} />
              </aside>

              <main>
                  <ul>
                      {devs.map(dev => (
                          <DevItem key={dev._id} dev={dev} />
                      ))}
                  </ul>
              </main>
        </div>
    </>
  );
}

export default App;
