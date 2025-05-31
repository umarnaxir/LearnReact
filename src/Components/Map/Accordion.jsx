import React, { useState } from "react";

function MyAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordion = [
    {
      question: "Hey! How are you?",
      answer: "I am Good",
    },
    {
      question: "Where are you from?",
      answer: "I am from Kashmir",
    },
    {
      question: "What is your name?",
      answer: "My name is Umar",
    },
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked one
    }
  };

  return (
    <div>
      <h2>My Accordion</h2>
      {accordion.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px", border: "1px solid red", padding: "10px" }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
          >
            <p>{item.question}</p>
            <p>{openIndex === index ? "-" : "+"}</p>
          </div>
          {openIndex === index && (
            <div style={{ marginTop: "5px" }}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyAccordion;
