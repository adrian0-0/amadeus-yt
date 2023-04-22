import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Amadeus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vídeos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Amadeus - Youtuber e Streamer</h1>
            <p className="lead">
              Bem-vindo(a) ao meu site! Aqui você encontra informações sobre mim
              e meu conteúdo.
            </p>
            <a href="#" className="btn btn-primary">
              Assistir minhas lives
            </a>
          </div>
        </section>
        <section className="container">
          <h2>Sobre mim</h2>
          <p>
            Olá, meu nome é Amadeus e eu sou uma youtuber e streamer que adora
            jogos de aventura e ação. Eu comecei a fazer lives na Twitch
            recentemente e estou adorando a experiência de compartilhar meus
            jogos com os meus inscritos.
          </p>
          <p>
            Além dos jogos, eu também gosto de compartilhar um pouco sobre minha
            vida pessoal e de interagir com a comunidade durante as
            transmissões.
          </p>
        </section>
        <section className="container">
          <h2>Meus vídeos</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">Vídeo 1 - Título</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">Vídeo 2 - Título</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">Vídeo 3 - Título</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <h2>Contato</h2>
          <p>
            Se você quiser entrar em contato comigo para sugerir jogos, dar
            feedback sobre o meu conteúdo ou apenas conversar, sinta-se à
            vontade para enviar uma mensagem através do formulário abaixo:
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Endereço de e-mail</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            &copy; 2023 Amadeus - Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
