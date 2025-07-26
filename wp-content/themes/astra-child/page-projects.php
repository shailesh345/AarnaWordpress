<?php

/**
 * Template Name: Projects Portfolio
 * Custom template for Projects page
 */

get_header(); ?>

<div class="hero-section">
    <div class="container-custom">
        <h1 class="hero-title">Our Projects</h1>
        <p class="hero-subtitle">A showcase of excellence in construction and infrastructure development</p>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12">
                <p class="lead text-center">From smart cities to sustainable industrial zones, our portfolio represents years of dedication to building India's future infrastructure.</p>
            </div>
        </div>
    </div>
</section>

<!-- Project Filter -->
<section class="project-filter-section bg-light section-padding">
    <div class="container-custom">
        <div class="project-filters text-center mb-5">
            <button class="filter-btn active" data-filter="all">All Projects</button>
            <button class="filter-btn" data-filter="residential">Residential</button>
            <button class="filter-btn" data-filter="commercial">Commercial</button>
            <button class="filter-btn" data-filter="industrial">Industrial</button>
            <button class="filter-btn" data-filter="infrastructure">Infrastructure</button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
            <div class="row">
                <!-- Project 1 -->
                <div class="col-md-6 col-lg-4 mb-4 project-item residential">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/project-residential-1.jpg" alt="Luxury Villa Project" />
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h4>Premium Residential Complex</h4>
                                    <p>200+ luxury apartments with modern amenities</p>
                                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h4>Green Valley Residences</h4>
                            <p class="project-location"><i class="fas fa-map-marker-alt"></i> Mumbai, Maharashtra</p>
                            <div class="project-stats">
                                <span class="stat"><strong>Area:</strong> 5.5 acres</span>
                                <span class="stat"><strong>Status:</strong> Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="col-md-6 col-lg-4 mb-4 project-item commercial">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/project-commercial-1.jpg" alt="Commercial Complex" />
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h4>Corporate Office Complex</h4>
                                    <p>Modern office spaces with smart building features</p>
                                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h4>Tech Park Plaza</h4>
                            <p class="project-location"><i class="fas fa-map-marker-alt"></i> Pune, Maharashtra</p>
                            <div class="project-stats">
                                <span class="stat"><strong>Area:</strong> 12 floors</span>
                                <span class="stat"><strong>Status:</strong> Ongoing</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="col-md-6 col-lg-4 mb-4 project-item industrial">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/project-industrial-1.jpg" alt="Industrial Plant" />
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h4>Manufacturing Facility</h4>
                                    <p>State-of-the-art production unit with automated systems</p>
                                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h4>AutoTech Manufacturing Unit</h4>
                            <p class="project-location"><i class="fas fa-map-marker-alt"></i> Chennai, Tamil Nadu</p>
                            <div class="project-stats">
                                <span class="stat"><strong>Area:</strong> 25 acres</span>
                                <span class="stat"><strong>Status:</strong> Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="col-md-6 col-lg-4 mb-4 project-item infrastructure">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/project-infrastructure-1.jpg" alt="Highway Project" />
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h4>Highway Development</h4>
                                    <p>6-lane highway with advanced safety features</p>
                                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h4>Delhi-Gurgaon Expressway</h4>
                            <p class="project-location"><i class="fas fa-map-marker-alt"></i> Delhi-NCR</p>
                            <div class="project-stats">
                                <span class="stat"><strong>Length:</strong> 45 km</span>
                                <span class="stat"><strong>Status:</strong> Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="col-md-6 col-lg-4 mb-4 project-item residential">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/project-residential-2.jpg" alt="Affordable Housing" />
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h4>Affordable Housing</h4>
                                    <p>Quality homes for middle-income families</p>
                                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h4>Sahara Homes</h4>
                            <p class="project-location"><i class="fas fa-map-marker-alt"></i> Bangalore, Karnataka</p>
                            <div class="project-stats">
                                <span class="stat"><strong>Units:</strong> 450 homes</span>
                                <span class="stat"><strong>Status:</strong> Ongoing</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="col-md-6 col-lg-4 mb-4 project-item commercial">
                    <div class="project-card">
                        <div class="project-image">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/project-commercial-2.jpg" alt="Shopping Mall" />
                            <div class="project-overlay">
                                <div class="project-info">
                                    <h4>Retail Complex</h4>
                                    <p>Modern shopping destination with entertainment facilities</p>
                                    <a href="#" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h4>Central Square Mall</h4>
                            <p class="project-location"><i class="fas fa-map-marker-alt"></i> Hyderabad, Telangana</p>
                            <div class="project-stats">
                                <span class="stat"><strong>Area:</strong> 8.5 lakh sq ft</span>
                                <span class="stat"><strong>Status:</strong> Planned</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Project Statistics -->
<section class="project-stats-section section-padding">
    <div class="container-custom">
        <h2 class="section-title text-center">Project Statistics</h2>
        <div class="row text-center">
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-box">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-box">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Ongoing Projects</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-box">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-box">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cta-section section-padding bg-primary text-white">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2>Let's Build Your Vision Together</h2>
                <p class="lead">Ready to start your next construction project? Contact us for a consultation.</p>
                <a href="<?php echo home_url('/contact'); ?>" class="btn btn-white btn-lg">Start Your Project</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>