<?php

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    register_nav_menus([
        'primary' => __('Primary Navigation', 'sss'),
        'footer'  => __('Footer Navigation', 'sss'),
    ]);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('sss-main', get_template_directory_uri() . '/assets/css/main.css', [], '0.2.0');
    wp_enqueue_script('sss-main', get_template_directory_uri() . '/assets/js/main.js', [], '0.2.0', true);
});

add_filter('body_class', function ($classes) {
    if (is_page('picture-book-project')) {
        $classes[] = 'pbpp';
    }
    return $classes;
});
