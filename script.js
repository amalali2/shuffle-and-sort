let numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  numbersWrapper = document.getElementById('container'), appendCubeElement;

numbersList.forEach((item, index) => {
  numbersWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})

shuffleList = () => {
  let index = 0
  numbersList = numbersList.sort(() => { return .5 - Math.random() });
  numbersWrapper.innerHTML = ''
  while (index < numbersList.length) {
    let number= document.createElement("li");
    number.innerHTML = numbersList[index]
    number.setAttribute('data-item', numbersList[index])
    numbersWrapper.appendChild(number)
    ++index;
  }
}

sortList = () => {
  let index = 0
  numbersList = numbersList.sort((a, b) => { return a - b });
  numbersWrapper.innerHTML = ''
  while (index < numbersList.length) {
    let number = document.createElement("li");
    number.innerHTML = numbersList[index]
    number.setAttribute('data-item', numbersList[index])
    numbersWrapper.appendChild(number)
    ++index;
  }
}