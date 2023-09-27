import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const InvestmentForm = ({ onAddInvestment }) => {
  const [investment, setInvestment] = useState({
    name: '',
    value: '',
    description: '',
    date: '',
    type: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestment({ ...investment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    const errors = {};
    for (const key in investment) {
      if (!investment[key]) {
        errors[key] = 'Campo obrigatório';
      }
    }

    if (Object.keys(errors).length === 0) {
      onAddInvestment(investment);
      setInvestment({
        name: '',
        value: '',
        description: '',
        date: '',
        type: '',
      });
      setFormErrors({});
      setFormValid(false);
    } else {
      setFormErrors(errors);
      setFormValid(true);
    }
  };

  return (
    <Card className='mb-20'>
      <CardContent className='flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-x-4'>
        <TextField
          id="outlined-basic"
          color="success"
          label="Nome do investimento"
          variant="outlined"
          type="text"
          name="name"
          value={investment.name}
          onChange={handleChange}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
        />
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
        <TextField
          id="outlined-basic"
          color="success"
          label="R$"
          variant="outlined"
          type="number"
          name="value"
          value={investment.value}
          onChange={handleChange}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        />
        {formErrors.value && <p className="text-red-500">{formErrors.value}</p>}
        <TextField
          id="outlined-basic"
          color="success"
          label="Descrição"
          variant="outlined"
          type="text"
          name="description"
          value={investment.description}
          onChange={handleChange}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        />
        {formErrors.description && (
          <p className="text-red-500">{formErrors.description}</p>
        )}
        <TextField
          id="outlined-basic"
          color="success"
          variant="outlined"
          type="date"
          name="date"
          value={investment.date}
          onChange={handleChange}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        />
        {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              name="type"
              value={investment.type}
              onChange={handleChange}
            >
              <MenuItem value="">Selecione o tipo</MenuItem>
              <MenuItem value="Ações">Ações</MenuItem>
              <MenuItem value="Renda Fixa">Renda Fixa</MenuItem>
              <MenuItem value="Imóveis">Imóveis</MenuItem>
              {/* Adicione outros tipos, se necessário */}
            </Select>
          </FormControl>
        </Box>
        {formErrors.type && <p className="text-red-500">{formErrors.type}</p>}
        <button
          type="submit"
          className=""
          onClick={handleSubmit}
        >
          Adicionar
        </button>
        {formValid && (
          <p className="text-red-500">Preencha todos os campos obrigatórios.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default InvestmentForm;
