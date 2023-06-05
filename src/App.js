import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import logo from "./assets/Logo.png";

const App = () => {
  useEffect(() => {
    const currentUrl = window.location.href;
    const title = "TicketApp";
    const description = "Fuiste invitado a un evento.";
    const imageUrl = "https://i.ibb.co/tHb0xgy/logo192.png";

    const metaTags = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: imageUrl },
      { property: "og:url", content: currentUrl },
      { property: "og:site_name", content: "TicketApp" },
    ];

    const metaElements = metaTags.map((meta, index) => (
      <meta key={index} property={meta.property} content={meta.content} />
    ));

    // Actualizar los metadatos dinámicamente
    document.getElementsByTagName("head")[0].innerHTML += metaElements;
  }, []);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3 className="App-title">Próximamente en stores</h3>
    </div>
  );
};

export default App;
