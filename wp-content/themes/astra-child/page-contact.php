<?php

/**
 * Template Name: Contact Page
 * Custom template for Aarna Construction Contact page
 */

get_header(); ?>

<div class="hero-section hero-contact">
    <div class="hero-overlay"></div>
    <div class="container-custom">
        <div class="hero-content text-center">
            <div class="hero-badge">
                <i class="fas fa-building"></i>
            </div>
            <h1 class="hero-title">Contact Aarna Construction</h1>
            <p class="hero-subtitle">Let's Build the Future Together - Your Vision, Our Expertise</p>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">24/7</span>
                    <span class="stat-label">Support</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">Projects</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">15+</span>
                    <span class="stat-label">Years</span>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-8">
                <div class="contact-form-wrapper">
                    <div class="form-header">
                        <div class="form-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h2 class="section-title">Get In Touch</h2>
                        <p class="lead">Ready to discuss your construction project? Fill out the form below and our expert team will get back to you within 24 hours with a detailed consultation.</p>
                    </div>

                    <!-- Replace this with your actual WPForms shortcode -->
                    <div class="contact-form">
                        <?php
                        // If you have WPForms installed, replace with your form shortcode
                        // Example: echo do_shortcode('[wpforms id="123"]');
                        ?>
                        <form class="contact-form-custom" action="#" method="post">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="name">
                                        <i class="fas fa-user"></i>
                                        Full Name *
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Enter your full name" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">
                                        <i class="fas fa-envelope"></i>
                                        Email Address *
                                    </label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="phone">
                                        <i class="fas fa-phone"></i>
                                        Phone Number
                                    </label>
                                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="company">
                                        <i class="fas fa-building"></i>
                                        Company/Organization
                                    </label>
                                    <input type="text" id="company" name="company" placeholder="Enter company name">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="project-type">
                                        <i class="fas fa-hammer"></i>
                                        Project Type
                                    </label>
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
                                <div class="form-group col-md-6">
                                    <label for="budget">
                                        <i class="fas fa-rupee-sign"></i>
                                        Estimated Budget Range
                                    </label>
                                    <select id="budget" name="budget">
                                        <option value="">Select Budget Range</option>
                                        <option value="under-10">Under ₹10 Lakhs</option>
                                        <option value="10-50">₹10 Lakhs - ₹50 Lakhs</option>
                                        <option value="50-1cr">₹50 Lakhs - ₹1 Crore</option>
                                        <option value="1-5cr">₹1 Crore - ₹5 Crores</option>
                                        <option value="above-5cr">Above ₹5 Crores</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="timeline">
                                    <i class="fas fa-calendar"></i>
                                    Project Timeline
                                </label>
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
                                <label for="message">
                                    <i class="fas fa-comment-dots"></i>
                                    Project Details & Requirements *
                                </label>
                                <textarea id="message" name="message" rows="6"
                                    placeholder="Please describe your project requirements, location, specific needs, and any other relevant details..."
                                    required></textarea>
                            </div>

                            <div class="form-submit">
                                <button type="submit" class="btn btn-primary btn-lg">
                                    <i class="fas fa-paper-plane"></i>
                                    Send Message
                                </button>
                                <p class="form-note">
                                    <i class="fas fa-shield-check"></i>
                                    Your information is secure and will not be shared with third parties.
                                </p>
                            </div>
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
        <p class="lead">From concept to completion, Aarna Construction is your trusted partner for all construction
            needs.</p>
        <div class="cta-buttons">
            <a href="tel:+91XXXXXXXXXX" class="btn btn-primary">Call Now</a>
            <a href="mailto:info@aarnaconstruction.com" class="btn btn-outline-primary">Email Us</a>
            <a href="<?php echo home_url('/services'); ?>" class="btn btn-outline-secondary">View Services</a>
        </div>
    </div>
</section>

<style>
    /* Enhanced Professional Contact Page Styles */

    /* Hero Section Enhancement */
    .hero-contact {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #0f172a 100%);
        position: relative;
        overflow: hidden;
        padding: 120px 0 80px;
    }

    .hero-contact::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="%23ffffff" fill-opacity="0.05" points="0,1000 1000,0 1000,1000"/></svg>');
        pointer-events: none;
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(30, 58, 138, 0.1);
    }

    .hero-content {
        position: relative;
        z-index: 2;
    }

    .hero-badge {
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 30px;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .hero-badge i {
        font-size: 2rem;
        color: white;
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 20px;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 40px;
        font-weight: 300;
    }

    .hero-stats {
        display: flex;
        justify-content: center;
        gap: 60px;
        margin-top: 40px;
    }

    .hero-stats .stat-item {
        text-align: center;
    }

    .hero-stats .stat-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 700;
        color: #fbbf24;
        line-height: 1;
    }

    .hero-stats .stat-label {
        display: block;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 5px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Contact Form Enhancement */
    .contact-form-wrapper {
        background: white;
        padding: 0;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .form-header {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        padding: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .form-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        box-shadow: 0 10px 25px rgba(44, 90, 160, 0.3);
    }

    .form-icon i {
        font-size: 1.5rem;
        color: white;
    }

    .form-header .section-title {
        color: var(--text-dark);
        margin-bottom: 15px;
        font-size: 2rem;
        font-weight: 600;
    }

    .form-header .lead {
        color: #64748b;
        line-height: 1.6;
        margin: 0;
    }

    .contact-form-custom {
        padding: 40px;
    }

    .form-group {
        margin-bottom: 25px;
        padding: 0 15px;
    }

    .form-group label {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-weight: 600;
        color: var(--text-dark);
        font-size: 0.95rem;
    }

    .form-group label i {
        margin-right: 8px;
        width: 16px;
        color: var(--primary-color);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 15px 18px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 16px;
        font-family: inherit;
        transition: all 0.3s ease;
        background: #fafbfc;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        border-color: var(--primary-color);
        outline: none;
        box-shadow: 0 0 0 4px rgba(44, 90, 160, 0.1);
        background: white;
        transform: translateY(-1px);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: #94a3b8;
    }

    .form-group textarea {
        resize: vertical;
        min-height: 140px;
        line-height: 1.6;
    }

    .form-submit {
        text-align: center;
        padding-top: 20px;
        border-top: 1px solid #e2e8f0;
        margin-top: 30px;
    }

    .form-submit .btn {
        padding: 18px 40px;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 12px;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(44, 90, 160, 0.3);
        border: none;
        text-transform: none;
    }

    .form-submit .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 35px rgba(44, 90, 160, 0.4);
    }

    .form-submit .btn i {
        margin-right: 10px;
    }

    .form-note {
        margin-top: 15px;
        font-size: 0.85rem;
        color: #64748b;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .form-note i {
        color: #10b981;
    }

    /* Contact Info Enhancement */
    .contact-info {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .contact-info h3 {
        color: var(--primary-color);
        margin-bottom: 30px;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 2px solid #e2e8f0;
    }

    .contact-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 25px;
        padding: 20px;
        background: #f8fafc;
        border-radius: 12px;
        transition: all 0.3s ease;
    }

    .contact-item:hover {
        background: #e2e8f0;
        transform: translateY(-2px);
    }

    .contact-item:last-child {
        margin-bottom: 0;
    }

    .contact-icon {
        flex-shrink: 0;
        width: 55px;
        height: 55px;
        background: linear-gradient(135deg, var(--secondary-color), #f59e0b);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        box-shadow: 0 8px 20px rgba(255, 140, 0, 0.3);
    }

    .contact-icon i {
        color: white;
        font-size: 1.3rem;
    }

    .contact-details h4 {
        color: var(--primary-color);
        margin-bottom: 8px;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .contact-details p {
        margin: 0;
        line-height: 1.6;
        color: #475569;
    }

    .contact-details a {
        color: var(--text-dark);
        text-decoration: none;
        transition: color 0.3s ease;
        font-weight: 500;
    }

    .contact-details a:hover {
        color: var(--primary-color);
    }

    /* Quick Services Enhancement */
    .quick-services {
        background: linear-gradient(135deg, var(--primary-color), #1e40af);
        padding: 30px;
        border-radius: 20px;
        margin-top: 30px;
        color: white;
        box-shadow: 0 20px 60px rgba(30, 64, 175, 0.3);
    }

    .quick-services h3 {
        color: white;
        margin-bottom: 25px;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
    }

    .services-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .services-list li {
        padding: 12px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .services-list li:hover {
        padding-left: 10px;
    }

    .services-list li:last-child {
        border-bottom: none;
    }

    .services-list i {
        color: #fbbf24;
        margin-right: 12px;
        width: 16px;
        font-size: 0.9rem;
    }

    /* Map Section Enhancement */
    .map-section {
        padding: 80px 0;
        background: #f8fafc;
    }

    .map-section .section-title {
        color: var(--text-dark);
        margin-bottom: 40px;
    }

    .map-container {
        margin-top: 2rem;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }

    .map-placeholder {
        background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
        padding: 80px 40px;
        text-align: center;
        border: 2px dashed #94a3b8;
        border-radius: 20px;
        color: #64748b;
    }

    .map-placeholder p {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .map-placeholder p:last-child {
        font-size: 0.95rem;
        opacity: 0.8;
    }

    /* CTA Section Enhancement */
    .bg-light.section-padding {
        background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
        padding: 80px 0;
    }

    .cta-buttons {
        margin-top: 30px;
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cta-buttons .btn {
        padding: 15px 30px;
        font-weight: 600;
        border-radius: 12px;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .btn-outline-secondary {
        background: transparent;
        color: var(--accent-color);
        border: 2px solid var(--accent-color);
    }

    .btn-outline-secondary:hover {
        background: var(--accent-color);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(74, 74, 74, 0.3);
    }

    .btn-outline-primary {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
    }

    .btn-outline-primary:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(44, 90, 160, 0.3);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .hero-stats {
            gap: 30px;
        }

        .hero-stats .stat-number {
            font-size: 2rem;
        }

        .contact-form-wrapper,
        .contact-info {
            padding: 30px 20px;
        }

        .form-header {
            padding: 30px 20px;
        }

        .contact-form-custom {
            padding: 30px 20px;
        }

        .form-group.col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        .contact-item {
            flex-direction: column;
            text-align: center;
            padding: 20px 15px;
        }

        .contact-icon {
            margin: 0 auto 15px auto;
        }

        .map-placeholder {
            padding: 40px 20px;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }

        .cta-buttons .btn {
            width: 200px;
            justify-content: center;
        }
    }

    /* Form validation styles */
    .form-group input:invalid:not(:placeholder-shown),
    .form-group textarea:invalid:not(:placeholder-shown) {
        border-color: #ef4444;
        background: #fef2f2;
    }

    .form-group input:valid:not(:placeholder-shown),
    .form-group textarea:valid:not(:placeholder-shown) {
        border-color: #10b981;
        background: #f0fdf4;
    }

    /* Loading state for form submission */
    .btn.loading {
        opacity: 0.8;
        pointer-events: none;
        position: relative;
    }

    .btn.loading:after {
        content: '';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: translateY(-50%) rotate(0deg);
        }

        100% {
            transform: translateY(-50%) rotate(360deg);
        }
    }

    /* Smooth animations */
    * {
        scroll-behavior: smooth;
    }

    .contact-form-wrapper,
    .contact-info,
    .quick-services {
        animation: fadeInUp 0.6s ease-out;
    }

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
</style>

<?php get_footer(); ?>