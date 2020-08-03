import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/38438615?s=460&u=4dcd0308602a0dcbbe8bbd5c40e15e275cf1596a&v=4" alt="Eduardo Cintra"></img>
                <div>
                    <strong>Eduardo Cintra</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de quimica avançada
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;