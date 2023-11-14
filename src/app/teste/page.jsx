"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Teste(){
    
  // const [responseSolicitante, responseVeiculo, responseIncidente] = await fetch(`api1`,
  // `api2`, `api3`);

    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        // Função para buscar dados da API
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:5000/solicitante/${id}`);
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        };

   fetchData()    
}),
[],

console.log(data)


return (
  <div>
    <h1>Dados da API:</h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  </div>
);
}

