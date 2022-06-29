import React from 'react';
import logo from '../img/logo.png';

export default function Header() {
        return (
            <div className='Nav'>
                <img src={logo}/>
                <nav className="menu">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Produtos">Produtos</a></li>
                        <li><a href="#Serviços">Serviços</a></li>
                        <li><a href="#Contatos">Contatos</a></li>
                    </ul>

                    <div className="social-icons">
                        <a href="#" class="btn-facebook"><i class="fa fa-facebook fa-lg"></i></a>
                        <a href="#" class="btn-twitter"><i class="fa fa-twitter fa-lg"></i></a>
                        <a href="#" class="btn-google"><i class="fa fa-google fa-lg"></i></a>
                        <a href="#" class="btn-instagram"><i class="fa fa-instagram fa-lg"></i></a>
                        <a href="#" class="btn-youtube"><i class="fa fa-youtube fa-lg"></i></a>
                    </div>
                </nav>
            </div>
        );
    }
