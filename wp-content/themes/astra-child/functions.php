<?php

/**
 * Astra Child Theme Functions
 * Custom functions for Aarna Construction website
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue parent and child theme styles
function aarna_enqueue_styles()
{
    // Enqueue parent theme stylesheet
    wp_enqueue_style('astra-parent-style', get_template_directory_uri() . '/style.css');

    // Enqueue child theme stylesheet
    wp_enqueue_style(
        'aarna-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('astra-parent-style'),
        wp_get_theme()->get('Version')
    );

    // Enqueue Google Fonts for better typography
    wp_enqueue_style(
        'aarna-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );
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

    // Add theme support for title tag
    add_theme_support('title-tag');

    // Add theme support for HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
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

// Register widget areas
function aarna_widgets_init()
{
    register_sidebar(array(
        'name'          => __('Footer Widget 1', 'aarna-construction'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'aarna-construction'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget 2', 'aarna-construction'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here to appear in your footer.', 'aarna-construction'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget 3', 'aarna-construction'),
        'id'            => 'footer-3',
        'description'   => __('Add widgets here to appear in your footer.', 'aarna-construction'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'aarna_widgets_init');

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

// Customize WP Forms styling
function aarna_wpforms_styling()
{
?>
    <style>
        .wpforms-container {
            max-width: 100%;
        }

        .wpforms-field-label {
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
        }

        .wpforms-field-large {
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 5px;
            font-size: 16px;
        }

        .wpforms-field-large:focus {
            border-color: #2c5aa0;
            outline: none;
            box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
        }

        .wpforms-submit {
            background-color: #ff8c00 !important;
            border: none !important;
            padding: 12px 30px !important;
            border-radius: 5px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            transition: all 0.3s ease !important;
        }

        .wpforms-submit:hover {
            background-color: #e67e00 !important;
            transform: translateY(-2px) !important;
        }
    </style>
<?php
}
add_action('wp_head', 'aarna_wpforms_styling');

// Add custom meta boxes for services
function aarna_add_service_meta_boxes()
{
    add_meta_box(
        'service-details',
        'Service Details',
        'aarna_service_meta_callback',
        'page',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'aarna_add_service_meta_boxes');

function aarna_service_meta_callback($post)
{
    wp_nonce_field('aarna_service_nonce', 'aarna_service_nonce');

    $service_icon = get_post_meta($post->ID, '_service_icon', true);
    $service_features = get_post_meta($post->ID, '_service_features', true);

    echo '<table class="form-table">';
    echo '<tr><th><label for="service_icon">Service Icon (Font Awesome class)</label></th>';
    echo '<td><input type="text" id="service_icon" name="service_icon" value="' . esc_attr($service_icon) . '" placeholder="e.g., fas fa-hammer" /></td></tr>';
    echo '<tr><th><label for="service_features">Service Features (one per line)</label></th>';
    echo '<td><textarea id="service_features" name="service_features" rows="5" cols="50">' . esc_textarea($service_features) . '</textarea></td></tr>';
    echo '</table>';
}

function aarna_save_service_meta($post_id)
{
    if (!isset($_POST['aarna_service_nonce']) || !wp_verify_nonce($_POST['aarna_service_nonce'], 'aarna_service_nonce')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['service_icon'])) {
        update_post_meta($post_id, '_service_icon', sanitize_text_field($_POST['service_icon']));
    }

    if (isset($_POST['service_features'])) {
        update_post_meta($post_id, '_service_features', sanitize_textarea_field($_POST['service_features']));
    }
}
add_action('save_post', 'aarna_save_service_meta');

// Shortcode for displaying company values
function aarna_company_values_shortcode($atts)
{
    $values = array(
        array(
            'title' => 'Integrity',
            'description' => 'Transparency and ethical responsibility in every project.',
            'icon' => 'fas fa-handshake'
        ),
        array(
            'title' => 'Quality',
            'description' => 'Uncompromising standards in materials, workmanship, and execution.',
            'icon' => 'fas fa-award'
        ),
        array(
            'title' => 'Innovation',
            'description' => 'Embracing smart designs and modern technologies.',
            'icon' => 'fas fa-lightbulb'
        ),
        array(
            'title' => 'Safety',
            'description' => 'Ensuring a secure environment for workers and clients.',
            'icon' => 'fas fa-shield-alt'
        ),
        array(
            'title' => 'Sustainability',
            'description' => 'Building with the future in mind, reducing our ecological footprint.',
            'icon' => 'fas fa-leaf'
        )
    );

    $output = '<div class="company-values-grid">';
    foreach ($values as $value) {
        $output .= '<div class="value-item">';
        $output .= '<div class="value-icon"><i class="' . $value['icon'] . '"></i></div>';
        $output .= '<h3>' . $value['title'] . '</h3>';
        $output .= '<p>' . $value['description'] . '</p>';
        $output .= '</div>';
    }
    $output .= '</div>';

    return $output;
}
add_shortcode('aarna_values', 'aarna_company_values_shortcode');

// Shortcode for displaying services
function aarna_services_shortcode($atts)
{
    $services = array(
        'Civil & Structural Engineering',
        'Highways & Roadworks',
        'Residential & Commercial Complexes',
        'Industrial Plant Infrastructure',
        'Turnkey Design-Build Services',
        'Renovation & Structural Retrofitting',
        'Urban Utilities and Public Infrastructure'
    );

    $output = '<div class="services-list">';
    foreach ($services as $service) {
        $output .= '<div class="service-item">';
        $output .= '<i class="fas fa-check-circle"></i>';
        $output .= '<span>' . $service . '</span>';
        $output .= '</div>';
    }
    $output .= '</div>';

    return $output;
}
add_shortcode('aarna_services', 'aarna_services_shortcode');

// Add Font Awesome
function aarna_add_fontawesome()
{
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'aarna_add_fontawesome');

// Customize login page
function aarna_login_customization()
{
?>
    <style type="text/css">
        #login h1 a,
        .login h1 a {
            background-image: none;
            background-size: contain;
            height: 80px;
            width: 320px;
            text-indent: 0;
            font-size: 24px;
            font-weight: bold;
            color: #2c5aa0;
            text-decoration: none;
        }

        #login h1 a:before {
            content: "Aarna Construction";
        }

        .login form {
            border: 1px solid #2c5aa0;
        }

        .wp-core-ui .button-primary {
            background: #ff8c00;
            border-color: #ff8c00;
        }

        .wp-core-ui .button-primary:hover {
            background: #e67e00;
            border-color: #e67e00;
        }
    </style>
<?php
}
add_action('login_enqueue_scripts', 'aarna_login_customization');

// Custom dashboard footer
function aarna_dashboard_footer()
{
    echo '<span id="footer-thankyou">Thank you for using <strong>Aarna Construction</strong> website.</span>';
}
add_filter('admin_footer_text', 'aarna_dashboard_footer');
