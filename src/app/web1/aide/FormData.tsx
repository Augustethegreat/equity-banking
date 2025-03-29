import React from "react";
import "./style.css";

export default function App() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEle = e.currentTarget;
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzjbDmKWmAw1cz1MxlZhAWoCBXr7nYbJeT6F4EO8-GWqtFhjwLhrhRLJcjq8RsK1bwFUA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Contact Me Form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google Sheets
        in React or Vanilla JS
      </h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Your Name" name="Nom" type="text" required />
          <input placeholder="Your Postnom" name="Postnom" type="text" required />
          <input placeholder="Your Courriel" name="Courriel" type="email" required />
          <input placeholder="Your Phone" name="Phone" type="number" required />
          <input placeholder="Your Demande" name="Demande" type="text" required />
          <input placeholder="Your Operation" name="Operation" type="text" required />
          <input placeholder="Your Commentaire" name="Commentaire" type="text" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
