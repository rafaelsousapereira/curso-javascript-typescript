const timer = () => {
  const clock = document.querySelector('.timer');
  
  let seconds = 0;
  let timer;
  
  const getHoursOfSeconds = (seconds) => {
    let date = new Date(seconds * 1000);
  
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }
  
  const initialTimer = () => {
    timer = setInterval(function() {
      seconds++;
  
      clock.innerHTML = getHoursOfSeconds(seconds);
    }, 1000);
  
  }
  
  document.addEventListener('click', (event) => {
    const element = event.target;
  
    if (element.classList.contains('zero')) {
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      clock.classList.remove('paused');
      seconds = 0;
    }
  
    if (element.classList.contains('pause')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }
  
    if (element.classList.contains('initial')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      initialTimer();
    }
  });
}

timer();
