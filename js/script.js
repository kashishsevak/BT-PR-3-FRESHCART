setTimeout(()=>{
    document.querySelector('.wrapper').style.display = 'block';
    document.querySelector('#sign-in').style.backgroundColor = '#0000009f';
    document.querySelector('#sign-in').style.backdropFilter = 'blur(2px)';
    document.querySelector('body').style.overflow = 'hidden';
},2000)

const handleClose = ()=>{
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}
handleClose();