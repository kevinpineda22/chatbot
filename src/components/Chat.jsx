import React, { useState } from "react";
import axios from "axios";
import "./chat.css";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Función para manejar la entrada del usuario
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // Función para enviar la consulta al backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post("http://127.0.0.1:8000/chatbot/", {
        query: query,
      });
      setResponse(result.data.answer); // Respuesta del chatbot
    } catch (error) {
      console.error("Error al contactar el backend:", error);
      setResponse("Lo siento, ocurrió un error.");
    } finally {
      setLoading(false);
    }
  };

  // Función para abrir/cerrar el chat
  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div>
      {/* Botón flotante del chatbot */}
      <button className="chatbot-icon" onClick={toggleChat}>
        <img src="/chatbot.png" alt="Chatbot Icon" />
      </button>

      {/* Ventana del Chat */}
      {chatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Bienvenido a su chatbot</span>
            <button onClick={toggleChat}>❌</button>
          </div>
          <div className="chat-messages">
            {/* Mensajes del chatbot */}
            <div className="message bot-message">
              {response || "¡Hola! ¿En qué puedo ayudarte?"}
            </div>
            {loading && <div className="message bot-message">Cargando...</div>}
          </div>
          <form onSubmit={handleSubmit} className="chat-input-container">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Escribe tu pregunta..."
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Cargando..." : "Enviar"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export { Chatbot };
