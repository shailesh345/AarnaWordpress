<?php

/**
 * Aarna Child Theme Functions
 * Custom functions for Aarna Construction website
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue parent and child theme styles with professional enhancements
function aarna_enqueue_styles()
{
    // Enqueue parent theme stylesheet
    wp_enqueue_style('astra-parent-style', get_template_directory_uri() . '/style.css');

    // Enqueue child theme stylesheet with cache busting
    wp_enqueue_style(
        'aarna-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('astra-parent-style'),
        filemtime(get_stylesheet_directory() . '/style.css') // Dynamic versioning
    );

    // Enqueue professional Google Fonts
    wp_enqueue_style(
        'aarna-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap'
    );

    // Enqueue Font Awesome for icons
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        array(),
        '6.0.0'
    );

    // Enqueue professional JavaScript enhancements
    wp_enqueue_script(
        'aarna-professional-js',
        get_stylesheet_directory_uri() . '/assets/js/professional-enhancements.js',
        array('jquery'),
        filemtime(get_stylesheet_directory() . '/assets/js/professional-enhancements.js'),
        true
    );

    // Localize script for AJAX and dynamic content
    wp_localize_script('aarna-professional-js', 'aarnaAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('aarna_nonce'),
        'siteUrl' => get_site_url(),
        'themePath' => get_stylesheet_directory_uri()
    ));
}
add_action('wp_enqueue_scripts', 'aarna_enqueue_styles');

// Customize theme support
function aarna_theme_setup()
{
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');

    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Add custom image sizes
    add_image_size('project-thumbnail', 400, 300, true);
    add_image_size('blog-thumbnail', 600, 400, true);

    // Add theme support for title tag
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'aarna_theme_setup');

// Register navigation menus
function aarna_register_menus()
{
    register_nav_menus(array(
        'header-menu' => __('Header Menu', 'aarna-construction'),
        'footer-menu' => __('Footer Menu', 'aarna-construction'),
    ));
}
add_action('init', 'aarna_register_menus');

// Custom shortcode for Aarna Construction core values
function aarna_values_shortcode($atts)
{
    $output = '<div class="values-grid row">';

    $values = array(
        array(
            'icon' => 'fas fa-shield-alt',
            'title' => 'Integrity',
            'description' => 'Transparency and ethical responsibility in every project.'
        ),
        array(
            'icon' => 'fas fa-gem',
            'title' => 'Quality',
            'description' => 'Uncompromising standards in materials, workmanship, and execution.'
        ),
        array(
            'icon' => 'fas fa-lightbulb',
            'title' => 'Innovation',
            'description' => 'Embracing smart designs and modern technologies.'
        ),
        array(
            'icon' => 'fas fa-hard-hat',
            'title' => 'Safety',
            'description' => 'Ensuring a secure environment for workers and clients.'
        ),
        array(
            'icon' => 'fas fa-leaf',
            'title' => 'Sustainability',
            'description' => 'Building with the future in mind, reducing our ecological footprint.'
        )
    );

    foreach ($values as $value) {
        $output .= '<div class="col-md-6 col-lg-4 mb-4">';
        $output .= '<div class="value-item text-center">';
        $output .= '<div class="value-icon"><i class="' . $value['icon'] . '"></i></div>';
        $output .= '<h4>' . $value['title'] . '</h4>';
        $output .= '<p>' . $value['description'] . '</p>';
        $output .= '</div>';
        $output .= '</div>';
    }

    $output .= '</div>';
    return $output;
}
add_shortcode('aarna_values', 'aarna_values_shortcode');

// Custom shortcode for services
function aarna_services_grid_shortcode($atts)
{
    $atts = shortcode_atts(array(
        'columns' => '3',
        'limit' => '6'
    ), $atts);

    $services = array(
        array(
            'icon' => 'fas fa-drafting-compass',
            'title' => 'Civil & Structural Engineering',
            'description' => 'Comprehensive engineering solutions for all types of construction projects.'
        ),
        array(
            'icon' => 'fas fa-road',
            'title' => 'Highways & Roadworks',
            'description' => 'Expert construction of highways, roads, and transportation infrastructure.'
        ),
        array(
            'icon' => 'fas fa-building',
            'title' => 'Residential & Commercial Complexes',
            'description' => 'Modern living and working spaces that combine functionality and aesthetics.'
        ),
        array(
            'icon' => 'fas fa-industry',
            'title' => 'Industrial Plant Infrastructure',
            'description' => 'Specialized construction services for industrial facilities and plants.'
        ),
        array(
            'icon' => 'fas fa-tools',
            'title' => 'Turnkey Design-Build Services',
            'description' => 'Complete project delivery from concept to completion.'
        ),
        array(
            'icon' => 'fas fa-wrench',
            'title' => 'Renovation & Retrofitting',
            'description' => 'Modernizing existing structures with advanced techniques.'
        )
    );

    $output = '<div class="services-grid row">';

    $count = 0;
    foreach ($services as $service) {
        if ($count >= intval($atts['limit'])) break;

        $output .= '<div class="col-md-6 col-lg-4 mb-4">';
        $output .= '<div class="service-item text-center">';
        $output .= '<div class="service-icon"><i class="' . $service['icon'] . '"></i></div>';
        $output .= '<h4>' . $service['title'] . '</h4>';
        $output .= '<p>' . $service['description'] . '</p>';
        $output .= '</div>';
        $output .= '</div>';

        $count++;
    }

    $output .= '</div>';
    return $output;
}
add_shortcode('aarna_services_grid', 'aarna_services_grid_shortcode');

// Custom shortcode for statistics
function aarna_stats_shortcode($atts)
{
    $output = '<div class="stats-grid row text-center">';

    $stats = array(
        array('number' => '500+', 'label' => 'Projects Completed'),
        array('number' => '15+', 'label' => 'Years Experience'),
        array('number' => '100%', 'label' => 'Client Satisfaction'),
        array('number' => '50+', 'label' => 'Expert Team Members')
    );

    foreach ($stats as $stat) {
        $output .= '<div class="col-md-3 col-sm-6 mb-4">';
        $output .= '<div class="stat-item">';
        $output .= '<div class="stat-number">' . $stat['number'] . '</div>';
        $output .= '<div class="stat-label">' . $stat['label'] . '</div>';
        $output .= '</div>';
        $output .= '</div>';
    }

    $output .= '</div>';
    return $output;
}
add_shortcode('aarna_stats', 'aarna_stats_shortcode');

// Custom excerpt length
function aarna_excerpt_length($length)
{
    return 30;
}
add_filter('excerpt_length', 'aarna_excerpt_length', 999);

// Custom excerpt more text
function aarna_excerpt_more($more)
{
    return '...';
}
add_filter('excerpt_more', 'aarna_excerpt_more');

// Add custom body classes
function aarna_body_classes($classes)
{
    $classes[] = 'aarna-construction';
    return $classes;
}
add_filter('body_class', 'aarna_body_classes');

// Add custom meta description for SEO
function aarna_meta_description()
{
    if (is_front_page()) {
        echo '<meta name="description" content="Aarna Construction - Forward-thinking infrastructure development firm committed to redefining India\'s urban and industrial landscapes through innovation, transparency, and craftsmanship.">';
    } elseif (is_page('about')) {
        echo '<meta name="description" content="Learn about Aarna Construction\'s vision, mission, and core values. Building India\'s future with 15+ years of excellence in construction and infrastructure.">';
    } elseif (is_page('services')) {
        echo '<meta name="description" content="Comprehensive construction services including civil engineering, highways, residential, commercial, and industrial infrastructure. Quality construction solutions.">';
    } elseif (is_page('contact')) {
        echo '<meta name="description" content="Contact Aarna Construction for your construction and infrastructure needs. Get expert consultation and quality construction services.">';
    }
}
add_action('wp_head', 'aarna_meta_description');

// Customize WordPress login page
function aarna_login_logo()
{ ?>
    <style type="text/css">
        #login h1 a,
        .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri();
                                    ?>/assets/images/aarna-logo.png);
            height: 80px;
            width: 300px;
            background-size: contain;
            background-repeat: no-repeat;
        }
    </style>
<?php }
add_action('login_enqueue_scripts', 'aarna_login_logo');

// Change login logo URL
function aarna_login_logo_url()
{
    return home_url();
}
add_filter('login_headerurl', 'aarna_login_logo_url');

// Change login logo title
function aarna_login_logo_url_title()
{
    return 'Aarna Construction - Building India\'s Future';
}
add_filter('login_headertext', 'aarna_login_logo_url_title');

// Professional performance optimizations
function aarna_performance_optimizations()
{
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');

    // Remove emoji scripts and styles
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');

    // Disable WordPress embeds
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    remove_action('wp_head', 'wp_oembed_add_host_js');
}
add_action('init', 'aarna_performance_optimizations');

// Add professional security headers
function aarna_security_headers()
{
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
        header('Referrer-Policy: strict-origin-when-cross-origin');
    }
}
add_action('send_headers', 'aarna_security_headers');

// Professional AJAX handler for contact form
function aarna_handle_contact_form()
{
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'aarna_nonce')) {
        wp_die('Security check failed');
    }

    // Sanitize form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $project_type = sanitize_text_field($_POST['project_type']);
    $message = sanitize_textarea_field($_POST['message']);

    // Send email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission - Aarna Construction';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nProject Type: $project_type\nMessage: $message";
    $headers = array('Content-Type: text/html; charset=UTF-8');

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_send_json_success('Message sent successfully!');
    } else {
        wp_send_json_error('Failed to send message. Please try again.');
    }
}
add_action('wp_ajax_aarna_contact_form', 'aarna_handle_contact_form');
add_action('wp_ajax_nopriv_aarna_contact_form', 'aarna_handle_contact_form');

// Professional breadcrumb function
function aarna_breadcrumbs()
{
    if (!is_front_page()) {
        echo '<nav class="breadcrumb-nav" aria-label="Breadcrumb">';
        echo '<ol class="breadcrumb">';
        echo '<li class="breadcrumb-item"><a href="' . home_url() . '"><i class="fas fa-home"></i> Home</a></li>';

        if (is_page()) {
            $parent_id = wp_get_post_parent_id(get_the_ID());
            if ($parent_id) {
                $parent = get_post($parent_id);
                echo '<li class="breadcrumb-item"><a href="' . get_permalink($parent) . '">' . get_the_title($parent) . '</a></li>';
            }
            echo '<li class="breadcrumb-item active" aria-current="page">' . get_the_title() . '</li>';
        }

        echo '</ol>';
        echo '</nav>';
    }
}

// Professional image optimization
function aarna_optimize_images($html, $id, $caption, $title, $align, $url, $size, $alt)
{
    // Add loading="lazy" to images for better performance
    $html = str_replace('<img ', '<img loading="lazy" ', $html);
    return $html;
}
add_filter('image_send_to_editor', 'aarna_optimize_images', 10, 8);

// Professional custom post types (for future expansion)
function aarna_register_post_types()
{
    // Projects post type
    register_post_type('projects', array(
        'labels' => array(
            'name' => 'Projects',
            'singular_name' => 'Project',
            'add_new' => 'Add New Project',
            'add_new_item' => 'Add New Project',
            'edit_item' => 'Edit Project',
            'new_item' => 'New Project',
            'view_item' => 'View Project',
            'search_items' => 'Search Projects',
            'not_found' => 'No projects found',
            'not_found_in_trash' => 'No projects found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-building',
        'rewrite' => array('slug' => 'projects')
    ));

    // Testimonials post type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
            'new_item' => 'New Testimonial',
            'view_item' => 'View Testimonial',
            'search_items' => 'Search Testimonials',
            'not_found' => 'No testimonials found',
            'not_found_in_trash' => 'No testimonials found in trash'
        ),
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
        'rewrite' => array('slug' => 'testimonials')
    ));
}
add_action('init', 'aarna_register_post_types');
