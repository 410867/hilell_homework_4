const firstNumberUser = Number(prompt('Введіть перше число: '));
const secondNumberUser = Number(prompt('Введіть друге число: '));
const thirdNumberUser = Number(prompt('Введіть третє число: '));
const arithmeticMean = (firstNumberUser + secondNumberUser + thirdNumberUser) / 3;

if(((arithmeticMean * 3) % 3) === 0)
    alert('Середнє арифметичне трьох введених чисел: ' + arithmeticMean);
else
    alert('Середнє арифметичне трьох введених чисел: ' + arithmeticMean.toFixed(3));