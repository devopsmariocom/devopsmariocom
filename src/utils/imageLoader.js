export default function imageLoader({ src, width, quality }) {
  // If the image has a small version and the width is less than 768px, use the small version
  if (width <= 768) {
    return src.replace('.webp', '_Small.webp')
  }
  
  // Otherwise use the original image
  return src
} 