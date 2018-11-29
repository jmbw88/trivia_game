var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    ["Which of these is not a member of the Fellowship of the Ring?", "Sam", "Frodo", "Legolas", "Sauron", "D"],
    ["Where did Legolas proclaim that the Orcs were taking the Hobbits?", "Isengard", "Mordor", "The Shire", "New Zealand", "A"],
    ["Which race was not gifted Rings of Power?", "Men", "Hobbits", "Elves", "Dwarves", "B"],
    ["Before revealing himself as Aragorn, by what name was the Ranger known?", "Walker", "Jumper", "Francis", "Strider", "D"],
    ["What weapon does Gimli pledge in the service of the Fellowship?", "Sword", "Bow", "Axe", "Mace", "C"],
    ["What is the magical metal which composes Frodo's life-saving armor?", "Mithril", "Steel", "Iron", "Gold", "A"],
    ["Ill-fated actor Sean Bean plays this member of the Fellowship", "Aragorn", "Boromir", "Frodo", "Gandalf", "B"],
    ["What is the name of the blade given to Frodo by Bilbo?", "Swat", "Scorn", "Sting", "Sunder", "C"],
    ["Who is not a hobbit?", "Gimli", "Frodo", "Merry", "Pippin", "A"],
    ["In the fires of what mountain can the One Ring be destoryed?", "Despair", "Terror", "Rushmore", "Doom", "D"]

];

function get(x) {
    return document.getElementById(x);
}

var timer = 20;
var intervalId

function gameTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function decrement() {
    timer--;
    timerSpan.innerHTML = timer;
    if (timer <= 0) {
        stop();
        checkAnswer();
    }
}

function stop() {
    clearInterval(intervalId);
}

function createQuestion () {
    timer = 20
    test = get("test");
    if(pos >= questions.length) {
        test.innerHTML = "<h2>You scored "+correct+" of "+questions.length+"!</h2>";
        get("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    correctDisplay.innerHTML = "";
    get("test_status").innerHTML = "Question " +(pos+1)+" of " +questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value ='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value ='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value ='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value ='D'> "+chD+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    timerSpan.innerHTML = timer;
    gameTimer();
    

}

function checkAnswer() {
    choices = document.getElementsByName ("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
        if(choice == questions[pos][5]) {
            correct++;
            stop();
            correctDisplay.innerHTML = "<h2>Correct!<h2>";
            correctDisplay.innerHTML += '<img src="assets/Images/Happy_Frodo.jpg">';
        }

        else {
            stop();
            correctDisplay.innerHTML = "<h2>Incorrect!</h2>";
            correctDisplay.innerHTML += '<img src="assets/Images/Sad_Frodo.png">';
        }
        pos++;
        timer = 20
        setTimeout(createQuestion, 2000)
}

window.addEventListener("load", createQuestion, false);

