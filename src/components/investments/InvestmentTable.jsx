import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import CurrencyInput from 'react-currency-input-field';
import { Card, CardContent, Typography } from '@mui/material';
=======

import { Card, CardContent, Typography } from '@mui/material';

>>>>>>> 774bc20 (parte de notificacao)
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
<<<<<<< HEAD
=======
  // hide last border
>>>>>>> 774bc20 (parte de notificacao)
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Função para formatar a data no estilo "DD/MM/AAAA"
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
<<<<<<< HEAD
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

// Componente de formatação de moeda personalizado
const CurrencyFormatter = ({ value }) => (
  <CurrencyInput
    value={value}
    disabled={true}
    allowDecimals={true}
    decimalSeparator=","
    groupSeparator="."
    prefix="R$ "
  />
);

=======
  return new Date(dateString).toLocaleDateString(undefined, options);
};

>>>>>>> 774bc20 (parte de notificacao)
const InvestmentTable = ({ investments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule um tempo de carregamento para demonstração
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Mude o valor conforme necessário
  }, []);

  return (
    <TableContainer className='mb-20' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="border p-2">Nome de Investimento</StyledTableCell>
            <StyledTableCell className="border p-2">Valor</StyledTableCell>
            <StyledTableCell className="border p-2">Descrição</StyledTableCell>
            <StyledTableCell className="border p-2">Data</StyledTableCell>
            <StyledTableCell className="border p-2">Tipo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? ( // Verifica se os dados estão sendo carregados
            <TableRow>
              <StyledTableCell colSpan={5}>
                <Typography variant="body1" className="text-center">
                  Carregando...
                </Typography>
              </StyledTableCell>
            </TableRow>
          ) : (
            investments.length === 0 ? ( // Verifica se não há registros
              <TableRow>
                <StyledTableCell colSpan={5}>
                  <Typography variant="body1" className="text-center">
                    Sem registros
                  </Typography>
                </StyledTableCell>
              </TableRow>
            ) : (
              investments.map((investment, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell className="border p-2">{investment.name}</StyledTableCell>
<<<<<<< HEAD
                  <StyledTableCell className="border p-2">
                    <CurrencyFormatter value={investment.value} />
                  </StyledTableCell>
=======
                  <StyledTableCell className="border p-2">R$ {investment.value.toLocaleString('pt-BR')}</StyledTableCell>
>>>>>>> 774bc20 (parte de notificacao)
                  <StyledTableCell className="border p-2">{investment.description}</StyledTableCell>
                  <StyledTableCell className="border p-2">{formatDate(investment.date)}</StyledTableCell>
                  <StyledTableCell className="border p-2">{investment.type}</StyledTableCell>
                </StyledTableRow>
              ))
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvestmentTable;
