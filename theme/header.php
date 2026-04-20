<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header id="site-header">
    <nav id="site-nav">
        <a href="<?php echo home_url('/'); ?>" class="site-logo">
            <?php bloginfo('name'); ?>
        </a>
        <?php wp_nav_menu(['theme_location' => 'primary', 'container' => false]); ?>
    </nav>
</header>
