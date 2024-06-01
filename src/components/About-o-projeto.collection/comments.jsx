import Tim from "./img/Personagem_1.png"
import Guido from "./img/Personagem_2.png"
import Linux from "./img/Personagem_3.png"
import EstrelaCompleta from "./img/Estrela.png"
import EstrelaMetade from "./img/estrelaMetade.png"
import ElipseCom from "./img/Ellipse2.png"
import ElipseVazia from "./img/Ellipse1.png"


function Comments() {
	 return (
			<>
				<div className="text-center m-10 font-custom-inconsolata">
						<h4>Comentários e Avaliações</h4>
				</div>
				<section className="flex flex-nowrap font-custom-inconsolata">
						<div className="bg-dark-color-secondary shadow rounded-lg p-4 m-3">
							 <Images/>
									<p>"Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade."</p>
									<div className="flex items-center">
										 <img className="p-2" src={Linux}/>
										 <div>
												<h3 className="font-bold">Linux Torvalds</h3>
												<span className="text-xs">Criador do Linux</span>
										 </div>
									</div>
						</div>

							 <div className="bg-dark-color-secondary shadow rounded-lg p-4 m-3">
							 <Images/>
									<p>"O 'Frontend Fusion' é uma abordagem inovadora para destacar talentos múltiplos em um único espaço. Acredito que enfatizar a acessibilidade e a inclusão pode levar esse projeto a outro nível. Certifiquem-se de que a experiência do usuário seja igualmente enriquecedora para todos."
									</p>
									<div className="flex items-center">
										 <img className="p-2" src={Tim}/>
										 <div>
												<h3 className="font-bold">Tim Berners-Lee</h3>
												<span className="text-xs">Inventor da Word Wide Web</span>
										 </div>
									</div>
								</div>
							 <div className="bg-dark-color-secondary shadow rounded-lg p-4 m-3">
							 <Images/>
									<p>"Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade."</p>
									<div className="flex items-center">
										 <img className="p-2" src={Guido}/>
										 <div>
												<h3 className="font-bold">Guido van Rossum</h3>
												<span className="text-xs">Criador do Python</span>
										 </div>
									</div>
							 </div>
				 </section>
						<div className="flex justify-center">
							<img className="p-2" src={ElipseCom} />
							<img className="p-2" src={ElipseVazia}/>
							<img className="p-2" src={ElipseVazia}/>
							<img className="p-2" src={ElipseVazia}/>
							<img className="p-2" src={ElipseVazia}/>
						</div>

						<div className="flex justify-center m-2 text-lg font-custom-inconsolata">
							 <h3>Deixe O Seu Comentário</h3>
						</div>

						<div className="m-2 flex justify-center font-custom-inconsolata">
							 <form>
									<input type="nome" class="bg-gray-50 text-gray-900 text-sm m-2 rounded-lg block w-52 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white border-2 border-line" placeholder="Seu nome aqui" />

									<input type="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm m-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-2 border-line" placeholder="seuemail@exemplo.com" />

									<textarea rows="5" class="block p-2.5 w-96 h-52 m-2 text-sm  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-2 border-line" placeholder="Deixe o seu comentário"></textarea>
							 </form>

							 <div className="bg-dark-color-secondary rounded-lg p-4 m-3 w-4/12">
									<p>"Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade."</p>

									<div className="flex">
										 <img className="p-4" src={Guido}/>
										 <div>
												<h3 className="font-bold">Guido van Rossum</h3>
												<span className="text-xs">Criador do Python</span>
												<Button/>
										 </div>
									</div>
							 </div>
						</div>
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

export function Button(){
	 return(
			<div>
	 <button class="relative inline-flex p-0.5 ml-24 text-sm text-gray-900 rounded-lg group bg-button-primary to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
			<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Confirmar</span>
	 </button>

	 <button class="relative inline-flex p-0.5 ml-2  text-sm text-gray-900 rounded-lg group bg-button-primary from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
			<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Voltar</span>
	 </button>
</div>
	 )
}
