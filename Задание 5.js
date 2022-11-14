//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance{
  constructor(name, power){
    this.name = name;
    this.power = power;    
    this.isPlugged = false;
  }
  
  plugIn(){
    if (this.power > 0){
      console.log(this.name + " включен(а)!");
      this.isPlugged = true;
    } else {
      console.log(this.name + " выключен(а)!")
    }   
  }  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const lampa = new ElectricalAppliance('Настольная лампа', 0);
const comp = new ElectricalAppliance('Компьютер', 600);

lampa.plugIn();
console.log('Настольная лампа потребляет ' + lampa.getPowerUsed() + ` ватт`);

comp.plugIn();
console.log(`Компьютер потребляет ` + comp.getPowerUsed() + ` ватт`);

console.log(lampa.getPowerUsed() + comp.getPowerUsed() + ` ватт потребляют всего электроприборы.`);
