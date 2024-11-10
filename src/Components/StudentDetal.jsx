import React, { useState } from 'react';
import './StudentDetal.css'; // Adding a CSS file for styling

const StudentDetal = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [data, setData] = useState([]);

  function handleData() {
    const newStudent = { 
      name: name, 
      age: age, 
      gender: gender,
      image: image 
    };

    setData([...data, newStudent]);
    
    // Reset input fields
    setAge('');
    setName('');
    setGender('');
    setImage('');
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleGender(e) {
    setGender(e.target.value);
  }
  function handleImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Save the base64 encoded image
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="form-container">
      <h1>List of Students</h1>
      <ul>
        {data.map((e, index) => (
          <li key={index}>
            {e.image && <img src={e.image} alt="student" className="student-img" />}
            <div className="student-details">
              {e.name} - {e.age} years old - {e.gender}
            </div>
          </li>
        ))}
      </ul>

      <div className="form">
        <label>Name</label>
        <input type="text" value={name} onChange={handleName} />

        <label>Age</label>
        <input type="number" value={age} onChange={handleAge} />

        <label>Gender</label>
        <input type="text" value={gender} onChange={handleGender} />

        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImage} />

        <button onClick={handleData}>Submit</button>
      </div>
    </div>
  );
};

export default StudentDetal;