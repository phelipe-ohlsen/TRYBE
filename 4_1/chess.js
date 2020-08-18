function chess(piece) {
  piece = piece.toUpperCase();

  switch(piece) {
    case "KING":
      console.log("One square in any direction, so long as that square is not attacked by an enemy piece.")
      break;
    
    case "Queen":
      console.log("Diagonally, horizontally, or vertically any number of squares.")
      break;

    case "Rook":
      console.log("Horizontally or vertically any number of squares.")
      break;

    case "BISHOP":
      console.log("Diagonally any number of squares.")
      break;

    case "KNIGHT":
      console.log("In an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.")
      break;

    case "PAWN":
      console.log("Vertically forward one square, with the option to move two squares if they have not yet moved.")
      break;

    default:
      console.log("Invalid entry.")
      break;
  
  }
}

chess("pawn")
