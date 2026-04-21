<?php get_header(); ?>
<main id="main">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article <?php post_class(); ?>>
            <h1><?php the_title(); ?></h1>
            <div class="entry-meta">
                <time><?php echo get_the_date(); ?></time>
            </div>
            <?php the_content(); ?>
        </article>
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
