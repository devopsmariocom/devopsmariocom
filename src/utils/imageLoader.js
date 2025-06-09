export default function imageLoader({ src, width, quality }) {

   // if src is svg return src
   if (src.endsWith('.svg')) {
    return src
   }


  // If the image has a small version and the width is less than 768px, use the small version
  // console.log(src, width, quality)
  if (width <= 568) {
    return src.replace('.webp', '_Small.webp')
  }
  
  // Otherwise use the original image
  return src
} 