import React, { useState, useEffect } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (text.length === 0) return;

    setIsTyping(true);

    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="container">
      <h2>Live Character Counter</h2>
      <textarea
        rows="4"
        cols="40"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      />
      <p className="char-count">Character Count: {text.length}</p>
      {isTyping ? (
        <p className="typing">Typing...</p>
      ) : (
        <p className="stopped">You stopped typing...</p>
      )}
    </div>
  );
}

export default CharacterCounter;
