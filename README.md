
# berserk-lorem-ipsum

Welcome to a Berserk inspired Lorem Lipsum.

Install the dependencies with:
```
npm i 
```

## Points of interest in this app build:

This function takes a random index array from three diffrent arrays and concats them.
`generateThisMany` is the value from the option selected in the selector.
```
function generateLorem() {
    var paragraph = '';   
    var generateThisMany = getSelectorValue[getSelectorValue.selectedIndex].value;
    for(var i=0; i < generateThisMany; i++){
        paragraph +=
        characterArray[Math.floor(Math.random()*characterArray.length)] 
        + senarioArray[Math.floor(Math.random()*senarioArray.length)] 
        + quotesArray[Math.floor(Math.random()*quotesArray.length)];
    }
    return root.innerHTML = paragraph;
}

```

Almost all the elements in the application are created with js. This path was chosen as an excersise in js.
```
const header = document.createElement("H1");
const headerText = document.createTextNode(`Berserk Lorem Ipsum`);
const headerImg = document.createElement("IMG");
    headerImg.setAttribute('src', 'curse.png');
    document.getElementById('header').appendChild(header).appendChild(headerText);
    document.getElementById('header').appendChild(headerImg);
```

The copy function is the best experince possible for a user looking for Lorem Ipsum.
`window.getSelection().removeRange(range);` was a critical discovery in preventing the app from breaking after multiple copy attempts.
```
function copyToClipboard(id) {
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(document.getElementById(id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
}
```
