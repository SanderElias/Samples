# Angular v21+ Features and Breaking Changes
> Generated from angular/angular `CHANGELOG.md` (main branch).
> Only releases from v21 and later are included.
> Summary: 101 new features, 43 breaking changes, 0 stable promotions.

## New features since v21

### 22.0.0-next.11(2026-05-06)

- [b8d3f36ed9](https://github.com/angular/angular/commit/b8d3f36ed9) — add support for Node.js 26.0.0
- [2eae497a04](https://github.com/angular/angular/commit/2eae497a04) — support external TCBs with copied content in specific mode
- [3b0ae5fef0](https://github.com/angular/angular/commit/3b0ae5fef0) — add `provideWebMcpTools`
- [5a7c1e62dc](https://github.com/angular/angular/commit/5a7c1e62dc) — add ability to cache resources for SSR
- [ef1810197b](https://github.com/angular/angular/commit/ef1810197b) — export experimental `declareWebMcpTool` support
- [7745365910](https://github.com/angular/angular/commit/7745365910) — graduate signal forms APIs to public API
- [c84642ac16](https://github.com/angular/angular/commit/c84642ac16) — add unmatchedInputBehavior option to componentInputBinding

### 22.0.0-next.10(2026-04-29)

- [2896c93cc1](https://github.com/angular/angular/commit/2896c93cc1) — Angular expressions with optional chaining returns `undefined`
- [444b024d49](https://github.com/angular/angular/commit/444b024d49) — Add a `injectAsync` helper function
- [8f8972b0fd](https://github.com/angular/angular/commit/8f8972b0fd) — model + output migrations

### 22.0.0-next.6(2026-04-01)

- [682aaf943f](https://github.com/angular/angular/commit/682aaf943f) — add strictTemplates to tsconfig during ng update

### 21.2.2(2026-03-09)

- [670d1660c4](https://github.com/angular/angular/commit/670d1660c4) — add 'blur' option to debounce rule

### 22.0.0-next.1(2026-03-05)

- [c767d678cf](https://github.com/angular/angular/commit/c767d678cf) — add 'blur' option to debounce rule

### 22.0.0-next.0(2026-03-04)

- [17d3ea44e2](https://github.com/angular/angular/commit/17d3ea44e2) — add `IdleRequestOptions` support to `IdleService`
- [3bc095d508](https://github.com/angular/angular/commit/3bc095d508) — Add a schematics to migrate `provideHttpClient` to keep using the `HttpXhrBackend` implementation.
- [cb4cb77053](https://github.com/angular/angular/commit/cb4cb77053) — Add migration to add `ChangeDetectionStrategy.Eager` where applicable
- [2206efa55f](https://github.com/angular/angular/commit/2206efa55f) — add special return statuses for resource params
- [246a984a5d](https://github.com/angular/angular/commit/246a984a5d) — add TestBed.getFixture
- [a5981b83a6](https://github.com/angular/angular/commit/a5981b83a6) — support customization of @defer's on idle behavior
- [98eb24cea0](https://github.com/angular/angular/commit/98eb24cea0) — Support optional timeout for idle deferred triggers
- [5c432fb8bb](https://github.com/angular/angular/commit/5c432fb8bb) — Use `FetchBackend` as default for the `HttpBackend` implementation
- [c6f98c723c](https://github.com/angular/angular/commit/c6f98c723c) — Add support for idle timeout in defer blocks
- [3683902234](https://github.com/angular/angular/commit/3683902234) — adds browserUrl input support to router links

### 21.2.0(2026-02-25)

- [18003a33bb](https://github.com/angular/angular/commit/18003a33bb) — add an 'outlet' injector option for ngTemplateOutlet
- [8bbe6dc46c](https://github.com/angular/angular/commit/8bbe6dc46c) — Add Location strategies to manage trailing slash on write
- [51cc914807](https://github.com/angular/angular/commit/51cc914807) — support height in ImageLoaderConfig and built-in loaders
- [72534e2a34](https://github.com/angular/angular/commit/72534e2a34) — Add support for the `instanceof` binary operator
- [95b3f37d4a](https://github.com/angular/angular/commit/95b3f37d4a) — Exhaustive checks for switch blocks
- [04ba09a8d9](https://github.com/angular/angular/commit/04ba09a8d9) — support `AstVisitor.visitEmptyExpr()`
- [8d5210c9fe](https://github.com/angular/angular/commit/8d5210c9fe) — add ChangeDetectionStrategy.Eager alias for Default
- [92d2498910](https://github.com/angular/angular/commit/92d2498910) — add host node to DeferBlockData ([#66546](https://github.com/angular/angular/pull/66546))
- [ea2016a6dc](https://github.com/angular/angular/commit/ea2016a6dc) — add support for nested animations
- [81cabc1477](https://github.com/angular/angular/commit/81cabc1477) — add support for TypeScript 6
- [1ba9b7ac50](https://github.com/angular/angular/commit/1ba9b7ac50) — resource composition via snapshots
- [d9923b72a2](https://github.com/angular/angular/commit/d9923b72a2) — support arrow functions in expressions
- [f56bb07d83](https://github.com/angular/angular/commit/f56bb07d83) — add field param to submit action and onInvalid
- [ba009b6031](https://github.com/angular/angular/commit/ba009b6031) — add form directive
- [22afbb2f36](https://github.com/angular/angular/commit/22afbb2f36) — add parsing support to native inputs ([#66917](https://github.com/angular/angular/pull/66917))
- [95c386469c](https://github.com/angular/angular/commit/95c386469c) — Add passing focus options to form field
- [95ecce8334](https://github.com/angular/angular/commit/95ecce8334) — allow setting submit options at form-level
- [ebae211add](https://github.com/angular/angular/commit/ebae211add) — introduce parse errors in signal forms
- [3937afc316](https://github.com/angular/angular/commit/3937afc316) — introduce SignalFormControl for Reactive Forms compatibility
- [30f0914754](https://github.com/angular/angular/commit/30f0914754) — support binding null to number input ([#66917](https://github.com/angular/angular/pull/66917))
- [dd208ca259](https://github.com/angular/angular/commit/dd208ca259) — update submit function to accept options object
- [ebc90c26f5](https://github.com/angular/angular/commit/ebc90c26f5) — Add completions and hover info for inline styles
- [26fd0839c3](https://github.com/angular/angular/commit/26fd0839c3) — Add folding range support for inline styles
- [573aadef7e](https://github.com/angular/angular/commit/573aadef7e) — Add quick info for inline styles
- [6fb39d9b62](https://github.com/angular/angular/commit/6fb39d9b62) — Support client-side file watching via `onDidChangeWatchedFiles`
- [496967e7b1](https://github.com/angular/angular/commit/496967e7b1) — add JSON schema for angularCompilerOptions
- [8c21866f49](https://github.com/angular/angular/commit/8c21866f49) — add linked editing ranges for HTML tag synchronization
- [b51bab583d](https://github.com/angular/angular/commit/b51bab583d) — Add partial ActivatedRouteSnapshot information to `canMatch` params
- [cf9620f7d0](https://github.com/angular/angular/commit/cf9620f7d0) — Make match options optional in isActive
- [907a94dcec](https://github.com/angular/angular/commit/907a94dcec) — Update `IsActiveMatchOptions` APIs to accept a Partial

### 21.1.4(2026-02-11)

- [0d1acd0165](https://github.com/angular/angular/commit/0d1acd0165) — support signal-based schemas in validateStandardSchema

### 21.1.1(2026-01-21)

- [d89a80a970](https://github.com/angular/angular/commit/d89a80a970) — Ability to manually register a form field binding in signal forms

### 21.1.0(2026-01-14)

- [d8790972be](https://github.com/angular/angular/commit/d8790972be) — Add custom transformations for Cloudflare and Cloudinary image loaders
- [a6b8cb68af](https://github.com/angular/angular/commit/a6b8cb68af) — support custom transformations in ImageKit and Imgix loaders
- [640693da8e](https://github.com/angular/angular/commit/640693da8e) — Add support for multiple swich cases matching
- [99ad18a4ee](https://github.com/angular/angular/commit/99ad18a4ee) — Add stability debugging utility
- [a0dfa5fa86](https://github.com/angular/angular/commit/a0dfa5fa86) — support rest arguments in function calls
- [6e18fa8bc9](https://github.com/angular/angular/commit/6e18fa8bc9) — support spread elements in array literals
- [e407280ab5](https://github.com/angular/angular/commit/e407280ab5) — support spread expressions in object literals
- [1ea5c97703](https://github.com/angular/angular/commit/1ea5c97703) — allow focusing bound control from field state
- [ec9dc94cee](https://github.com/angular/angular/commit/ec9dc94cee) — add `context` to `createApplication`
- [ab67988d2e](https://github.com/angular/angular/commit/ab67988d2e) — resolve JIT resources in `createApplication`
- [5edceffd04](https://github.com/angular/angular/commit/5edceffd04) — add controls for route cleanup
- [a03c82564d](https://github.com/angular/angular/commit/a03c82564d) — Add scroll behavior controls on router navigation
- [e44839b016](https://github.com/angular/angular/commit/e44839b016) — Add standalone function to create a comptued for isActive
- [c25d749d85](https://github.com/angular/angular/commit/c25d749d85) — Execute RunGuardsAndResolvers function in injection context
- [1c00ab42f8](https://github.com/angular/angular/commit/1c00ab42f8) — extend paramters of RedirectFunction to include paramMap and queryParamMap
- [7003e8d241](https://github.com/angular/angular/commit/7003e8d241) — Publish Router's integration with platform Navigation API as experimental
- [c84d372778](https://github.com/angular/angular/commit/c84d372778) — Support wildcard params with segments trailing ([#64737](https://github.com/angular/angular/pull/64737))

### 21.0.7(2026-01-07)

- [e3fba182f9](https://github.com/angular/angular/commit/e3fba182f9) — add `[formField]` directive

### 21.0.4(2025-12-10)

- [f254ff4f2e](https://github.com/angular/angular/commit/f254ff4f2e) — expose element on signal forms `Field` directive
- [5880fbc73c](https://github.com/angular/angular/commit/5880fbc73c) — redo the signal forms metadata API

### 21.0.3(2025-12-03)

- [6b4ab876e8](https://github.com/angular/angular/commit/6b4ab876e8) — Allows transforms on `FormUiControl` signals

### 21.0.1(2025-11-25)

- [7d5c7cf99a](https://github.com/angular/angular/commit/7d5c7cf99a) — add DI option for classes on `Field` directive

### 21.0.0(2025-11-19)

- [c795960ada](https://github.com/angular/angular/commit/c795960ada) — Add experimental support for the Navigation API ([#63406](https://github.com/angular/angular/pull/63406))
- [9eac43cf46](https://github.com/angular/angular/commit/9eac43cf46) — Support of optional keys for the KeyValue pipe ([#48814](https://github.com/angular/angular/pull/48814))
- [a1868c9d13](https://github.com/angular/angular/commit/a1868c9d13) — update to cldr 47 ([#64032](https://github.com/angular/angular/pull/64032))
- [563dbd998c](https://github.com/angular/angular/commit/563dbd998c) — Adds diagnostic for misconfigured `@defer` triggers ([#64069](https://github.com/angular/angular/pull/64069))
- [0571b335b9](https://github.com/angular/angular/commit/0571b335b9) — enable type checking of host bindings by default ([#63654](https://github.com/angular/angular/pull/63654))
- [809a4ed8c1](https://github.com/angular/angular/commit/809a4ed8c1) — Add migration for zoneless by default. ([#63042](https://github.com/angular/angular/pull/63042))
- [2a7a5de53f](https://github.com/angular/angular/commit/2a7a5de53f) — Allow passing application providers in `bootstrapModule` options ([#64354](https://github.com/angular/angular/pull/64354))
- [28926ba92c](https://github.com/angular/angular/commit/28926ba92c) — introduce `BootstrapContext` for improved server bootstrapping ([#63562](https://github.com/angular/angular/pull/63562))
- [c2d376b85a](https://github.com/angular/angular/commit/c2d376b85a) — make SimpleChanges generic ([#64535](https://github.com/angular/angular/pull/64535))
- [ad2376435b](https://github.com/angular/angular/commit/ad2376435b) — support IntersectionObserver options in viewport triggers ([#64130](https://github.com/angular/angular/pull/64130))
- [539717f58a](https://github.com/angular/angular/commit/539717f58a) — support regular expressions in templates ([#63887](https://github.com/angular/angular/pull/63887))
- [a278ee358c](https://github.com/angular/angular/commit/a278ee358c) — add `debounce()` rule for signal forms
- [b8314bd340](https://github.com/angular/angular/commit/b8314bd340) — add experimental signal-based forms ([#63408](https://github.com/angular/angular/pull/63408))
- [0dd95c503f](https://github.com/angular/angular/commit/0dd95c503f) — Add FormArrayDirective ([#55880](https://github.com/angular/angular/pull/55880))
- [d201cd2c2b](https://github.com/angular/angular/commit/d201cd2c2b) — Prevents marking fields as touched/dirty when state is hidden/readonly/disabled ([#63633](https://github.com/angular/angular/pull/63633))
- [2739b7975b](https://github.com/angular/angular/commit/2739b7975b) — add referrerPolicy option to HttpResource ([#64283](https://github.com/angular/angular/pull/64283))
- [07e678872f](https://github.com/angular/angular/commit/07e678872f) — Add reponseType property to HttpResponse and HttpErrorResponse ([#63043](https://github.com/angular/angular/pull/63043))
- [5cbdefcf11](https://github.com/angular/angular/commit/5cbdefcf11) — add support for fetch referrerPolicy option in HttpClient ([#64116](https://github.com/angular/angular/pull/64116))
- [4bed062bc9](https://github.com/angular/angular/commit/4bed062bc9) — Provide http services in root ([#56212](https://github.com/angular/angular/pull/56212))
- [6ddb250391](https://github.com/angular/angular/commit/6ddb250391) — add migration to convert ngClass to use class ([#62983](https://github.com/angular/angular/pull/62983))
- [8dc8914c8a](https://github.com/angular/angular/commit/8dc8914c8a) — add migration to convert ngStyle to use style ([#63517](https://github.com/angular/angular/pull/63517))
- [861cee34e0](https://github.com/angular/angular/commit/861cee34e0) — Adds migration for deprecated router testing module ([#64217](https://github.com/angular/angular/pull/64217))
- [75fc16b261](https://github.com/angular/angular/commit/75fc16b261) — Adds support for CommonModule to standalone migration ([#64138](https://github.com/angular/angular/pull/64138))
- [4e0fc81491](https://github.com/angular/angular/commit/4e0fc81491) — convert `lastSuccessfulNavigation` to signal ([#63057](https://github.com/angular/angular/pull/63057))

## Breaking changes since v21

### 22.0.0-rc.1(2026-05-20)

- router: The return type for `TitleStrategy.getResolvedTitleForRoute` was previously 'any' while the actual return type could only be either `string` or `undefined`. The return type now reflects the possible values correctly. Code that reads the value may need to be adjusted. (cherry picked from commit ad37f52c1212164c51ffcc533067af05c2c33c89)

### 22.0.0-next.11(2026-05-06)

- forms: `min` and `max` validation rules no longer support string values. Bound values must be numbers or null.

### 22.0.0-next.9(2026-04-22)

- router: paramsInheritanceStrategy now defaults to 'always' The default value of paramsInheritanceStrategy has been changed from 'emptyOnly' to 'always'. This means that route parameters are inherited from all parent routes by default. To restore the previous behavior, set paramsInheritanceStrategy to 'emptyOnly' in your router configuration.

### 22.0.0-next.8(2026-04-15)

- compiler: This change will trigger the `nullishCoalescingNotNullable` and `optionalChainNotNullable` diagnostics on existing projects. You might want to disable those 2 diagnotiscs in your `tsconfig` temporarily.

### 22.0.0-next.7(2026-04-08)

- core: The second argument of appRef.bootstrap does not accept `any` anymore. Make sure the element you pass is not nullable.
- core: * TypeScript versions older than 6.0 are no longer supported.
- core: `ComponentFactoryResolver` and `ComponentFactory` are no longer available. Pass the component class directly to APIs that previously required a factory, such as `ViewContainerRef.createComponent` or use the standalone `createComponentFunction`.
- core: `ComponentFactoryResolver` and `ComponentFactory` are no longer available. Pass the component class directly to APIs that previously required a factory, such as `ViewContainerRef.createComponent` or use the standalone `createComponent` function.
- platform-browser: This removes styles when they appear to no longer be used by an associated `host`. However other DOM on the page may still be affected by those styles if not leveraging `ViewEncapsulation.Emulated` or if those styles are used by elements outside of Angular, potentially causing other DOM to appear unstyled.
- router: The `currentSnapshot` parameter in `CanMatchFn` and the `canMatch` method of the `CanMatch` interface is now required. While this was already the behavior of the Router at runtime, existing class implementations of `CanMatch` must now include the third argument to satisfy the interface.

### 22.0.0-next.5(2026-03-25)

- compiler-cli: Elements with multiple matching selectors will now throw at compile time.
- core: Component with undefined `changeDetection` property are now `OnPush` by default. Specify `changeDetection: ChangeDetectionStrategy.Eager` to keep the previous behavior.
- platform-browser: Hammer.js integration has been removed. Use your own implementation.

### 22.0.0-next.4(2026-03-18)

- core: Leave animations are no longer limited to the element being removed.
- core: `ChangeDetectorRef.checkNoChanges` was removed. In tests use `fixture.detectChanges()` instead.

### 22.0.0-next.2(2026-03-11)

- core: `createNgModuleRef` was removed, use `createNgModule` instead

### 21.1.6(2026-02-25)

- core: Angular now only applies known attributes from HTML in translated ICU content. Unknown attributes are dropped and not rendered. (cherry picked from commit 306f367899dfc2e04238fecd3455547b5d54075d)

### 21.0.6(2025-12-17)

- forms: The shape of `SignalFormsConfig.classes` has changed Previously each function in the `classes` map took a `FieldState`. Now it takes a `Field` directive. For example if you previously had: ``` provideSignalFormsConfig({ classes: { 'my-valid': (state) => state.valid() } }) ``` You would need to update to: ``` provideSignalFormsConfig({ classes: { 'my-valid': ({state}) => state().valid() } }) ``` (cherry picked from commit 348f149e8b06d6885f54bac4cf03a9481a8b19b7)
- forms: (cherry picked from commit ae0c59028a2f393ea5716bf222db2c38e7a3989f)

### 21.0.0(2025-11-19)

- common: (test only) - `TestBed` now provides a fake `PlatformLocation` implementation that supports the Navigation API. This may break some tests, though we have not observed any failures internally. You can revert to the old default for `TestBed` by providing the `MockPlatformLocation` from `@angular/common/testing` in your providers: `{provide: PlatformLocation, useClass: MockPlatformLocation}`
- common: `ngComponentOutletContent` is now of type `Node[][] | undefined` instead of `any[][] | undefined`.
- common: NgModuleFactory has been removed, use NgModule instead.
- compiler-cli: - Previously hidden type issues in host bindings may show up in your builds. Either resolve the type issues or set `"typeCheckHostBindings": false` in the `angularCompilerOptions` section of your tsconfig.
- compiler-cli: The Angular compiler now produces an error when the the `emitDeclarationOnly` TS compiler option is enabled as this mode is not supported.
- core: The server-side bootstrapping process has been changed to eliminate the reliance on a global platform injector. Before: ```ts const bootstrap = () => bootstrapApplication(AppComponent, config); ``` After: ```ts const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context); ``` A schematic is provided to automatically update `main.server.ts` files to pass the `BootstrapContext` to the `bootstrapApplication` call. In addition, `getPlatform()` and `destroyPlatform()` will now return `null` and be a no-op respectively when running in a server environment.
- core: Using a combination of `provideZoneChangeDetection` while also removing ZoneJS polyfills will no longer result in the internal scheduler being disabled. All Angular applications now consistently use the same scheduler, and those with the Zone change detection provider include additional automatic scheduling behaviors based on NgZone stabilization.
- core: - TypeScript versions less than 5.9 are no longer supported.
- core: (test only) - Using `provideZoneChangeDetection` in the TestBed providers would previously prevent `TestBed` from rethrowing errors as it should. Errors in the test will now be rethrown, regardless of the usage of `provideZoneChangeDetection`. Tests should be adjusted to prevent or account for these errors. As in previous major versions, this behavior can be disabled with `rethrowApplicationErrors: false` in `configureTestingModule` as a last resort.
- core: `ignoreChangesOutsideZone` is no longer available as an option for configuring ZoneJS change detection behavior.
- core: Angular no longer provides a change detection scheduler for ZoneJS-based change detection by default. Add `provideZoneChangeDetection` to the providers of your `bootstrapApplication` function or your `AppModule` (if using `bootstrapModule`). This provider addition will be covered by an automated migration.
- core: `moduleId` was removed from `Component` metadata.
- core: The `interpolation` option on Components has been removed. Only the default `{{ ... }}` is now supported.
- elements: Fix signal input getter behavior in custom elements. Before this change, signal inputs in custom elements required function calls to access their values (`elementRef.newInput()`), while decorator inputs were accessed directly (`elementRef.oldInput`). This inconsistency caused confusion and typing difficulties. The getter behavior has been standardized so signal inputs can now be accessed directly, matching the behavior of decorator inputs: Before:
- elements: Decorator Input: `elementRef.oldInput`
- elements: Signal Input: `elementRef.newInput()` After:
- elements: Decorator Input: `elementRef.oldInput`
- elements: Signal Input: `elementRef.newInput`
- forms: This new directive will conflict with existing FormArray directives or formArray inputs on the same element.
- platform-browser: The deprecated `ApplicationConfig` export from `@angular/platform-browser` has been removed. Please import `ApplicationConfig` from `@angular/core` instead.
- router: `lastSuccessfulNavigation` is now a signal and needs to be invoked
- router: Router navigations may take several additional microtasks to complete. Tests have been found to often be highly dependent on the exact timing of navigation completions with respect to the microtask queue. The most common fix for tests is to ensure all navigations have been completed before making assertions. On rare occasions, this can also affect production applications. This can be caused by multiple subscriptions to router state throughout the application, both of which trigger navigations that happened to not conflict with the previous timing.
- upgrade: `UpgradeAdapter` is no longer available. Use `upgrade/static` instead
- zone.js: IE/Non-Chromium Edge are not supported anymore.
