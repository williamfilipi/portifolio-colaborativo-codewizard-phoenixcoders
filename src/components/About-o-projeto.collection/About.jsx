export default function MeuComponente() {
    return(
            <div>
                <h1 className="font-bold text-4xl text-center text-white">Sobre o Projeto Front end Fusion</h1>
                <p className="mt-12 text-center m-10 text-white">O Frontend Fusion é um projeto inovador focado em proporcionar um aexperiência envolvente de aprendizado de programação, Nosso objetivo é oferecer um ambiente colaboratico onde entusiastas de tecnologia possam mergulhar no mundo de desenvolvimento frontend, explorando CSS, HTML e JavaScript através de desafios e atividades interativas.</p>
            </div>
    )
};

export function Cards({text, title}) {
    return (
            <div className="bg-dark-color-secondary mx-20 rounded mb-8">
                    <div className="ml-32 mr-28 text-white fc">
                        <h2 className="font-bold">{title}</h2>
                        <p>{text}</p> 
                    </div>
            </div>
    )
}
