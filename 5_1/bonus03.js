// Write a JavaScript program to set the background color of a paragraph.

function paragraphBg(color) {
  const paragraphs = document.getElementsByTagName("p");
  paragraphs[0].style.backgroundColor = color
}

paragraphBg("blue")