import React, { useState } from 'react';
import "./styles.css"

function FormPage() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const filesArray = Array.from(fileList);
    setImages(filesArray);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('description', description);

    for (const image of images) {
      formData.append('images', image);
    }

    try {
      const response = await fetch('https://desertbags.onrender.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Form submitted successfully');
        // Optionally reset the form after successful submission
        setName('');
        setMobile('');
        setDescription('');
        setImages([]);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <>
      <div className='Navbar'>   {/*this is for the navbar */}
        <img src={require('./logo.png')} alt='this is the logo'/>
        <h2>DesertBags</h2>
      </div>
      <div className='form_container'>
        <form onSubmit={submitForm}>
          <h2>Report</h2>
          <span>Name</span>
          <input id="input_fiels" type="text" value={name} onChange={(e) => setName(e.target.value)}  />
          <span>
            Mobile Number
          </span>
          <input id="input_fiels" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />

          <div className="file-input-container">
            <p>Upload Image</p>
            <input
              className="file-input"
              type="file"
              name="image"
              id="fileInput"
              onChange={handleFileChange}
              multiple
            />
            <label htmlFor="fileInput" className="custom-file-button">
              Choose File
            </label>
          </div>

          <span>Complain</span>
          <textarea id="input_field_description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          
          <button className='button_styles' type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormPage;