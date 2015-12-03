var SITUATIONS = [
  "Deconstructed",
  "Sabotage affects dish positively",
  "Alton grins at camera behind judge's back",
  "Judge advises chef against calling anything 'deconstructed' or 'rustic'",
  "Someone mentions their grandma",
  "Chef eliminated for reasons unrelated to sabotage",
  "Chef forgets key ingredient in the pantry",
  "I've never seen/held this much money before!",
  "Male chef identified fellow male chef as 'my biggest competition'",
  "Chef loses all pantry ingredients due to sabotage",
  "Chef tells judge obvious BS story about why they were 'inspired' to use inferior ingredient",
  "I've never made/eaten/heard of that in my life",
  "Tell your tale (Free Space)",
  "Alton makes up fake backstory for sabotage item",
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
  "Budding goes higher than a chef's total remaining cash"
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

      var index = Math.floor(Math.random() * SITUATIONS.length);
      cell.innerText = SITUATIONS[index];
      SITUATIONS.splice(index, 1);
    }
  }

  container.appendChild(table);

};
