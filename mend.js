var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item){
    mended_clothing_item = clothing_item.replace("/","");
    return mended_clothing_item;
}


/* PRINT RESULT */
console.log("--> Finished running mend.js");
