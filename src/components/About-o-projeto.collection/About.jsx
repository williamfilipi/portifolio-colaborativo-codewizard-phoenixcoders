import Bolsa from "./img/bolsa.png"
import Alvo from "./img/alvo.png"
import Estrela from "./img/EstrelaPai.png"

export default function MeuComponente() {
    return(
            <div>
                <h1 className="font-bold text-4xl text-center">Sobre o Projeto Front end Fusion</h1>
                <p className="mt-12 text-center m-10">O Frontend Fusion é um projeto inovador focado em proporcionar um aexperiência envolvente de aprendizado de programação, Nosso objetivo é oferecer um ambiente colaboratico onde entusiastas de tecnologia possam mergulhar no mundo de desenvolvimento frontend, explorando CSS, HTML e JavaScript através de desafios e atividades interativas.</p>
            </div>
    )
};

export function Cards() {
    return (
        <>
            <div className="bg-dark-color-secondary mx-20 rounded mb-8">
                <div className="-ml-2 mr-28 p-6 flex itens-start">
                    <img className="max-h-16 m-2" src={Bolsa}/>
                    <div className="flex-col">
                        <h2 className=" font-bold">O que procuramos:</h2>
                        <p>Paixão pela programação e desejo de aprender e crescer. 
                        Conhecimento básico de CSS, HTML e JavaScript (ou disposição para aprender). Capacidade de trabalhar em equipe e colaborar em projetos conjuntos. compromentimento e vontade de enfrentar desafios e superar obstáculos.</p>  
                    </div> 
                </div>
            </div>
            <div className="bg-dark-color-secondary mx-20 rounded mb-8 ">
                <div className="p-6 flex itens-start">
                    <img className="max-h-16 m-2" src={Alvo}/>
                    <div className="flex flex-col">
                        <h2 className="font-bold">Responsabilidades:</h2>
                        <p>Participar de desafios e atividades gamificadas para desenvolver habilidades em programação.       Colaborar com outros membros da equipe para criar projetos frontend inovadores. Contribuir com ideias e feedback para aprimorar continuamente o projeto.!</p> 
                    </div>
                </div>
            </div>
            <div className="bg-dark-color-secondary mx-20 rounded mb-8 ">
                <div className="-ml-2 mr-28 p-6 flex itens-start">
                    <img className="max-h-16 m-2" src={Estrela}/>
                    <div className="flex-col">
                        <h2 className="font-bold">Beneficios:</h2>
                        <p>Acesso a uma comunidade de aprendizado dinâmica e colaborativa. Oportunidade de desenvolver habilidades práticas em programação. Experiência valiosa para enriquecer seu currículo e portfólio.Se você está pronto para embarcar em uma jornada emocionante de aprendizado e crescimento no mundo do desenvolvimento web, junte-se a nós no Frontend Fusion!</p> 
                    </div>
                </div>
            </div>
        </>     
    )
}

export function Inscricao(){
    return (
        <div className="text-center">
            <h3 className="mt-12 text-center mx-96 text-xl">Estamos ansiosos para receber sua inscrição e dar as boas-vindas a você em nossa comunidade!</h3>
            <button className="bg-grenn-button px-8 py-2 justify-center itens-center my-8 rounded-lg text-xl">Quero Participar</button>
        </div>
    )
}