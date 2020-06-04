let fs = require("fs");
// ??
let path = require("path");
function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile()
}
function getContent(src) {
    return fs.readdirSync(src);
}
function viewAsFlatFiles(src, toprint) {
    // checkwhether file or directory
    if (checkWhetherFile(src) == true) {
        console.log(toprint + " *");
    } else {
        // directory 
        // print
        console.log(toprint);
        // get childrens
        let childNames = getContent(src);
        // console.log(childNames);
        for (let i = 0; i < childNames.length; i++) {
            let childPath = path.join(src, childNames[i]);
            let cToprint = path.join(toprint, childNames[i]);
            viewAsFlatFiles(childPath, cToprint);
        }
    }
}
function viewAsTree(src, indent) {
    // checkwhether file or directory
    if (checkWhetherFile(src) == true) {
        console.log(indent + path.basename(src) + " *");
    } else {
        // directory 
        // print
        console.log(indent + path.basename(src));
        // get childrens
        let childNames = getContent(src);
        // console.log(childNames);
        for (let i = 0; i < childNames.length; i++) {
            let childPath = path.join(src, childNames[i]);
            viewAsTree(childPath, indent + "__");
        }
    }
}
let src = process.argv[2];
// console.log(src);
// viewAsFlatFiles(src, path.basename(src));
viewAsTree(src, "");