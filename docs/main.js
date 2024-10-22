"use strict";
(self["webpackChunkcookie_clicker_game"] = self["webpackChunkcookie_clicker_game"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5047);
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/game/game.component */ 9301);
/* harmony import */ var _pages_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ranking/ranking.component */ 6995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'game',
  component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__.GameComponent
}, {
  path: 'ranking',
  component: _pages_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_2__.RankingComponent
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  title = 'cookie-clicker-game';
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    consts: [[1, "app-container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  font-family: 'Verdana', sans-serif;\n  font-size: 16px;\n  background-color: #F4F7F5; \n\n  color: #2F4F4F; \n\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #2C3E50;\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 20px auto; \n\n  padding: 20px;\n  background-color: #E8F1F2; \n\n  border-radius: 20px; \n\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); \n\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid #D3D3D3;\n  width: 100%;\n  max-width: 500px; \n\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3D7E9A; \n\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 12px 24px;\n  margin: 20px 0;\n  border-radius: 10px;\n  border: none;\n  background-color: #3D7E9A; \n\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #28647A; \n\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #BDC3C7; \n\n  color: #7F8C8D;\n  cursor: not-allowed;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3D7E9A;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin: 15px 0;\n}\n  \n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLHlCQUF5QixFQUFFLHdCQUF3QjtFQUNuRCxjQUFjLEVBQUUsMEJBQTBCO0VBQzFDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFFLG1DQUFtQztFQUN0RCxhQUFhO0VBQ2IseUJBQXlCLEVBQUUsOEJBQThCO0VBQ3pELG1CQUFtQixFQUFFLHFDQUFxQztFQUMxRCwyQ0FBMkMsRUFBRSxpQkFBaUI7QUFDaEU7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQixFQUFFLDJCQUEyQjtFQUM3QyxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUIsRUFBRSxrQ0FBa0M7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QixFQUFFLGlDQUFpQztFQUM1RCxZQUFZO0VBQ1osZUFBZTtFQUNmLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLG9DQUFvQztFQUMvRCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxtQ0FBbUM7RUFDOUQsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcclxuICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y1OyAvKiBGb25kbyBuw4PCs3JkaWNvIHN1YXZlICovXHJcbiAgY29sb3I6ICMyRjRGNEY7IC8qIFRleHRvIG9zY3VybyB5IG5ldXRybyAqL1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaDEsIGgyLCBoMyB7XHJcbiAgY29sb3I6ICMyQzNFNTA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87IC8qIE1hcmdpbiBnZW5lcmFsIGRlIGxhcyB0YXJqZXRhcyAqL1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RjFGMjsgLyogRm9uZG8gc3VhdmUgcGFyYSB0YXJqZXRhcyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIEJvcmRlcyByZWRvbmRlYWRvcyBwYXJhIHRhcmpldGFzICovXHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU29tYnJhIHN1YXZlICovXHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7IC8qIExpbWl0YXIgYW5jaG8gZGUgaW5wdXQgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM0Q3RTlBOyAvKiBDb2xvciBkZSBib3JkZSBhbCBoYWNlciBmb2N1cyAqL1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEN0U5QTsgLyogQ29sb3IgcHJpbmNpcGFsIHBhcmEgYm90b25lcyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODY0N0E7IC8qIENvbG9yIG3Dg8KhcyBvc2N1cm8gYWwgaGFjZXIgaG92ZXIgKi9cclxuICBib3gtc2hhZG93OiAwcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQzNDNzsgLyogQm90w4PCs24gZGVzaGFiaWxpdGFkbyBncmlzIGNsYXJvICovXHJcbiAgY29sb3I6ICM3RjhDOEQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjM0Q3RTlBO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG4gIFxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5047);
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/game/game.component */ 9301);
/* harmony import */ var _services_game_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/game/game.service */ 6571);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user/user.service */ 3273);
/* harmony import */ var _pages_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ranking/ranking.component */ 6995);
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/button/button.component */ 2262);
/* harmony import */ var _shared_row_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/row/row.component */ 852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [_services_game_game_service__WEBPACK_IMPORTED_MODULE_4__.GameService, _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__.GameComponent, _pages_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_6__.RankingComponent, _shared_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _shared_row_row_component__WEBPACK_IMPORTED_MODULE_8__.RowComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
  });
})();

/***/ }),

/***/ 9301:
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameComponent: () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_game_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game/game.service */ 6571);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ 3273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/button/button.component */ 2262);






function GameComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("buttonClick", function GameComponent_div_6_Template_app_button_buttonClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.buyAutoClicker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "Compra autoclickers (Cost: " + ctx_r0.autoClickerCost + ")")("disabled", ctx_r0.points < ctx_r0.autoClickerCost)("styleClass", "auto-clicker-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You own ", ctx_r0.autoClickers, " AutoClickers");
  }
}
class GameComponent {
  gameService;
  userService;
  router;
  username = '';
  points = 0;
  autoClickers = 0;
  autoClickerCost = 50;
  autoclikersStop = 0;
  interval;
  autoClickersRunning = 0;
  constructor(gameService, userService, router) {
    this.gameService = gameService;
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {
    this.username = this.userService.getUsername();
    const savedState = this.userService.getPlayerState(this.username);
    if (savedState) {
      this.points = savedState.points;
      this.autoClickers = savedState.autoClickers;
      this.updateAutoClickerCost();
    }
  }
  updateAutoClickerCost() {
    this.autoClickerCost = 50 * (this.autoClickers + 1);
  }
  addPoint() {
    this.points++;
    this.gameService.updatePoints(this.username, this.points);
  }
  buyAutoClicker() {
    if (this.points >= this.autoClickerCost && this.autoClickersRunning === 0) {
      this.points -= this.autoClickerCost;
      this.autoclikersStop = this.autoClickerCost;
      this.autoClickers++;
      this.updateAutoClickerCost();
      this.gameService.updatePoints(this.username, this.points);
      this.gameService.updateAutoClickers(this.username, this.autoClickers);
      this.autoClickersRunning = this.autoClickers;
      this.startAutoClickerPoints(this.autoclikersStop);
    }
  }
  startAutoClickerPoints(autoClickerStop) {
    let pointsGenerated = 0;
    const pointsPerClicker = this.autoClickers;
    this.interval = setInterval(() => {
      this.points += pointsPerClicker;
      this.gameService.updatePoints(this.username, this.points);
      pointsGenerated += pointsPerClicker;
      if (pointsGenerated >= autoClickerStop) {
        clearInterval(this.interval);
        this.autoClickersRunning = 0;
      }
    }, 100);
  }
  exitGame() {
    clearInterval(this.interval);
    this.router.navigate(['/']);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  static ɵfac = function GameComponent_Factory(t) {
    return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_game_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GameComponent,
    selectors: [["app-game"]],
    decls: 8,
    vars: 7,
    consts: [[1, "game-container"], ["aria-live", "polite"], [3, "text", "styleClass", "buttonClick"], [4, "ngIf"], [3, "text", "disabled", "styleClass", "buttonClick"]],
    template: function GameComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("buttonClick", function GameComponent_Template_app_button_buttonClick_5_listener() {
          return ctx.addPoint();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GameComponent_div_6_Template, 4, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("buttonClick", function GameComponent_Template_app_button_buttonClick_7_listener() {
          return ctx.exitGame();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Hola, ", ctx.username, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Marcador: ", ctx.points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "Genera puntos")("styleClass", "click-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.points >= 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "Salir")("styleClass", "exit-btn");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent],
    styles: [".game-container[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 20px;\n  padding: 40px;\n  margin: 20px auto;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); \n\n  max-width: 800px; \n\n  text-align: center;\n}\n\n.score[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #2F4F4F;\n  margin: 20px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 12px 24px;\n  border-radius: 10px;\n  border: none;\n  background-color: #3D7E9A;\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #28647A;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #BDC3C7;\n  color: #7F8C8D;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkNBQTJDLEVBQUUsaUJBQWlCO0VBQzlELGdCQUFnQixFQUFFLG9DQUFvQztFQUN0RCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb21icmEgc3VhdmUgKi9cclxuICBtYXgtd2lkdGg6IDgwMHB4OyAvKiBMaW1pdGFyIGVsIGFuY2hvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2NvcmUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzJGNEY0RjtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEN0U5QTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2NDdBO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCREMzQzc7XHJcbiAgY29sb3I6ICM3RjhDOEQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user/user.service */ 3273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/button/button.component */ 2262);






function HomeComponent_app_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("buttonClick", function HomeComponent_app_button_5_Template_app_button_buttonClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showRanking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Ranking")("disabled", !ctx_r0.hasPlayers)("styleClass", "ranking-btn");
  }
}
class HomeComponent {
  router;
  userService;
  username = '';
  hasPlayers = false;
  constructor(router, userService) {
    this.router = router;
    this.userService = userService;
  }
  ngOnInit() {
    this.checkForPlayers();
  }
  startGame() {
    if (this.username.trim()) {
      this.userService.setUsername(this.username);
      this.router.navigate(['/game']);
    }
  }
  checkForPlayers() {
    this.hasPlayers = Object.keys(this.userService.getPlayers()).length > 1;
  }
  showRanking() {
    if (this.hasPlayers) {
      this.router.navigate(['/ranking']);
    }
  }
  static ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 6,
    vars: 5,
    consts: [[1, "home-container"], ["type", "text", "placeholder", "Introduzca su nombre", 1, "name-input", 3, "ngModel", "ngModelChange"], [3, "text", "disabled", "styleClass", "buttonClick"], [3, "text", "disabled", "styleClass", "buttonClick", 4, "ngIf"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Bienvenido al juego!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("buttonClick", function HomeComponent_Template_app_button_buttonClick_4_listener() {
          return ctx.startGame();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeComponent_app_button_5_Template, 1, 3, "app-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Comienza el juego")("disabled", !ctx.username.trim())("styleClass", "start-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasPlayers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent],
    styles: [".home-container[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 20px;\n  padding: 40px;\n  margin: 20px auto;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  text-align: center;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid #D3D3D3;\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n}\n\n.name-input[_ngcontent-%COMP%]:focus {\n  border-color: #3D7E9A;\n  outline: none;\n}\n\n.start-btn[_ngcontent-%COMP%], .ranking-btn[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 300px;\n  padding: 15px;\n}\n\n.ranking-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.start-btn[_ngcontent-%COMP%]:disabled, .ranking-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #BDC3C7;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmFtZS1pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5uYW1lLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMzRDdFOUE7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnN0YXJ0LWJ0biwgLnJhbmtpbmctYnRuIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnJhbmtpbmctYnRuIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhcnQtYnRuOmRpc2FibGVkLCAucmFua2luZy1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCREMzQzc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6995:
/*!****************************************************!*\
  !*** ./src/app/pages/ranking/ranking.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RankingComponent: () => (/* binding */ RankingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user/user.service */ 3273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/button/button.component */ 2262);
/* harmony import */ var _shared_row_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/row/row.component */ 852);






function RankingComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 3);
  }
  if (rf & 2) {
    const player_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rank", i_r2 + 1)("username", player_r1.username)("score", player_r1.score);
  }
}
class RankingComponent {
  userService;
  router;
  ranking = [];
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {
    this.ranking = this.userService.getRanking().sort((a, b) => b.score - a.score);
  }
  goBack() {
    this.router.navigate(['/']);
  }
  static ɵfac = function RankingComponent_Factory(t) {
    return new (t || RankingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RankingComponent,
    selectors: [["app-ranking"]],
    decls: 16,
    vars: 3,
    consts: [[1, "ranking-container"], ["app-row", "", 3, "rank", "username", "score", 4, "ngFor", "ngForOf"], [3, "text", "styleClass", "buttonClick"], ["app-row", "", 3, "rank", "username", "score"]],
    template: function RankingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ranking de jugadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table")(4, "thead")(5, "tr")(6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Jugador");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Puntuaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RankingComponent_tr_13_Template, 1, 3, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "app-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("buttonClick", function RankingComponent_Template_app_button_buttonClick_15_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ranking);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", "Volver a inicio")("styleClass", "ranking-btn");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _shared_row_row_component__WEBPACK_IMPORTED_MODULE_2__.RowComponent],
    styles: [".ranking-container[_ngcontent-%COMP%] {\n  background-color: #F4F7F5;\n  border-radius: 20px;\n  padding: 30px;\n  margin: 20px auto;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  border-bottom: 1px solid #D3D3D3;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #B0C4C7;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #2F4F4F;\n}\n\ntd[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #2F4F4F;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FFFFFF;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #D3E4E6;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #2C3E50;\n  color: #FFFFFF;\n  padding: 12px 24px;\n  margin-top: 20px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #1C2E40;\n}\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmFua2luZy9yYW5raW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmtpbmctY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0Y1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0QzRDM7XHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBDNEM3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAjMkY0RjRGO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICMyRjRGNEY7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxudHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0U0RTY7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDM0U1MDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMkU0MDtcclxufVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6571:
/*!***********************************************!*\
  !*** ./src/app/services/game/game.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameService: () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class GameService {
  playersState = {};
  updatePoints(username, points) {
    const player = this.getPlayerState(username);
    player.points = points;
    this.savePlayerState(username, player);
  }
  updateAutoClickers(username, autoClickers) {
    const player = this.getPlayerState(username);
    player.autoClickers = autoClickers;
    this.savePlayerState(username, player);
  }
  getPlayerState(username) {
    return this.playersState[username] || {
      points: 0,
      autoClickers: 0
    };
  }
  savePlayerState(username, state) {
    this.playersState[username] = state;
    localStorage.setItem('playersState', JSON.stringify(this.playersState));
  }
  loadStateFromStorage() {
    const savedState = localStorage.getItem('playersState');
    if (savedState) {
      this.playersState = JSON.parse(savedState);
    }
  }
  static ɵfac = function GameService_Factory(t) {
    return new (t || GameService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GameService,
    factory: GameService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3273:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class UserService {
  username = '';
  rankingKey = 'playersState';
  setUsername(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }
  getUsername() {
    return localStorage.getItem('username') || '';
  }
  getPlayerState(username) {
    const playersState = localStorage.getItem('playersState');
    if (playersState) {
      const state = JSON.parse(playersState);
      return state[username] || null;
    }
    return null;
  }
  savePlayerState(username, state) {
    const playersState = JSON.parse(localStorage.getItem('playersState') || '{}');
    playersState[username] = state;
    localStorage.setItem('playersState', JSON.stringify(playersState));
  }
  logout() {
    localStorage.removeItem('username');
  }
  getRanking() {
    const playersState = localStorage.getItem(this.rankingKey);
    if (playersState) {
      const players = JSON.parse(playersState);
      return Object.keys(players).map(username => ({
        username,
        score: players[username].points
      })).sort((a, b) => b.score - a.score);
    }
    return [];
  }
  getPlayers() {
    const players = localStorage.getItem('playersState');
    return players ? JSON.parse(players) : [];
  }
  static ɵfac = function UserService_Factory(t) {
    return new (t || UserService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2262:
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ButtonComponent {
  text = 'Button';
  disabled = false;
  type = 'button';
  styleClass = '';
  buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
  static ɵfac = function ButtonComponent_Factory(t) {
    return new (t || ButtonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ButtonComponent,
    selectors: [["app-button"]],
    inputs: {
      text: "text",
      disabled: "disabled",
      type: "type",
      styleClass: "styleClass"
    },
    outputs: {
      buttonClick: "buttonClick"
    },
    decls: 2,
    vars: 5,
    consts: [[3, "disabled", "type", "click"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
      }
    },
    styles: ["button[_ngcontent-%COMP%] {\n  font-family: 'Verdana', sans-serif;\n  padding: 10px 20px;\n  margin: 10px 0;\n  border-radius: 5px;\n  border: none;\n  background-color: #3D7E9A; \n\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #28647A;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #BDC3C7; \n\n  color: #7F8C8D;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsd0JBQXdCO0VBQ25ELGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNEN0U5QTsgLyogQm90w4PCs24gaGFiaWxpdGFkbyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjQ3QTtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRDM0M3OyAvKiBCb3TDg8KzbiBkZXNoYWJpbGl0YWRvICovXHJcbiAgY29sb3I6ICM3RjhDOEQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 852:
/*!*********************************************!*\
  !*** ./src/app/shared/row/row.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowComponent: () => (/* binding */ RowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

const _c0 = ["app-row", ""];
class RowComponent {
  rank = 0;
  username = '';
  score = 0;
  static ɵfac = function RowComponent_Factory(t) {
    return new (t || RowComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RowComponent,
    selectors: [["", "app-row", ""]],
    inputs: {
      rank: "rank",
      username: "username",
      score: "score"
    },
    attrs: _c0,
    decls: 6,
    vars: 3,
    template: function RowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rank);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);
      }
    },
    styles: ["tr[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Jvdy9yb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsidHIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map