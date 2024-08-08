import {
  AuthService
} from "/chunk-VDKJKZGX.js";
import "/chunk-CO5DJLHR.js";
import {
  UsersService
} from "/chunk-JN2LZSO5.js";
import "/chunk-5DQOFX56.js";
import "/chunk-YQOESBWP.js";

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_platform-browser.js?v=7bba538c";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_core.js?v=7bba538c";
import { provideRouter, withComponentInputBinding, withViewTransitions } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_router.js?v=7bba538c";

// src/app/auth/guards/auth.guard.ts
import { Router } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_router.js?v=7bba538c";
import { inject } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_core.js?v=7bba538c";
var authGuard = (route, state) => {
  let authService = inject(AuthService);
  const router = inject(Router);
  const token = localStorage.getItem("token") ?? null;
  if (token) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};

// src/app/app.routes.ts
var routes = [
  {
    path: "auth",
    loadChildren: () => import("/chunk-L2F4YEI5.js").then((m) => m.AUTH_ROUTES)
  },
  {
    path: "user",
    loadChildren: () => import("/chunk-TRWWUYCI.js").then((m) => m.USERS_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: "hospitals",
    loadChildren: () => import("/chunk-Q24KWFFZ.js").then((m) => m.HOSPITALS_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: "home",
    loadComponent: () => import("/chunk-AQ752GME.js")
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

// src/app/app.config.ts
import { provideHttpClient, withFetch, withInterceptors } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_common_http.js?v=7bba538c";
import { provideAnimationsAsync } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_platform-browser_animations_async.js?v=7bba538c";

// src/app/auth/interceptors/add-token.interceptor.ts
var addTokenInterceptor = (req, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withFetch(), withInterceptors([addTokenInterceptor])),
    provideAnimationsAsync()
  ]
};

// src/app/app.component.ts
import { Component as Component2 } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_core.js?v=7bba538c";
import { RouterOutlet } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_router.js?v=7bba538c";

// src/app/shared/components/navbar/navbar.component.ts
import { Component, inject as inject2, signal } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_core.js?v=7bba538c";
import { MenubarModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_menubar.js?v=7bba538c";
import { BadgeModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_badge.js?v=7bba538c";
import { AvatarModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_avatar.js?v=7bba538c";
import { InputTextModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_inputtext.js?v=7bba538c";
import { RippleModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_ripple.js?v=7bba538c";
import { CommonModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_common.js?v=7bba538c";
import { RouterLink } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_router.js?v=7bba538c";
import { Button } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_button.js?v=7bba538c";
import { MenuModule } from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_menu.js?v=7bba538c";
import * as i0 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_core.js?v=7bba538c";
import * as i1 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_menubar.js?v=7bba538c";
import * as i2 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_router.js?v=7bba538c";
import * as i3 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_api.js?v=7bba538c";
import * as i4 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_badge.js?v=7bba538c";
import * as i5 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_avatar.js?v=7bba538c";
import * as i6 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_ripple.js?v=7bba538c";
import * as i7 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_common.js?v=7bba538c";
import * as i8 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/primeng_menu.js?v=7bba538c";
var _c0 = (a0, a1) => ({ "ml-auto": a0, "ml-2": a1 });
var _c1 = (a0) => ["pi", a0];
function NavbarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275namespaceSVG();
    i0.\u0275\u0275elementStart(0, "svg", 6);
    i0.\u0275\u0275element(1, "path", 7);
    i0.\u0275\u0275elementEnd();
  }
}
function NavbarComponent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275element(0, "p-badge", 13);
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const root_r3 = ctx_r0.root;
    i0.\u0275\u0275property("ngClass", i0.\u0275\u0275pureFunction2(2, _c0, !root_r3, root_r3))("value", item_r2.badge);
  }
}
function NavbarComponent_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 14);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(item_r2.shortcut);
  }
}
function NavbarComponent_ng_template_3_i_6_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275element(0, "i", 15);
  }
  if (rf & 2) {
    const root_r3 = i0.\u0275\u0275nextContext().root;
    i0.\u0275\u0275property("ngClass", i0.\u0275\u0275pureFunction1(1, _c1, root_r3 ? "pi-angle-down ml-2" : "pi-angle-right ml-auto"));
  }
}
function NavbarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "a", 8);
    i0.\u0275\u0275element(1, "span");
    i0.\u0275\u0275elementStart(2, "span", 9);
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275template(4, NavbarComponent_ng_template_3_p_badge_4_Template, 1, 5, "p-badge", 10)(5, NavbarComponent_ng_template_3_span_5_Template, 2, 1, "span", 11)(6, NavbarComponent_ng_template_3_i_6_Template, 1, 3, "i", 12);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.\u0275\u0275property("routerLink", item_r2.routerLink);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classMap(item_r2.icon);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(item_r2.label);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", item_r2.badge);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", item_r2.shortcut);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", item_r2.items);
  }
}
function NavbarComponent_ng_template_4_p_avatar_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "p-avatar", 25);
    i0.\u0275\u0275listener("click", function NavbarComponent_ng_template_4_p_avatar_5_Template_p_avatar_click_0_listener($event) {
      i0.\u0275\u0275restoreView(_r4);
      i0.\u0275\u0275nextContext();
      const menu_r5 = i0.\u0275\u0275reference(3);
      return i0.\u0275\u0275resetView(menu_r5.toggle($event));
    });
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275property("image", ctx_r5.avatar());
  }
}
function NavbarComponent_ng_template_4_strong_7_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "strong");
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r5 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate((tmp_3_0 = ctx_r5.currentUser()) == null ? null : tmp_3_0.username);
  }
}
function NavbarComponent_ng_template_4_small_8_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "small");
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r5 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate((tmp_3_0 = ctx_r5.currentUser()) == null ? null : tmp_3_0.role);
  }
}
function NavbarComponent_ng_template_4_p_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "p-button", 26);
    i0.\u0275\u0275listener("click", function NavbarComponent_ng_template_4_p_button_9_Template_p_button_click_0_listener() {
      i0.\u0275\u0275restoreView(_r7);
      const ctx_r5 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r5.onLogout());
    });
    i0.\u0275\u0275elementEnd();
  }
}
function NavbarComponent_ng_template_4_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275element(0, "p-button", 27);
  }
}
function NavbarComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    i0.\u0275\u0275element(2, "p-menu", 18, 0);
    i0.\u0275\u0275elementStart(4, "div", 19);
    i0.\u0275\u0275template(5, NavbarComponent_ng_template_4_p_avatar_5_Template, 1, 1, "p-avatar", 20);
    i0.\u0275\u0275elementStart(6, "div", 21);
    i0.\u0275\u0275template(7, NavbarComponent_ng_template_4_strong_7_Template, 2, 1, "strong", 22)(8, NavbarComponent_ng_template_4_small_8_Template, 2, 1, "small", 22);
    i0.\u0275\u0275elementEnd()()();
    i0.\u0275\u0275template(9, NavbarComponent_ng_template_4_p_button_9_Template, 1, 0, "p-button", 23)(10, NavbarComponent_ng_template_4_p_button_10_Template, 1, 0, "p-button", 24);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r5 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("model", ctx_r5.profileItems)("popup", true);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("ngIf", (tmp_4_0 = ctx_r5.currentUser()) == null ? null : tmp_4_0.username);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("ngIf", (tmp_5_0 = ctx_r5.currentUser()) == null ? null : tmp_5_0.username);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_6_0 = ctx_r5.currentUser()) == null ? null : tmp_6_0.username);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_7_0 = ctx_r5.currentUser()) == null ? null : tmp_7_0.username);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", !((tmp_8_0 = ctx_r5.currentUser()) == null ? null : tmp_8_0.username));
  }
}
var _NavbarComponent = class _NavbarComponent {
  constructor() {
    this.id = signal("0");
    this.usersService = inject2(UsersService);
    this.authService = inject2(AuthService);
    this.currentUser = signal(null);
    this.avatar = signal(void 0);
  }
  ngOnInit() {
    this.setUserData();
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
        routerLink: "home"
      },
      {
        label: "Hospitals",
        icon: "pi pi-building",
        items: [
          {
            label: "List",
            icon: "pi pi-list",
            routerLink: "hospitals"
          },
          {
            label: "Add New",
            icon: "pi pi-server",
            routerLink: "hospitals/add"
          }
        ]
      }
      // {
      //   label: 'Doctors',
      //   icon: 'pi pi-address-book',
      //   items: [
      //     {
      //       label: 'List',
      //       icon: 'pi pi-list',
      //       routerLink: 'doctors'
      //     },
      //     {
      //       label: 'Add New',
      //       icon: 'pi pi-plus',
      //       routerLink: 'doctors/add'
      //     }
      //   ]
      // }
    ];
    this.profileItems = [
      {
        label: "Profile",
        items: [
          {
            label: "View Profile",
            icon: "pi pi-user",
            routerLink: `/user/${this.id()}`,
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: "Edit Profile",
            icon: "pi pi-user-edit",
            routerLink: `/user/edit/${this.id()}`,
            routerLinkActiveOptions: { exact: true }
          }
        ]
      }
    ];
  }
  onLogout() {
    this.authService.logoutUser();
  }
  setUserData() {
    setTimeout(() => {
      const user = this.authService.getUser();
      console.log("user -> ", user);
    }, 3e3);
  }
};
_NavbarComponent.\u0275fac = function NavbarComponent_Factory(t) {
  return new (t || _NavbarComponent)();
};
_NavbarComponent.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [i0.\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [["menu", ""], [1, "card"], [3, "model"], ["pTemplate", "start"], ["pTemplate", "item"], ["pTemplate", "end"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "60", "zoomAndPan", "magnify", "viewBox", "0 0 600 599.999999", "height", "60", "preserveAspectRatio", "xMidYMid meet", "version", "1.0"], ["fill", "#3178c6", "d", "M 299.96875 299.96875 L 60 299.96875 C 60 167.4375 167.4375 60 299.96875 60 Z M 299.96875 299.96875 L 299.96875 539.9375 C 432.5 539.9375 539.9375 432.5 539.9375 299.96875 Z M 132.25 355.722656 C 101.886719 386.085938 101.886719 435.3125 132.25 465.675781 C 162.609375 496.039062 211.839844 496.039062 242.203125 465.675781 C 272.566406 435.3125 272.566406 386.085938 242.203125 355.722656 C 211.835938 325.359375 162.609375 325.359375 132.25 355.722656 Z M 469.546875 234.960938 C 499.910156 204.597656 499.910156 155.371094 469.546875 125.007812 C 439.183594 94.644531 389.957031 94.644531 359.59375 125.007812 C 329.230469 155.371094 329.230469 204.597656 359.59375 234.960938 C 389.957031 265.324219 439.183594 265.324219 469.546875 234.960938 Z M 469.546875 234.960938 ", "fill-opacity", "1", "fill-rule", "nonzero"], ["pRipple", "", 1, "flex", "align-items-center", "p-menuitem-link", 3, "routerLink"], [1, "ml-2"], [3, "ngClass", "value", 4, "ngIf"], ["class", "ml-auto border-1 surface-border border-round surface-100 text-xs p-1", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "value"], [1, "ml-auto", "border-1", "surface-border", "border-round", "surface-100", "text-xs", "p-1"], [3, "ngClass"], [1, "flex", "justify-content-center", "gap-2"], [1, "card", "flex", "justify-content-center"], [3, "model", "popup"], [1, "flex"], ["styleClass", "mr-2", "size", "large", "shape", "circle", 3, "image", "click", 4, "ngIf"], [1, "flex", "flex-column", "justify-content-center"], [4, "ngIf"], ["type", "button", "label", "Logout", "icon", "pi pi-sign-out", "iconPos", "right", 3, "click", 4, "ngIf"], ["type", "button", "label", "Login", "routerLink", "/auth/login", "icon", "pi pi-sign-in", "iconPos", "right", 4, "ngIf"], ["styleClass", "mr-2", "size", "large", "shape", "circle", 3, "click", "image"], ["type", "button", "label", "Logout", "icon", "pi pi-sign-out", "iconPos", "right", 3, "click"], ["type", "button", "label", "Login", "routerLink", "/auth/login", "icon", "pi pi-sign-in", "iconPos", "right"]], template: function NavbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 1)(1, "p-menubar", 2);
    i0.\u0275\u0275template(2, NavbarComponent_ng_template_2_Template, 2, 0, "ng-template", 3)(3, NavbarComponent_ng_template_3_Template, 7, 7, "ng-template", 4)(4, NavbarComponent_ng_template_4_Template, 11, 7, "ng-template", 5);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("model", ctx.items);
  }
}, dependencies: [MenubarModule, i1.Menubar, i2.RouterLink, i3.PrimeTemplate, BadgeModule, i4.Badge, AvatarModule, i5.Avatar, InputTextModule, RippleModule, i6.Ripple, CommonModule, i7.NgClass, i7.NgIf, Button, MenuModule, i8.Menu] });
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent" });
})();

// src/app/app.component.ts
import * as i02 from "/@fs/Users/juanjose/Development/JavaScript/Angular/hospitales-angular-nodejs/frontend/.angular/cache/18.0.7/vite/deps/@angular_core.js?v=7bba538c";
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "frontend";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "flex", "flex-column"], [1, "m-0", "p-0"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    i02.\u0275\u0275element(2, "app-navbar");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "div");
    i02.\u0275\u0275element(4, "router-outlet");
    i02.\u0275\u0275elementEnd()();
  }
}, dependencies: [RouterOutlet, NavbarComponent] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hdXRoL2d1YXJkcy9hdXRoLmd1YXJkLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9hdXRoL2ludGVyY2VwdG9ycy9hZGQtdG9rZW4uaW50ZXJjZXB0b3IudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwQXBwbGljYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4vYXBwL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvYXBwLmNvbXBvbmVudCc7XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCwgYXBwQ29uZmlnKVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlnLCBwcm92aWRlWm9uZUNoYW5nZURldGVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtwcm92aWRlUm91dGVyLCB3aXRoQ29tcG9uZW50SW5wdXRCaW5kaW5nLCB3aXRoVmlld1RyYW5zaXRpb25zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHtwcm92aWRlSHR0cENsaWVudCwgd2l0aEZldGNoLCB3aXRoSW50ZXJjZXB0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7cHJvdmlkZUFuaW1hdGlvbnNBc3luY30gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucy9hc3luY1wiO1xuaW1wb3J0IHthZGRUb2tlbkludGVyY2VwdG9yfSBmcm9tIFwiLi9hdXRoL2ludGVyY2VwdG9ycy9hZGQtdG9rZW4uaW50ZXJjZXB0b3JcIjtcbmltcG9ydCB7cHJvdmlkZUFuaW1hdGlvbnN9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLFxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzLCB3aXRoQ29tcG9uZW50SW5wdXRCaW5kaW5nKCksIHdpdGhWaWV3VHJhbnNpdGlvbnMoKSksXG4gICAgcHJvdmlkZUh0dHBDbGllbnQod2l0aEZldGNoKCksIHdpdGhJbnRlcmNlcHRvcnMoW2FkZFRva2VuSW50ZXJjZXB0b3JdKSksXG4gICAgcHJvdmlkZUFuaW1hdGlvbnNBc3luYygpLFxuICBdXG59O1xuIiwiaW1wb3J0IHtDYW5BY3RpdmF0ZUZuLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge2luamVjdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Y2F0Y2hFcnJvciwgb2YsIHRhcH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhHdWFyZDogQ2FuQWN0aXZhdGVGbiA9IChyb3V0ZSwgc3RhdGUpID0+IHtcbiAgbGV0IGF1dGhTZXJ2aWNlID0gaW5qZWN0KEF1dGhTZXJ2aWNlKTtcbiAgY29uc3Qgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPz8gbnVsbDtcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59O1xuXG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHthdXRoR3VhcmR9IGZyb20gXCIuL2F1dGgvZ3VhcmRzL2F1dGguZ3VhcmRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2F1dGgnLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2F1dGgvYXV0aC5yb3V0ZXMnKS50aGVuKG0gPT4gbS5BVVRIX1JPVVRFUylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd1c2VyJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi91c2Vycy91c2Vycy5yb3V0ZXMnKS50aGVuKG0gPT4gbS5VU0VSU19ST1VURVMpLFxuICAgIGNhbkFjdGl2YXRlOiBbYXV0aEd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ2hvc3BpdGFscycsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vaG9zcGl0YWxzL2hvc3BpdGFscy5yb3V0ZXMnKS50aGVuKG0gPT4gbS5IT1NQSVRBTFNfUk9VVEVTKSxcbiAgICBjYW5BY3RpdmF0ZTogW2F1dGhHdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdob21lJyxcbiAgICBsb2FkQ29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4vaG9tZS9ob21lLmNvbXBvbmVudCcpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICByZWRpcmVjdFRvOiAnaG9tZScsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcqKicsXG4gICAgcmVkaXJlY3RUbzogJ2hvbWUnXG4gIH1cbl07XG4iLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNvbnN0IGFkZFRva2VuSW50ZXJjZXB0b3I6IEh0dHBJbnRlcmNlcHRvckZuID0gKHJlcSwgbmV4dCkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICBpZiAodG9rZW4pIHtcbiAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXh0KHJlcSk7XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1JvdXRlck91dGxldCwgTmF2YmFyQ29tcG9uZW50XSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hcHAuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ2Zyb250ZW5kJztcbn1cbiIsIlxuPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2x1bW5cIj5cbiAgPGRpdiBjbGFzcz1cIm0tMCBwLTBcIj5cbiAgICA8YXBwLW5hdmJhciAvPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8cm91dGVyLW91dGxldCAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGNvbXB1dGVkLCBlZmZlY3QsIGluamVjdCwgSW5wdXQsIE9uSW5pdCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudWJhck1vZHVsZX0gZnJvbSBcInByaW1lbmcvbWVudWJhclwiO1xuaW1wb3J0IHtCYWRnZU1vZHVsZX0gZnJvbSBcInByaW1lbmcvYmFkZ2VcIjtcbmltcG9ydCB7QXZhdGFyTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9hdmF0YXJcIjtcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tIFwicHJpbWVuZy9pbnB1dHRleHRcIjtcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9yaXBwbGVcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tIFwicHJpbWVuZy9hcGlcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlckxpbmt9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9hdXRoL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJwcmltZW5nL2J1dHRvblwiO1xuaW1wb3J0IHtNZW51TW9kdWxlfSBmcm9tIFwicHJpbWVuZy9tZW51XCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi91c2Vycy9pbnRlcmZhY2VzL3VzZXJcIjtcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvdXNlcnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmF2YmFyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01lbnViYXJNb2R1bGUsIEJhZGdlTW9kdWxlLCBBdmF0YXJNb2R1bGUsIElucHV0VGV4dE1vZHVsZSwgUmlwcGxlTW9kdWxlLCBDb21tb25Nb2R1bGUsIFJvdXRlckxpbmssIEJ1dHRvbiwgQXZhdGFyTW9kdWxlLCBNZW51TW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb2ZpbGVJdGVtczogTWVudUl0ZW1bXSB8IHVuZGVmaW5lZDtcbiAgaXRlbXM6IE1lbnVJdGVtW10gfCB1bmRlZmluZWQ7XG4gIGlkID0gc2lnbmFsPHN0cmluZyB8IHVuZGVmaW5lZD4oJzAnKTtcbiAgcHJpdmF0ZSB1c2Vyc1NlcnZpY2UgPSBpbmplY3QoVXNlcnNTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZSA9IGluamVjdChBdXRoU2VydmljZSk7XG4gIHB1YmxpYyBjdXJyZW50VXNlciA9IHNpZ25hbDxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIHB1YmxpYyBhdmF0YXIgPSBzaWduYWw8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRVc2VyRGF0YSgpO1xuXG4gICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgaWNvbjogJ3BpIHBpLWhvbWUnLFxuICAgICAgICByb3V0ZXJMaW5rOiAnaG9tZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSG9zcGl0YWxzJyxcbiAgICAgICAgaWNvbjogJ3BpIHBpLWJ1aWxkaW5nJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0xpc3QnLFxuICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWxpc3QnLFxuICAgICAgICAgICAgcm91dGVyTGluazogJ2hvc3BpdGFscydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQWRkIE5ldycsXG4gICAgICAgICAgICBpY29uOiAncGkgcGktc2VydmVyJyxcbiAgICAgICAgICAgIHJvdXRlckxpbms6ICdob3NwaXRhbHMvYWRkJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgbGFiZWw6ICdEb2N0b3JzJyxcbiAgICAgIC8vICAgaWNvbjogJ3BpIHBpLWFkZHJlc3MtYm9vaycsXG4gICAgICAvLyAgIGl0ZW1zOiBbXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgbGFiZWw6ICdMaXN0JyxcbiAgICAgIC8vICAgICAgIGljb246ICdwaSBwaS1saXN0JyxcbiAgICAgIC8vICAgICAgIHJvdXRlckxpbms6ICdkb2N0b3JzJ1xuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgbGFiZWw6ICdBZGQgTmV3JyxcbiAgICAgIC8vICAgICAgIGljb246ICdwaSBwaS1wbHVzJyxcbiAgICAgIC8vICAgICAgIHJvdXRlckxpbms6ICdkb2N0b3JzL2FkZCdcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIF1cbiAgICAgIC8vIH1cbiAgICBdO1xuICAgIHRoaXMucHJvZmlsZUl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1Byb2ZpbGUnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVmlldyBQcm9maWxlJyxcbiAgICAgICAgICAgIGljb246ICdwaSBwaS11c2VyJyxcbiAgICAgICAgICAgIHJvdXRlckxpbms6IGAvdXNlci8ke3RoaXMuaWQoKX1gLFxuICAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZU9wdGlvbnM6IHtleGFjdDogdHJ1ZX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRWRpdCBQcm9maWxlJyxcbiAgICAgICAgICAgIGljb246ICdwaSBwaS11c2VyLWVkaXQnLFxuICAgICAgICAgICAgcm91dGVyTGluazogYC91c2VyL2VkaXQvJHt0aGlzLmlkKCl9YCxcbiAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmVPcHRpb25zOiB7ZXhhY3Q6IHRydWV9XG5cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgb25Mb2dvdXQoKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXRVc2VyKCk7XG4gIH1cblxuICBzZXRVc2VyRGF0YSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyIC0+ICcsIHVzZXIpXG4gICAgfSwgMzAwMClcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICA8cC1tZW51YmFyIFttb2RlbF09XCJpdGVtc1wiPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJzdGFydFwiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI2MFwiIHpvb21BbmRQYW49XCJtYWduaWZ5XCIgdmlld0JveD1cIjAgMCA2MDAgNTk5Ljk5OTk5OVwiIGhlaWdodD1cIjYwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiB2ZXJzaW9uPVwiMS4wXCI+PHBhdGggZmlsbD1cIiMzMTc4YzZcIiBkPVwiTSAyOTkuOTY4NzUgMjk5Ljk2ODc1IEwgNjAgMjk5Ljk2ODc1IEMgNjAgMTY3LjQzNzUgMTY3LjQzNzUgNjAgMjk5Ljk2ODc1IDYwIFogTSAyOTkuOTY4NzUgMjk5Ljk2ODc1IEwgMjk5Ljk2ODc1IDUzOS45Mzc1IEMgNDMyLjUgNTM5LjkzNzUgNTM5LjkzNzUgNDMyLjUgNTM5LjkzNzUgMjk5Ljk2ODc1IFogTSAxMzIuMjUgMzU1LjcyMjY1NiBDIDEwMS44ODY3MTkgMzg2LjA4NTkzOCAxMDEuODg2NzE5IDQzNS4zMTI1IDEzMi4yNSA0NjUuNjc1NzgxIEMgMTYyLjYwOTM3NSA0OTYuMDM5MDYyIDIxMS44Mzk4NDQgNDk2LjAzOTA2MiAyNDIuMjAzMTI1IDQ2NS42NzU3ODEgQyAyNzIuNTY2NDA2IDQzNS4zMTI1IDI3Mi41NjY0MDYgMzg2LjA4NTkzOCAyNDIuMjAzMTI1IDM1NS43MjI2NTYgQyAyMTEuODM1OTM4IDMyNS4zNTkzNzUgMTYyLjYwOTM3NSAzMjUuMzU5Mzc1IDEzMi4yNSAzNTUuNzIyNjU2IFogTSA0NjkuNTQ2ODc1IDIzNC45NjA5MzggQyA0OTkuOTEwMTU2IDIwNC41OTc2NTYgNDk5LjkxMDE1NiAxNTUuMzcxMDk0IDQ2OS41NDY4NzUgMTI1LjAwNzgxMiBDIDQzOS4xODM1OTQgOTQuNjQ0NTMxIDM4OS45NTcwMzEgOTQuNjQ0NTMxIDM1OS41OTM3NSAxMjUuMDA3ODEyIEMgMzI5LjIzMDQ2OSAxNTUuMzcxMDk0IDMyOS4yMzA0NjkgMjA0LjU5NzY1NiAzNTkuNTkzNzUgMjM0Ljk2MDkzOCBDIDM4OS45NTcwMzEgMjY1LjMyNDIxOSA0MzkuMTgzNTk0IDI2NS4zMjQyMTkgNDY5LjU0Njg3NSAyMzQuOTYwOTM4IFogTSA0NjkuNTQ2ODc1IDIzNC45NjA5MzggXCIgZmlsbC1vcGFjaXR5PVwiMVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaXRlbVwiIGxldC1pdGVtIGxldC1yb290PVwicm9vdFwiPlxuICAgICAgPGEgcFJpcHBsZSBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIHAtbWVudWl0ZW0tbGlua1wiPlxuICAgICAgICA8c3BhbiBbY2xhc3NdPVwiaXRlbS5pY29uXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTJcIj57eyBpdGVtLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8cC1iYWRnZSAqbmdJZj1cIml0ZW0uYmFkZ2VcIiBbbmdDbGFzc109XCJ7ICdtbC1hdXRvJzogIXJvb3QsICdtbC0yJzogcm9vdCB9XCIgW3ZhbHVlXT1cIml0ZW0uYmFkZ2VcIiAvPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uc2hvcnRjdXRcIiBjbGFzcz1cIm1sLWF1dG8gYm9yZGVyLTEgc3VyZmFjZS1ib3JkZXIgYm9yZGVyLXJvdW5kIHN1cmZhY2UtMTAwIHRleHQteHMgcC0xXCI+e3sgaXRlbS5zaG9ydGN1dCB9fTwvc3Bhbj5cbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLml0ZW1zXCIgW25nQ2xhc3NdPVwiWydwaScsIHJvb3QgPyAncGktYW5nbGUtZG93biBtbC0yJyA6ICdwaS1hbmdsZS1yaWdodCBtbC1hdXRvJ11cIj48L2k+XG4gICAgICA8L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxwLW1lbnUgI21lbnUgW21vZGVsXT1cInByb2ZpbGVJdGVtc1wiIFtwb3B1cF09XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHAtYXZhdGFyXG4gICAgICAgICAgICAgICpuZ0lmPVwiY3VycmVudFVzZXIoKT8udXNlcm5hbWVcIlxuICAgICAgICAgICAgICBbaW1hZ2VdPVwiYXZhdGFyKClcIlxuICAgICAgICAgICAgICBzdHlsZUNsYXNzPVwibXItMlwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm1lbnUudG9nZ2xlKCRldmVudClcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmcgKm5nSWY9XCJjdXJyZW50VXNlcigpPy51c2VybmFtZVwiPnt7Y3VycmVudFVzZXIoKT8udXNlcm5hbWV9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJjdXJyZW50VXNlcigpPy51c2VybmFtZVwiPnt7Y3VycmVudFVzZXIoKT8ucm9sZX19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkxvZ291dFwiIChjbGljayk9XCJvbkxvZ291dCgpXCIgKm5nSWY9XCJjdXJyZW50VXNlcigpPy51c2VybmFtZVwiIGljb249XCJwaSBwaS1zaWduLW91dFwiIGljb25Qb3M9XCJyaWdodFwiPjwvcC1idXR0b24+XG4gICAgICAgIDxwLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJMb2dpblwiIHJvdXRlckxpbms9XCIvYXV0aC9sb2dpblwiICpuZ0lmPVwiIWN1cnJlbnRVc2VyKCk/LnVzZXJuYW1lXCIgaWNvbj1cInBpIHBpLXNpZ24taW5cIiBpY29uUG9zPVwicmlnaHRcIj48L3AtYnV0dG9uPlxuICAgICAgICA8IS0tICAgICAgICA8cC1hdmF0YXIgaW1hZ2U9XCJodHRwczovL3ByaW1lZmFjZXMub3JnL2Nkbi9wcmltZW5nL2ltYWdlcy9kZW1vL2F2YXRhci9hbXllbHNuZXIucG5nXCIgc2hhcGU9XCJjaXJjbGVcIiAvPi0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLW1lbnViYXI+XG48L2Rpdj5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLDRCQUE0Qjs7O0FDQXJDLFNBQTRCLGtDQUFrQztBQUM5RCxTQUFRLGVBQWUsMkJBQTJCLDJCQUEwQjs7O0FDRDVFLFNBQXVCLGNBQWE7QUFFcEMsU0FBUSxjQUFhO0FBR2QsSUFBTSxZQUEyQixDQUFDLE9BQU8sVUFBUztBQUN2RCxNQUFJLGNBQWMsT0FBTyxXQUFXO0FBQ3BDLFFBQU0sU0FBUyxPQUFPLE1BQU07QUFDNUIsUUFBTSxRQUFRLGFBQWEsUUFBUSxPQUFPLEtBQUs7QUFDL0MsTUFBSSxPQUFPO0FBQ1QsV0FBTztFQUNULE9BQU87QUFDTCxXQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDMUIsV0FBTztFQUNUO0FBRUY7OztBQ2JPLElBQU0sU0FBaUI7RUFDNUI7SUFDRSxNQUFNO0lBQ04sY0FBYyxNQUFNLE9BQU8scUJBQW9CLEVBQUUsS0FBSyxPQUFLLEVBQUUsV0FBVzs7RUFFMUU7SUFDRSxNQUFNO0lBQ04sY0FBYyxNQUFNLE9BQU8scUJBQXNCLEVBQUUsS0FBSyxPQUFLLEVBQUUsWUFBWTtJQUMzRSxhQUFhLENBQUMsU0FBUzs7RUFFekI7SUFDRSxNQUFNO0lBQ04sY0FBYyxNQUFNLE9BQU8scUJBQThCLEVBQUUsS0FBSyxPQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZGLGFBQWEsQ0FBQyxTQUFTOztFQUV6QjtJQUNFLE1BQU07SUFDTixlQUFlLE1BQU0sT0FBTyxxQkFBdUI7O0VBRXJEO0lBQ0UsTUFBTTtJQUNOLFlBQVk7SUFDWixXQUFXOztFQUViO0lBQ0UsTUFBTTtJQUNOLFlBQVk7Ozs7O0FGekJoQixTQUFRLG1CQUFtQixXQUFXLHdCQUF1QjtBQUM3RCxTQUFRLDhCQUE2Qjs7O0FHSDlCLElBQU0sc0JBQXlDLENBQUMsS0FBSyxTQUFRO0FBQ2xF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