import React from 'react';

const ImageUploader = ({ onUpload, label }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
};

export default ImageUploader;
