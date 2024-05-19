export default function MeuComponente() {
    return(
            <div>
                <h1 className="font-bold text-4xl text-center">Sobre o Projeto Front end Fusion</h1>
                <p className="mt-12 text-center m-10">O Frontend Fusion é um projeto inovador focado em proporcionar um aexperiência envolvente de aprendizado de programação, Nosso objetivo é oferecer um ambiente colaboratico onde entusiastas de tecnologia possam mergulhar no mundo de desenvolvimento frontend, explorando CSS, HTML e JavaScript através de desafios e atividades interativas.</p>
            </div>
    )
};

export function Cards({text, title}) {
    return (
            <div className="bg-dark-color-secondary mx-20 rounded mb-8">
                    <div className="ml-32 mr-28">
                        <h2 className="font-bold">{title}</h2>
                        <p>{text}</p> 
                    </div>
            </div>
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