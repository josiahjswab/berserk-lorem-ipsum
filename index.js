
const characterArray = [' Guts', ' Griffith'];

const senarioArray = [' swung his sword in a great arc', ' howled with the rage of a wild animal' ];

const quotesArray = [' "Hate is a place where a man who can\'t stand sadness, goes."', ];

const selectArray = ['10', '20', '30', '40', '50']

var root = document.getElementById('root');



const header = document.createElement("H1");
const headerText = document.createTextNode('Berserk Lorem Ipsum');
document.getElementById('input-field').appendChild(header).appendChild(headerText);

const image = document.createElement("IMG");
image.setAttribute('src', '')
document.getElementById('input-field').appendChild(image);

const select = document.createElement("SELECT");
select.id = 'length-select';
document.getElementById('input-field').appendChild(select);

selectArray.forEach(createSelectorList);

function createSelectorList(item){
    var options = document.createElement("OPTION");
    options.setAttribute('value', item);
    document.getElementById('length-select').appendChild(options).innerHTML = item/10 + ' x content';
}

const getSelectorValue = document.getElementById('length-select');

const button = document.createElement("BUTTON");
    button.setAttribute('id', 'generator-button');
    button.setAttribute('onclick', 'generateLorem()');
    button.innerHTML = 'Generate';
    document.getElementById('input-field').appendChild(button);

function generateLorem() {
    var paragraph = '';   
    var generateThisMany = getSelectorValue[getSelectorValue.selectedIndex].value;
    for(var i=0; i < generateThisMany; i++){
        paragraph +=
        characterArray[Math.floor(Math.random()*characterArray.length)] 
        + senarioArray[Math.floor(Math.random()*senarioArray.length)] 
        + quotesArray[Math.floor(Math.random()*quotesArray.length)];
        
        
    }
        console.log(generateThisMany);
        return root.innerHTML = paragraph;
}

generateLorem();