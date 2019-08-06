document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#ede6e4',
      lineColor: '#ede6e4',
      minSpeedX: '0.1',
      maxSpeedX: '0.3',
      density: '15000',   
    });
  }, false);