import React, { useContext } from 'react'
import { useState } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

//context
import { CountDownContext } from '../context/CountDownContext';


const Home = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountDownContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject =
    {
      title,
      date,
      image,
      color,
    }
    setEvent(eventObject);

    navigate("/countdown");
  }

  return (
    <div className="home">
      <h2> Monte a sua contagem regressiva! </h2>
      <form
        className="countdown-form"
        onSubmit={handleSubmit}

      >
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          <span>Image</span>
          <input
            type="text"
            name="title"
            placeholder="Insira a Url da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            placeholder="Insira a Url da imagem"
            required
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <input
          type="submit"
          value="Enviar"
        />

      </form>
    </div>
  )
}

export default Home;