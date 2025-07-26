<?php

/**
 * Template Name: Homepage
 * Custom homepage template for Aarna Construction
 */

get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container-custom">
        <div class="hero-content">
            <h1 class="hero-title">Building India's Future Infrastructure</h1>
            <p class="hero-subtitle">Aarna Construction is a forward-thinking infrastructure development firm committed
                to redefining India's urban and industrial landscapes through innovation, transparency, and
                craftsmanship.</p>
            <div class="hero-buttons">
                <a href="<?php echo home_url('/services'); ?>" class="btn btn-primary">Our Services</a>
                <a href="<?php echo home_url('/contact'); ?>" class="btn btn-outline-white">Get Quote</a>
            </div>
        </div>
        <div class="hero-stats">
            <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Client Satisfaction</div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="about-section section-padding">
    <div class="container-custom">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="about-content">
                    <h2 class="section-title text-left">About Aarna Construction</h2>
                    <p class="lead">Forward-thinking infrastructure development firm committed to redefining India's
                        urban and industrial landscapes.</p>
                    <p>We specialize in delivering comprehensive solutions across civil, industrial, commercial, and
                        residential construction. Guided by the principles of innovation, transparency, and
                        craftsmanship, we transform ideas into enduring structures.</p>
                    <div class="about-features">
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>15+ Years of Excellence</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Certified Engineers & Architects</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>Sustainable Construction Practices</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>On-Time Project Delivery</span>
                        </div>
                    </div>
                    <a href="<?php echo home_url('/about'); ?>" class="btn btn-primary">Learn More</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="about-image">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/about-construction.jpg"
                        alt="Aarna Construction Team" class="img-responsive">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services-section bg-light section-padding">
    <div class="container-custom">
        <div class="text-center">
            <h2 class="section-title">Our Services</h2>
            <p class="section-subtitle">Comprehensive construction solutions tailored for modern infrastructure needs
            </p>
        </div>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-drafting-compass"></i>
                </div>
                <h3>Civil & Structural Engineering</h3>
                <p>Comprehensive engineering solutions for all types of construction projects with advanced BIM
                    technology.</p>
                <a href="<?php echo home_url('/services'); ?>" class="service-link">Learn More <i
                        class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-road"></i>
                </div>
                <h3>Highways & Roadworks</h3>
                <p>Expert construction of highways, roads, and transportation infrastructure connecting communities.</p>
                <a href="<?php echo home_url('/services'); ?>" class="service-link">Learn More <i
                        class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-building"></i>
                </div>
                <h3>Residential & Commercial</h3>
                <p>Modern living and working spaces combining functionality, aesthetics, and sustainability.</p>
                <a href="<?php echo home_url('/services'); ?>" class="service-link">Learn More <i
                        class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-industry"></i>
                </div>
                <h3>Industrial Infrastructure</h3>
                <p>Specialized construction for industrial facilities ensuring operational efficiency and compliance.
                </p>
                <a href="<?php echo home_url('/services'); ?>" class="service-link">Learn More <i
                        class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3>Turnkey Solutions</h3>
                <p>Complete project delivery from concept to completion with single-point responsibility.</p>
                <a href="<?php echo home_url('/services'); ?>" class="service-link">Learn More <i
                        class="fas fa-arrow-right"></i></a>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-city"></i>
                </div>
                <h3>Urban Infrastructure</h3>
                <p>Essential infrastructure services supporting urban development and community growth.</p>
                <a href="<?php echo home_url('/services'); ?>" class="service-link">Learn More <i
                        class="fas fa-arrow-right"></i></a>
            </div>
        </div>

        <div class="text-center" style="margin-top: 3rem;">
            <a href="<?php echo home_url('/services'); ?>" class="btn btn-primary">View All Services</a>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="why-choose-section section-padding">
    <div class="container-custom">
        <div class="text-center">
            <h2 class="section-title">Why Choose Aarna Construction</h2>
            <p class="section-subtitle">We bring together experience, technology, and commitment to deliver exceptional
                results</p>
        </div>

        <div class="strengths-grid">
            <div class="strength-item">
                <div class="strength-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h4>Experienced Team</h4>
                <p>Certified engineers, architects, and project managers with years of industry expertise.</p>
            </div>

            <div class="strength-item">
                <div class="strength-icon">
                    <i class="fas fa-cogs"></i>
                </div>
                <h4>Advanced Technology</h4>
                <p>Modern equipment, BIM, and cutting-edge project management tools for superior results.</p>
            </div>

            <div class="strength-item">
                <div class="strength-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h4>Timely Delivery</h4>
                <p>Meticulous planning and agile execution ensuring projects are completed on schedule.</p>
            </div>

            <div class="strength-item">
                <div class="strength-icon">
                    <i class="fas fa-award"></i>
                </div>
                <h4>Quality Assurance</h4>
                <p>Uncompromising standards in materials, workmanship, and execution for lasting results.</p>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="cta-section">
    <div class="container-custom">
        <div class="cta-content text-center">
            <h2>Ready to Start Your Project?</h2>
            <p>From smart cities to sustainable industrial zones, we bring your vision to life with precision and
                professionalism.</p>
            <div class="cta-buttons">
                <a href="<?php echo home_url('/contact'); ?>" class="btn btn-primary btn-lg">Get Free Quote</a>
                <a href="tel:+91XXXXXXXXXX" class="btn btn-outline-white btn-lg">Call Now</a>
            </div>
        </div>
    </div>
</section>

<style>
    /* Hero Section */
    .hero-section {
        background: linear-gradient(135deg, rgba(44, 90, 160, 0.9), rgba(255, 140, 0, 0.9)),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f8f9fa" width="1200" height="800"/><path fill="%23e9ecef" d="M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z"/></svg>');
        background-size: cover;
        background-position: center;
        color: white;
        padding: 120px 0 80px;
        position: relative;
        overflow: hidden;
    }

    .hero-content {
        text-align: center;
        margin-bottom: 4rem;
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 1.3rem;
        margin-bottom: 2.5rem;
        opacity: 0.95;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }

    .hero-buttons {
        margin-bottom: 3rem;
    }

    .btn-outline-white {
        background: transparent;
        color: white;
        border: 2px solid white;
        margin-left: 1rem;
    }

    .btn-outline-white:hover {
        background: white;
        color: var(--primary-color);
    }

    .hero-stats {
        display: flex;
        justify-content: center;
        gap: 4rem;
        flex-wrap: wrap;
    }

    .stat-item {
        text-align: center;
    }

    .stat-number {
        font-size: 3rem;
        font-weight: 700;
        color: var(--secondary-color);
        display: block;
    }

    .stat-label {
        font-size: 1rem;
        opacity: 0.9;
        margin-top: 0.5rem;
    }

    /* About Section */
    .about-section {
        background: white;
    }

    .about-features {
        margin: 2rem 0;
    }

    .feature-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .feature-item i {
        color: var(--secondary-color);
        margin-right: 1rem;
        font-size: 1.2rem;
    }

    .about-image img {
        width: 100%;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    /* Services Section */
    .services-section {
        background: var(--light-gray);
    }

    .section-subtitle {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .service-card {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        border-top: 4px solid var(--secondary-color);
    }

    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .service-icon {
        color: var(--primary-color);
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }

    .service-card h3 {
        color: var(--primary-color);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    .service-card p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .service-link {
        color: var(--secondary-color);
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        transition: color 0.3s ease;
    }

    .service-link:hover {
        color: var(--primary-color);
    }

    .service-link i {
        margin-left: 0.5rem;
        transition: transform 0.3s ease;
    }

    .service-link:hover i {
        transform: translateX(5px);
    }

    /* Why Choose Us Section */
    .why-choose-section {
        background: white;
    }

    .strengths-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .strength-item {
        text-align: center;
        padding: 2rem;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    .strength-item:hover {
        transform: translateY(-5px);
    }

    .strength-icon {
        color: var(--secondary-color);
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }

    .strength-item h4 {
        color: var(--primary-color);
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .strength-item p {
        font-size: 1rem;
        line-height: 1.6;
    }

    /* CTA Section */
    .cta-section {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 80px 0;
        text-align: center;
    }

    .cta-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: white;
    }

    .cta-content p {
        font-size: 1.2rem;
        margin-bottom: 2.5rem;
        opacity: 0.95;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .btn-lg {
        padding: 15px 35px;
        font-size: 1.1rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .hero-subtitle {
            font-size: 1.1rem;
        }

        .hero-stats {
            gap: 2rem;
        }

        .stat-number {
            font-size: 2.5rem;
        }

        .btn-outline-white {
            margin-left: 0;
            margin-top: 1rem;
        }

        .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .service-card {
            padding: 2rem;
        }

        .strengths-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .strength-item {
            padding: 1.5rem;
        }

        .cta-content h2 {
            font-size: 2rem;
        }

        .cta-buttons .btn {
            display: block;
            margin: 0.5rem auto;
            max-width: 250px;
        }
    }

    @media (max-width: 480px) {
        .hero-title {
            font-size: 2rem;
        }

        .hero-subtitle {
            font-size: 1rem;
        }

        .section-title {
            font-size: 2rem;
        }

        .services-grid,
        .strengths-grid {
            grid-template-columns: 1fr;
        }
    }

    /* Animation for elements coming into view */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .service-card,
    .strength-item {
        animation: fadeInUp 0.6s ease-out;
    }

    /* Utility classes */
    .text-left {
        text-align: left !important;
    }

    .align-items-center {
        align-items: center;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
    }

    .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
        padding: 0 15px;
    }

    @media (max-width: 768px) {
        .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 2rem;
        }
    }

    .img-responsive {
        max-width: 100%;
        height: auto;
    }
</style>

<?php get_footer(); ?>