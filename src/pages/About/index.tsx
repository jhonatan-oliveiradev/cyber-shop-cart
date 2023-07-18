import { useState } from "react";

export function About() {
  const [showCompleteText, setShowCompleteText] = useState(false);

  const toggleText = () => {
    setShowCompleteText(!showCompleteText);
  };

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        <section className="w-full">
          <div className="flex flex-col lg:flex-row">
            <img
              className="flex-1 w-full max-h-72 object-contain mt-20 shadow-xl"
              src="https://c8.alamy.com/compes/2pk70e2/dublin-irlanda-02nd-de-marzo-de-2023-project-stryker-una-ubicacion-de-direccion-para-las-transmisiones-de-deportes-electronicos-de-riot-games-la-compania-se-establecio-en-la-capital-irlandesa-a-mediados-de-2022-detras-de-la-discreta-fachada-de-un-club-nocturno-abandonado-en-el-suburbio-de-swords-se-encuentra-el-centro-de-las-transmisiones-de-deportes-electronicos-de-la-compania-credito-niklas-graeber-dpa-alamy-live-news-2pk70e2.jpg"
              alt=""
            />
            <div className="flex-1">
              <h1 className="text-2xl font-medium mt-10 mb-2">Sobre nós</h1>
              <p className="text-zinc-300">
                {showCompleteText ? (
                  <>
                    Bem-vindo à Cyber Shop, o seu destino definitivo para
                    eletrônicos e produtos para gamers! Somos uma renomada
                    empresa de e-commerce dedicada a fornecer aos entusiastas de
                    jogos e tecnologia uma experiência de compra excepcional e
                    uma ampla variedade de produtos de alta qualidade.
                    <br />
                    <br />
                    Na Cyber Shop, entendemos que os jogos e a tecnologia são
                    mais do que apenas hobbies. Eles são paixões que nos
                    conectam e nos transportam para novos mundos. Por isso, nos
                    esforçamos para oferecer os melhores produtos para tornar
                    sua experiência de jogo ainda mais emocionante, imersiva e
                    envolvente.
                    <br />
                    <br />
                    Nossa equipe é composta por especialistas apaixonados por
                    jogos e tecnologia. Estamos sempre atualizados com as
                    últimas tendências do mercado e buscamos constantemente os
                    melhores produtos para atender às suas necessidades. Desde
                    computadores e laptops de alto desempenho até periféricos de
                    jogos, acessórios e produtos de realidade virtual, nossa
                    seleção abrangente é cuidadosamente escolhida para
                    proporcionar uma experiência de jogo de classe mundial.
                    <br />
                    <br />
                    Acreditamos que a satisfação do cliente é fundamental, por
                    isso nos esforçamos para oferecer um atendimento excepcional
                    em todas as etapas da sua jornada conosco. Nossa equipe de
                    suporte técnico está pronta para ajudá-lo com quaisquer
                    dúvidas ou problemas que possam surgir, garantindo que você
                    tenha a melhor experiência possível.
                    <br />
                    <br />
                    Além disso, valorizamos a transparência e a segurança.
                    Nossas transações são protegidas por medidas de segurança
                    avançadas para garantir que suas informações pessoais e
                    financeiras estejam sempre protegidas.
                    <br />
                    <br />
                    Na Cyber Shop, acreditamos que todos devem ter acesso à
                    tecnologia de ponta. Portanto, trabalhamos arduamente para
                    oferecer preços competitivos e promoções exclusivas, para
                    que você possa desfrutar dos produtos que sempre desejou sem
                    comprometer sua carteira.
                    <br />
                    <br />
                    Estamos entusiasmados em fazer parte da sua jornada gamer e
                    tecnológica. Explore nossa loja virtual, encontre os
                    produtos perfeitos para suas necessidades e prepare-se para
                    elevar sua experiência de jogo a um novo nível com a Cyber
                    Shop. Junte-se a nós e embarque em uma aventura tecnológica
                    emocionante!
                  </>
                ) : (
                  <>
                    Bem-vindo à Cyber Shop, o seu destino definitivo para
                    eletrônicos e produtos para gamers! Somos uma renomada
                    empresa de e-commerce dedicada a fornecer aos entusiastas de
                    jogos e tecnologia uma experiência de compra excepcional e
                    uma ampla variedade de produtos de alta qualidade.
                    <br />
                    <br />
                    Na Cyber Shop, entendemos que os jogos e a tecnologia são
                    mais do que apenas hobbies. Eles são paixões que nos
                    conectam e nos transportam para novos mundos. Por isso, nos
                    esforçamos para oferecer os melhores produtos para tornar
                    sua experiência de jogo ainda mais emocionante, imersiva e
                    envolvente.{" "}
                    <span
                      id="lerMais"
                      onClick={toggleText}
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                      className="text-cyan-500"
                    >
                      Ler mais
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
