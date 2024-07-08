import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid} from "uuid"


function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(false)
  const [colaboradores, actualizarColaboradores]= useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland",
    puesto: "Instructor",
    fav :true
  },
  {
    id: uuid(),
    equipo:"programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genessys rodon",
    puesto: "Instructor",
    fav :false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie",
    puesto: "Instructora",
    fav :false
  },
  {
    id: uuid(),
    equipo: "programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian",
    puesto: "Instructor y head",
    fav :false
  },
  {
    id: uuid(),
    equipo:"Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Dario",
    puesto: "Dev Fullstack",
    fav :false
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador=(colaborador)=>{
    console.log ("Nuevo Colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id)=>{
  console.log("Eliminar colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
} 
const actualizarColor = (color, id)=>{
  console.log("Actualizar:", color, id)
  const equiposActualizados= equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario =color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

const crearEquipo =(nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

const like = (id)=> {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) =>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      { mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador= {registrarColaborador}
      crearEquipo ={crearEquipo}
      />}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo=== equipo.titulo)}
        eliminarColaborador ={eliminarColaborador}
        actualizarColor={actualizarColor}
        like = {like}
        />)}
      
      <Footer />

    </div>
  );
}

export default App;
