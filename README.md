# whispering-mist-carousel

Whispering Mist Carousel is a React component for displaying a carousel of images with a whispering mist effect.

## Installation

You can install the whispering-mist-carousel package via npm:

```bash
npm install whispering-mist-carousel
```

## Usage

```javascript
import React from 'react';
import WhisperingMistCarousel from 'whispering-mist-carousel';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

const MyComponent = () => {
  return (
    <WhisperingMistCarousel images={images} />
  );
};

export default MyComponent;
```

## Props

- `images` (required): Array of image URLs to be displayed in the carousel.
- `interval` (optional): Interval in milliseconds between automatic slides (default: 3000).

## Features

- Whispering mist effect adds a unique visual appeal to the carousel.
- Automatic slide rotation with configurable interval.
- Pause/play functionality to control slide rotation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
