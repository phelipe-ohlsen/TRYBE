function grades(grade) {
  if (grade < 50) {
    console.log("F")
  }
  else if (50 <= grade && grade < 60) {
    console.log("E")
  }
  else if (60 <= grade  && grade < 70) {
    console.log("D")
  }
  else if (70 <= grade  && grade < 80) {
    console.log("C")
  }
  else if (80 <= grade  && grade < 90) {
    console.log("B")
  }
  else if (90 <= grade  && grade <= 100) {
    console.log("A")
  }
  else {
    console.log("Invalid entry.")
  }
}

grades(99)