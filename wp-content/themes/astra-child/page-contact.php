<?php

/**
 * Template Name: Contact Page
 * Custom template for Aarna Construction Contact page
 */

get_header(); ?>

<div class="hero-section">
    <div class="container-custom">
        <h1 class="hero-title">Contact Us</h1>
        <p class="hero-subtitle">Let's Build Your Dream Project Together</p>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-8">
                <div class="contact-form-wrapper">
                    <h2 class="section-title text-left">Get In Touch</h2>
                    <p class="lead">Ready to discuss your construction project? Fill out the form below and our team will get back to you within 24 hours.</p>

                    <!-- Replace this with your actual WPForms shortcode -->
                    <div class="contact-form">
                        <?php
                        // If you have WPForms installed, replace with your form shortcode
                        // Example: echo do_shortcode('[wpforms id="123"]');
                        ?>
                        <form class="contact-form-custom" action="#" method="post">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="company">Company/Organization</label>
                                    <input type="text" id="company" name="company">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="project-type">Project Type</label>
                                <select id="project-type" name="project-type">
                                    <option value="">Select Project Type</option>
                                    <option value="residential">Residential Construction</option>
                                    <option value="commercial">Commercial Construction</option>
                                    <option value="industrial">Industrial Construction</option>
                                    <option value="infrastructure">Infrastructure Development</option>
                                    <option value="renovation">Renovation & Retrofitting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="budget">Estimated Budget Range</label>
                                <select id="budget" name="budget">
                                    <option value="">Select Budget Range</option>
                                    <option value="under-10">Under ₹10 Lakhs</option>
                                    <option value="10-50">₹10 Lakhs - ₹50 Lakhs</option>
                                    <option value="50-1cr">₹50 Lakhs - ₹1 Crore</option>
                                    <option value="1-5cr">₹1 Crore - ₹5 Crores</option>
                                    <option value="above-5cr">Above ₹5 Crores</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="timeline">Project Timeline</label>
                                <select id="timeline" name="timeline">
                                    <option value="">Select Timeline</option>
                                    <option value="immediate">Immediate (Within 1 month)</option>
                                    <option value="short-term">Short-term (1-3 months)</option>
                                    <option value="medium-term">Medium-term (3-6 months)</option>
                                    <option value="long-term">Long-term (6+ months)</option>
                                    <option value="planning">Still in planning phase</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="message">Project Details & Requirements *</label>
                                <textarea id="message" name="message" rows="6" placeholder="Please describe your project requirements, location, specific needs, and any other relevant details..." required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="contact-info">
                    <h3>Contact Information</h3>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Office Address</h4>
                            <p>[Insert your complete office address here]<br>
                                [City, State - PIN Code]</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Phone Numbers</h4>
                            <p>
                                <a href="tel:+91XXXXXXXXXX">+91 XXXX-XXX-XXX</a><br>
                                <a href="tel:+91XXXXXXXXXX">+91 XXXX-XXX-XXX</a>
                            </p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email Addresses</h4>
                            <p>
                                <a href="mailto:info@aarnaconstruction.com">info@aarnaconstruction.com</a><br>
                                <a href="mailto:projects@aarnaconstruction.com">projects@aarnaconstruction.com</a>
                            </p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Working Hours</h4>
                            <p>
                                Monday - Saturday: 9:00 AM - 6:00 PM<br>
                                Sunday: Closed<br>
                                <small>Emergency services available 24/7</small>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="quick-services">
                    <h3>Quick Services</h3>
                    <ul class="services-list">
                        <li><i class="fas fa-check"></i> Free Project Consultation</li>
                        <li><i class="fas fa-check"></i> Site Visit & Assessment</li>
                        <li><i class="fas fa-check"></i> Cost Estimation</li>
                        <li><i class="fas fa-check"></i> Project Planning</li>
                        <li><i class="fas fa-check"></i> 24/7 Emergency Support</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Optional: Google Maps Section -->
<section class="map-section">
    <div class="container-custom">
        <h2 class="section-title">Find Us</h2>
        <div class="map-container">
            <!-- Replace with your actual Google Maps embed code -->
            <div class="map-placeholder">
                <p>Google Maps will be embedded here</p>
                <p>Please add your Google Maps embed code to show your office location</p>
            </div>
        </div>
    </div>
</section>

<section class="bg-light section-padding">
    <div class="container-custom text-center">
        <h2 class="section-title">Ready to Start Your Project?</h2>
        <p class="lead">From concept to completion, Aarna Construction is your trusted partner for all construction needs.</p>
        <div class="cta-buttons">
            <a href="tel:+91XXXXXXXXXX" class="btn btn-primary">Call Now</a>
            <a href="mailto:info@aarnaconstruction.com" class="btn btn-outline-primary">Email Us</a>
            <a href="<?php echo home_url('/services'); ?>" class="btn btn-outline-secondary">View Services</a>
        </div>
    </div>
</section>

<style>
    .contact-form-wrapper {
        background: white;
        padding: 3rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }

    .contact-form-custom {
        margin-top: 2rem;
    }

    .form-row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
    }

    .form-group {
        margin-bottom: 1.5rem;
        padding: 0 15px;
    }

    .form-group.col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--text-dark);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px 15px;
        border: 2px solid #e0e0e0;
        border-radius: 5px;
        font-size: 16px;
        font-family: inherit;
        transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        border-color: var(--primary-color);
        outline: none;
        box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }

    .contact-info {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }

    .contact-info h3 {
        color: var(--primary-color);
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    .contact-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #f0f0f0;
    }

    .contact-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .contact-icon {
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        background: var(--secondary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
    }

    .contact-icon i {
        color: white;
        font-size: 1.2rem;
    }

    .contact-details h4 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }

    .contact-details p {
        margin: 0;
        line-height: 1.6;
    }

    .contact-details a {
        color: var(--text-dark);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .contact-details a:hover {
        color: var(--primary-color);
    }

    .quick-services {
        background: var(--light-gray);
        padding: 2rem;
        border-radius: 10px;
        margin-top: 2rem;
    }

    .quick-services h3 {
        color: var(--primary-color);
        margin-bottom: 1.5rem;
    }

    .services-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .services-list li {
        padding: 0.5rem 0;
        display: flex;
        align-items: center;
    }

    .services-list i {
        color: var(--secondary-color);
        margin-right: 0.5rem;
        width: 16px;
    }

    .map-section {
        padding: 60px 0;
    }

    .map-container {
        margin-top: 2rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .map-placeholder {
        background: #f8f9fa;
        padding: 4rem;
        text-align: center;
        border: 2px dashed #ddd;
    }

    .cta-buttons {
        margin-top: 2rem;
    }

    .btn-outline-secondary {
        background: transparent;
        color: var(--accent-color);
        border: 2px solid var(--accent-color);
    }

    .btn-outline-secondary:hover {
        background: var(--accent-color);
        color: white;
    }

    @media (max-width: 768px) {
        .contact-form-wrapper {
            padding: 2rem;
        }

        .form-group.col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        .contact-info {
            padding: 2rem;
        }

        .contact-item {
            flex-direction: column;
            text-align: center;
        }

        .contact-icon {
            margin: 0 auto 1rem auto;
        }

        .map-placeholder {
            padding: 2rem;
        }
    }

    /* Form validation styles */
    .form-group input:invalid,
    .form-group textarea:invalid {
        border-color: #dc3545;
    }

    .form-group input:valid,
    .form-group textarea:valid {
        border-color: #28a745;
    }

    /* Loading state for form submission */
    .btn.loading {
        opacity: 0.7;
        pointer-events: none;
    }

    .btn.loading:after {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 10px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>

<?php get_footer(); ?>