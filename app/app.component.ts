import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <header>
            <div class="uui-header">
                <nav>
                    <!--Responsive html-layuot-->
                    <div class="uui-responsive-header">
                        <div class="responsive-header">
                            <a href="#" class="responsive-brand-logo">
                                <span class="logo">
                                    <img src="node_modules/uui-framework/images/ic_logo_UUi.svg" alt="" />
                                </span>
                                <span class="title">Unified UI</span>
                            </a>
                        </div>
                    </div>
                    <a href="#" class="brand-logo">
                        <span class="logo">
                            <img src="node_modules/uui-framework/images/ic_logo_UUi.svg" alt="" />
                        </span>
                        Unified UI
                    </a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/skillMatrix']">Skill Matrix</a></li>
                    </ul>                    
                </nav>
            </div>
        </header>    
        <div class='uui-main-container'>
            <router-outlet></router-outlet>
        </div>
        <footer>
            <div class="uui-footer">
                <div class="footer-logo-copyright">
                    <div class="epam-logo">
                        <img src="node_modules/uui-framework/images/Logo_Epam_Color.svg" alt="" />
                    </div>
                    <p class="copyright">© 2017 EPAM Systems. All Rights Reserved.</p>
                </div>
                <div class="footer-build">
                    <p class="build">Build version v <span>1.0.0.0</span></p>
                </div>
            </div>
        </footer>    
     `
})
export class AppComponent {
    pageTitle: string = 'Technical Interview Helper';
}
