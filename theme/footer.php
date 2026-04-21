<footer class="site-footer">
    <div class="container footer-main-nav">
        <?php wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'footer-links',
        ]); ?>
    </div>
    <div class="container footer-inner">
        <p class="footer-copy">Copyright &copy; <span id="year"></span> Eight Echo Agency, LLC</p>
        <ul class="footer-links">
            <li><a href="<?php echo esc_url(home_url('/privacy/')); ?>">Privacy Policy</a></li>
            <li><a href="<?php echo esc_url(home_url('/disclaimer/')); ?>">Disclaimer</a></li>
            <li><a href="<?php echo esc_url(home_url('/terms/')); ?>">Terms</a></li>
        </ul>
    </div>
    <div class="container">
        <p class="footer-legal">Stupid Simple Startup&trade;, the IMPACT System&trade;, and the Stupid Simple Startup Program&trade; are trademarks of Eight Echo Agency, LLC. All rights reserved.</p>
    </div>
</footer>

<?php if (is_page('picture-book-project')): ?>
<!-- Opt-in Modal — PBPP -->
<div class="modal" id="optinModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-backdrop" data-close-optin></div>
    <div class="modal-dialog">
        <div class="modal-header">
            <p class="modal-title" id="modalTitle">Picture Book Project Playbook</p>
            <button class="modal-close" data-close-optin aria-label="Close">&times;</button>
        </div>
        <div class="modal-body">
            <form action="https://app.kit.com/forms/9158754/subscriptions" style="background-color: rgb(249, 250, 251); border-radius: 0;" class="seva-form formkit-form" method="post" data-sv-form="9158754" data-uid="7d2826bed8" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
                <div style="opacity: 0.2;" class="formkit-background"></div>
                <div data-style="minimal">
                    <div class="formkit-header" style="color: rgb(77, 77, 77); font-size: 27px; font-weight: 700;" data-element="header"><h2>Picture Book Project Playbook</h2></div>
                    <div class="formkit-subheader" style="color: rgb(104, 104, 104); font-size: 26px;" data-element="subheader"><p>Get Step 1: Identify for Free</p></div>
                    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
                        <div class="formkit-field"><input class="formkit-input" name="email_address" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;" aria-label="Email Address" placeholder="Email Address" required="" type="email"></div>
                        <button data-element="submit" class="formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Subscribe</span></button>
                    </div>
                    <div class="formkit-guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;" data-element="guarantee">We won't send you spam. Unsubscribe at any time.</div>
                    <div class="formkit-powered-by-convertkit-container"><a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a></div>
                </div>
                <style>.formkit-form[data-uid="7d2826bed8"] *{box-sizing:border-box;}.formkit-form[data-uid="7d2826bed8"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="7d2826bed8"] h1,.formkit-form[data-uid="7d2826bed8"] h2,.formkit-form[data-uid="7d2826bed8"] h3,.formkit-form[data-uid="7d2826bed8"] h4,.formkit-form[data-uid="7d2826bed8"] h5,.formkit-form[data-uid="7d2826bed8"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="7d2826bed8"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="7d2826bed8"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;flex:1 0 auto;line-height:1.4;margin:0;transition:border-color ease-out 300ms;}.formkit-form[data-uid="7d2826bed8"] .formkit-input:focus{outline:none;border-color:#1677be;transition:border-color ease 300ms;}.formkit-form[data-uid="7d2826bed8"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="7d2826bed8"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="7d2826bed8"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="7d2826bed8"] .formkit-spinner{display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;overflow:hidden;text-align:center;transition:all 300ms ease-in-out;}.formkit-form[data-uid="7d2826bed8"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;animation:formkit-bouncedelay-formkit-form-data-uid-7d2826bed8- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="7d2826bed8"] .formkit-spinner > div:nth-child(1){animation-delay:-0.32s;}.formkit-form[data-uid="7d2826bed8"] .formkit-spinner > div:nth-child(2){animation-delay:-0.16s;}.formkit-form[data-uid="7d2826bed8"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="7d2826bed8"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}@keyframes formkit-bouncedelay-formkit-form-data-uid-7d2826bed8-{0%,80%,100%{transform:scale(0);}40%{transform:scale(1);}}.formkit-form[data-uid="7d2826bed8"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="7d2826bed8"] .formkit-submit > span{display:block;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="7d2826bed8"]{max-width:700px;position:relative;overflow:hidden;}.formkit-form[data-uid="7d2826bed8"] .formkit-background{width:100%;height:100%;position:absolute;top:0;left:0;background-size:cover;background-position:center;opacity:0.3;}.formkit-form[data-uid="7d2826bed8"] [data-style="minimal"]{padding:20px;width:100%;position:relative;}.formkit-form[data-uid="7d2826bed8"] .formkit-header{margin:0 0 27px 0;text-align:center;}.formkit-form[data-uid="7d2826bed8"] .formkit-subheader{margin:18px 0;text-align:center;}.formkit-form[data-uid="7d2826bed8"] .formkit-guarantee{font-size:13px;margin:10px 0 15px 0;text-align:center;}.formkit-form[data-uid="7d2826bed8"] .formkit-fields{display:flex;flex-wrap:wrap;margin:25px auto 0 auto;}.formkit-form[data-uid="7d2826bed8"] .formkit-field{min-width:220px;}.formkit-form[data-uid="7d2826bed8"] .formkit-field,.formkit-form[data-uid="7d2826bed8"] .formkit-submit{margin:0 0 15px 0;flex:1 0 100%;}.formkit-form[data-uid="7d2826bed8"][min-width~="600"] [data-style="minimal"]{padding:40px;}.formkit-form[data-uid="7d2826bed8"][min-width~="600"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}.formkit-form[data-uid="7d2826bed8"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="7d2826bed8"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}.formkit-form[data-uid="7d2826bed8"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-field{flex:100 1 auto;}.formkit-form[data-uid="7d2826bed8"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-submit{flex:1 1 auto;}</style>
            </form>
        </div>
    </div>
</div>
<?php else: ?>
<!-- Opt-in Modal -->
<div class="modal" id="optinModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-backdrop" data-close-optin></div>
    <div class="modal-dialog">
        <div class="modal-header">
            <p class="modal-title" id="modalTitle">The IMPACT System</p>
            <button class="modal-close" data-close-optin aria-label="Close">&times;</button>
        </div>
        <div class="modal-body">
            <form
                id="kitForm"
                action="https://app.kit.com/forms/9157991/subscriptions"
                style="background-color: rgb(255, 255, 255); border-radius: 0;"
                class="seva-form formkit-form"
                method="post"
                data-sv-form="9157991"
                data-uid="195ac6fa15"
                data-format="inline"
                data-version="5"
                data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
                min-width="400 500 600 700 800"
            >
                <div data-style="full">
                    <div data-element="column" class="formkit-background"></div>
                    <div data-element="column" class="formkit-column">
                        <div class="formkit-header" style="color: rgb(83, 83, 83); font-size: 28px; font-weight: 700;" data-element="header">
                            <h2>Access the IMPACT System</h2>
                        </div>
                        <div class="formkit-subheader" style="color: rgb(104, 104, 104); font-size: 15px;" data-element="subheader">
                            <p>And get started on your startup journey&mdash;Completely Free.</p>
                        </div>
                        <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                        <div data-element="fields" class="seva-fields formkit-fields">
                            <div class="formkit-field">
                                <input class="formkit-input" name="email_address" style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;" aria-label="Email Address" placeholder="Email Address" required="" type="email" />
                            </div>
                            <button data-element="submit" class="formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(28, 26, 23); border-radius: 0; font-weight: 700;">
                                <div class="formkit-spinner"><div></div><div></div><div></div></div>
                                <span>Subscribe</span>
                            </button>
                        </div>
                        <div class="formkit-disclaimer" style="color: rgb(139, 139, 139); font-size: 13px;" data-element="disclaimer">
                            <p>We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                        <div class="formkit-powered-by-convertkit-container">
                            <a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a>
                        </div>
                    </div>
                </div>
                <style>
                    .formkit-form[data-uid="195ac6fa15"] *{box-sizing:border-box;}
                    .formkit-form[data-uid="195ac6fa15"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
                    .formkit-form[data-uid="195ac6fa15"] h1,.formkit-form[data-uid="195ac6fa15"] h2,.formkit-form[data-uid="195ac6fa15"] h3,.formkit-form[data-uid="195ac6fa15"] h4,.formkit-form[data-uid="195ac6fa15"] h5,.formkit-form[data-uid="195ac6fa15"] h6{color:inherit;font-size:inherit;font-weight:inherit;}
                    .formkit-form[data-uid="195ac6fa15"] p{color:inherit;font-size:inherit;font-weight:inherit;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;line-height:1.4;margin:0;transition:border-color 300ms ease;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-input:focus{outline:none;border-color:#1c1a17;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:0;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-alert:empty{display:none;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-spinner{display:flex;height:0;width:0;margin:0 auto;position:absolute;top:0;left:0;right:0;overflow:hidden;text-align:center;transition:all 300ms ease;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;animation:formkit-bouncedelay 1.4s infinite ease-in-out both;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-spinner > div:nth-child(1){animation-delay:-0.32s;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-spinner > div:nth-child(2){animation-delay:-0.16s;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}
                    @keyframes formkit-bouncedelay{0%,80%,100%{transform:scale(0);}40%{transform:scale(1);}}
                    .formkit-form[data-uid="195ac6fa15"]{box-shadow:none;max-width:700px;overflow:hidden;}
                    @media only screen and (min-width:800px){.formkit-form[data-uid="195ac6fa15"]{min-width:600px;}}
                    .formkit-form[data-uid="195ac6fa15"] [data-style="full"]{width:100%;display:block;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-background{display:none;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-column{padding:20px;position:relative;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-field{margin:0 0 10px 0;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-input{width:100%;border-left:none;border-right:none;border-top:none;padding-left:0;padding-right:0;}
                    .formkit-form[data-uid="195ac6fa15"] .formkit-fields .formkit-submit{margin-top:15px;width:100%;}
                </style>
            </form>
        </div>
    </div>
</div>
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
