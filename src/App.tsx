import { useState } from "react";
import './App.css'

import SideBar from './components/SideBar/SideBar';
import PlaylistForm from "./components/Playlist/PlaylistForm";
import Home from './components/Home';



function App() {
  const [view, setView] = useState<"home" | "playlist">("home");
  const [item, setItem] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
const [list, setList] = useState<
    Array<{ title: string; description: string; imageUrl?: string }>
  >([]);

function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setList([...list, item]);
    setItem({ title: "", description: "", imageUrl: "" });
}
  return (
    <>
      <header>
        <img className="logo" src="./src/assets/Header/Frame 5.png"></img>
        <input className="buscador" type="text" placeholder="Search"></input>
        <img className="share" src="./src/assets/Header/cast.png"></img>
        <img className="avatar" src="./src/assets/Header/Avatar.png"></img>
      </header>
      
      <div className="main-container">
        <SideBar setView={setView} list={list} />
        {view === "home" ? (
          <Home />
        ) : (
          <PlaylistForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
       

      
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
