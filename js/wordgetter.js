function wordGetter() {
  var minimumRarity = document.getElementById("minimumInput").value;
  var maximumRarity = document.getElementById("maximumInput").value;
  // alert("A word between " + minimumRarity + " and " + maximumRarity);

  var selectedWord = Math.floor(Math.random() * maximumRarity);

  document.getElementById('word').innerHTML = wordBank[selectedWord];
}
