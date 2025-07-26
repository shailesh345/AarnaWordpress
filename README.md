# Aarna Construction WordPress Website

## Overview

This is a comprehensive WordPress website for Aarna Construction, a forward-thinking infrastructure development firm committed to redefining India's urban and industrial landscapes.

## Features

### 🏗️ Company Information

- **About Us**: Complete company overview with vision, mission, and core values
- **Vision**: To emerge as a leading name in infrastructure and construction
- **Mission**: Deliver safe, durable, and efficient infrastructure
- **Core Values**: Integrity, Quality, Innovation, Safety, Sustainability

### 🛠️ Services

- Civil & Structural Engineering
- Highways & Roadworks
- Residential & Commercial Complexes
- Industrial Plant Infrastructure
- Turnkey Design-Build Services
- Renovation & Structural Retrofitting
- Urban Utilities and Public Infrastructure

### 🏭 Industries We Serve

- Real Estate & Housing
- Government & Civic Infrastructure
- Industrial & Manufacturing Units
- Transportation & Logistics Facilities
- Power, Energy & Utility Infrastructure

### 📄 Website Pages

1. **Home** - Homepage with hero section and company highlights
2. **About Us** - Detailed company information and values
3. **Services** - Comprehensive service portfolio
4. **Projects** - Project portfolio and case studies
5. **Industries** - Industries served with detailed descriptions
6. **Why Choose Us** - Key strengths and competitive advantages
7. **Careers** - Job opportunities and company culture
8. **Blog & News** - Industry insights and company updates
9. **Contact Us** - Contact information and inquiry forms

## Technical Implementation

### WordPress Theme Structure

- **Base Theme**: Astra (parent theme)
- **Child Theme**: Astra Child - Aarna Construction
- **Custom Templates**:
  - `front-page.php` - Homepage
  - `page-about.php` - About Us page
  - `page-services.php` - Services page
  - `page-projects.php` - Projects portfolio
  - `page-industries.php` - Industries page
  - `page-why-choose-us.php` - Why Choose Us page
  - `page-careers.php` - Careers page
  - `page-blog.php` - Blog & News page
  - `page-contact.php` - Contact page

### Custom Functionality

- **Shortcodes**:
  - `[aarna_values]` - Display core values grid
  - `[aarna_services_grid]` - Display services grid
  - `[aarna_stats]` - Display company statistics
- **Custom CSS**: Professional construction industry styling
- **Responsive Design**: Mobile-optimized layouts
- **SEO Optimization**: Meta descriptions and structured content

## Setup Instructions

### 1. WordPress Installation

1. Upload all files to your WordPress installation
2. Ensure the Astra parent theme is installed
3. Activate the "Astra Child - Aarna Construction" theme

### 2. Database Setup

1. Import the SQL file: `aarna-construction-setup.sql`
2. This will create all necessary pages and content

### 3. Page Configuration

1. Go to WordPress Admin → Pages
2. Assign custom page templates to each page:
   - Home: Homepage template
   - About Us: About Us Page template
   - Services: Services Page template
   - Projects: Projects Portfolio template
   - Industries: Industries We Serve template
   - Why Choose Us: Why Choose Us template
   - Careers: Careers Page template
   - Blog: Blog & News template
   - Contact: Contact Page template

### 4. Menu Setup

1. Go to Appearance → Menus
2. Create a main navigation menu with:
   - Home
   - About Us
   - Services
   - Projects
   - Industries
   - Why Choose Us
   - Careers
   - Blog
   - Contact

### 5. Customization

1. Upload company logo to Appearance → Customize → Site Identity
2. Update contact information in the Contact page
3. Add company address, phone, and email details
4. Upload project images to the Projects page
5. Customize colors in the CSS file if needed

## Content Management

### Adding New Projects

1. Edit the `page-projects.php` file
2. Add new project cards in the projects grid section
3. Upload project images to the media library

### Adding Blog Posts

1. Use WordPress Posts for blog content
2. Assign appropriate categories
3. Featured images will be used as thumbnails

### Updating Company Information

1. Edit respective page templates
2. Update the shortcode functions in `functions.php` for dynamic content

## Deployment Instructions

### For Hostinger Git Deployment:

1. **Repository**: `https://github.com/shailesh345/AarnaWordpress.git`
2. **Branch**: `dev` (or `main` depending on your setup)
3. **Directory**: Leave blank (deploys to public_html)
4. **Prerequisites**: Ensure public_html directory is empty

### Manual Deployment:

1. Download repository as ZIP
2. Extract and upload via File Manager or FTP
3. Upload to public_html directory
4. Configure WordPress database settings

## File Structure

```
wp-content/themes/astra-child/
├── front-page.php          # Homepage template
├── page-about.php          # About page template
├── page-services.php       # Services page template
├── page-projects.php       # Projects page template
├── page-industries.php     # Industries page template
├── page-why-choose-us.php  # Why Choose Us page template
├── page-careers.php        # Careers page template
├── page-blog.php           # Blog page template
├── page-contact.php        # Contact page template
├── functions.php           # Custom functionality and shortcodes
├── style.css              # Custom styling
└── README.md              # This file
```

## Support and Maintenance

### Regular Updates

- Update WordPress core and plugins regularly
- Backup website before making changes
- Test all functionality after updates

### Content Updates

- Update project portfolio regularly
- Add new blog posts for SEO
- Keep company information current
- Update team photos and information

### Performance Optimization

- Optimize images before uploading
- Use caching plugins for better performance
- Monitor website speed and loading times

## Contact Information

For technical support or customization requests, please contact the development team.

---

**Aarna Construction - Building India's Future Infrastructure**
