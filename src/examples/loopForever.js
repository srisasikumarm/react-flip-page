import React from 'react';
import FlipPage from 'react-flip-page';
import { baseUrl, images } from './base.js';

export default () => (
  <FlipPage loopForever>
    {images.map((n, i) => <img key={i} src={`${baseUrl}${n}`} />)}
  </FlipPage>
);