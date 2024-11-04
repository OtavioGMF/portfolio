import { useState } from "react";
import axios from "axios";

function ContactForm() {

  const [cepErro, setCepErro] = useState(false);

  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");


  const verificarcep = (e) => {
    if (e.target.value.length == 8) {
      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)
        .then(function (response) {
          setCidade(response.data.city)
          setRua(response.data.street)
          setCepErro(false)
        })
        .catch(function (response) {
          setCepErro(true)
          setCidade("")
          setRua("")
        })
    }
  }

  return (
    <form className="p-6 bg-primary-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="text-white" htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          required
          onChange={verificarcep}
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
        {cepErro ?
          <p className="text-red-400 my-1">Cep Invalido</p>
          :
          <p className="text-green-400 my-1">Cep Valido</p>
        }
        {/* {cepErro &&
          <p className="text-red-400 my-1">Cep Invalido</p>
         
        } */}
        

      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="rua">Rua</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="text-white" htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-secundary-500 text-white font-semibold rounded-md p-2 hover:bg-secundary-700">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;