1.
let side = +prompt(`1. Enter the side of the square in centimeters`);
let perimeter = side * 4;
console.log(`Perimeter: ${perimeter}`);
alert (`1. Perimeter is ${perimeter}`)

2.
let quberib = +prompt(`2. Enter lenght of qube's rib in centimeters`);
let square = quberib ** 2;
let volume = quberib ** 3;
console.log(`Square of qube's rib equals: ${square}`);
console.log(`Volume equals: ${volume}`);
alert (`2. Square is ${square}`);
alert (`2. Volume is ${volume}`);

3.
let radius = +prompt(`3. Enter circle radius in centimeters`);
let diameter = radius * 2;
let circlelenght = 3.14 * diameter;
let circlesquare = 3.14 * (radius ** 2);
console.log(`Lenght of circle: ${circlelenght}`);
console.log(`Sqaure of circle: ${circlesquare}`);
alert (`3. Lenght of circle is ${circlelenght}`);
alert (`3. Sqaure of circle is ${circlesquare}`);

4.
let mass = +prompt(`4. Enter substance's mass in kg`);
let subvolume = +prompt(`4. Enter substance's volume in m3`); 
let density =  mass / subvolume;
console.log(`Density: ${density}`);
alert (`4. Density is ${density}`);

5.
let population = +prompt(`5. Enter the population`);
let countrySquare = +prompt(`5. Enter the square of country's territory in km2`);
let populationDensity = population / countrySquare;
console.log(`5. Density of population: ${populationDensity} persons per km2`);
alert (`5. Density of population is ${populationDensity} persons per km2`);

6.
let triangleSideOne = +prompt(`6. Enter the first side of triangle in cm`);
let triangleSideTwo = +prompt(`6. Enter the second side of triangle in cm`);
let hypotenuseSquareRoot = (triangleSideOne ** 2) + (triangleSideTwo ** 2);
let hypotenuse = Math.sqrt(hypotenuseSquareRoot);
console.log(`Hypotenuse: ${hypotenuse}`);
alert (`6. Hypotenuse is ${hypotenuse}`);

7.
let a = +prompt(`7. Enter the "a" value`);
let y = (a ** 2 + 10) / (Math.sqrt(a ** 2 + 1));
console.log(`If "a" equals ${a}, "y" equals: ${y}`);
alert (`7. If "a" equals ${a}, "y" equals is ${y}`);
