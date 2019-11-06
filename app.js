
const characterArray = [' Guts', ' Griffith', ' Goto', ' Casca', ' Skull Knight', ' Skull Knight', ' Rickert', ' Zodd', ' Serpico', ' Pippin', ' Isidro', ' Farnese', ' Ivalera' ];

const senarioArray = [' swung the sword in a great arc', 
    ' howled like a wild animal', 
    ' yelled "In the end the winner is still the last man standing!"',
    ' ran towards the beast',
    ' stoop firmly with both feet',
    ' band of the hawk',
    ' was saved',
    ' steped back abruptly',
    ' pivoted with incredible agility.',
    ' looked thoughtfully into his tankard',
    ' parried the incoming blow',
    ' stumbled on the soft earth',
    ' cried out',
    ' God gave them this destiny. This encounter.',
    ' What you want....may not be what she wants.'

];

const quotesArray = [' "Hate is a place where a man who can\'t stand sadness, goes." Goto turned back to his task.', 
    ' "The egg of the King!" proclaimed Griffith.', 
    ' "You\'re going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn\'t it? I\'m sure you\'ll overcome this. You\'ll walk again... soon." Guts turned and left.',
    ' "Even if we painstakingly piece together something lost, it doesn\'t mean things will ever go back to how they were."',
    ' "One who does something he hates just because he\'s told to.. is called an errand boy."',
    ' "The reward for ambition too great... is self destruction."',
    ' Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness. Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul?',
    ' "A friend would not just follow another\'s dream... a friend would find his own reason to live..."',
    ' "A dream... It\'s something you do for yourself, not for others."'

];

const selectArray = ['10', '20', '30', '40', '50'];

const header = document.createElement("H1");
const headerText = document.createTextNode(`Berserk Lorem Ipsum`);
const headerImg = document.createElement("IMG");
    headerImg.setAttribute('src', 'curse.png');
    document.getElementById('header').appendChild(header).appendChild(headerText);
    document.getElementById('header').appendChild(headerImg);

const image = document.createElement("IMG");
    image.setAttribute('src', 'berserk.png');
    document.getElementById('main-img').appendChild(image);

const select = document.createElement("SELECT");
    select.id = 'length-select';
    document.getElementById('bar').appendChild(select);

selectArray.forEach(createSelectorList);

function createSelectorList(item){
    const options = document.createElement("OPTION");
    options.setAttribute('value', item);
    document.getElementById('length-select').appendChild(options).innerHTML = item/10 + ' x Content';
}

const getSelectorValue = document.getElementById('length-select');

const button = document.createElement("BUTTON");
    button.setAttribute('id', 'generator-button');
    button.setAttribute('onclick', 'generateLorem()');
    button.innerHTML = 'Generate';
    document.getElementById('bar').appendChild(button);

const button2 = document.createElement("BUTTON");
    button2.setAttribute('id', 'copy-button');
    button2.setAttribute('onclick', 'copyToClipboard("root")');
    button2.innerHTML = 'Copy';
    document.getElementById('bar').appendChild(button2);

var root = document.getElementById('root'); // App latency improved when this var was moved here.

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

const footer = document.getElementById("footer");
const footerAGit = document.createElement("a");
footerAGit.setAttribute('href', 'https://github.com/josiahjswab/berserk-lorem-ipsum');
footerAGit.setAttribute('target', '_blank');
footer.appendChild(footerAGit);
footerAGit.setAttribute('id', 'git-logo');

const footerImg = document.createElement("IMG");
footerImg.setAttribute('src', 'git-logo.png');
footerAGit.appendChild(footerImg);

/**
 * 
 * @param {string} id 
 */
function copyToClipboard(id) {
    var range = document.createRange();
    window.getSelection().removeRange(range); // End previous lifecycle bby unmounting range. Not doing this causes bugs.
    range.selectNode(document.getElementById(id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
}



generateLorem();

Rickert stoop firmly with both feet "One who does something he hates just because he's told to.. is called an errand boy." Skull Knight looked thoughtfully into his tankard "Even if we painstakingly piece together something lost, it doesn't mean things will ever go back to how they were." Pippin stoop firmly with both feet "Hate is a place where a man who can't stand sadness, goes." Goto turned back to his task. Zodd swung the sword in a great arc "Even if we painstakingly piece together something lost, it doesn't mean things will ever go back to how they were." Pippin stoop firmly with both feet "A friend would not just follow another's dream... a friend would find his own reason to live..." Serpico ran towards the beast "You're going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn't it? I'm sure you'll overcome this. You'll walk again... soon." Guts turned and left. Pippin swung the sword in a great arc "You're going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn't it? I'm sure you'll overcome this. You'll walk again... soon." Guts turned and left. Ivalera God gave them this destiny. This encounter. "The reward for ambition too great... is self destruction." Farnese howled like a wild animal "One who does something he hates just because he's told to.. is called an errand boy." Casca band of the hawk "The egg of the King!" proclaimed Griffith.
Griffith swung the sword in a great arc "A friend would not just follow another's dream... a friend would find his own reason to live..." Ivalera stumbled on the soft earth "Hate is a place where a man who can't stand sadness, goes." Goto turned back to his task. Skull Knight What you want....may not be what she wants. "A friend would not just follow another's dream... a friend would find his own reason to live..." Rickert yelled "In the end the winner is still the last man standing!" "A dream... It's something you do for yourself, not for others." Guts parried the incoming blow "A friend would not just follow another's dream... a friend would find his own reason to live..." Casca band of the hawk "A dream... It's something you do for yourself, not for others." Ivalera ran towards the beast Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness. Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul? Skull Knight stumbled on the soft earth "One who does something he hates just because he's told to.. is called an errand boy." Skull Knight pivoted with incredible agility. "You're going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn't it? I'm sure you'll overcome this. You'll walk again... soon." Guts turned and left. Rickert God gave them this destiny. This encounter. Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness. Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul?
Isidro looked thoughtfully into his tankard "Even if we painstakingly piece together something lost, it doesn't mean things will ever go back to how they were." Serpico looked thoughtfully into his tankard "One who does something he hates just because he's told to.. is called an errand boy." Ivalera looked thoughtfully into his tankard "The egg of the King!" proclaimed Griffith. Pippin God gave them this destiny. This encounter. Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness. Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul? Pippin cried out Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness. Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul? Pippin swung the sword in a great arc Providence may guide a man to meet one specific person, even if such guidance eventually leads him to darkness. Man simply cannot forsake the beauty of his own chosen path. When will man learn a way to control his soul? Guts steped back abruptly "A dream... It's something you do for yourself, not for others." Skull Knight band of the hawk "The reward for ambition too great... is self destruction." Rickert swung the sword in a great arc "One who does something he hates just because he's told to.. is called an errand boy." Zodd steped back abruptly "The reward for ambition too great... is self destruction."
https://berserk-lorem-ipsum.herokuapp.com/
