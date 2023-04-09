const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

//since circle is there in multiple so we use All
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',()=>{
      currentActive++

      if(currentActive > circles.length){
            currentActive = circles.length
      }

      // console.log("Current Active ="+currentActive)

      update()
})

prev.addEventListener('click',()=>{
      currentActive--

      if(currentActive < 1){
            currentActive = 1
      }

      // console.log("Current Active ="+currentActive)
      
      update()
})

function update(){
      
      circles.forEach((circle, index)=>{
            if(index < currentActive){
                  circle.classList.add('active')
            }else{
                  circle.classList.remove('active')
            }
      })
      
      const actives = document.querySelectorAll('.active')
      // console.log("Active Class Count ="+actives.length)
      // console.log("Circle Count ="+circles.length)
      progress.style.width=(actives.length-1) / (circles.length-1)*100 + '%'

      if (currentActive===1){
            prev.disabled = true
      }else if(currentActive === circles.length){
            next.disabled = true
      }else{
            prev.disabled = false
            next.disabled = false
      }
}

