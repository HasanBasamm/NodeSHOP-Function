import React from 'react';
import '../../App.css';

export function Header() {
    return (
        <div className='Header'>
            <header className='cabecalho'>
                <h1 className='logo'>
                    <a href="#index.html" title="Loja de Informática do Hasan">Loja Informática - Hasan</a>
                </h1>

                <form action="">
                    <input type="text" name="Pesquisa" id="Pesquisa" placeholder="Busque aqui !" />

                    <button className='btn'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </header>
        </div>
    );
}

