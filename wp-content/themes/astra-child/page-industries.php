<?php

/**
 * Template Name: Industries We Serve
 * Custom template for Industries page
 */

get_header(); ?>

<div class="hero-section">
    <div class="container-custom">
        <h1 class="hero-title">Industries We Serve</h1>
        <p class="hero-subtitle">Comprehensive construction solutions across diverse sectors</p>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12">
                <p class="lead text-center">Aarna Construction brings specialized expertise to a wide range of industries, delivering tailored solutions that meet the unique requirements of each sector.</p>
            </div>
        </div>
    </div>
</section>

<section class="industries-section section-padding bg-light">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="industry-card">
                    <div class="industry-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <h3>Real Estate & Housing</h3>
                    <p>From luxury residential complexes to affordable housing projects, we create living spaces that combine comfort, functionality, and modern design.</p>
                    <ul>
                        <li>Residential Complexes</li>
                        <li>Luxury Villas</li>
                        <li>Affordable Housing</li>
                        <li>Gated Communities</li>
                    </ul>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="industry-card">
                    <div class="industry-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3>Government & Civic Infrastructure</h3>
                    <p>Supporting public development through reliable construction of government buildings, civic centers, and public utilities.</p>
                    <ul>
                        <li>Government Buildings</li>
                        <li>Schools & Hospitals</li>
                        <li>Public Utilities</li>
                        <li>Municipal Projects</li>
                    </ul>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="industry-card">
                    <div class="industry-icon">
                        <i class="fas fa-industry"></i>
                    </div>
                    <h3>Industrial & Manufacturing Units</h3>
                    <p>Specialized construction for industrial facilities, manufacturing plants, and production units with focus on efficiency and safety.</p>
                    <ul>
                        <li>Manufacturing Plants</li>
                        <li>Warehouses</li>
                        <li>Industrial Parks</li>
                        <li>Processing Facilities</li>
                    </ul>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="industry-card">
                    <div class="industry-icon">
                        <i class="fas fa-truck"></i>
                    </div>
                    <h3>Transportation & Logistics</h3>
                    <p>Infrastructure development for transportation networks, logistics hubs, and distribution centers that drive economic growth.</p>
                    <ul>
                        <li>Highways & Roads</li>
                        <li>Logistics Centers</li>
                        <li>Transport Terminals</li>
                        <li>Distribution Hubs</li>
                    </ul>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="industry-card">
                    <div class="industry-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3>Power, Energy & Utilities</h3>
                    <p>Critical infrastructure for power generation, energy distribution, and utility services that power communities and industries.</p>
                    <ul>
                        <li>Power Plants</li>
                        <li>Substations</li>
                        <li>Utility Infrastructure</li>
                        <li>Renewable Energy Projects</li>
                    </ul>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="industry-card">
                    <div class="industry-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <h3>Commercial & Retail</h3>
                    <p>Modern commercial spaces, office complexes, and retail establishments that drive business growth and economic development.</p>
                    <ul>
                        <li>Office Complexes</li>
                        <li>Shopping Centers</li>
                        <li>Commercial Buildings</li>
                        <li>Mixed-Use Developments</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cta-section section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2>Ready to Start Your Project?</h2>
                <p class="lead">Let's discuss how Aarna Construction can bring your vision to life with precision, performance, and professionalism.</p>
                <div class="cta-buttons">
                    <a href="<?php echo home_url('/contact'); ?>" class="btn btn-primary btn-lg">Get Started</a>
                    <a href="<?php echo home_url('/services'); ?>" class="btn btn-outline-primary btn-lg">View Services</a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>