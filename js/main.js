document.querySelector('button').addEventListener('click', getMeal)

function getMeal(){
  let meal = document.querySelector('input').value
  

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php?s=${meal}`)
    .then( res => res.json())
    .then( data => {
        console.log(data.meals)
        document.querySelector('h2').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
        document.querySelector('#instr').innerText = data.meals[0].strInstructions
        document.querySelector('h4').innerText = data.meals[0].strSource
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}