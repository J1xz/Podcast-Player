import './App.css'
import { SectionBox } from "./components/Modules";
import { SectionSongs } from "./components/Modules";
import { SectionCircle } from "./components/Modules";
import {user, arrayListenAgain, arrayArtist, arrayQuickP,arrayRecAlbum} from "./components/Api";


function App() {
  return (
    <>
      <header>
        <img className="logo" src="./src/assets/Header/Frame 5.png"></img>
        <input className="buscador" type="text" placeholder="Search"></input>
        <img className="share" src="./src/assets/Header/cast.png"></img>
        <img className="avatar" src="./src/assets/Header/Avatar.png"></img>
      </header>
      <main>
        <SectionBox
          user={user}
          texto1={user.name}
          texto2="Listen Again"
          arrayCard={arrayListenAgain}
          />
        <SectionCircle
          user={user}
          texto1="SIMILAR TO"
          texto2="[Artista]"
          arrayCard={arrayArtist}
          />
        <SectionSongs
          user={user}
          texto1="START RADIO FROM A SONG"
          texto2="Quick picks"
          arrayCard={arrayQuickP}
          />
        <SectionBox
          user={user}
          texto1=""
          texto2="Recommended albums"
          arrayCard={arrayRecAlbum}
        />
      </main>

      <footer className="reproductor">
        <div className='BotonesIzqGrupo' >
        <img className="BotonesIzq" src="/src/assets/Footer/skip_previous.png" alt="" />
        <img className="BotonesIzq" src="/src/assets/Footer/play_arrow.png" alt="" />
        <img className="BotonesIzq" src="/src/assets/Footer/skip_next.png" alt="" />

        </div>
        <div className="cancion">
          <img src="/src/assets/Body/slipknot.jpg" alt="" />
          <div className="text">
            <h4>Slipknot</h4>
            <p>Slipknot - 100K views - 12562 likes</p>
          </div>
          
          <img className ="botonesMid" src="/src/assets/Footer/thumb_down.png" alt="" /> 
          <img className ="botonesMid" src="/src/assets/Footer/thumb_up.png" alt="" /> 
          <img className ="botonesMid" src="/src/assets/Footer/more_vert.png" alt="" /> 
          
        </div>
        <div className='BotonesDerGrupo'>
        <img className="BotonesDer" src="/src/assets/Footer/repeat.png" alt="" />
        <img className="BotonesDer" src="/src/assets/Footer/volume_up.png" alt="" />
        <img className="BotonesDer" src="/src/assets/Footer/arrow_drop_down.png" alt="" />
        </div>
        
      </footer>
    </>
  )
}

export default App
