import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';
import { toast, Toaster } from 'react-hot-toast';
import { Form } from './styles';

const FormComponent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data: any) => {
    toast.success('Cadastro realizado')

    console.log(data);
  }

  const married = watch("married");

  return (
    <Form>
      <h3>Cadastro</h3>
      <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          label="Nome"
          name="name"
          inputRef={
            register({ required: 'Campo obrigatório' })}
        />

        {errors.name && <p
          role="alert"
          data-testid="name-error">{errors.name.message}</p>
        }

        <TextField
          id="standard-basic"
          label="Cidade"
          name="city"
          inputRef={register}
        />

        <TextField
          id="standard-basic"
          label="E-mail"
          type="email"
          name="email"
          inputRef={
            register({
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido"
              }
            })
          }
        />

        {errors.email && <p
          role="alert"
          data-testid="email-error">{errors.email.message}</p>
        }

        <TextField
          id="standard-basic"
          label="Idade"
          type="number"
          name="age"
          inputRef={register({
            required: 'Campo obrigatório',
            min: {
              value: 18,
              message: "Necessário ser maior de 18 anos"
            }
          })
          }
        />

        {errors.age && <p
          role="alert"
          data-testid="age-error">{errors.age.message}</p>
        }

        <label className="married-label">Casado(a)?</label>
        <div>
          <label>
            <input
              type="radio"
              name="married"
              value="true"
              ref={register({ required: true })} />
              Sim
          </label>

          <label>
            <input
              type="radio"
              name="married"
              value="false"
              ref={register({ required: true })} />
              Não
          </label>

          {married === 'true' && (
            <div>
              <TextField
                id="standard-basic"
                label="Nome do cônjuge"
                type="text"
                name="conjuge"
                inputRef={register}
              />
            </div>
          )}
          {errors.married && <p
            role="alert"
            data-testid="married-error">
            Campo obrigatório
              </p>
          }
        </div>
        <Toaster />
        <Button
          type="submit"
          role="button"
          variant="outlined"
          color="primary">
          Enviar
      </Button>
      </form>
    </Form>
  );
}

export default FormComponent;