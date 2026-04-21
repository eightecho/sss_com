<?php get_header(); ?>
<main id="main">

    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <p class="hero-eyebrow">Tactical Support · The Stupid Simple Startup Program&trade;</p>
            <h1>You don't have to build it alone.</h1>
            <p class="hero-sub">A private space for people working through the IMPACT System — ask questions, share your progress, and get direct support at every step of the build.</p>
        </div>
    </section>


    <!-- What it is -->
    <section class="section">
        <div class="container">
            <p class="section-label">What it is</p>
            <div class="section-head">
                <h2>Tactical support. Live access.</h2>
                <p>This isn't a forum or a Discord server with hundreds of threads to wade through. It's a focused community built around one thing: helping you execute the playbook step by step.</p>
            </div>
            <div class="grid-3">
                <div class="card">
                    <p class="card-label">Ask anything</p>
                    <h3>Direct answers</h3>
                    <p>Stuck at a step? Post it. Questions are answered directly as they come up — not with a canned FAQ.</p>
                </div>
                <div class="card">
                    <p class="card-label">Stay current</p>
                    <h3>Live updates</h3>
                    <p>The playbooks are being documented in real time. New chapters, decisions, and context get shared in the community first — before anything else.</p>
                </div>
                <div class="card">
                    <p class="card-label">Share progress</p>
                    <h3>Real feedback</h3>
                    <p>Post your work, share what you're building, get feedback from people doing the same thing at the same stage. Not cheerleading — actual input.</p>
                </div>
            </div>
        </div>
    </section>


    <!-- How it works -->
    <section class="section">
        <div class="container">
            <p class="section-label">How it works</p>
            <p class="journey-head">"Included with<br>the Playbook."</p>

            <div class="workbook-flow" style="margin: 32px 0;">
                <div class="workbook-flow-row">
                    <span class="wf-step wf-step--neutral">Buy a Playbook</span>
                    <span class="wf-arrow">→</span>
                    <span class="wf-step wf-step--neutral">Join the Community</span>
                    <span class="wf-arrow">→</span>
                    <span class="wf-step wf-step--neutral">Get Support</span>
                </div>
            </div>

            <p class="journey-body">Community access isn't a separate membership. When you purchase a Stupid Simple Startup playbook, you're in. The community is hosted on our platform — accessible from any browser or the mobile app.</p>
            <br>
            <p class="journey-body" style="font-size: 15px;">Because the playbooks are being documented as the work actually happens, the community is also where that live process plays out — the decisions, the dead ends, and the things that actually worked.</p>
        </div>
    </section>


    <!-- Mid-page CTA -->
    <section class="cta-light">
        <div class="container">
            <p class="section-label">Included with training</p>
            <h2>Community comes with the Playbook.</h2>
            <p>Purchase any Stupid Simple Startup playbook and community access is included — no separate membership, no add-on.</p>
            <a href="<?php echo esc_url(home_url('/playbooks/')); ?>" class="btn btn-primary">
                See the Playbooks
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </section>


    <!-- CTA Strip -->
    <section class="cta-strip">
        <div class="container">
            <p class="section-label">Start with the system</p>
            <h2>The master guide is free.</h2>
            <p>Get it, read it, use it.</p>
            <button class="btn btn-primary-light" data-open-optin>Get the IMPACT System</button>
        </div>
    </section>

</main>
<?php get_footer(); ?>
