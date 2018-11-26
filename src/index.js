console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const allBreeds = []


  document.addEventListener('DOMContentLoaded', function() {
    //CHALLENGE FOUR
  document.getElementById('breed-dropdown').addEventListener('change', function(e) {
    let selectedLetter = e.target.value;
    filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter))

    filteredBreeds.forEach(function(dog) {
      document.getElementById('dog-breeds').innerHTML += `<li> ${dog} </li>`
    })
  })


//CHALLENGE ONE
  const fetchImg = fetch(imgUrl).then(res =>{
    if (res.ok) { return res.json() }
  })
      .then((dogImg) =>{
        dogImg.message.forEach(function(dogPic) {
          document.getElementById('dog-image-container').innerHTML += `<br> <img src = ${dogPic}> <br>`
        })
      })

//CHALLENGE TWO
   const fetchBreed = fetch(breedUrl).then(res => {
    if (res.ok) {return res.json()}
    })
    .then((dogBreed) => {
      let allBreeds = Object.keys(dogBreed.message);
      Object.keys(dogBreed.message).forEach(function(doggyBreed) {
        document.getElementById('dog-breeds').innerHTML += `<li> ${doggyBreed} </li>`
      })
    })

//CHALLENGE THREE
  const parentBreedList = document.getElementById('dog-breeds')
  parentBreedList.addEventListener('click', function(event) {
    let currBreed = event.target
    currBreed.style.color = "blue"
    })
  });
