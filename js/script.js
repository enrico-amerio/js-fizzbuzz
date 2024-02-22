const container = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
    container.innerHTML += `
     <div class="box fizzbuzz"> FizzBuzz </div>
     `
  } else if (i % 3 === 0){
    console.log('Fizz')
    container.innerHTML += `
     <div class="box fizz"> Fizz </div>
     `
  } else if(i % 5 === 0){
    console.log('Buzz')
    container.innerHTML += `
     <div class="box buzz"> buzz </div>
     `
  }else{
    console.log(i)
    container.innerHTML += `
     <div class="box"> ${i} </div>
     `
  }
}