<?php

/**
 * Template Name: Blog & News
 * Custom template for Blog/News page
 */

get_header(); ?>

<div class="hero-section">
    <div class="container-custom">
        <h1 class="hero-title">Industry Insights & News</h1>
        <p class="hero-subtitle">Stay updated with the latest trends, innovations, and company news in construction</p>
    </div>
</div>

<section class="section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-8 mx-auto text-center">
                <p class="lead">Discover insights from industry experts, learn about construction innovations, and stay connected with Aarna Construction's latest projects and achievements.</p>
            </div>
        </div>
    </div>
</section>

<!-- Featured Article -->
<section class="featured-article bg-light section-padding">
    <div class="container-custom">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="featured-image">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-featured.jpg" alt="Featured Article" class="img-fluid" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="featured-content">
                    <span class="article-category">Industry Trends</span>
                    <h2>The Future of Sustainable Construction in India</h2>
                    <p class="article-excerpt">Exploring how green building practices and innovative technologies are reshaping India's construction landscape, with insights from our recent sustainable projects.</p>
                    <div class="article-meta">
                        <span class="article-date"><i class="fas fa-calendar"></i> December 15, 2024</span>
                        <span class="article-author"><i class="fas fa-user"></i> By Aarna Team</span>
                    </div>
                    <a href="#" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Articles Grid -->
<section class="articles-section section-padding">
    <div class="container-custom">
        <h2 class="section-title text-center">Latest Articles</h2>
        <div class="row">
            <!-- Article 1 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="article-card">
                    <div class="article-image">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-1.jpg" alt="BIM Technology" />
                        <span class="article-category">Technology</span>
                    </div>
                    <div class="article-content">
                        <h4><a href="#">How BIM Technology is Revolutionizing Construction Project Management</a></h4>
                        <p>Learn how Building Information Modeling is transforming project planning, execution, and collaboration in modern construction.</p>
                        <div class="article-meta">
                            <span><i class="fas fa-clock"></i> 5 min read</span>
                            <span><i class="fas fa-calendar"></i> Dec 10, 2024</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Article 2 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="article-card">
                    <div class="article-image">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-2.jpg" alt="Safety Protocols" />
                        <span class="article-category">Safety</span>
                    </div>
                    <div class="article-content">
                        <h4><a href="#">Essential Safety Protocols for Modern Construction Sites</a></h4>
                        <p>A comprehensive guide to implementing effective safety measures that protect workers and ensure project success.</p>
                        <div class="article-meta">
                            <span><i class="fas fa-clock"></i> 7 min read</span>
                            <span><i class="fas fa-calendar"></i> Dec 5, 2024</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Article 3 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="article-card">
                    <div class="article-image">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-3.jpg" alt="Smart Cities" />
                        <span class="article-category">Urban Development</span>
                    </div>
                    <div class="article-content">
                        <h4><a href="#">Building Smart Cities: Infrastructure for the Digital Age</a></h4>
                        <p>Exploring the role of intelligent infrastructure in creating sustainable, connected urban environments.</p>
                        <div class="article-meta">
                            <span><i class="fas fa-clock"></i> 6 min read</span>
                            <span><i class="fas fa-calendar"></i> Nov 28, 2024</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Article 4 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="article-card">
                    <div class="article-image">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-4.jpg" alt="Project Management" />
                        <span class="article-category">Project Management</span>
                    </div>
                    <div class="article-content">
                        <h4><a href="#">Effective Cost Management Strategies in Large-Scale Construction</a></h4>
                        <p>Best practices for controlling costs and maximizing value in complex construction projects without compromising quality.</p>
                        <div class="article-meta">
                            <span><i class="fas fa-clock"></i> 8 min read</span>
                            <span><i class="fas fa-calendar"></i> Nov 20, 2024</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Article 5 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="article-card">
                    <div class="article-image">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-5.jpg" alt="Materials Innovation" />
                        <span class="article-category">Innovation</span>
                    </div>
                    <div class="article-content">
                        <h4><a href="#">Revolutionary Building Materials Transforming Construction</a></h4>
                        <p>A look at innovative materials that are making buildings stronger, more sustainable, and cost-effective.</p>
                        <div class="article-meta">
                            <span><i class="fas fa-clock"></i> 4 min read</span>
                            <span><i class="fas fa-calendar"></i> Nov 15, 2024</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Article 6 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="article-card">
                    <div class="article-image">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/blog-6.jpg" alt="Company News" />
                        <span class="article-category">Company News</span>
                    </div>
                    <div class="article-content">
                        <h4><a href="#">Aarna Construction Wins Major Infrastructure Project Award</a></h4>
                        <p>We're proud to announce our recent recognition for excellence in infrastructure development and sustainable construction practices.</p>
                        <div class="article-meta">
                            <span><i class="fas fa-clock"></i> 3 min read</span>
                            <span><i class="fas fa-calendar"></i> Nov 10, 2024</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter Signup -->
<section class="newsletter-section bg-primary text-white section-padding">
    <div class="container-custom">
        <div class="row">
            <div class="col-md-8 mx-auto text-center">
                <h2>Stay Updated with Industry Insights</h2>
                <p class="lead">Subscribe to our newsletter and get the latest construction trends, project updates, and industry insights delivered to your inbox.</p>
                <form class="newsletter-form" action="#" method="post">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email address" required>
                            <div class="input-group-append">
                                <button class="btn btn-white" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="newsletter-disclaimer">We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </div>
    </div>
</section>

<!-- Categories -->
<section class="categories-section section-padding">
    <div class="container-custom">
        <h2 class="section-title text-center">Browse by Category</h2>
        <div class="row">
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="category-card text-center">
                    <div class="category-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h5>Industry Trends</h5>
                    <p>Latest developments and future outlook in construction</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">View Articles</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="category-card text-center">
                    <div class="category-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                    <h5>Technology</h5>
                    <p>Innovations and digital solutions in construction</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">View Articles</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="category-card text-center">
                    <div class="category-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <h5>Project Management</h5>
                    <p>Best practices and strategies for successful projects</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">View Articles</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="category-card text-center">
                    <div class="category-icon">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <h5>Company News</h5>
                    <p>Updates, achievements, and announcements</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">View Articles</a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>