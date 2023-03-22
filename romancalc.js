function concatNumLetters(letter, num) {
    let text = "";
    for(let i=0; i<num; i++){
        text += letter;
    }
    return text;
}


function arabicToRomanNumber(arabic) {
    arabic = parseInt(arabic);
    let roman = "";
    if (arabic >= 1000) {
        let thousands = ~~(arabic / 1000);
        roman = concatNumLetters("M", thousands);
        arabic -= thousands * 1000;
    }
}
     if (arabic >= 900) {
         roman += "CM";
         arabic -= 900;
     }

     if (arabic >= 500) {
         roman += "D";
         arabic -= 500;
     }

     if (arabic >= 400) {
         roman += "CD";
         arabic -= 400;
     }

     if (arabic >= 100) { 
        let hundreds = ~~(arabic / 100);
        roman += concatNumLetters("C", hundreds);
        arabic -= hundreds * 100;
     }