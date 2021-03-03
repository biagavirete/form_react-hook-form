import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';
import { Form } from './styles';

const FormComponent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const married = watch("married");

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Cadastro</h3>
      <TextField id="standard-basic" label="Nome" name="nome" inputRef={register({ required: true })} />
      {errors.nome && <p>Campo obrigatório</p>}
      <TextField id="standard-basic" label="Cidade" name="cidade" inputRef={register} />
      <TextField id="standard-basic" label="E-mail" type="email" name="email" inputRef={register({
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "E-mail inválido"
        }
      })} />
      {errors.email?.type === "required" && <p>Campo obrigatório</p>}
      {errors.email?.type === "pattern" && <p>E-mail inválido</p>}


      <TextField id="standard-basic" label="Idade" type="number" name="idade" inputRef={register({ required: true, min: 18 })} />
      {errors.idade?.type === "required" && <p>Campo obrigatório</p>}
      {errors.idade?.type === "min" && <p>Necessário ser maior de 18 anos.</p>}

      <label className="married-label">Casado(a)?</label>
      <div>
        <input type="radio" name="married" value="true" ref={register({ required: true })} />sim
          <input type="radio" name="married" value="false" ref={register({ required: true })} />não
          {married === 'true' && (
          <div>
            <TextField id="standard-basic" label="Nome do cônjuge" type="text" name="conjuge" inputRef={register} />
          </div>
        )}
        {errors.married && <p>Campo obrigatório</p>}
      </div>
      <Button type="submit" variant="outlined" color="primary">
        Enviar
      </Button>
    </Form>
  );
}

export default FormComponent;