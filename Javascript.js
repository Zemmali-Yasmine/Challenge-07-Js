

//Challenge number one: diviser la chaîne de caractères en mots et compter leur nombre
let message = "There is no war in Ba Sing Se"
let wordCount = message.split(" ").length;
console.log(`The message contains ${wordCount} words.`);

/*split(" ") : divise la chaîne en un tableau en utilisant un espace comme séparateur. Chaque mot devient un élément dans le tableau.
 *.length : donne le nombre d'éléments dans le tableau, correspondant au nombre de mots.*/




//Challenge number two : afficher chaque pays avec sa capitale.
let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']

for (let i = 0; i < countries.length; i++) {
    console.log(`Your country: ${countries[i]} has the capital named: ${capital[i]}.`);
  }

/*Boucle for : parcourt les indices des deux tableaux (les tableaux sont de même longueur, donc l'indice i est utilisé pour accéder aux deux).
 *Interpolation de chaîne : Utilise les backticks (``) et ${} pour insérer dynamiquement les valeurs des tableaux dans la chaîne.*/





 //Challenge number three : déterminer le destin en fonction de la valeur de randomizer
let randomizer = Math.floor(Math.random() * 4);

switch (randomizer) {
    case 0:
      console.log("Your fate is: A certain victory.");
      break;
    case 1:
      console.log("Your fate is: Not so certain victory.");
      break;
    case 2:
      console.log("Your fate is: An uneasy victory.");
      break;
    default:
      console.log("Your fate is unclear, ô chosen undead.");
  }

 /*Math.random() : génère un nombre décimal aléatoire entre 0 (inclus) et 1 (exclus).
  *Math.floor() : arrondit à l'entier inférieur. Multiplier par 4 donne des entiers entre 0 et 3.
  *switch: sépare clairement chaque cas.*/




   //Challenge number four :
   function checkSeason(month) {
    month = month.toLowerCase();
    if (['december', 'january', 'february'].includes(month)) {
      return 'Winter';
    } else if (['march', 'april', 'may'].includes(month)) {
      return 'Spring';
    } else if (['june', 'july', 'august'].includes(month)) {
      return 'Summer';
    } else if (['september', 'october', 'november'].includes(month)) {
      return 'Autumn';
    } else {
      return 'Invalid month! Please enter a valid month name.';
    }
  }
  console.log(checkSeason('March'));
  /*toLowerCase() : convertit le nom du mois en lettres minuscules pour gérer les variations de casse.*/