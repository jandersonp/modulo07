import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-harden-stepback-masculino/82/NQQ-0224-782/NQQ-0224-782_detalhe1.jpg?ts=1579783590?resize=280:280"
          alt="Tênis "
        />
        <strong>Tênis muito legal</strong>
        <span>$329,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-harden-stepback-masculino/82/NQQ-0224-782/NQQ-0224-782_detalhe1.jpg?ts=1579783590?resize=280:280"
          alt="Tênis "
        />
        <strong>Tênis muito legal</strong>
        <span>$329,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-harden-stepback-masculino/82/NQQ-0224-782/NQQ-0224-782_detalhe1.jpg?ts=1579783590?resize=280:280"
          alt="Tênis "
        />
        <strong>Tênis muito legal</strong>
        <span>$329,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-harden-stepback-masculino/82/NQQ-0224-782/NQQ-0224-782_detalhe1.jpg?ts=1579783590?resize=280:280"
          alt="Tênis "
        />
        <strong>Tênis muito legal</strong>
        <span>$329,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
