$(function () {

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
            ans: "Satyta Nadella"
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

    console.log(optionField1.innerHTML);

    let  Option1=$("#question");
    console.log(Option1.text())

    
    let optionField2 = document.getElementById("option2");
    let optionField3 = document.getElementById("option3");
    let optionField4 = document.getElementById("option4");
    // -------button-----
    let subBtn = document.getElementById('sunBtn');

    count = 0;
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
    const checkAns=()=>{
        let check = document.getElementsByClassName("check");
        for (i of check) {
            if (i.checked === true) {
                // let userAns=i.id;
                let userAns=i.nextElementSibling.innerText;
                console.log(ans)
                if(userAns==quesList.ans){
                    console.log("correct")
                }
                else{
                    console.log("wrong")
                }
            }
        }
    }

    subBtn.addEventListener("click", () => {
        checkAns();
        count+=1;
       if(count<=quesList.length){
        if(count==quesList.length){
            count=0;
            loadQA();
        }
        loadQA();
       }
    
    })
});



