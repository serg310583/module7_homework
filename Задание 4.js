//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}
// метод определяет прибор как включенный или выключенный 

ElectricalAppliance.prototype.plugIn = function() {
  if (this.power > 0){
    console.log(this.name + " включен(а)!");
    this.isPlugged = true;
  } else {
    console.log(this.name + " выключен(а)!")
  }    
}
ElectricalAppliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}

const lampa = new ElectricalAppliance('Настольная лампа', 50);
const comp = new ElectricalAppliance('Компьютер', 600);

lampa.plugIn();
console.log('Настольная лампа потребляет ' + lampa.getPowerUsed() + ` ватт`);

comp.plugIn();
console.log(`Компьютер потребляет ` + comp.getPowerUsed() + ` ватт`);

console.log( comp.getPowerUsed() + lampa.getPowerUsed() + ` потребляют всего электроприборы`)