function calculateSquareRoot(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    } else {
      return Math.sqrt(x);
    }
  }
  
  // Contoh penggunaan program
  var userInput = 10
  
  var result = calculateSquareRoot(userInput);
  console.log(result);
  