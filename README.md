# 🎓 Learnowa - Education Platform

A modern, responsive education website designed for students from Class 1 to 12. Built with HTML5, CSS3, and JavaScript.

![Learnowa Logo](https://img.shields.io/badge/Learnowa-Education%20Platform-22c55e?style=for-the-badge)

## 🌟 Features

- **📱 Responsive Design** - Works perfectly on all devices
- **🎨 Modern UI/UX** - Clean green and white theme
- **🎯 Student-Focused** - Designed specifically for K-12 students
- **📚 Course Management** - Grade-wise course organization (1-5, 6-8, 9-10, 11-12)
- **👨‍🏫 Expert Teachers** - Learn from qualified educators
- **📊 Progress Tracking** - Monitor learning journey
- **🎮 Gamified Learning** - Badges, certificates, and interactive content
- **❓ 24/7 Doubt Support** - Get help anytime
- **📱 Mobile Learning** - Learn on the go

## 🚀 Live Demo

Visit the live website: [Learnowa Education Platform](https://your-username.github.io/learnowa/)

## 📁 Project Structure

```
Learnowa/
│
├── index.html          # Homepage
├── login.html          # Student login page
├── signup.html         # Student registration
├── contact.html        # Contact and support
│
├── css/
│   └── style.css       # Main stylesheet
│
├── js/
│   └── script.js       # Interactive functionality
│
├── images/             # Website assets
│
└── pages/              # Additional pages
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

## 🎨 Design Features

- **Color Scheme**: Green (#22c55e) and White theme
- **Typography**: Inter font family
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and keyboard navigation

## 📚 Courses Offered

### Primary (Classes 1-5)
- Mathematics with fun activities
- English with storytelling
- Basic Science experiments
- General Knowledge

### Middle (Classes 6-8)
- Advanced Mathematics
- Science with lab experiments
- English literature
- Social Studies with interactive maps

### Secondary (Classes 9-10)
- Board exam preparation
- Advanced concepts
- Mock tests and assessments
- Career guidance

### Senior Secondary (Classes 11-12)
- Stream-specific courses
- Competitive exam preparation
- Advanced mathematics and sciences
- College preparation

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JS (for modifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/learnowa.git
   cd learnowa
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   python -m http.server 8000  # For local server
   ```

3. **For development**
   ```bash
   # Use VS Code Live Server or any local server
   # No build process required - pure HTML/CSS/JS
   ```

## 📝 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-green: #22c55e;
    --dark-green: #16a34a;
    --light-green: #dcfce7;
    /* Add your custom colors */
}
```

### Adding New Courses
Update the `coursesData` object in `js/script.js`:
```javascript
const coursesData = {
    primary: [
        // Add your course objects here
    ]
};
```

### Modifying Content
- Edit `index.html` for homepage content
- Update contact information in `contact.html`
- Customize forms in `login.html` and `signup.html`

## 🔧 Development

### File Structure
- **HTML files**: Main pages and structure
- **CSS**: All styling in `css/style.css`
- **JavaScript**: Interactive features in `js/script.js`
- **Images**: Store all assets in `images/` folder

### Best Practices
- Responsive design principles
- Semantic HTML5 elements
- Modern CSS features (Grid, Flexbox, Variables)
- Vanilla JavaScript (no dependencies)
- Optimized for performance

## 🚀 Deployment

### GitHub Pages (Free)
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Your site will be live at `username.github.io/learnowa`

### Other Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: GitHub integration
- **Firebase Hosting**: Google's hosting platform
- **Surge.sh**: Simple static hosting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **Inspiration** from modern ed-tech platforms
- **Students** who inspired this project

## 📞 Support

For support, email support@learnowa.com or join our Discord server.

## 🗺️ Roadmap

- [ ] Add student dashboard
- [ ] Implement video streaming
- [ ] Add payment integration
- [ ] Create mobile app
- [ ] Add live chat support
- [ ] Implement assessment tools
- [ ] Add parent portal

---

⭐ **Star this repository if you found it helpful!** ⭐

Made with ❤️ for students everywhere
