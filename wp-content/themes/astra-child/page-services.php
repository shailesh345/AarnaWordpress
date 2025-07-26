<?php

/**
 * Template Name: Services Page
 * Custom template for Aarna Construction Services page
 */

get_header(); ?>

<div class="hero-section">
    <div class="container-custom">
        <h1 class="hero-title">Our Services</h1>
        <p class="hero-subtitle">Comprehensive Construction Solutions for Modern Infrastructure</p>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-title">What We Offer</h2>
                <p class="text-center lead">We offer a broad portfolio of services tailored for today's complex infrastructure needs, delivering excellence across every project phase.</p>
            </div>
        </div>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-drafting-compass"></i>
                </div>
                <h3>Civil & Structural Engineering</h3>
                <p>Comprehensive engineering solutions for all types of construction projects, from residential buildings to large-scale industrial complexes.</p>
                <ul class="service-features">
                    <li>Structural design and analysis</li>
                    <li>Foundation engineering</li>
                    <li>Seismic design and retrofitting</li>
                    <li>Building information modeling (BIM)</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-road"></i>
                </div>
                <h3>Highways & Roadworks</h3>
                <p>Expert construction of highways, roads, and transportation infrastructure that connects communities and supports economic growth.</p>
                <ul class="service-features">
                    <li>Highway construction and maintenance</li>
                    <li>Bridge construction</li>
                    <li>Traffic management systems</li>
                    <li>Pavement design and rehabilitation</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-building"></i>
                </div>
                <h3>Residential & Commercial Complexes</h3>
                <p>Creating modern living and working spaces that combine functionality, aesthetics, and sustainability for enhanced quality of life.</p>
                <ul class="service-features">
                    <li>Apartment complexes and housing projects</li>
                    <li>Office buildings and commercial centers</li>
                    <li>Mixed-use developments</li>
                    <li>Green building certifications</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-industry"></i>
                </div>
                <h3>Industrial Plant Infrastructure</h3>
                <p>Specialized construction services for industrial facilities, ensuring operational efficiency and compliance with industry standards.</p>
                <ul class="service-features">
                    <li>Manufacturing plant construction</li>
                    <li>Warehouse and distribution centers</li>
                    <li>Process piping and utilities</li>
                    <li>Heavy machinery foundations</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3>Turnkey Design-Build Services</h3>
                <p>Complete project delivery from concept to completion, providing a single point of responsibility for your construction needs.</p>
                <ul class="service-features">
                    <li>Architectural design and planning</li>
                    <li>Project management and coordination</li>
                    <li>Construction and quality control</li>
                    <li>Post-construction support</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-wrench"></i>
                </div>
                <h3>Renovation & Structural Retrofitting</h3>
                <p>Upgrading and modernizing existing structures to meet current standards and extend their operational life.</p>
                <ul class="service-features">
                    <li>Building renovations and upgrades</li>
                    <li>Seismic retrofitting</li>
                    <li>Energy efficiency improvements</li>
                    <li>Accessibility modifications</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-city"></i>
                </div>
                <h3>Urban Utilities and Public Infrastructure</h3>
                <p>Essential infrastructure services that support urban development and improve quality of life for communities.</p>
                <ul class="service-features">
                    <li>Water and wastewater systems</li>
                    <li>Power distribution infrastructure</li>
                    <li>Telecommunications networks</li>
                    <li>Public amenities and facilities</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="bg-light section-padding">
    <div class="container-custom">
        <h2 class="section-title">Industries We Serve</h2>
        <div class="industries-grid">
            <div class="industry-item">
                <div class="industry-icon">
                    <i class="fas fa-home"></i>
                </div>
                <h4>Real Estate & Housing</h4>
                <p>Residential complexes, luxury villas, and affordable housing projects.</p>
            </div>

            <div class="industry-item">
                <div class="industry-icon">
                    <i class="fas fa-landmark"></i>
                </div>
                <h4>Government & Civic Infrastructure</h4>
                <p>Public buildings, educational institutions, and government facilities.</p>
            </div>

            <div class="industry-item">
                <div class="industry-icon">
                    <i class="fas fa-industry"></i>
                </div>
                <h4>Industrial & Manufacturing Units</h4>
                <p>Factories, warehouses, and industrial processing facilities.</p>
            </div>

            <div class="industry-item">
                <div class="industry-icon">
                    <i class="fas fa-truck"></i>
                </div>
                <h4>Transportation & Logistics Facilities</h4>
                <p>Airports, ports, railway stations, and logistics hubs.</p>
            </div>

            <div class="industry-item">
                <div class="industry-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h4>Power, Energy & Utility Infrastructure</h4>
                <p>Power plants, renewable energy facilities, and utility systems.</p>
            </div>
        </div>
    </div>
</section>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="section-title">Ready to Start Your Project?</h2>
                <p class="lead">Contact us today to discuss your construction needs and discover how Aarna Construction can bring your vision to life.</p>
                <div class="cta-buttons">
                    <a href="<?php echo home_url('/contact'); ?>" class="btn btn-primary">Get Quote</a>
                    <a href="tel:+91XXXXXXXXXX" class="btn btn-outline-primary">Call Now</a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .service-card {
        background: white;
        border-radius: 15px;
        padding: 2.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border-top: 4px solid var(--secondary-color);
    }

    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .service-icon {
        color: var(--primary-color);
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .service-card h3 {
        color: var(--primary-color);
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .service-card p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .service-features {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .service-features li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #f0f0f0;
        position: relative;
        padding-left: 1.5rem;
    }

    .service-features li:before {
        content: '\f00c';
        font-family: 'Font Awesome 6 Free';
        font-weight: 900;
        color: var(--secondary-color);
        position: absolute;
        left: 0;
        top: 0.5rem;
    }

    .service-features li:last-child {
        border-bottom: none;
    }

    .industries-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }

    .industry-item {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .industry-item:hover {
        transform: translateY(-5px);
    }

    .industry-icon {
        color: var(--secondary-color);
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .industry-item h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }

    .industry-item p {
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .cta-buttons {
        margin-top: 2rem;
    }

    .btn {
        display: inline-block;
        padding: 12px 30px;
        margin: 0 10px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
    }

    .btn-outline-primary {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
    }

    .btn-outline-primary:hover {
        background: var(--primary-color);
        color: white;
    }

    @media (max-width: 768px) {
        .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .service-card {
            padding: 2rem;
        }

        .industries-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .industry-item {
            padding: 1.5rem;
        }
    }
</style>

<?php get_footer(); ?>