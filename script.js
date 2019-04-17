const twice = document.getElementById("twice");

function fs() {
  document.fullscreenElement ?
    document.exitFullscreen && document.exitFullscreen() :
    document.documentElement.requestFullscreen()
}

function c() {
  -1 !== location.href.indexOf("color=") && twice.setAttribute("style", `fill:${location.href.substring(location.href.lastIndexOf("rgb"),location.href.lastIndexOf(")")+1)}`)
}

function w() {
  let width = Number(location.href.substring(location.href.lastIndexOf("width=") + 6, location.href.length));
  isNaN(width) && (width = +location.href.substring(location.href.lastIndexOf("width=") + 6, location.href.lastIndexOf("color"))),
  twice.style.width = width;
}

document.addEventListener("click", function (a) {
    a.target.matches(".nofs *, .nofs") || fs()
  }),

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    document.body.classList.toggle("toggled")
  }),

  document.querySelector(".btn.removehash").addEventListener("click", function () {
    history.pushState("", document.title, window.location.pathname + window.location.search)
  }),

  document.querySelector(".btn.reset").addEventListener("click", function () {
    Array.from(document.querySelectorAll("input")).forEach(a => {
      a.value = ""
    });
  }),

  Array.from(document.querySelectorAll(".btn.gr")).forEach(a => {
    a.addEventListener("click", function () {
      document.body.style.background = `linear-gradient(to ${a.innerText}, #ff5fa2, #fcc89b)`
    })
  }),

  document.querySelector(".btn.grds").addEventListener("click", function () {
    document.getElementsByClassName("gradient")[0].classList.toggle("reveal")
  }),

  document.querySelector(".btn.done").addEventListener("click", function () {
    const colorval = document.querySelector(".color").value,
      widthval = document.querySelector(".width").value,
      comma = colorval.split(",").length;
    if (colorval !== "") {
      if (comma === 3) {
        location.hash = `color=rgb(${colorval})`
      }
      if (comma === 4) {
        location.hash = `color=rgba(${colorval})`
      }
    }
    if (colorval !== "" && widthval !== "") {
      location.hash = location.hash + `width=${widthval}`
    }
    if (colorval === "" && widthval !== "") {
      location.hash = `width=${widthval}`
    }
    c(), w();
  }), c(), w();
