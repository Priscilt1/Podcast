export function convertDurationToTimeString(duration: number) { //recebe um numero e devolve uma string 
  const hours = Math.floor(duration / 3600) //arredonda para o melhor numero que sobrar (3600 equivalem ao segundos de 1 hora)
  const minutes = Math.floor((duration % 3600) / 60) //pegandos quantos segundos que sobrou na divisao de cima e dividindo por 60 
  const seconds = duration % 60; //o restante da divisao de duration por 60

  //criando a string de horas
  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0')) // no padStart, se tiver só um caractere, será adicionado o numer 0 
  .join(':') //para unir

  return timeString
} 