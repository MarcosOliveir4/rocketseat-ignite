import React, { useEffect } from "react";
import { api } from "../../services";
import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get("transactions").then(({ data }) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/05/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>30/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
