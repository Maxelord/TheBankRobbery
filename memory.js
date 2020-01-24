var mem = {
  grid: [],
  total : 8,
  init: function () {
    mem.grid = [];
    for (var i=1; i<=mem.total; i++) {
      mem.grid.push(i);
      mem.grid.push(i);
    }
    var currentIndex = mem.grid.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = mem.grid[currentIndex];
      mem.grid[currentIndex] = mem.grid[randomIndex];
      mem.grid[randomIndex] = temporaryValue;
    }
    mem.remain = mem.total;
    mem.moves = 0;
    mem.mistakes = 0;
    mem.first = null;
    mem.second = null;mem.gir
    if (mem.timer != null) {
      clearTimeout(mem.timer);
      mem.timer = null;
    }
    var container = document.getElementById("mem-play"),
        card = null;
    container.innerHTML = "";
    for (var i=0; i<mem.grid.length; i++) {
      card = document.createElement("div");
      card.innerHTML = "<img src='img/memorie/Memorie_BG.png'/>";
      card.classList.add("mem-card");
      card.setAttribute("id", "mem-card-" + i);
      card.dataset.idx = i;
      card.addEventListener("click", mem.play);
      container.appendChild(card);
    }
  },

  remain : 0, 
  moves : 0,
  mistakes : 0,
  first : null,
  second : null,
  show : 1000,
  timer : null,
  play : function () {

    if (mem.second === null) { if (this.dataset.idx != mem.first) {
      if (mem.first === null) { mem.first = this.dataset.idx; }
      else { mem.second = this.dataset.idx; }
      this.classList.add("open");
      this.innerHTML = "<img src='img/memorie/Memorie-" + mem.grid[this.dataset.idx] + ".png'/>";
      mem.moves++;
      if (mem.first!==null && mem.second!==null) {
        if (mem.grid[mem.first] == mem.grid[mem.second]) {
          mem.update(true);
          mem.remain--;
          if (mem.remain==0) {
            alert("WIN! Moves - " + mem.moves + " Mistakes - " + mem.mistakes);
          }
        } else {
          mem.timer = setTimeout(mem.update, mem.show);
          mem.mistakes++;
        }
      }
    }}
  },

  update : function (ok) {
    var card = document.getElementById("mem-card-" + mem.first);
    card.classList.remove("open");
    if (ok) {
      card.classList.add("ok");
    } else {
      card.innerHTML = "<img src='img/memorie/Memorie_BG.png'/>";
      card.addEventListener("click", mem.play);
    }
    card = document.getElementById("mem-card-" + mem.second);
    card.classList.remove("open");
    if (ok) {
      card.classList.add("ok");
    } else {
      card.innerHTML = "<img src='img/memorie/Memorie_BG.png'/>";
      card.addEventListener("click", mem.play);
    }
    mem.first = null;
    mem.second = null;
    mem.timer = null;
  }
};

window.addEventListener("load", mem.init);