function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fyounan.png")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, usando óculos escuros e camiseta e jaqueta de couro preta, barba e fundo amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/fyounan.png")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, usando óculos e camiseta preta, barba e fundo amarelo"
    )
  }
}
