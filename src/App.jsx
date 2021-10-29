import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which is city is the capital of INDIA",
      answers: [
        {
          text: "Bengaluru",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Kolkata",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "To make your website mobile friendly, you can make your website",
      answers: [
        {
          text: "Responsive",
          correct: true,
        },
        {
          text: "Reactive",
          correct: false,
        },
        {
          text: "Fast Loading",
          correct: false,
        },
        {
          text: "Light",

          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What does CSS stand for",
      answers: [
        {
          text: "Current Style Sheets",
          correct: false,
        },
        {
          text: "Current Sheets Style",
          correct: false,
        },
        {
          text: "Cascading Style Sheets",
          correct: false,
        },
        {
          text: " Cascading Sheets Style",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which is not the browser?",
      answers: [
        {
          text: "Internet Explorer",
          correct: false,
        },
        {
          text: "Google",
          correct: true,
        },
        {
          text: "Opera",
          correct: false,
        },
        {
          text: "Mozila",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is HTML",
      answers: [
        {
          text: "Hyper Text Make Language",
          correct: false,
        },
        {
          text: "Hyper Text Makeover Language",
          correct: false,
        },
        {
          text: "Hyper Text Markup Language",
          correct: true,
        },
        {
          text: "Hyper Text Make-in Language",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which Language used for creating web pages",
      answers: [
        {
          text: "PASCAL",
          correct: false,
        },
        {
          text: "C",
          correct: false,
        },
        {
          text: "HTML",
          correct: true,
        },
        {
          text: "BASIC",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "The tag used for adding images to HTML",
      answers: [
        {
          text: "<FONT>",
          correct: false,
        },
        {
          text: "<HR>",
          correct: false,
        },
        {
          text: "<IMG>",
          correct: true,
        },
        {
          text: "<HI>",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "SQL stands for ",
      answers: [
        {
          text: "Structured Query Language",
          correct: true,
        },
        {
          text: "Statistical Query Language",
          correct: false,
        },
        {
          text: "Superior Questions Lot",
          correct: false,
        },
        {
          text: "Standard Query Lot",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Long form of www",
      answers: [
        {
          text: "world wide window",
          correct: false,
        },
        {
          text: "world wide web",
          correct: true,
        },
        {
          text: "world width web",
          correct: false,
        },
        {
          text: "web world wide",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "CEO of Google",
      answers: [
        {
          text: "Sathya Nadella",
          correct: false,
        },
        {
          text: "Sundar Pichai",
          correct: true,
        },
        {
          text: "Elon Mask",
          correct: false,
        },
        {
          text: "jeff bezos",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "plain JawaScript is called",
      answers: [
        {
          text: "Strawberry JS",
          correct: false,
        },
        {
          text: "Vanilla JS",
          correct: true,
        },
        {
          text: "Chocolate JS",
          correct: false,
        },
        {
          text: "Neapolitan JS",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which team won 2021 IPL trophy",
      answers: [
        {
          text: "Kolkata Knight Riders",
          correct: false,
        },
        {
          text: "Delhi Capitals",
          correct: false,
        },
        {
          text: "Chennai Supper Kings",
          correct: true,
        },
        {
          text: "Royal Challengers Bengaluru",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who is the captain of team India in ICC T20 world cup 2021?",
      answers: [
        {
          text: "Rohit Sharma",
          correct: false,
        },
        {
          text: "M S Dhoni",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: true,
        },
        {
          text: "K L Rahul",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "How many colours are there in Rainbow",
      answers: [
        {
          text: "5",
          correct: false,
        },
        {
          text: "6",
          correct: false,
        },
        {
          text: "7",
          correct: true,
        },
        {
          text: "8",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Character Name of prabhas in the film Bahubali",
      answers: [
        {
          text: "Ballala Deva",
          correct: false,
        },
        {
          text: "Bahubali",
          correct: true,
        },
        {
          text: "Bijjala Deva",
          correct: false,
        },
        {
          text: "Kattappa",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1,000" },
        { id: 2, amount: "₹ 2,000" },
        { id: 3, amount: "₹ 3,000" },
        { id: 4, amount: "₹ 5,000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
