let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    isEngineRunning: false,
    startEngine: function() {
      this.isEngineRunning = true;
      console.log('Engine is now running.');
    },
    stopEngine: function() {
      this.isEngineRunning = false;
      console.log('Engine is now stopped.');
    }
  };
  
  console.log(`The ${car.year} ${car.make} ${car.model} is ${car.color}.`);
  car.startEngine();
  console.log(`Is the engine running? ${car.isEngineRunning}`);
  car.stopEngine;
  console.log(`Is the engine running? ${car.isEngineRunning}`);