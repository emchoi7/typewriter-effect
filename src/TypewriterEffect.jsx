import {useState, useRef} from 'react';

const TypewriterEffect = () => {
  const [display, setDisplay] = useState("");
  const intervalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(intervalRef.current) {
      setDisplay("");
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    const data = new FormData(e.target);
    // TODO Display the text with typewriter effect
    console.log(`The sentence to display is ${data.get("sentence")}`);
    let i = 0;
    intervalRef.current = setInterval(() => {
      if(i === data.get("sentence").length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else {
        setDisplay(data.get("sentence").slice(0,i+1));
        i += 1
      }
      
    }, 500);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="sentence"
          placeholder="Type a sentence"
          style={{ width: "300px" }}
        />
        <button type="submit">Display with typewriter effect</button>
      </form>
      <p>{display}</p>
    </div>
  );
};

export default TypewriterEffect;
