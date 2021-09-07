import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './AboutIntro.style';

async function getPhotoURL() {
  let req = await axios.get('https://api.github.com/users/pswiecicki');
  const URL = JSON.stringify(req.data.avatar_url);
  const photoURL = URL.replace(/"/g, '');

  return photoURL;
}

const AboutIntro = () => {
  const [photoURL, setPhotoURL] = useState('assets/img/unknown.png');

  useEffect(() => {
    getPhotoURL().then((value) => setPhotoURL(value));
  }, []);

  return (
    <Wrapper>
      <img src={photoURL} alt="My github avatar"></img>
      <div className="intro-text">
        <h2>Hi, my name is Patryk</h2>
        <h3>and I want to become a&nbsp;great Developer.</h3>
      </div>
    </Wrapper>
  );
};

export default AboutIntro;
