function showHint(str) {
  var xhttp;
  if (str.length == 0) {
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let names = JSON.parse(this.responseText);
      let parent = document.getElementById('hints');
      while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
      }

      for (let i = 0; i < names.length; i++) {
        let node = document.createElement('p');
        node.textContent = names[i];
        parent.appendChild(node);
      }
    }
  };
  xhttp.open('GET', 'getHint?q=' + str, true);
  xhttp.send();
}
