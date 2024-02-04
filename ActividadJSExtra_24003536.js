function getRandomCardValue() {
  return Math.floor(Math.random() * 11) + 1;
}

function determineWinner(userTotal, computerTotal) {
  if (userTotal > 21) {
    alert(`Lastima, su total es ${userTotal}. La computadora tiene ${computerTotal}. ¡Ha perdido!`);
  } else if (computerTotal > 21) {
    alert(`Enhorabuena, ha ganado. La computadora se pasó de 21. Su total es ${userTotal}.`);
  } else if (userTotal > computerTotal) {
    alert(`Enhorabuena, ha ganado. Su total es ${userTotal}, y la computadora tiene ${computerTotal}.`);
  } else if (userTotal < computerTotal) {
    alert(`Lastima, ha perdido. Su total es ${userTotal}, y la computadora tiene ${computerTotal}.`);
  } else {
    alert(`¡Empate! Ambos tienen un total de ${userTotal}.`);
  }
}

let computerCard1 = getRandomCardValue();
let computerCard2 = getRandomCardValue();
let userCard1 = getRandomCardValue();
let userCard2 = getRandomCardValue();

let computerTotal = computerCard1 + computerCard2;
let userTotal = userCard1 + userCard2;

alert(`Tus cartas son: ${userCard1} y ${userCard2}. Tu total es ${userTotal}.`);

while (userTotal <= 21) {
  let answer = prompt(`¿Desea otra carta? Actualmente el valor de sus cartas suma: ${userTotal} (Si/No)`).toLowerCase();

  if (answer === 'si') {
    let newCard = getRandomCardValue();
    userTotal += newCard;
    alert(`Su nueva carta vale ${newCard}. Su total es ${userTotal}.`);
  } else if (answer === 'no') {
    break;
  } else {
    alert('Respuesta inválida. Por favor, responda con "Si" o "No".');
  }
}

alert(`La computadora tiene dos cartas.`);

while (computerTotal < 17) {
  let newComputerCard = getRandomCardValue();
  computerTotal += newComputerCard;
}

determineWinner(userTotal, computerTotal);
