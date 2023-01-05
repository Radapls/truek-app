// Components
// Funcion que retorna un HATML simple, tambien puede retornar Css o JS

// Props
// Atributos, por ejemplo un titulo, se puedne interpolar variabeles, etc

// State
// Información que el componente va a manipular. Informaciones mantenidas por el componente //TODO(Concepto: Inmutabilidad)


import './App.css';
import './global.css';
import './Main.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
      <strong>
      <form>

        <div class="input-block">
          <label htmlFor=''>Usuario de Github</label>
          <input name='github_username' id='username_github'/>
        </div>

        <div class="input-block">
          <label htmlFor=''>Tecnologias</label>
          <input name='techs' id='techs'/>
        </div>

        <div class="input-group">
          <div class="input-block">
            <label htmlFor=''>Latitud</label>
            <input name='latitude' id='latitude'/>
          </div>

          <div class="input-block">
            <label htmlFor=''>Longitud</label>
            <input name='longitude' id='longitude'/>
          </div>

        </div>

        <button type='submit'>Enviar</button>

      </form>
      </strong>
      </aside>

      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/63562282?v=4"  alt="_blank"/>
              <div class="user-info">
                <strong> Juan Felipe Rada</strong>
                <span>Angular, TypeScript</span>
              </div>
            </header>
            <p>Politólogo* Aprendiendo a programar una linea a la vez</p>
            <a href="https://github.com/Radapls">Acceder al perfil de github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/63562282?v=4" alt="_blank"/>
              <div class="user-info">
                <strong> Juan Felipe Rada</strong>
                <span>Angular, TypeScript</span>
              </div>
            </header>
            <p>Politólogo* Aprendiendo a programar una linea a la vez</p>
            <a href="https://github.com/Radapls">Acceder al perfil de github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src="https://avatars.githubusercontent.com/u/63562282?v=4" alt="_blank"/>
              <div class="user-info">
                <strong> Juan Felipe Rada</strong>
                <span>Angular, TypeScript</span>
              </div>
            </header>
            <p>Politólogo* Aprendiendo a programar una linea a la vez</p>
            <a href="https://github.com/Radapls">Acceder al perfil de github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
