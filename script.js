function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img.
  const img = document.querySelector("#profile img")
  //substituir a imagem.
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light.
    img.setAttribute("src", "./assets/avatar-light.png")
    img.alt = "Mayk brito com sunglasses de braços cruzados"
  } else {
    //se tiver se, light mode, manter a img normal.
    img.setAttribute("src", "./assets/avatar.png")
    img.alt =
      "Foto de Mayk brito sorrindo usando oculos e camisa preta fundo AMARELO"

  }
}
