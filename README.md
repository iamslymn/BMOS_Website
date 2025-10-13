# BMOS - Baku Math Oriented School Website

A modern, interactive landing page for BMOS (Baku Math Oriented School) built with React, Tailwind CSS, and Framer Motion.

## Features

- 🌐 **Multi-language Support**: Azerbaijani, English, and Russian
- 🎨 **Modern Design**: Clean academic design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- ✨ **Interactive Elements**: Scroll-based animations and hover effects
- 📚 **Course Showcase**: Display of SAT, AP, and other programs
- 📊 **Achievement Counters**: Animated statistics display
- 📖 **Materials Section**: Book catalog with WhatsApp ordering
- 💬 **Testimonials**: Carousel of student and parent feedback
- 📞 **Contact Section**: Complete contact information with social links

## Technologies Used

- React 18
- Tailwind CSS
- Framer Motion (animations)
- Vite (build tool)
- React Icons
- React CountUp
- Swiper (carousel)

## Installation

1. Install dependencies:
```bash
npm install
```

This will install all required dependencies including:
- React & Framer Motion for animations
- Tailwind CSS for styling
- Swiper for carousels
- clsx & tailwind-merge for utility class management
- React Icons & CountUp for UI elements

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
BMOS_Website2/
├── assets/
│   ├── logo.svg
│   ├── student.png
│   └── books/
│       ├── sat_math1.png
│       ├── sat_math2.png
│       ├── examoon1.png
│       └── examoon2.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Courses.jsx
│   │   ├── Mission.jsx
│   │   ├── Achievements.jsx
│   │   ├── Materials.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx
│   ├── translations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Changing Colors
Edit the color scheme in `tailwind.config.js`:
- Primary: Deep Blue (#002B7F)
- Accent: Bright Orange (#FF7A00)

### Adding Languages
Add new language translations in `src/translations.js`

### Updating Content
All text content is managed through the translation system in `src/translations.js`

## Contact

For any questions or support, please contact:
- **Email**: info@bmos.az
- **Phone**: +994 77 812 34 56
- **WhatsApp**: +994 77 812 34 56
- **Location**: Ülvi Bünyadzadə 7. Əbu Bəkir məscidinin yanı, Baku, Azerbaijan

### Social Media
- **Instagram**: [@bakumathschool](https://www.instagram.com/bakumathschool/)
- **Facebook**: [Baku Math Oriented School](http://facebook.com/bakumathorientedschool)
- **Telegram**: [@bakumathschool](https://t.me/bakumathschool)

## License

© BMOS 2025. All Rights Reserved.
