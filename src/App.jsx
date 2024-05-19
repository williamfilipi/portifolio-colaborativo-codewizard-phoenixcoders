import MeuComponente, { Cards, Inscricao } from "./components/About-o-projeto.collection/About"
import OurTeam from "./components/equipe.collection/team"


function App() {
  
  return (
   
   <div className="bg-dark-color-primary text-[#000] text-white">
      {/* todo: hero Component */}
      {/* todo: About Component */}
      {/* todo: Languagues and tec Component */}
       <OurTeam/> 

      
      {/* todo: About Component */}
      <MeuComponente/>
      <Cards
        title={"O que procuramos:"}
        text={"Paixão pela programação e desejo de aprender e crescer. Conhecimento básico de CSS, HTML e JavaScript (ou disposição para aprender). Capacidade de trabalhar em equipe e colaborar em projetos conjuntos. compromentimento e vontade de enfrentar desafios e superar obstáculos."}
      />

      <Cards
        title={"Responsabilidades:"}
        text={"Participar de desafios e atividades gamificadas para desenvolver habilidades em programação.Colaborar com outros membros da equipe para criar projetos frontend inovadores.Contribuir com ideias e feedback para aprimorar continuamente o projeto."}
      />

      <Cards 
        title={"Beneficios:"}
        text={"Acesso a uma comunidade de aprendizado dinâmica e colaborativa. Oportunidade de desenvolver habilidades práticas em programação. Experiência valiosa para enriquecer seu currículo e portfólio.Se você está pronto para embarcar em uma jornada emocionante de aprendizado e crescimento no mundo do desenvolvimento web, junte-se a nós no Frontend Fusion!"}
      />

      <Inscricao
      
      />

      {/* todo: Comment Component */}
      {/* todo: Footer Component */}

   </div>
  )
}

export default App
