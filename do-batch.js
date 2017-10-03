var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

function clean(clothing_item){
    clean_clothing_item = clothing_item.replace("*","");
    return mended_clothing_item;
}

function mend(clothing_item){
    mended_clothing_item = clothing_item.replace("/","");
    return mended_clothing_item;
}

function iron(clothing_item){
    var lowerCase = clothing_item.toLowerCase();
    return lowerCase;
}


// function doBatch(clothes){
//}

batch_input.forEach(function process_item(clothing_item){
  clean(clothing_item);
  mend(clothing_item);
  iron(clothing_item);
});

var output = [];


/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
