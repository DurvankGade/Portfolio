# Profile Image Update Guide

## Current Setup
The portfolio is currently configured to use the WhatsApp profile image as the main profile picture.

## Image Configuration
- **Current Source**: `/public/assets/whatsapp-profile.jpg`
- **Fallback**: `/public/assets/profile.svg` (if WhatsApp image fails to load)
- **Location**: `public/assets/` directory

## To Replace with Different Image

1. **Prepare Your Image**
   - Use a high-quality photo (recommended: 400x400 pixels or larger)
   - Ensure good lighting and professional appearance
   - Save in JPG or PNG format

2. **Replace the Image**
   - Copy your profile photo to: `public/assets/whatsapp-profile.jpg`
   - Or update the image source in `src/components/Hero.tsx`:
     ```tsx
     <img 
       src="/assets/your-image-name.jpg" 
       alt="Durvank Gade" 
       className="w-full h-full object-cover"
     />
     ```

3. **Image Optimization**
   - For best performance, compress the image
   - Recommended file size: under 200KB
   - Use tools like TinyPNG or ImageOptim

4. **Alternative Formats**
   - You can also use WebP format for better compression
   - Update the src attribute accordingly

## Image Specifications
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400 pixels minimum
- **Aspect Ratio**: 1:1 (square) recommended
- **File Size**: Under 200KB for optimal performance
- **Location**: `public/assets/` directory

## Current Status
✅ WhatsApp profile image is configured and ready to use
✅ Fallback placeholder is in place
✅ Image loading is optimized with error handling 