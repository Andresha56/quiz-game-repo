

let quesList = [
    {
        question: " Q1. Who is the founder of iPhone?",
        a: "Steve Jobs",
        b: 'Larry Page',
        c: "Sergey Brin",
        d: "Steve Chen",
        ans: "Steve Jobs"
    },
    {
        question: " Q2. Who was the first female Prime Minister of India?",
        a: "Pratibha Patil",
        b: "Droupadi Murmu",
        c: "Indira Gandhi",
        d: "Nirmala Sitharaman",
        ans: "Indira Gandhi"
    },
    {
        question: 'Q3. Breaking within a string statement can be done by using',
        a: "/",
        b: "/n",
        c: '|',
        d: "\\",
        ans: "\\"
    },
    {
        question: " Q4. What is === operator called?",
        a: "Strict equality operator",
        b: "Not equal operatoer",
        c: "Logical And operator",
        d: "Logical OR Operator",
        ans: "Strict equality operator"

    },
    {
        question: " Q5. How many looping structures are there in JavaScript?",
        a: 1,
        b: 3,
        c: 4,
        d: 6,
        ans: "3"
    },
    {
        question: "Q6. Who is the CEO of Google?",
        a: "Larry Page",
        b: "Mark Zuckerberg",
        c: "Sundar Pichai",
        d: "Satyta Nadella",
        ans: "Larry Page"
    },
    {
        question: "Q7. What would be the result of 3+2+'7'?",
        a: 12,
        b: 57,
        c: "error",
        d: 5,
        ans: "57",
    },
    {
        question: "Q8. Which one is correct?",
        a: 'delete(student.age)',
        b: 'Delete.student.age',
        c: 'Delete(student.age)',
        d: 'delete.student.age',
        ans: "delete(student.age)"
    }
];
// --------question-------------
let question = document.getElementById("question");

// ---option----
let optionField1 = document.getElementById("option");
let optionField2 = document.getElementById("option2");
let optionField3 = document.getElementById("option3");
let optionField4 = document.getElementById("option4");

// ------radio-btn-----
let check = document.getElementsByClassName("check");

// -------buttons-----
let subBtn = document.getElementById('sunBtn');
let nextBtn = document.getElementById('nextBtn');

// ------show--msg-----
let resultCon = document.getElementById("result");
let showmsg = document.querySelector("#result p");


count = 0;
userScore = 0;
// -------load-Q/A---------

const loadQA = () => {
    question.innerText = quesList[count].question;
    optionField1.innerText = quesList[count].a;
    optionField2.innerText = quesList[count].b;
    optionField3.innerText = quesList[count].c;
    optionField4.innerText = quesList[count].d;

}
loadQA();
// ----------check--ans---by--id-----
const checkAns = () => {

    for (i of check) {
        if (i.checked === true) {
            let userAns = i.nextElementSibling.innerText;
            // console.log(userAns)

            // -----match---ans--
            if (userAns == quesList[count].ans) {
                resultCon.style.display = "block";
                showmsg.innerText = "Yor are exactly right 🤩🤩"
                userScore += 1;
            }
            else {
                resultCon.style.display = "block";
                showmsg.innerText = `Opps!! You are wrong 😭😭 \nAns=  ${quesList[count].ans}`
            };
        };
    };
};

// ------submit--ans-----
subBtn.addEventListener("click", () => {
    checkAns();
});


// ----uncheck--ans---
const uncheck = () => {
    for (i of check) {
        if (i.checked === true) {
            i.checked = false;
        }
    }
}
// ------Play---again----

playAgain=()=>{
    document.getElementById("Playagain").addEventListener("click",()=>{
        document.getElementById("game-con").style.display="block";
        document.getElementById("playAgain").style.display="none";
        count=0;
        loadQA();
    })
}

// ------show---next--ans-----
nextBtn.addEventListener("click", () => {
    resultCon.style.display = "none";
    count += 1;
    uncheck();
    if (count == quesList.length) {
        console.log('done')
        document.getElementById("game-con").style.display="none";
        document.getElementById("playAgain").style.display="block";
        document.querySelector("#playAgain h3").innerHTML=`You answered ${userScore} out of ${quesList.length}`
        playAgain();
    } else{
        loadQA();
    }

});






