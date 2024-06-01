import MeuComponente, { Cards, Inscricao } from "./components/About-o-projeto.collection/About"
import Comments from "./components/About-o-projeto.collection/comments" 
import OurTeam from "./components/equipe.collection/team"
import Footer from "./components/About-o-projeto.collection/footer"
function App() {
  
  return (
   
   <div className="bg-dark-color-primary text-[#000] text-white">
      {/* todo: hero Component */}
      {/* todo: About Component */}
      {/* todo: Languagues and tec Component */}
       <OurTeam/> 

      
      {/* todo: About Component */}
      <MeuComponente/>
      
      

      <Cards/>


      <Inscricao/>

      <Comments/>
      <Footer/>

      {/* todo: Comment Component */}
      {/* todo: Footer Component */}

   </div>
  )
}

export default App
