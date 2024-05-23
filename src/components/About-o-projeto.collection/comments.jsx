import Tim from "./img/Personagem_1.png"
import Guido from "./img/Personagem_2.png"
import Linux from "./img/Personagem_3.png"
import EstrelaCompleta from "./img/Estrela.png"
import EstrelaMetade from "./img/estrelaMetade.png"

function Comments() {
   return ( 
      <>
        <div className="text-center m-10">
            <h4>Comentários e Avaliações</h4>
        </div>
        <section className="flex flex-nowrap">
            <div className="bg-dark-color-secondary shadow rounded-lg p-4 m-3">
               <Images/>  
                  <p>"Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade."</p>
            </div>
                
               <div className="bg-dark-color-secondary shadow rounded-lg p-4 m-3">
               <Images/>
                  <p>"O 'Frontend Fusion' é uma abordagem inovadora para destacar talentos múltiplos em um único espaço. Acredito que enfatizar a acessibilidade e a inclusão pode levar esse projeto a outro nível. Certifiquem-se de que a experiência do usuário seja igualmente enriquecedora para todos."
                  </p>
                </div>
               <div className="bg-dark-color-secondary shadow rounded-lg p-4 m-3">
               <Images/>
                  <p>"Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade."</p>
               </div>
         </section>
      </>          
   );
}

export default Comments;


export function Images() {
   return(
      <div className="flex p-4">
         <img src={EstrelaCompleta}></img>
         <img src={EstrelaCompleta}></img>
         <img src={EstrelaCompleta}></img>
         <img src={EstrelaCompleta}></img>
         <img src={EstrelaMetade}/> 
      </div>
   )
}
