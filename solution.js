function myReplace(str, before, after) {
 var aftConv = "";
 var string = "";
 
 if(before[0] === before[0].toUpperCase()){
   aftConv = after.replace(after[0],after[0].toUpperCase());
 } 
 else if(before[0] === before[0].toLowerCase()){
   aftConv = after.toLowerCase();
 }
  string = str.replace(before,aftConv);
  
  return string;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
