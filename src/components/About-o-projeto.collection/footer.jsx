import GitHub from "./img/Git.png"
import Dev1 from "./img/Dev1.png"
import Dev2 from "./img/Dev2.png"
import Dev3 from "./img/Dev3.png"
import Dev4 from "./img/Dev4.png"
import Dev5 from "./img/Dev5.png"
import Dev6 from "./img/Dev6.png"

function Footer() {
    return ( 
        <>
        <section className="m-24">
            <div className="flex bg-black w-full p-4 font-custom-inconsolata text-2xl rounded-lg">
              <h3 className="m-8 text-center">Estamos ansiosos para receber sua inscrição e dar as boas-vindas a você em nossa comunidade!</h3>
              <button className="my-8 mx-20 px-8 py-2 bg-grenn-button rounded-lg text-xl w-96">Quero Participar</button>
            </div>
        </section>
        
        <div className="bg-dark-color-secondary rounded-lg">
            <div className="flex font-custom-inconsolata">
                <button className="my-8 mx-8 px-4 py-2 bg-button-primary rounded-lg text-sm w-28 flex justify-center">GitHub
                <img src={GitHub} className="w-4 mx-1 " />
                </button>
                <h4 className="p-10">Sobre</h4>
                <h4 className="p-10">Equipe</h4>
                <h4 className="p-10">Projetos</h4>
                <h4 className="p-10">Participantes</h4>

                <div className="flex flex-col items-end w-2/3 h-9 m-8 pr-4">
                  <div className="flex">
                  <img className="inline-block -m-2 p-0" src={Dev1}/>
                  <img className="inline-block -m-2 p-0" src={Dev2}/>
                  <img className="inline-block -m-2 p-0" src={Dev3}/>
                  <img className="inline-block -m-2 p-0" src={Dev4}/>
                  <img className="inline-block -m-2 p-0" src={Dev5}/>
                  <img className="inline-block -m-2 p-0" src={Dev6}/>
                </div>
                <div className="mt-12">
                    <p>Daniel - Desenvolvedor</p>
                    <p>Geovania - Desenvolvedora</p>
                    <p>Anderson - Desenvolvedor</p>
                    <p>Bruno - Desenvolvedor</p>
                    <p>William - Desenvolvedor</p>
                  </div>
                </div>
            </div>
              <p className="mt-6 mx-6 py-14 font-custom-inconsolata">Projeto FrontEnd Fusion - Todos os direitos reservados</p>
        </div>
        </>
     );
}

export default Footer