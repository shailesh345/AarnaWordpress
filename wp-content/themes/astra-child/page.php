<?php

/**
 * Professional Page Template Override
 * Enhanced with modern loading states and transitions
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

get_header(); ?>

<!-- Professional Loading Overlay -->
<div id="page-loader" class="page-loader" style="display: none;">
    <div class="loading-spinner"></div>
</div>

<?php if (astra_page_layout() === 'left-sidebar') { ?>
    <?php get_sidebar(); ?>
<?php } ?>

<div id="primary" <?php astra_primary_class(); ?> class="page-transition">
    <?php astra_primary_content_top(); ?>

    <?php while (have_posts()) : the_post(); ?>

        <?php
        // Get the current page slug
        global $post;
        $page_slug = $post->post_name;

        // Add structured data for better SEO
        $page_title = get_the_title();
        $page_description = get_the_excerpt() ?: wp_trim_words(get_the_content(), 25);
        ?>

        <!-- Enhanced SEO and Schema Markup -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "<?php echo esc_js($page_title); ?>",
                "description": "<?php echo esc_js($page_description); ?>",
                "url": "<?php echo esc_url(get_permalink()); ?>",
                "publisher": {
                    "@type": "Organization",
                    "name": "Aarna Construction Company",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "<?php echo esc_url(get_site_url()); ?>/wp-content/themes/astra-child/assets/logo.png"
                    }
                }
            }
        </script>

        <?php
        // Define custom templates for specific pages
        $custom_templates = array(
            'about' => 'page-about-content',
            'services' => 'page-services-content',
            'projects' => 'page-projects-content',
            'industries' => 'page-industries-content',
            'why-choose-us' => 'page-why-choose-us-content',
            'careers' => 'page-careers-content',
            'blog' => 'page-blog-content',
            'contact' => 'page-contact-content'
        );

        // Check if this page has a custom template
        if (array_key_exists($page_slug, $custom_templates)) {
            // Load the custom content with professional wrapper
            $template_part = $custom_templates[$page_slug];
            echo '<div class="custom-page-content">';
            get_template_part('template-parts/' . $template_part);
            echo '</div>';
        } else {
            // Use enhanced default content for other pages
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('professional-article'); ?>>
                <header class="entry-header professional-header">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="entry-featured-image">
                            <?php the_post_thumbnail('large', array('class' => 'professional-featured-image')); ?>
                        </div>
                    <?php endif; ?>

                    <div class="header-content">
                        <?php the_title('<h1 class="entry-title professional-title">', '</h1>'); ?>

                        <?php if (get_the_excerpt()) : ?>
                            <div class="entry-excerpt professional-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                        <?php endif; ?>

                        <div class="entry-meta professional-meta">
                            <span class="updated-date">
                                <i class="dashicons dashicons-calendar-alt"></i>
                                <?php echo get_the_modified_time('F j, Y'); ?>
                            </span>
                        </div>
                    </div>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'astra'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
        <?php
        }
        ?>

    <?php endwhile; ?>

    <?php astra_primary_content_bottom(); ?>
</div><!-- #primary -->

<?php if (astra_page_layout() === 'right-sidebar') { ?>
    <?php get_sidebar(); ?>
<?php } ?>

<?php get_footer(); ?>