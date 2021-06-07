if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {
  const strings = ["Budi izvrstan u onome što voliš.", "ZAISKRI."]

  var textWhite = document.getElementsByClassName("text-white")[0]
  var textRed = document.getElementsByClassName("text-red")[0]
  textWhite.innerHTML = ""
  textRed.innerHTML = ""

  var textWhiteAfter = textWhite.className
  var textRedAfter = textRed.style.display

  textRedAfter = "none"

  myLoop(strings[0], 0, strings[0].length, "", textWhite)

  function myLoop(data, i, stopper, currentLetter, htmlText) {
    setTimeout(() => {
      console.log(
        "data - " +
          data +
          "; i - " +
          i +
          "; stopper - " +
          stopper +
          "; current l - " +
          currentLetter
      )
      currentLetter += data[i]
      htmlText.innerHTML = currentLetter
      ++i
      if (i < stopper) {
        myLoop(data, i, stopper, currentLetter, htmlText)
      } else {
        if (data != strings[1]) {
          textWhite.classList.remove("coursor")
          textRed.classList.add("coursor")
          //   textWhiteAfter = "none"
          //   textRedAfter = "inline-block"
          myLoop(strings[1], 0, strings[1].length, "", textRed)
        }
      }
    }, 150)
  }
}
