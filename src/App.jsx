import React from 'react';
import moment from 'moment'

export default function App(){

  // Pega a diferença entre as datas no ano
  const date = new Date();
  const currentDateAddThreeDays= moment(date).add(3, 'd').format('DD/MM/YYYY').split('/');
  const diff = moment(date, 'DD/MM/YYYY').diff(moment(), 'days');
  console.log(diff)
  
  



 
  return (
    <h1>  Teste </h1>
  )
}