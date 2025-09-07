# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio features a clean design with smooth animations, mobile-responsive layout, and professional styling similar to modern portfolio sites.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive for all devices
- 🚀 Fast loading with vanilla web technologies
- 🎯 Smooth scrolling navigation
- 📝 Contact form with validation
- 🌟 Intersection Observer animations
- 📊 Timeline-based work experience section
- 🎭 Project showcase with hover effects
- 📱 Mobile-friendly navigation menu

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- A GitHub account (for deployment)

### Installation

1. **Clone or download** this repository to your local machine
2. **Customize the content** in `index.html`:
   - Replace "Your Name" with your actual name
   - Update the hero description
   - Add your work experience
   - Include your projects
   - Update social media links
   - Add your resume file

3. **Customize the styling** in `styles.css`:
   - Change colors to match your brand
   - Adjust fonts if needed
   - Modify spacing and layouts

4. **Test locally** by opening `index.html` in your browser

## Customization Guide

### Personal Information
- Update the title tag in `<head>`
- Change the hero section text
- Replace placeholder images with your own
- Update the about section content

### Work Experience
- Modify the timeline items in the work experience section
- Add or remove experience entries
- Update company names, dates, and descriptions

### Projects
- Add your project images to the project cards
- Update project descriptions and technologies used
- Link to your live demos and source code

### Contact Information
- Update social media links
- Modify the contact form behavior
- Add your actual contact details

### Styling
- Change the color scheme in `styles.css`
- Modify the hero background gradient
- Adjust animations and transitions
- Update the logo and branding colors

## Deployment to GitHub Pages

### Option 1: Using GitHub Desktop
1. Create a new repository on GitHub
2. Clone it to your local machine
3. Copy all the portfolio files to the repository folder
4. Commit and push your changes
5. Go to repository Settings → Pages
6. Select "Deploy from a branch" and choose "main"
7. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Using GitHub CLI
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote origin
git remote add origin https://github.com/username/repository-name.git

# Push to GitHub
git push -u origin main
```

### Option 3: Drag and Drop
1. Create a new repository on GitHub
2. Upload all files directly through the GitHub web interface
3. Enable GitHub Pages in repository settings

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── images/             # Your images (create this folder)
└── resume.pdf          # Your resume (add this file)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

- Optimize your images before uploading
- Use WebP format for better compression
- Minimize external dependencies
- Enable gzip compression on your server

## Customization Examples

### Changing Colors
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #1f2937;
    --background-color: #f8fafc;
}
```

### Adding New Sections
```html
<section class="new-section" id="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Styling not applied**: Verify CSS file is linked correctly
3. **JavaScript not working**: Check browser console for errors
4. **Mobile menu not working**: Ensure JavaScript file is loaded

### Performance Issues

1. **Slow loading**: Optimize images and reduce file sizes
2. **Animations lagging**: Reduce animation complexity on mobile
3. **Large bundle size**: Use CDN for external libraries

## Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with customization or deployment, please:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices
- The open-source community for inspiration

---

**Happy coding! 🚀**

Remember to replace all placeholder content with your actual information before deploying your portfolio.


