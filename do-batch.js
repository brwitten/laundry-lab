var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

function clean(element){
    clean_clothing_item = clothing_item.replace("*","");
    return mended_clothing_item;
}

function mend(element){
    mended_clothing_item = clothing_item.replace("/","");
    return mended_clothing_item;
}

function iron(element){
    var lowerCase = clothing_item.toLowerCase();
    return lowerCase;
}


// function doBatch(clothes){
//}

batch_input.forEach(function(element){
  clean(element);
  mend(element);
  iron(element);
})



/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
