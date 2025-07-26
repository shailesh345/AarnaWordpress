-- Aarna Construction WordPress Content Setup
-- Run this SQL to create pages and content for the website

-- Insert Homepage content
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Home',
        '<!-- wp:paragraph -->
<p>Welcome to Aarna Construction - Building India\'
s Future Infrastructure</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[aarna_stats]
<!-- /wp:shortcode -->', 
    'publish', 
    'page', 
    NOW
(), 
    NOW
(), 
    NOW
(), 
    NOW
()
);

-- Insert About Us page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'About Us', 
    '<!-- wp:heading -->
<h2>About Aarna Construction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Aarna Construction is a forward-thinking infrastructure development firm committed to redefining India\'s urban and industrial landscapes. We specialize in delivering comprehensive solutions across civil, industrial, commercial, and residential construction. Guided by the principles of innovation, transparency, and craftsmanship, we transform ideas into enduring structures that empower communities and industries.</p
>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Our Core Values</h2>
<!-- /wp:heading -->

<!-- wp:shortcode -->
[aarna_values]
<!-- /wp:shortcode -->', 
    'publish', 
    'page', 
    NOW
(), 
    NOW
(), 
    NOW
(), 
    NOW
()
);

-- Insert Services page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Services',
        '<!-- wp:heading -->
<h2>Our Services</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We offer a broad portfolio of services tailored for today\'
s complex infrastructure
needs:
</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[aarna_services_grid columns="3" limit="6"]
<!-- /wp:shortcode -->', 
    'publish', 
    'page', 
    NOW
(), 
    NOW
(), 
    NOW
(), 
    NOW
()
);

-- Insert Projects page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Projects',
        '<!-- wp:heading -->
<h2>Our Projects Portfolio</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Explore our diverse range of completed and ongoing projects across residential, commercial, industrial, and infrastructure sectors.</p>
<!-- /wp:paragraph -->',
        'publish',
        'page',
        NOW(),
        NOW(),
        NOW(),
        NOW()
);

-- Insert Industries page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Industries We Serve',
        '<!-- wp:heading -->
<h2>Industries We Serve</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Aarna Construction brings specialized expertise to a wide range of industries, delivering tailored solutions that meet the unique requirements of each sector.</p>
<!-- /wp:paragraph -->',
        'publish',
        'page',
        NOW(),
        NOW(),
        NOW(),
        NOW()
);

-- Insert Why Choose Us page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Why Choose Us',
        '<!-- wp:heading -->
<h2>Why Choose Aarna Construction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Experience the difference of working with India\'
s trusted construction partner. We don\'t just build structures—we create lasting partnerships and deliver exceptional value.</p>
<!-- /wp:paragraph -->', 
    'publish', 
    'page', 
    NOW
(), 
    NOW
(), 
    NOW
(), 
    NOW
()
);

-- Insert Careers page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Careers',
        '<!-- wp:heading -->
<h2>Join Our Team</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Build your career with Aarna Construction - where innovation meets opportunity. We believe our people are our greatest asset.</p>
<!-- /wp:paragraph -->',
        'publish',
        'page',
        NOW(),
        NOW(),
        NOW(),
        NOW()
);

-- Insert Blog page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Blog & News',
        '<!-- wp:heading -->
<h2>Industry Insights & News</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Stay updated with the latest trends, innovations, and company news in construction and infrastructure development.</p>
<!-- /wp:paragraph -->',
        'publish',
        'page',
        NOW(),
        NOW(),
        NOW(),
        NOW()
);

-- Insert Contact page
INSERT INTO wp_posts
    (post_title, post_content, post_status, post_type, post_date, post_date_gmt, post_modified, post_modified_gmt)
VALUES
    (
        'Contact Us',
        '<!-- wp:heading -->
<h2>Contact Aarna Construction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let\'
s Build the Future Together - Your Vision, Our Expertise</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Office
Address:
</strong> [Insert full address]<br>
<strong>
Phone:
</strong> [Insert number]<br>
<strong>
Email:
</strong> [Insert professional contact email]<br>
<strong>Working
Hours:
</strong> Mon–Sat, 9 AM–6 PM</p>
<!-- /wp:paragraph -->', 
    'publish', 
    'page', 
    NOW
(), 
    NOW
(), 
    NOW
(), 
    NOW
()
);

-- Set custom page templates (requires manual configuration in WordPress admin)
-- Set Homepage as static front page
UPDATE wp_options SET option_value = 'page' WHERE option_name = 'show_on_front';
UPDATE wp_options SET option_value = (SELECT ID
FROM wp_posts
WHERE post_title = 'Home' AND post_type = 'page' LIMIT 1
) WHERE option_name = 'page_on_front';

-- Update site title and tagline
UPDATE wp_options SET option_value = 'Aarna Construction' WHERE option_name = 'blogname';
UPDATE wp_options SET option_value = 'Building India\'s Future Infrastructure
' WHERE option_name = 'blogdescription';
