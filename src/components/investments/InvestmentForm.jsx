import React, { useState } from 'react';
<<<<<<< HEAD
import { Card, CardContent } from '@mui/material';
import Image from 'next/image';
import CurrencyInput from 'react-currency-input-field';


=======
import TextField from '@mui/material/TextField';
import { Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
>>>>>>> 774bc20 (parte de notificacao)

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
<<<<<<< HEAD
    <Card className="mb-20">
  <CardContent className="flex flex-wrap">
    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
        <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Nome do investimento</label>
        </div>
        <input
          type="text"
          className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          value={investment.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
        <div className="flex">
          <img src="/icon-text.svg" className="mb-2 mr-1" />
          <label className="mb-2 block text-sm font-semibold">Valor</label>
        </div>
        <CurrencyInput
          placeholder="R$"
          prefix="R$ "
          decimalSeparator=","
          groupSeparator="."
          decimalsLimit={2}
          value={investment.value}
          onValueChange={(value, name) => handleChange({ target: { name, value } })}
          name="value"
          className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
        />
      </div>
      {formErrors.type && (
        <div className="mt-2 flex items-center">
          <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
          <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
        </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
      <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Descrição</label>
        </div>
        <input
          type="text"
          className="block w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          value={investment.description}
          onChange={handleChange}
          name="description"
        />
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
      <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Data</label>
        </div>
        <input
          type="date"
          className="w-full block rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          value={investment.date}
          onChange={handleChange}
          name="date"
        />
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full sm:w-1/2 px-2 mb-6">
      <div className="mb-2">
      <div className='flex '>
           <img src="/icon-text.svg" className='mb-2 mr-1'/>
           <label className="mb-2 block text-sm font-semibold" 
           >Tipo de investimento</label>
        </div>
        <select
          className="block rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1 px-1.5 text-gray-500"
          name="type"
          value={investment.type}
          onChange={handleChange}
        >
          <option value="">Selecione o tipo:</option>
          <option value="Ações">Ações</option>
          <option value="Renda Fixa">Renda Fixa</option>
          <option value="Imóveis">Imóveis</option>
        </select>
      </div>
      {formErrors.type && (
         <div className="mt-2 flex items-center">
             <img src="./icon-error-x.svg" alt="Erro" className="mr-1" />
             <p className="text-red-error text-sm font-semibold">{formErrors.type}</p>
         </div>
      )}
    </div>

    <div className="w-full px-2">
      <button
        type="submit"
        className="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded-md float-right"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
      {formValid && (
        <p className="text-red-500 text-sm font-semibold">Preencha todos os campos obrigatórios.</p>
      )}
    </div>
  </CardContent>
</Card>

=======
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
>>>>>>> 774bc20 (parte de notificacao)
  );
};

export default InvestmentForm;
