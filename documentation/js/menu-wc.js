'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">online-exam documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-0a7c13a64436939f3f41424763c6f0b91e0af49dcbf5fff35ab640ea3d68bd5fec7a76ea73d5384de3846e8409bf66654a6995a1da4e855b07f3710ccc5dcf41"' : 'data-target="#xs-controllers-links-module-AppModule-0a7c13a64436939f3f41424763c6f0b91e0af49dcbf5fff35ab640ea3d68bd5fec7a76ea73d5384de3846e8409bf66654a6995a1da4e855b07f3710ccc5dcf41"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0a7c13a64436939f3f41424763c6f0b91e0af49dcbf5fff35ab640ea3d68bd5fec7a76ea73d5384de3846e8409bf66654a6995a1da4e855b07f3710ccc5dcf41"' :
                                            'id="xs-controllers-links-module-AppModule-0a7c13a64436939f3f41424763c6f0b91e0af49dcbf5fff35ab640ea3d68bd5fec7a76ea73d5384de3846e8409bf66654a6995a1da4e855b07f3710ccc5dcf41"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseModule.html" data-type="entity-link" >CourseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' : 'data-target="#xs-controllers-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' :
                                            'id="xs-controllers-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' }>
                                            <li class="link">
                                                <a href="controllers/CourseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' : 'data-target="#xs-injectables-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' :
                                        'id="xs-injectables-links-module-CourseModule-e5f36f9bb7774c2c7e35cce05b78a8cfccaea1a899eec61053486cbcb9de1a5a74e5fddb5078829abf0be3ec67dd54daf15d879051afab5af6e28de62b41fdf8"' }>
                                        <li class="link">
                                            <a href="injectables/CourseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-d987c4da874a570b3bbd486104f8a75920754bacc7a1d07c488dc93ec320b28297d12aeac2c859469eed20f3d70c87c560a47ec95fda4725f5d15483f187ef3a"' : 'data-target="#xs-injectables-links-module-PrismaModule-d987c4da874a570b3bbd486104f8a75920754bacc7a1d07c488dc93ec320b28297d12aeac2c859469eed20f3d70c87c560a47ec95fda4725f5d15483f187ef3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-d987c4da874a570b3bbd486104f8a75920754bacc7a1d07c488dc93ec320b28297d12aeac2c859469eed20f3d70c87c560a47ec95fda4725f5d15483f187ef3a"' :
                                        'id="xs-injectables-links-module-PrismaModule-d987c4da874a570b3bbd486104f8a75920754bacc7a1d07c488dc93ec320b28297d12aeac2c859469eed20f3d70c87c560a47ec95fda4725f5d15483f187ef3a"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CourseController.html" data-type="entity-link" >CourseController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CourseNotFoundException.html" data-type="entity-link" >CourseNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCourseDto.html" data-type="entity-link" >CreateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCourseDto.html" data-type="entity-link" >UpdateCourseDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CourseService.html" data-type="entity-link" >CourseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});