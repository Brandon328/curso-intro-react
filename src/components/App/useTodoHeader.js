import React from 'react';

function useTodoHeader() {
  const [currentDate, setCurrentDate] = React.useState();
  const [greeting, setGreeting] = React.useState();

  React.useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    const current_date = today.toLocaleString('en-US', options);
    setCurrentDate(current_date);
    const hour = today.getHours();

    switch (hour) {
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        setGreeting('GOOD MORNING');
        document.querySelector('body').backgroundImage = './img/morging-bg.png';
        break;
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        setGreeting('GOOD AFTERNOON');
        document.querySelector('body').backgroundImage = './img/evening-bg.png';
        break;
      default:
        setGreeting('GOOD NIGHT');
        document.querySelector('body').backgroundImage = './img/night-bg.png';
        break;
    }
  }, []);

  return [
    currentDate,
    greeting
  ]
}

export { useTodoHeader };