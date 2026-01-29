const btnTop = document.getElementById('btnTop');

const handleScroll = ()=>{
    console.log(scrollY);
    
    if(window.scrollY >= 600){
        btnTop.classList.remove('d-none');
    }else{
        btnTop.classList.add('d-none');
    }
}

const handleTopBtn = ()=>{
    window.scrollTo({
    top : 0,
    behavior : 'smooth'
})
}
window.onscroll = handleScroll;