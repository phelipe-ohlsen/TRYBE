window.onload = function() {

  // Color palette selection
  function createColorPalette(numberOfPalettes) {
    const colorPaletteContainer = document.getElementById("color-palette");
    for (let i = 0; i < numberOfPalettes; i += 1) {
      const div = document.createElement("div");
      div.className = "color";
      colorPaletteContainer.appendChild(div);
    }
  }
  
  createColorPalette(8);

  // Assigning class "selected" to black palette
  const blackPalette = document.querySelectorAll(".color")[0];
  blackPalette.style.backgroundColor = "black";
  blackPalette.className += " selected";

  // 
  function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    const randomColor = `rgb(${red},${blue},${green})`;

    return randomColor;
  }

  function applyColorOnColorPalette() {
    const colorsPalette = document.querySelectorAll(".color:not(:first-child)");
    for (let i = 0; i < colorsPalette.length; i += 1) {
      if (!(i == 0)) {
        colorsPalette[i].style.backgroundColor = generateRandomColor();
      } else {
        colorsPalette[i].style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      }
    }
  }

  applyColorOnColorPalette();

  // Pixel board
  function createPixelLine() {
    const pixelLine = document.createElement("div");
    pixelLine.className = "pixel-line";
    pixelBoardContainer.appendChild(pixelLine);
  }

  function createPixel(index) {
    const pixelLines = document.querySelectorAll(".pixel-line");
    
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
    pixel.onclick = function() {colorPixel(pixel);}

    pixelLines[index].appendChild(pixel);
  }

  function generatePixelBoard(numberOfRows,numberOfColumns) {
    resetPixelBoard();

    if (numberOfRows < 5) {
      numberOfRows = 5;
      numberOfColumns = 5;
    } 
    else if (numberOfRows > 50) {
      numberOfRows = 50;
      numberOfColumns = 50;
    }

    for (let i = 0; i < numberOfRows; i += 1) {
      createPixelLine();
      for (let j = 0; j < numberOfColumns; j += 1) {
        createPixel(i);
      }
    }
  }

  function resetPixelBoard() {
    const pixelLinesList = document.querySelectorAll(".pixel-line")

    for (let pixelLine of pixelLinesList) {
      pixelLine.parentElement.removeChild(pixelLine)
    }
  }

  const pixelBoardContainer = document.getElementById("pixel-board");
  generatePixelBoard(5,5);

  // Color pixelBoard
  function changeSelectedClassAndBrushColor(element) {
    const currentInk = document.querySelector(".selected");
    currentInk.classList.remove("selected");

    element.className += " selected";
    changeBrushColor(element);
  }

  function changeBrushColor(element) {
    let color = extractColorFromString(element.getAttribute("style"));
    brush = color;
  }

  function extractColorFromString(elementStyle) {
    let color = elementStyle
    color = color.split(": ");
    color = color[1];
    color = color.split(";");
    color = color[0];
    return color;
  }

  const inks = document.querySelectorAll(".color");
  let brush = "black";

  for (let ink of inks) {
    ink.addEventListener("click", function() {
      changeSelectedClassAndBrushColor(this);
    })
  }

  function colorPixel(pixel) {
    pixel.style.backgroundColor = brush;
  }

  const resetButton = document.getElementById("clear-board");
  resetButton.onclick = function() {
    const pixels = document.querySelectorAll(".pixel");
    for (pixel of pixels) {
      pixel.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
  }

  // Canvas sizes
  function validateCanvasSize() {
    if (rowsInput.value < 5) {
      rowsInput.value = 5;
    }
    else if (rowsInput.value > 50) {
      rowsInput.value = 50;
    }

    columnsInput.value = rowsInput.value;
  }

  const rowsInput = document.getElementById("board-size");
  const columnsInput = document.querySelectorAll("input")[1];

  rowsInput.addEventListener("change", function () {
    validateCanvasSize();
  })

  columnsInput.value = rowsInput.value;

  const generateButton = document.getElementById("generate-board");
  generateButton.onclick = function() {
    if (rowsInput.value == "" || columnsInput.value == "") {
      alert('Board inválido!');
    }

    generatePixelBoard(rowsInput.value,columnsInput.value)
  }

  // Advanced settings section 
  function advancedSettingsSection() {
    const advSettSection = document.querySelector('.advanced-settings');
    if (advSettSection.classList.contains('active')) {
      advSettSection.classList.remove('active');
    } else {
      advSettSection.classList.add('active');
    }
  }
  
  const advSettButton = document.querySelector('.settings-button');
  advSettButton.onclick = advancedSettingsSection;

}
