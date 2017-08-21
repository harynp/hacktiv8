function LetterCapitalize(str) { 

  hasil = str.replace(/\b\w/g, l => l.toUpperCase())
  return hasil; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());