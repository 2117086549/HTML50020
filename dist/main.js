var SITUATIONS = [
  "Deconstructed",
  "Sabotage affects dish positively",
  "Alton grins at camera behind judge's back",
  "Judge advises chef against calling anything 'deconstructed' or 'rustic'",
  "Someone mentions their grandma",
  "Chef eliminated for reasons unrelated to sabotage",
  "Chef forgets key ingredient in the pantry",
  "I've never seen/held this much money before!",
  "Male chef identifies fellow male chef as their 'biggest competition'",
  "Chef loses all pantry ingredients due to sabotage",
  "Chef tells judge obvious BS story about why they were 'inspired' to use inferior ingredient",
  "I've never made/eaten/heard of that in my life",
  "Alton makes up fake back story for sabotage item",
  "One chef buys every sabotage in single pre-round auction",
  "Someone repeatedly mentions their nationality",
  "Rustic",
  "Alton explains to camera what totally wrong thing a chef is doing",
  "Chef makes unnecessary ice cream",
  "Chef attempts to hug Alton",
  "Alton refers to himself as 'daddy'",
  "Chefs must work together or share due to sabotage",
  "$10,000 spent on a single sabotage",
  "Chef straight up makes a different dish from the one requested",
  "Bidding goes higher than a chef's total remaining cash",
  "Kiddie Sabotage",
  "'This sabotage won't go to me' turns out to be wrong",
  "Sabotage involves headgear",
  "Alton offers specific advice that chef fails to take",
  "Three men, one woman",
  "Bobs participate in sabotage",
  "Chef accidentally wins auction while attempting to drive price up",
  "Chef taunts fellow chef with sabotage-related pun",
  "Chef falls down in or on the way to/from the pantry",
  "'I can work with this'",
  "Bleeped curse",
  "Alton fake-cries",
  "Single chef given all sabotages in pre-round auction",
  "Chef too busy cooking to bid",
  "'Fresh chefs'",
  "Alton knows how he would do it, but he's not telling",
  "Alton explains to camera what actually correct thing a chef is doing",
  "Elevated",
  "Chef makes own mayonnaise",
  "Eliminated chef: 'My dish was better/I was the best chef out there'",
  "Overcooked protein",
  "Didn't go to culinary school and proud",
  "Non-restaurant chef made fun of for occupation",
  "Single raised eyebrow"

];

window.onload = function() {
  var ROWS = 5;
  var COLS = 5;
  var SELECTED_BG_COLOR = 'green';
  var DEFAULT_BG_COLOR = 'white';

  var container = document.getElementsByClassName('cardContainer')[0];
  var table = document.createElement('table');

  for (var i = 0; i < ROWS; i++) {
    var row = table.insertRow();

    for (var j = 0; j < COLS; j++) {
      var cell = row.insertCell();

      cell.addEventListener('click', function(e) {
        var curColor = e.target.style.backgroundColor;

        if (curColor === SELECTED_BG_COLOR) {
          e.target.style.backgroundColor = DEFAULT_BG_COLOR;
        } else {
          e.target.style.backgroundColor = SELECTED_BG_COLOR;
        }

      });

      // Manually assign the middle space as free
      if (i === 2 && j === 2) {
        cell.innerText = "Tell your tale (Free Space)";
      } else {
        var index = Math.floor(Math.random() * SITUATIONS.length);
        cell.innerText = SITUATIONS[index];
        SITUATIONS.splice(index, 1);
      }

    }
  }

  container.appendChild(table);

};
