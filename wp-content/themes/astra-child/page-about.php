<?php

/**
 * Template Name: About Us Page
 * Custom template for Aarna Construction About page
 */

get_header(); ?>

<div class="hero-section">
    <div class="container-custom">
        <h1 class="hero-title">About Aarna Construction</h1>
        <p class="hero-subtitle">Building the Future with Innovation, Integrity, and Excellence</p>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-title">Who We Are</h2>
                <div class="about-content">
                    <p class="lead">Aarna Construction is a forward-thinking infrastructure development firm committed to redefining India's urban and industrial landscapes. We specialize in delivering comprehensive solutions across civil, industrial, commercial, and residential construction.</p>

                    <p>Guided by the principles of innovation, transparency, and craftsmanship, we transform ideas into enduring structures that empower communities and industries. Our work is rooted in sustainability and precision engineering, setting benchmarks in quality and client satisfaction.</p>

                    <p>With a reputation built on trust, we're not just constructing buildings—we're building the future.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-values bg-light section-padding">
    <div class="container-custom">
        <h2 class="section-title">Our Vision & Mission</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="vision-mission-card">
                    <h3 class="text-primary"><i class="fas fa-eye"></i> Our Vision</h3>
                    <p>To emerge as a leading name in infrastructure and construction, renowned for engineering excellence, design innovation, and a deep commitment to sustainable development.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="vision-mission-card">
                    <h3 class="text-primary"><i class="fas fa-bullseye"></i> Our Mission</h3>
                    <ul>
                        <li>Deliver safe, durable, and efficient infrastructure</li>
                        <li>Establish long-term partnerships grounded in trust and transparency</li>
                        <li>Integrate cutting-edge technology to optimize construction efficiency and minimize environmental impact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding">
    <div class="container-custom">
        <h2 class="section-title">Our Core Values</h2>
        <?php echo do_shortcode('[aarna_values]'); ?>
    </div>
</section>

<section class="bg-light section-padding">
    <div class="container-custom">
        <h2 class="section-title">Why Choose Aarna Construction</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="strength-item">
                    <div class="strength-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h4>Experienced Team</h4>
                    <p>Certified engineers, architects, and project managers with years of industry experience.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="strength-item">
                    <div class="strength-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h4>Tech-Driven Construction</h4>
                    <p>Adoption of modern equipment, BIM, and project management tools for superior results.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="strength-item">
                    <div class="strength-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h4>On-Time Delivery</h4>
                    <p>Meticulous planning and agile execution ensuring projects are completed on schedule.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="strength-item">
                    <div class="strength-icon">
                        <i class="fas fa-supply-chain"></i>
                    </div>
                    <h4>Robust Supply Chain</h4>
                    <p>Reliable vendor and subcontractor networks ensuring quality materials and services.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="strength-item">
                    <div class="strength-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h4>Client-Centric Approach</h4>
                    <p>Personalized services with a focus on long-term client satisfaction and relationships.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="section-title">Let's Build the Future Together</h2>
                <p class="lead">From smart cities to sustainable industrial zones, Aarna Construction brings your vision to life with precision, performance, and professionalism. Partner with us for projects that stand the test of time.</p>
                <a href="<?php echo home_url('/contact'); ?>" class="btn btn-primary">Start Your Project</a>
            </div>
        </div>
    </div>
</section>

<style>
    .vision-mission-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        height: 100%;
    }

    .vision-mission-card h3 {
        margin-bottom: 1rem;
    }

    .vision-mission-card i {
        margin-right: 10px;
    }

    .strength-item {
        text-align: center;
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .strength-icon {
        color: var(--secondary-color);
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .strength-item h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .company-values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .value-item {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;
    }

    .value-item:hover {
        transform: translateY(-5px);
    }

    .value-icon {
        color: var(--secondary-color);
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .value-item h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .lead {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .about-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
    }
</style>

<?php get_footer(); ?>