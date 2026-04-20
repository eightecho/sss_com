<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-nav">
    <div class="container nav-inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand">Stupid Simple Startup&trade;</a>
        <?php wp_nav_menu([
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => 'nav-links',
        ]); ?>
        <button class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="navDrawer" aria-label="Open navigation">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect y="4"  width="20" height="2" fill="currentColor"/>
                <rect y="9"  width="20" height="2" fill="currentColor"/>
                <rect y="14" width="20" height="2" fill="currentColor"/>
            </svg>
        </button>
    </div>
    <nav id="navDrawer" class="nav-drawer" aria-label="Mobile navigation">
        <?php wp_nav_menu([
            'theme_location' => 'primary',
            'container'      => false,
        ]); ?>
    </nav>
</header>
