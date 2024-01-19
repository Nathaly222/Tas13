//Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el vector
'use strict'
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let name = prompt("Ingrese nombre", students);

alert(`El nombre ${name} ${students.find(element => element == name)? "si" : "no" }se encunetra en el vector`);

