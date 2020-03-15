import React from 'react';

import { Container, ProdutTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProdutTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
          <tbody>
            <tr>
              <td>
                <img src="" alt="" srcSet="" />
              </td>
            </tr>
          </tbody>
        </thead>
      </ProdutTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL: </span>
          <strong>$1999</strong>
        </Total>
      </footer>
    </Container>
  );
}
