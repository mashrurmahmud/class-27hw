document.querySelector('#menu').addEventListener('click',()=>{
  if(document.querySelector('.row').classList.contains('test')){
    document.querySelector('.row').classList.remove('test')
  }else{
    document.querySelector('.row').classList.add('test')
  }

} )

document.querySelector('#go').addEventListener('click',()=>{

    if(document.querySelector('.margin-slide').classList.contains('dash')){
        document.querySelector('.margin-slide').classList.remove('dash')
    }
    else{
        document.querySelector('.margin-slide').classList.add('dash')

    }




})







