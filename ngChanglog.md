<a name="22.0.0-rc.2"></a>
# 22.0.0-rc.2 (2026-05-28)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [ae2cb00398](https://github.com/angular/angular/commit/ae2cb00398954d9332e9f1f5abecce902cfc7658) | fix | add upper bounds for digitsInfo |
| [7d1fbc170a](https://github.com/angular/angular/commit/7d1fbc170a90ca12a3c1b805645bc37d12ed744d) | fix | sanitize placeholder |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [ab9154ab75](https://github.com/angular/angular/commit/ab9154ab75bdd36759c77917216b57285b243ea4) | fix | normalize tag names with custom namespaces in DomElementSchemaRegistry ([#68868](https://github.com/angular/angular/pull/68868)) |
| [94d520fb67](https://github.com/angular/angular/commit/94d520fb671fc7774341947b872ed0e387689db9) | fix | prevent namespaced SVG <style> elements from being stripped |
| [6ff620a033](https://github.com/angular/angular/commit/6ff620a03364d6ab60cea47de942a04ec5a26c50) | fix | sanitize dynamic href and xlink:href bindings on SVG a elements ([#68868](https://github.com/angular/angular/pull/68868)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [61a48e99aa](https://github.com/angular/angular/commit/61a48e99aad1152e9ffb2fd0b4e1b472f06649e8) | fix | do not register dom triggers when defer blocks are in manual mode |
| [a08e4fb93c](https://github.com/angular/angular/commit/a08e4fb93c371252da16b3b22cbf78f4ac180fa2) | fix | normalize tag names in runtime i18n attribute security context lookup ([#68868](https://github.com/angular/angular/pull/68868)) |
| [b20f0fe078](https://github.com/angular/angular/commit/b20f0fe07820362f7e3bddb892a2a229a820a028) | fix | prevent rxResource from leaking a subscription |
| [0d9a245345](https://github.com/angular/angular/commit/0d9a245345c5bb3013849d924efbfa3676b520a0) | fix | sanitize meta selectors |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [3b4ef1e2ff](https://github.com/angular/angular/commit/3b4ef1e2ffa7f33583b9d6c5d927e2148a507921) | perf | avoid redundant invalidations in parser errors signal |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [618c850282](https://github.com/angular/angular/commit/618c8502829a1f2ca8ce048fdf4d8085b956734c) | fix | exclude withCredentials requests from transfer cache |
| [f7b3ed8db2](https://github.com/angular/angular/commit/f7b3ed8db28c69ee0de9144465da351bda7e85e4) | fix | Introduce a max buffer size for fetch requests on SSR |
| [e6cfaf5672](https://github.com/angular/angular/commit/e6cfaf567256f5e89903f6b5625540e5a4a3bde3) | fix | prevent `httpResource` from leaking a subscription |
| [86390f2be4](https://github.com/angular/angular/commit/86390f2be41b2aae352b0c1ce4a5285fd065ef17) | fix | skip TransferCache for cookie-bearing requests by default |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [28338a1ca4](https://github.com/angular/angular/commit/28338a1ca4c52924f3c5384e43ef9d4bee485c8c) | fix | prevent SSRF bypasses via backslash URLs in HttpClient |
| [95522526e4](https://github.com/angular/angular/commit/95522526e4ae7aeeb4652f2bd6385775efc021ae) | fix | secure location and document initialization against SSRF and path hijack |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [a02797d045](https://github.com/angular/angular/commit/a02797d045235afdcc996b2714f68d9c052be4f4) | fix | Preserves explicit 'credentials: omit' in asset requests |
| [d0c4951a9b](https://github.com/angular/angular/commit/d0c4951a9bfd902e0388bd1bc71c8312e9aad6d7) | fix | Preserves HTTP cache mode in asset group requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.15"></a>
# 21.2.15 (2026-05-28)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [7f4ac78994](https://github.com/angular/angular/commit/7f4ac78994bff1576ab33f3ce48f95c17f40b4d8) | fix | add upper bounds for digitsInfo |
| [300f61feb3](https://github.com/angular/angular/commit/300f61feb3a534bfddf16fcbd240f97b32249699) | fix | sanitize placeholder |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [0b07f47bd6](https://github.com/angular/angular/commit/0b07f47bd6598ae6bd5b75a375e2c817a3c0f243) | fix | normalize tag names with custom namespaces in DomElementSchemaRegistry ([#68925](https://github.com/angular/angular/pull/68925)) |
| [eb1cbbf2eb](https://github.com/angular/angular/commit/eb1cbbf2eb5833219a367a61c04eb07aaa36cc29) | fix | prevent namespaced SVG <style> elements from being stripped |
| [cc1378d54b](https://github.com/angular/angular/commit/cc1378d54bd93f3882d732261be8e66720eb71b2) | fix | sanitize dynamic href and xlink:href bindings on SVG a elements ([#68925](https://github.com/angular/angular/pull/68925)) |
| [782e01594e](https://github.com/angular/angular/commit/782e01594e2ad9134c7385dcf3b518101b23ccab) | fix | strip namespaced SVG script elements during template compilation ([#68925](https://github.com/angular/angular/pull/68925)) |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [ff12fe55ac](https://github.com/angular/angular/commit/ff12fe55ace5e861ba261afb4c0480ff3c40a192) | fix | normalize tag names in runtime i18n attribute security context lookup ([#68925](https://github.com/angular/angular/pull/68925)) |
| [e6fe77cc97](https://github.com/angular/angular/commit/e6fe77cc97fd10351687416f938bf754aff4eb9f) | fix | sanitize meta selectors |
| [daaf32937f](https://github.com/angular/angular/commit/daaf32937fd5c46e411b26f7c082613716fe9550) | fix | support prefix-insensitive DOM schema lookups and compile-time i18n attribute validation ([#68925](https://github.com/angular/angular/pull/68925)) |
| [dada86e43d](https://github.com/angular/angular/commit/dada86e43d847204f714d1a933084617ab941c0a) | fix | synchronize core sanitization schema with compiler ([#68925](https://github.com/angular/angular/pull/68925)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [582a417bd2](https://github.com/angular/angular/commit/582a417bd27fdaf989e5065dbcdf1ad752faf70c) | fix | exclude withCredentials requests from transfer cache |
| [5c6d6df34b](https://github.com/angular/angular/commit/5c6d6df34bbeff3ce98f3b35875444f925cc8f51) | fix | skip TransferCache for cookie-bearing requests by default |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [37e8aadf87](https://github.com/angular/angular/commit/37e8aadf87b4facfcaf002a1557f8c393a362d97) | fix | prevent SSRF bypasses via backslash URLs in HttpClient |
| [72696e244e](https://github.com/angular/angular/commit/72696e244ed7646cca9ab9afc7769a2163943bda) | fix | secure location and document initialization against SSRF and path hijack |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [b8bd49341d](https://github.com/angular/angular/commit/b8bd49341ddcee10d119a9d4aa8e5736e4e5da53) | fix | Preserves explicit 'credentials: omit' in asset requests |
| [ca32fc1000](https://github.com/angular/angular/commit/ca32fc10001301e6174804f9abcfba62252334f4) | fix | Preserves HTTP cache mode in asset group requests |



<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-rc.1"></a>
# 22.0.0-rc.1 (2026-05-20)
## Breaking Changes
### router
- The return type for `TitleStrategy.getResolvedTitleForRoute`
  was previously 'any' while the actual return type could only be either `string`
  or `undefined`. The return type now reflects the possible values correctly.
  Code that reads the value may need to be adjusted.
  
  (cherry picked from commit ad37f52c1212164c51ffcc533067af05c2c33c89)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [b2b8dea732](https://github.com/angular/angular/commit/b2b8dea7325c8d0d6788bbee6100d406f6ebe355) | fix | strip namespaced SVG script elements during template compilation |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [38aca8fe79](https://github.com/angular/angular/commit/38aca8fe79f47a7ad94f7c0b21f44d828e28547e) | fix | do not insert todo when migrating void @Output |
| [1e0330d854](https://github.com/angular/angular/commit/1e0330d854b2c2d3fdb2977883cd168f9cb0a4c8) | fix | makes resource URL sanitizer lookup case-insensitive |
| [3f6abfb167](https://github.com/angular/angular/commit/3f6abfb16791c2bfb811f355676bb768b574906a) | fix | reject script element as a dynamic component host |
| [88d138ccc8](https://github.com/angular/angular/commit/88d138ccc84b839784f59575fddcda3fcaf18d35) | fix | support prefix-insensitive DOM schema lookups and compile-time i18n attribute validation |
| [bfe6f6c2a5](https://github.com/angular/angular/commit/bfe6f6c2a5570cd669afa3dd8b1cd9e2d91e393a) | fix | synchronize core sanitization schema with compiler |
| [1f71ebd788](https://github.com/angular/angular/commit/1f71ebd788af52be8d9c2ff645719390773aa107) | fix | visit ICU expressions in signal migration schematics |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [07a9358157](https://github.com/angular/angular/commit/07a935815782eb58a2109bcaacde33896e8d5d76) | perf | avoid spurious recomputation in FormField.parseErrors |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [3e7117d690](https://github.com/angular/angular/commit/3e7117d690386b079c18b435545dab96fc183305) | fix | Add strict typing on 'getResolvedTitleForRoute' |
| [3e5ab7b470](https://github.com/angular/angular/commit/3e5ab7b470b06b63410649700b6a999e381cbb85) | fix | skip scroll-to-top on initial navigation when hydrating |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.14"></a>
# 21.2.14 (2026-05-20)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [68282dff9f](https://github.com/angular/angular/commit/68282dff9f9ef46540cca4bd38fc1ab739c8a783) | fix | strip namespaced SVG script elements during template compilation |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [c0f52272ed](https://github.com/angular/angular/commit/c0f52272ed337d4776bd4178cbbdc7f32037500f) | fix | do not insert todo when migrating void @Output |
| [938a7f3edd](https://github.com/angular/angular/commit/938a7f3eddda97a39edb9edcc8b4dd970858b3a2) | fix | makes resource URL sanitizer lookup case-insensitive |
| [0fb2724194](https://github.com/angular/angular/commit/0fb272419407a64a0a47096b03a911f4e7e83d79) | fix | reject script element as a dynamic component host |
| [49113ac0ef](https://github.com/angular/angular/commit/49113ac0eff852d987b5acb28a9bbda0242842cd) | fix | visit ICU expressions in signal migration schematics |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [099bf577ee](https://github.com/angular/angular/commit/099bf577ee8f0bab60593a8fd2a1de7d298e3cd6) | fix | skip scroll-to-top on initial navigation when hydrating |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-rc.0"></a>
# 22.0.0-rc.0 (2026-05-13)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [c7aef8ec5d](https://github.com/angular/angular/commit/c7aef8ec5dd12b5b1d4c703a61bd1dd43f998e18) | fix | enforce parentheses containing arguments for :host-context |
| [8a1533c9ad](https://github.com/angular/angular/commit/8a1533c9ad7c306e03d7c50676f87b56bade5bf6) | fix | preserve leading commas in animation definitions |
| [194f723f66](https://github.com/angular/angular/commit/194f723f6620ea3cdf490b762ecbef8df6bb2c8a) | fix | remove dedicated support for legacy shadow DOM selectors |
| [4c25a42e98](https://github.com/angular/angular/commit/4c25a42e988e7a59d4d4dc3121cd77f7b344c048) | fix | remove deprecated shadow CSS encapsulation polyfills |
| [7dc1017e51](https://github.com/angular/angular/commit/7dc1017e517c077a6aa8fd749392a2af1277e1b7) | fix | simplify handling of colon host with a selector list |
| [ccb7d427e4](https://github.com/angular/angular/commit/ccb7d427e4f07506c14c50ce0cbe87c57930ebb5) | fix | type check invalid for loops |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [119a19e604](https://github.com/angular/angular/commit/119a19e604a500f295867fc2cf2e6dbd43a9d807) | fix | forward BEFORE_APP_SERIALIZED errors to ErrorHandler |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.13"></a>
# 21.2.13 (2026-05-13)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [1c6553e97d](https://github.com/angular/angular/commit/1c6553e97d9655d8c48fbf625987fae86f9cd947) | fix | disallow event attribute bindings in host bindings unconditionally |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [629905d537](https://github.com/angular/angular/commit/629905d537f59dc3c264c49f6347e3599dea0215) | fix | add `allowedHosts` option to `renderModule` and `renderApplication` |
| [0b7192f441](https://github.com/angular/angular/commit/0b7192f4410d055191ac9b15bff57d1d0b9a644f) | fix | forward BEFORE_APP_SERIALIZED errors to ErrorHandler |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.12"></a>
# 22.0.0-next.12 (2026-05-08)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8ebae1de33](https://github.com/angular/angular/commit/8ebae1de330729f945391283e25661aada11b4ed) | fix | allow service with factory on abstract classes |
| [6f525245cd](https://github.com/angular/angular/commit/6f525245cd97a934b2b5ea888ee9d52c26c58cb5) | fix | disallow event attribute bindings in host bindings unconditionally |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [0f2160c410](https://github.com/angular/angular/commit/0f2160c4105a53ef6488d2c799dda9c0959ce7dc) | fix | remove compiler import from safe optional chaining migration |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [a451a1d66e](https://github.com/angular/angular/commit/a451a1d66ee4bf52b24b06dc9d35a7b7ae7b7eb5) | fix | add `allowedHosts` option to `renderModule` and `renderApplication` |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.11"></a>
# 22.0.0-next.11 (2026-05-06)
## Breaking Changes
### forms
- `min` and `max` validation rules no longer support
  string values. Bound values must be numbers or null.
## Deprecations
### http
- The `reportProgress` option is deprecated please use `reportUploadProgress` &  `reportDownloadProgress` instead.
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [b225a5d902](https://github.com/angular/angular/commit/b225a5d902f0ee1f6f68cde42266748cb1f2b1f8) | fix | invalid type checking code if field name needs to be quoted |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [b8d3f36ed9](https://github.com/angular/angular/commit/b8d3f36ed962bd4f5abd6bf6e55078b56ce9fffa) | feat | add support for Node.js 26.0.0 |
| [2eae497a04](https://github.com/angular/angular/commit/2eae497a04a6a9b34397181dcd64dbd103f76c47) | feat | support external TCBs with copied content in specific mode |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [3b0ae5fef0](https://github.com/angular/angular/commit/3b0ae5fef0328477ee0f5d51980217e7c583a606) | feat | add `provideWebMcpTools` |
| [5a7c1e62dc](https://github.com/angular/angular/commit/5a7c1e62dc2a4fa199b85150eca66914c107a6f4) | feat | add ability to cache resources for SSR |
| [ef1810197b](https://github.com/angular/angular/commit/ef1810197b679bfcbf21a139b930984302cbe77f) | feat | export experimental `declareWebMcpTool` support |
| [1ab654cf28](https://github.com/angular/angular/commit/1ab654cf281559294bdd3b900ad81490cb91007f) | fix | allow explicit read generic with signal input transforms |
| [49748b5c79](https://github.com/angular/angular/commit/49748b5c7989b4e27686798ea7935e87d804eece) | fix | enforce return type for service factory |
| [6339d264eb](https://github.com/angular/angular/commit/6339d264eb2c00e956b504691842e49cfe365e80) | fix | i18n flags leaking on errors |
| [7aad302c3e](https://github.com/angular/angular/commit/7aad302c3ee6e9c711ab10ae0a9e8bc66d35291c) | fix | mark service decorator as stable |
| [4c9afb68a3](https://github.com/angular/angular/commit/4c9afb68a3447388f9ef1264888ea5dd6cb95dad) | fix | respect ngSkipHydration on components with projectable nodes in LContainers |
| [9d7a609458](https://github.com/angular/angular/commit/9d7a609458f9d9a3f988155c9481a862c4c51eb0) | fix | validate security-sensitive attributes in i18n bindings |
| [0ea27f4e65](https://github.com/angular/angular/commit/0ea27f4e652ddcf444b4c22a3b9643b7cc645926) | fix | visit ng-let expression value in signal migration schematics |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [7745365910](https://github.com/angular/angular/commit/7745365910771d97c91e9b640c2c26a99bfa5a6d) | feat | graduate signal forms APIs to public API |
| [3524de29f3](https://github.com/angular/angular/commit/3524de29f34bef5df941e08e88920dffe4f880c8) | fix | Add support for range type with outside of native bounds |
| [0ea50ffe5a](https://github.com/angular/angular/commit/0ea50ffe5adb07515867e8bf30d1abee49413003) | fix | ensure debounced async validators produce pending status during debounce |
| [3c44d7c90b](https://github.com/angular/angular/commit/3c44d7c90b2392f7307d1b1dd0734db10ede63f5) | fix | fix orphan field error on blur during array removal |
| [849dba6c65](https://github.com/angular/angular/commit/849dba6c6506c2696a43a3fad6ee459e17b4b6c8) | fix | implement custom control reset propagation |
| [5835a5e3a7](https://github.com/angular/angular/commit/5835a5e3a73686473ad064f53f93d9d9acb541a6) | fix | prevent orphan field crashes in debounceSync and async validation |
| [708631f2c4](https://github.com/angular/angular/commit/708631f2c48c146f2c6864c5edfec1d9ca4b0fe9) | fix | prohibit concurrent submits in signal forms |
| [68c3abbe09](https://github.com/angular/angular/commit/68c3abbe09f1937081b83af3c7d82ed1a044974f) | fix | synchronize controls with the model on reset |
| [e0536091f5](https://github.com/angular/angular/commit/e0536091f5f6c2033e377998eea3bf65b14f5ac6) | perf | optimize reactivity by using shallow array equality |
| [9b9769479b](https://github.com/angular/angular/commit/9b9769479b295bf34bae9a938ee758a256bd4b32) | perf | shortcut deepSignal writes if value is unchanged |
| [592a12d6c9](https://github.com/angular/angular/commit/592a12d6c947a0210020b00fd98ffa9fdaca2c20) | refactor | remove string support from min and max validation rules ([#68001](https://github.com/angular/angular/pull/68001)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [7c8c3347ef](https://github.com/angular/angular/commit/7c8c3347efc1be2b5967b9481e3a2a3a23c24977) | refactor | Add `reportUploadProgress` &  `reportDownloadProgress` options |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [dc9c72da9b](https://github.com/angular/angular/commit/dc9c72da9b4ca499eebf6e78d7ccc31ea6f63580) | fix | Add support for `@Input` with transforms |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [c84642ac16](https://github.com/angular/angular/commit/c84642ac16bf3588c071bbdcc684daa8d4e494b3) | feat | add unmatchedInputBehavior option to componentInputBinding |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.12"></a>
# 21.2.12 (2026-05-06)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [fe13bb669d](https://github.com/angular/angular/commit/fe13bb669d2bfab4713623d17b41c430aa0a61d8) | fix | allow explicit read generic with signal input transforms |
| [3430251fef](https://github.com/angular/angular/commit/3430251fef93f6aec1fa9c7867e85df23f67c9a0) | fix | i18n flags leaking on errors |
| [1aeebbe304](https://github.com/angular/angular/commit/1aeebbe3048b5aa612dd0a5448de9883ed51e7e8) | fix | respect ngSkipHydration on components with projectable nodes in LContainers |
| [9e38ed7d57](https://github.com/angular/angular/commit/9e38ed7d5773a9193ba07afdba3f7a9f2fe02d18) | fix | sanitizer typings |
| [7a05a9a71a](https://github.com/angular/angular/commit/7a05a9a71a5ab75042ec5560c01526de6e61e062) | fix | validate security-sensitive attributes in i18n bindings |
| [c37f6ca42f](https://github.com/angular/angular/commit/c37f6ca42f263353cb9563fa90d7b31d3c7837ca) | fix | visit ng-let expression value in signal migration schematics |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [03ad53863b](https://github.com/angular/angular/commit/03ad53863bf3c368f0f02a4322d4141e8f70f674) | fix | prohibit concurrent submits in signal forms |


<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.10"></a>
# 22.0.0-next.10 (2026-04-29)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [97cac1cf4d](https://github.com/angular/angular/commit/97cac1cf4d0efa49199fdd5736263d01316c7ff3) | fix | prevent focus from scrollToAnchor |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [2896c93cc1](https://github.com/angular/angular/commit/2896c93cc1077e1306acd91f4ed62fed4204a26b) | feat | Angular expressions with optional chaining returns `undefined` |
| [6bd1721662](https://github.com/angular/angular/commit/6bd17216627978d68bb1c153af347b346a5aa503) | fix | let declaration span not including end character |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [444b024d49](https://github.com/angular/angular/commit/444b024d49725afc8b40aec67cfdb63a1f7f23ea) | feat | Add a `injectAsync` helper function |
| [8c11816490](https://github.com/angular/angular/commit/8c11816490074f9d7dbde2fb854d8225b775a9cb) | fix | fix ordering of view queries metadata in JIT mode |
| [3583c01bf9](https://github.com/angular/angular/commit/3583c01bf9a14f9e91d5173f8bae72a14ee99736) | fix | guard against non-object events and avoid listener wrapper identity mismatch |
| [d5fd51e956](https://github.com/angular/angular/commit/d5fd51e9569b44340274c3bd3b77993c0d21da9b) | fix | prevent event replay double-invocation when element hydrates before app stability |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [8f8972b0fd](https://github.com/angular/angular/commit/8f8972b0fdea2020800e7df5c6d85938602cb7e7) | feat | model + output migrations |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [2a6b6fafb0](https://github.com/angular/angular/commit/2a6b6fafb032b840797625590037bb4f1d8c6261) | fix | ensure origin has a trailing slash when parsing url |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.11"></a>
# 21.2.11 (2026-04-29)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [10ad3c0692](https://github.com/angular/angular/commit/10ad3c06923453ae0ec06b06e664ce05900a4ff6) | fix | prevent focus from scrollToAnchor |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [4f5d8a2c0b](https://github.com/angular/angular/commit/4f5d8a2c0b5e38d4debc4293945270cea4a9590d) | fix | let declaration span not including end character |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [a40e2cebc8](https://github.com/angular/angular/commit/a40e2cebc878965c3e21bfb61658f3f80cbd2ebf) | fix | fix ordering of view queries metadata in JIT mode |
| [885a1a1d97](https://github.com/angular/angular/commit/885a1a1d9757adfa8766d9b369c848a277438c31) | fix | guard against non-object events and avoid listener wrapper identity mismatch |
| [7a64aff9b5](https://github.com/angular/angular/commit/7a64aff9b59999077ea915486a7fa0b97a286659) | fix | prevent event replay double-invocation when element hydrates before app stability |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [be1f80a253](https://github.com/angular/angular/commit/be1f80a253b8ee27ed7d8de2287d6895c4821909) | fix | ensure origin has a trailing slash when parsing url |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.9"></a>
# 22.0.0-next.9 (2026-04-22)
## Breaking Changes
### router
- paramsInheritanceStrategy now defaults to 'always'
  
  The default value of paramsInheritanceStrategy has been changed from 'emptyOnly' to 'always'. This means that route parameters are inherited from all parent routes by default. To restore the previous behavior, set paramsInheritanceStrategy to 'emptyOnly' in your router configuration.
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8f3d0b9d97](https://github.com/angular/angular/commit/8f3d0b9d97424e058eb7bce57d80833fb68dec4a) | feat | introduce `@Service` decorator |
| [9f479ae964](https://github.com/angular/angular/commit/9f479ae9641a5c928f8eeab9c7846245002b3eff) | feat | Update Testability to use PendingTasks for stability indicator |
### docs
| Commit | Type | Description |
| -- | -- | -- |
| [b24b4cb699](https://github.com/angular/angular/commit/b24b4cb699c325fc2ce40681724341baaabf277b) | fix | link formatting in "Animating your Application with CSS" |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [b395173cf2](https://github.com/angular/angular/commit/b395173cf206b8c04c5ab74298e640c9086d0bac) | fix | fix NgClass leaving trailing comma after removal |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [6eff439546](https://github.com/angular/angular/commit/6eff4395467de51a46656d79d957b448b32dde0c) | fix | restore internal URL on popstate when `browserUrl` is used |
| [17d10f7a99](https://github.com/angular/angular/commit/17d10f7a9921429d0192df6925d20d7236425c9a) | fix | set default paramsInheritanceStrategy to 'always' |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.10"></a>
# 21.2.10 (2026-04-22)
### docs
| Commit | Type | Description |
| -- | -- | -- |
| [0d5ee9ae1b](https://github.com/angular/angular/commit/0d5ee9ae1ba4b7acd8f27a059a778f0b4bd8a5bd) | fix | link formatting in "Animating your Application with CSS" |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [5533ab4f56](https://github.com/angular/angular/commit/5533ab4f56f574bc9365cf0573c4a34a3ab5aaf1) | fix | fix NgClass leaving trailing comma after removal |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [580212c995](https://github.com/angular/angular/commit/580212c995751c4bf4ce8a49df4167498743e0ea) | fix | restore internal URL on popstate when `browserUrl` is used |

<!-- CHANGELOG SPLIT MARKER -->

<a name="20.3.19"></a>
# 20.3.19 (2026-04-15)
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [303d4cd580](https://github.com/angular/angular/commit/303d4cd580dec38bfaa71a0a34965f151bab3ba8) | fix | prevent SSRF bypasses via protocol-relative and backslash URLs |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.8"></a>
# 22.0.0-next.8 (2026-04-15)
## Breaking Changes
### compiler
- This change will trigger the `nullishCoalescingNotNullable` and `optionalChainNotNullable` diagnostics on existing projects.
  You might want to disable those 2 diagnotiscs in your `tsconfig` temporarily.
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [47fcbc4704](https://github.com/angular/angular/commit/47fcbc470462192c4f9e273d8dce8b353d5baaa2) | feat | allow safe navigation to correctly narrow down nullables |
| [2c5aabb9da](https://github.com/angular/angular/commit/2c5aabb9daf5da3ad539381ef1e430c77583e3bf) | fix | don't escape dollar sign in literal expression |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [e5f96c2d88](https://github.com/angular/angular/commit/e5f96c2d8813f95c91761ae3080065575ca3b536) | fix | animation events not type checked properly when bound through HostListener decorator |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [4e331062e8](https://github.com/angular/angular/commit/4e331062e8385e066102c3bbb8be439eabfdf8c9) | feat | allow synchronous values for stream Resources |
| [2f5ab541ea](https://github.com/angular/angular/commit/2f5ab541eafba72bc0079a8650d0b96b0ddfde2f) | feat | enhance profiling with documentation URLs |
| [75f2cb8f56](https://github.com/angular/angular/commit/75f2cb8f566de43a5f2fd27bb2982c796b93490d) | feat | implement Angular DI graph in-page AI tool |
| [8ce9cc4f6b](https://github.com/angular/angular/commit/8ce9cc4f6b10d60300dedb6571822ce77a96f2ce) | feat | register AI runtime debugging tools |
| [cdda51a3b2](https://github.com/angular/angular/commit/cdda51a3b2f48d5623acef0c6f54afb7af921b58) | feat | support bootstrapping Angular applications underneath shadow roots |
| [3c7641151c](https://github.com/angular/angular/commit/3c7641151cc50011340d791849954d51399570f5) | fix | escape forward slashes in transfer state to prevent crawler indexing |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [f9f24fc669](https://github.com/angular/angular/commit/f9f24fc6699b762d17127d0412343041ecdea70e) | feat | shim legacy NG_VALIDATORS into parseErrors for CVA mode ([#67943](https://github.com/angular/angular/pull/67943)) |
| [72d3ace03c](https://github.com/angular/angular/commit/72d3ace03c1292ba9d6fdf7b418ba3287bf54316) | fix | use controlValue in NgControl for CVA interop ([#67943](https://github.com/angular/angular/pull/67943)) |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [39e382a756](https://github.com/angular/angular/commit/39e382a756b552d2b7bd3ce2c364daee9d7a0056) | fix | add CSP nonce support to JsonpClientBackend |
| [d1cd97648a](https://github.com/angular/angular/commit/d1cd97648a943717fe42a174ab8006e06c757fde) | fix | Don't on Passthru outside of reactive context |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [6a435658e2](https://github.com/angular/angular/commit/6a435658e25f9c81ddeaaa72d9c9694fc02bbef1) | feat | Disabling nullishCoalescingNotNullable & optionalChainNotNullable on ng update |
| [1415d86980](https://github.com/angular/angular/commit/1415d869804729e50ed4bcdc829da870b4a70206) | fix | Fix typo for strict-template migration |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [68628dd45b](https://github.com/angular/angular/commit/68628dd45bfcf4ea33bc00798bab1e4ab9da804c) | feat | make incremental hydration default behavior |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [ede7c58a2a](https://github.com/angular/angular/commit/ede7c58a2aa13fdccc8f0b67ce93ba1c11749412) | fix | prevent SSRF bypasses via protocol-relative and backslash URLs |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [c90b6b398e](https://github.com/angular/angular/commit/c90b6b398ead0727a5e22668a4617e687258d466) | fix | normalize multiple leading slashes in URL parser |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [836094c072](https://github.com/angular/angular/commit/836094c072cb0f6cdbd35469ee02158667a9ba51) | fix | resolve TS 6.0 compatibility for messageerror listener |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.9"></a>
# 21.2.9 (2026-04-15)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [f603d4714f](https://github.com/angular/angular/commit/f603d4714fa184aad34a6f7f9ea4e79c8af3afac) | fix | escape forward slashes in transfer state to prevent crawler indexing |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [540536c386](https://github.com/angular/angular/commit/540536c386f2c735a700c2c9e2697a88dcb3d4ec) | fix | add CSP nonce support to JsonpClientBackend |
| [63a857b874](https://github.com/angular/angular/commit/63a857b874172766451aa75ed3347ba50f0ee229) | fix | Don't on Passthru outside of reactive context |
### platform-server
| Commit | Type | Description |
| -- | -- | -- |
| [e0b5078cf2](https://github.com/angular/angular/commit/e0b5078cf2ebe79a6de85e9123148ae948b3d81d) | fix | prevent SSRF bypasses via protocol-relative and backslash URLs |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [684e9fd53d](https://github.com/angular/angular/commit/684e9fd53daacb9e910f42d98c6017f9e5cb4180) | fix | normalize multiple leading slashes in URL parser |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.7"></a>
# 22.0.0-next.7 (2026-04-08)
## Breaking Changes
### core
- The second argument of appRef.bootstrap does not accept `any` anymore. Make sure the element you pass is not nullable.
- * TypeScript versions older than 6.0 are no longer supported.
- `ComponentFactoryResolver` and `ComponentFactory` are no longer available. Pass the component class directly to APIs that previously required a factory, such as `ViewContainerRef.createComponent` or use the standalone `createComponentFunction`.
- `ComponentFactoryResolver` and `ComponentFactory` are no longer available. Pass the component class directly to APIs that previously required a factory, such as `ViewContainerRef.createComponent` or use the standalone `createComponent` function.
### platform-browser
- This removes styles when they appear to no longer be used by an associated `host`. However other DOM on the page may still be affected by those styles if not leveraging `ViewEncapsulation.Emulated` or if those styles are used by elements outside of Angular, potentially causing other DOM to appear unstyled.
### router
- The `currentSnapshot` parameter in `CanMatchFn` and the `canMatch` method of the `CanMatch` interface is now required. While this was already the behavior of the Router at runtime, existing class implementations of `CanMatch` must now include the third argument to satisfy the interface.
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [2ce0e98f79](https://github.com/angular/angular/commit/2ce0e98f79a02ddc550d00580e8e232cfed3bfb2) | fix | handle nested brackets in host object bindings |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [7f9450219f](https://github.com/angular/angular/commit/7f9450219f5c30d1ce0a90061864e8c844c8807c) | feat | Adds warning for prefetch without main defer trigger |
| [ab061a7610](https://github.com/angular/angular/commit/ab061a7610bfcc5aad15fdc2d812085ae3e8d9b1) | fix | error for type parameter declarations |
| [9218140348](https://github.com/angular/angular/commit/9218140348cb2e3ad301c1e7f37db4b0cdad4f9d) | fix | resolve TCB mapping failure for safe property reads with as any |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [a0aa8304cd](https://github.com/angular/angular/commit/a0aa8304cd78a58a990c3b648e41f6888b50b1b3) | feat | bootstrap via `ApplicationRef` with config |
| [9c55fcb3e6](https://github.com/angular/angular/commit/9c55fcb3e65ffcde32d7ac438ea40a69ffc2b3b6) | feat | de-duplicate host directives |
| [8fe025f514](https://github.com/angular/angular/commit/8fe025f5149d7eb460e784a5a17bb467f85b9080) | feat | drop support for TypeScript 5.9 |
| [77f1ca08e4](https://github.com/angular/angular/commit/77f1ca08e4aa1d1ddd1a8062c602eac0d1044d5a) | fix | handle missing serialized container hydration data |
| [a24179e125](https://github.com/angular/angular/commit/a24179e125147b2b608a291e8f93da79668f68ec) | fix | remove obsolete iOS cursor pointer hack in event delegation |
| [9d76ac8229](https://github.com/angular/angular/commit/9d76ac82290e047f1481fb38bd95233e951a77de) | refactor | remove ComponentFactoryResolver & ComponentFactory from the api surface |
| [b1f5181ffd](https://github.com/angular/angular/commit/b1f5181ffd8e9906affd486d9e2f655eb144f175) | refactor | remove ComponentFactoryResolver & ComponentFactory from the api surface"" |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [de56d74da3](https://github.com/angular/angular/commit/de56d74da39178308b81a2d94c8eb4488cb0cbab) | fix | align FormField CVA selection priority with standard forms |
| [394ad0c2a2](https://github.com/angular/angular/commit/394ad0c2a26eec8a8f7136b1b7971420b30a117e) | fix | allow late-bound input types for signals forms |
| [2e9aeea0fe](https://github.com/angular/angular/commit/2e9aeea0fed1a2eae261b95cb1479519d0428b83) | fix | deduplicate writeValue calls in CVA interop |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [75ac120493](https://github.com/angular/angular/commit/75ac1204936dcf1f5646ec918732bee9ade22f99) | fix | get quick info at local var location to align with TS semantics and support type narrowing |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [8216d34976](https://github.com/angular/angular/commit/8216d349768687ed0cf9ef6e1d737e7db9c9e28b) | feat | Add migration for CanMatchFn snapshot parameter ([#67452](https://github.com/angular/angular/pull/67452)) |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [d45b7a91f9](https://github.com/angular/angular/commit/d45b7a91f961ee40e3ea0f0ae837bf543bddb520) | fix | remove unused styles when associated `host` is dropped |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [579440170b](https://github.com/angular/angular/commit/579440170b372f8348cf3e5b5ce9f9f430093947) | fix | make currentSnapshot required in CanMatchFn ([#67452](https://github.com/angular/angular/pull/67452)) |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.8"></a>
# 21.2.8 (2026-04-08)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [e40d378f3e](https://github.com/angular/angular/commit/e40d378f3e3e7e57a45c8fbd9565ee06a3a6a13f) | fix | handle nested brackets in host object bindings |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [2c6781071f](https://github.com/angular/angular/commit/2c6781071f52d6378a002fba6611bb283fbb2fde) | fix | error for type parameter declarations |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [82192deda9](https://github.com/angular/angular/commit/82192deda9c07113835e6c85af3f2c8c8218cda0) | fix | handle missing serialized container hydration data |
| [057cc6d09d](https://github.com/angular/angular/commit/057cc6d09d234f401a810cfdd3ad14127652b88b) | fix | remove obsolete iOS cursor pointer hack in event delegation |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [7797671257](https://github.com/angular/angular/commit/7797671257350665e8b3ceb2bc6a0201829dd338) | fix | get quick info at local var location to align with TS semantics and support type narrowing |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.6"></a>
# 22.0.0-next.6 (2026-04-01)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [08d36599d7](https://github.com/angular/angular/commit/08d36599d724d6b3dbe2c9891c32f783bef4e157) | fix | register SVG animation attributes in URL security context ([#67797](https://github.com/angular/angular/pull/67797)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [fcd0bb0db8](https://github.com/angular/angular/commit/fcd0bb0db83576ef0bc13c5c32f158d95efbedd5) | fix | prevent recursive scope checks for invalid NgModule imports |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [e84e35cdd6](https://github.com/angular/angular/commit/e84e35cdd60696d8670421189e4aa02c1db583a6) | fix | prevent binding unsafe attributes on SVG animation elements ([#67797](https://github.com/angular/angular/pull/67797)) |
| [8fa6617352](https://github.com/angular/angular/commit/8fa66173523bb275d33de4bd43ce23947812922e) | fix | resolve component import by exact specifier in route lazy-loading schematic |
| [028e1d3ce0](https://github.com/angular/angular/commit/028e1d3ce0ed3a33d3b7730a51b549a5cf013b29) | fix | treat `object[data]` as resource URL context ([#67797](https://github.com/angular/angular/pull/67797)) |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [7871093822](https://github.com/angular/angular/commit/78710938225d2c29c6e3666e431c2952bb5560db) | fix | validate locale in getOutputPathFn to prevent path traversal |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [682aaf943f](https://github.com/angular/angular/commit/682aaf943fea3d99f9f834b0bad4d165b4b28071) | feat | add strictTemplates to tsconfig during ng update |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [daa9b2a9d6](https://github.com/angular/angular/commit/daa9b2a9d67557ae9246559f74396f43b240581c) | fix | pass outlet context to split to fix empty path named outlets |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.7"></a>
# 21.2.7 (2026-04-01)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [fea25d1a60](https://github.com/angular/angular/commit/fea25d1a60ecaba1599d9cd9b8df27109ed195c5) | fix | register SVG animation attributes in URL security context ([#67797](https://github.com/angular/angular/pull/67797)) |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [bba5ed8e64](https://github.com/angular/angular/commit/bba5ed8e643b9c3f680e7e539c3d744ad6905e59) | fix | prevent recursive scope checks for invalid NgModule imports |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [d04ddd73df](https://github.com/angular/angular/commit/d04ddd73dfc03f420afbdde964c5119f338af135) | fix | prevent binding unsafe attributes on SVG animation elements ([#67797](https://github.com/angular/angular/pull/67797)) |
| [8fd896e99a](https://github.com/angular/angular/commit/8fd896e99a13855c6569f29efe7e578c301e13ee) | fix | resolve component import by exact specifier in route lazy-loading schematic |
| [b682c62873](https://github.com/angular/angular/commit/b682c628731b86a4884e50abb2f5fa73ac0ad057) | fix | treat `object[data]` as resource URL context ([#67797](https://github.com/angular/angular/pull/67797)) |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [3c41e74fdd](https://github.com/angular/angular/commit/3c41e74fdd279f683156b654699a9312a850add0) | fix | validate locale in getOutputPathFn to prevent path traversal |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [0960592d3d](https://github.com/angular/angular/commit/0960592d3d4fad110d5598144fda9f2488520826) | fix | pass outlet context to split to fix empty path named outlets |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.5"></a>
# 22.0.0-next.5 (2026-03-25)
## Breaking Changes
### compiler-cli
- Elements with multiple matching selectors will now throw at compile time.
### core
- Component with undefined `changeDetection` property are now `OnPush` by default. Specify `changeDetection: ChangeDetectionStrategy.Eager` to keep the previous behavior.
### platform-browser
- Hammer.js integration has been removed. Use your own implementation.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [c1312da183](https://github.com/angular/angular/commit/c1312da1832e2b59ce18edae8fae13d3f562d9b0) | fix | avoid redundant image fetch on destroy with auto sizes |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [e850643b1b](https://github.com/angular/angular/commit/e850643b1b8dca8cfdc12705be51441197cd987a) | feat | Support comments in html element. |
| [96be4f429b](https://github.com/angular/angular/commit/96be4f429ba316c75d2d4a39ececcc529ec10943) | fix | abstract emitter producing incorrect code for dynamic imports |
| [5a712d42d1](https://github.com/angular/angular/commit/5a712d42d161c93f6315d6462543c26c4e4a4490) | fix | prevent shimCssText from adding extra blank lines per CSS comment |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [ca67828ee2](https://github.com/angular/angular/commit/ca67828ee247bdff46736661e51f43f2ca736a24) | refactor | introduce NG8023 compile-time diagnostic for duplicate selectors |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8bc31a515f](https://github.com/angular/angular/commit/8bc31a515ff6e8edda6ea5786a47ae5a788acd36) | feat | Allow other expression for exhaustive typechecking |
| [eae8f7e30b](https://github.com/angular/angular/commit/eae8f7e30b9f8bebdcdb535bd86260199c34274b) | feat | Set default Component changeDetection strategy to OnPush |
| [16adbbf423](https://github.com/angular/angular/commit/16adbbf4234cc67507f578e588a8500fc5d31013) | fix | ensure custom controls resolve transitive host directives |
| [dfa149dc68](https://github.com/angular/angular/commit/dfa149dc68c83c8d7d765aee435b940a8e89a235) | fix | fixes a regression with animate.leave and reordering |
| [50e599e73e](https://github.com/angular/angular/commit/50e599e73ec5bb8f483e749d76fff579e33b1670) | fix | lazy-initialize debounced state to prevent computation cycle |
| [22f8b0a500](https://github.com/angular/angular/commit/22f8b0a500807e69b323378b843465a949e08abf) | fix | resolver function not matching expected type |
| [5e99ae9f00](https://github.com/angular/angular/commit/5e99ae9f00fb119cac93a19bbf36aee71299cae1) | fix | widen type for directive inputs/outputs |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [74f76d8075](https://github.com/angular/angular/commit/74f76d8075d03b1271aef37b974c9e15f9c7d3af) | feat | add `reloadValidation` to Signal Forms to manually trigger async validation |
| [24e52d450d](https://github.com/angular/angular/commit/24e52d450d201e3da90bb64f84358f9eccd7877d) | feat | add debounce option to validateAsync and validateHttp |
| [709f5a390c](https://github.com/angular/angular/commit/709f5a390ca0de04f8066012a5cb36999f2fd4a6) | feat | add FieldState.getError() |
| [41b1410cb8](https://github.com/angular/angular/commit/41b1410cb8a333a2ce6569483cd10866effc154d) | feat | support binding `number|null` to `<input type="text">` |
| [0eeb1b5f03](https://github.com/angular/angular/commit/0eeb1b5f03395ea0ddb047790af4cf1440655a07) | fix | allow `FormRoot` to be used without submission options ([#67727](https://github.com/angular/angular/pull/67727)) |
| [ee8d2098cb](https://github.com/angular/angular/commit/ee8d2098cb3cdce1589c462cd9a66eae490477f9) | fix | change FieldState optional properties to non-optional | undefined |
| [df8b020299](https://github.com/angular/angular/commit/df8b020299b5e579956578d9137cab93a8065045) | fix | clear native date inputs correctly in signal forms when changed via native UI |
| [98c5afdb02](https://github.com/angular/angular/commit/98c5afdb02192f99c886fc3fda13ec6f39018f23) | perf | lazily instantiate signal form fields |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [a73b4b7c30](https://github.com/angular/angular/commit/a73b4b7c30ae943966ad6deecf5a284cddb1f3fd) | fix | inject migration not work in multi-project workspace with option path |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [f99e7ed20f](https://github.com/angular/angular/commit/f99e7ed20f0b1a26fd275fcf5befd589bb4e5d31) | refactor | remove Hammer integration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.6"></a>
# 21.2.6 (2026-03-25)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [b4ab6ba2e8](https://github.com/angular/angular/commit/b4ab6ba2e84a18309b0bb5dd68311ff1776b1cb4) | fix | avoid redundant image fetch on destroy with auto sizes |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [880a57d4b3](https://github.com/angular/angular/commit/880a57d4b34af5aa27cd5bee11fa218ade6444bb) | fix | prevent shimCssText from adding extra blank lines per CSS comment |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [ad0156e056](https://github.com/angular/angular/commit/ad0156e056e60ffebfeb804fda70dce88d9475a8) | fix | fixes a regression with animate.leave and reordering |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [73d6b01b47](https://github.com/angular/angular/commit/73d6b01b47bb6762d182f1cd891f8ad4d7f688e1) | fix | inject migration not work in multi-project workspace with option path |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.4"></a>
# 22.0.0-next.4 (2026-03-18)
## Breaking Changes
### core
- Leave animations are no longer limited to the element being removed.
- `ChangeDetectorRef.checkNoChanges` was removed. In tests use `fixture.detectChanges()` instead.
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [412788fac9](https://github.com/angular/angular/commit/412788fac9c82ddf94b3f5ad0b141098c8101b0b) | fix | ensure generated code compiles |
| [75560ce43d](https://github.com/angular/angular/commit/75560ce43d7422a131ae86f2312c478754d035aa) | fix | parse named HTML entities containing digits |
| [d99ab0e040](https://github.com/angular/angular/commit/d99ab0e0400d256021d6cc601e2a6e16f784a406) | fix | stop generating unused field |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [2bd708fb6b](https://github.com/angular/angular/commit/2bd708fb6bc3ada19c5dd21077a7f609996f6346) | fix | escape template literal in TCB |
| [9769560da7](https://github.com/angular/angular/commit/9769560da73efee4793dfdc1459c8b1ac10981de) | fix | generic types not filled out correctly in type check block |
| [7a0d6b8df2](https://github.com/angular/angular/commit/7a0d6b8df21ca6a407e5c63dc0af753bc39c90c5) | fix | transform dropping exclamationToken from properties |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [df659b8d0c](https://github.com/angular/angular/commit/df659b8d0cf64eeed418c60bc16cae5630086401) | feat | re-introduce nested leave animations scoped to component boundaries |
| [dc3131c639](https://github.com/angular/angular/commit/dc3131c639542ad6a463bff3da5ca84c6f8ecb6f) | feat | TestBed.getFixture -> TestBed.getLastFixture and update implementation |
| [dc0446552a](https://github.com/angular/angular/commit/dc0446552af76bfcac4642c975b293d4dcb93d46) | fix | clean up dehydrated views during HMR component replacement |
| [523d69a768](https://github.com/angular/angular/commit/523d69a7685a3437f1f6ef8fedfd26c52d2d3bb1) | fix | run linked signal equality check without reactive consumer |
| [69fb1614ef](https://github.com/angular/angular/commit/69fb1614eff6e40bb7dcca81f275ac32b9cbd28a) | refactor | remove `checkNoChanges` from the public API. |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [3983080236](https://github.com/angular/angular/commit/3983080236e348ecc17ab4e65a6a5cc0a16aa315) | feat | support ngNoCva as an opt-out for ControlValueAccessors |
| [c4ce3f345f](https://github.com/angular/angular/commit/c4ce3f345fdb14595f0991dff488c4043a0fc71c) | feat | template & reactive support for FVC |
| [83032e3605](https://github.com/angular/angular/commit/83032e36059ad0fc61cde2ac26c1eb0cede14e8c) | fix | support generic unions in signal form schemas |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [cfd0f9950c](https://github.com/angular/angular/commit/cfd0f9950c08324e1c56f16d98a2e3081feeda58) | feat | add Document Symbols support for Angular templates |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [730684b9ce](https://github.com/angular/angular/commit/730684b9ce8335b91ff224422fb12b7eafeaec1d) | fix | prevent trailing comma syntax errors after removing NgStyle |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [89c9a4de30](https://github.com/angular/angular/commit/89c9a4de308a087ce95246ee259f32c8a927e39e) | feat | Add `options` optional parameter for `withComponentInputBinding` |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [07abfbcc6c](https://github.com/angular/angular/commit/07abfbcc6c59d9b4949fdad2a975005d0f28eea7) | fix | preserve redirect policy on reconstructed asset requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.5"></a>
# 21.2.5 (2026-03-18)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [334ae10168](https://github.com/angular/angular/commit/334ae10168fdad15cd1390180e2994b4eb65349b) | fix | ensure generated code compiles |
| [23ea431c4e](https://github.com/angular/angular/commit/23ea431c4ec45cbb4a7db9839969e7cb23b07f58) | fix | parse named HTML entities containing digits |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [26c43d14ba](https://github.com/angular/angular/commit/26c43d14baad1a6b3629a77825e702a97a4f8482) | fix | escape template literal in TCB |
| [67e0ba7e03](https://github.com/angular/angular/commit/67e0ba7e03bb940639f0eafb3af45015e9727eac) | fix | generic types not filled out correctly in type check block |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [1890c3008b](https://github.com/angular/angular/commit/1890c3008bbb41b7143b7ede09bed1f7704744fb) | fix | clean up dehydrated views during HMR component replacement |
| [bf948be4c2](https://github.com/angular/angular/commit/bf948be4c2c88c604e428cba35e3b9e532bfe5b0) | fix | run linked signal equality check without reactive consumer |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [076d41c3f6](https://github.com/angular/angular/commit/076d41c3f6496eb6c6f84b54e2d2ca85c1b35e64) | fix | prevent trailing comma syntax errors after removing NgStyle |
### service-worker
| Commit | Type | Description |
| -- | -- | -- |
| [e19150d2b5](https://github.com/angular/angular/commit/e19150d2b596e87c69bee61f478c3e9c7cbc8f67) | fix | preserve redirect policy on reconstructed asset requests |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.3"></a>
# 22.0.0-next.3 (2026-03-12)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [78dea55351](https://github.com/angular/angular/commit/78dea55351fb305b33a919c43a6b363137eca166) | fix | disallow translations of iframe src |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [999c14eaab](https://github.com/angular/angular/commit/999c14eaab981d12bf2b1d9b1fd6766157f7b1cc) | fix | reverts "feat(core): add support for nested animations" |
| [de0eb4c656](https://github.com/angular/angular/commit/de0eb4c6566011e1a34d529a273ec3d5b6bf17d5) | fix | sanitize translated form attributes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.4"></a>
# 21.2.4 (2026-03-12)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [ed2d324f9c](https://github.com/angular/angular/commit/ed2d324f9cc12aab6cfa0569ef10b73243a62c65) | fix | disallow translations of iframe src |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [abbd8797bb](https://github.com/angular/angular/commit/abbd8797bbd3ae53a10033c39bd895b5b85a4fae) | fix | reverts "feat(core): add support for nested animations" |
| [d1dcd16c5b](https://github.com/angular/angular/commit/d1dcd16c5b40291aa3fa2dc84d22842cd657b201) | fix | sanitize translated form attributes |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.2"></a>
# 22.0.0-next.2 (2026-03-11)
## Breaking Changes
### core
- `createNgModuleRef` was removed, use `createNgModule` instead
### core
| Commit | Type | Description |
| -- | -- | -- |
| [b918beda32](https://github.com/angular/angular/commit/b918beda323eefef17bf1de03fde3d402a3d4af0) | feat | allow debouncing signals |
| [f9ede9ec98](https://github.com/angular/angular/commit/f9ede9ec98ad233c4bbddf268cce8a647333ebfc) | fix | ensure definitions compile |
| [b401c18674](https://github.com/angular/angular/commit/b401c18674f16bceeaf7c9babcb4b4d70f29be4f) | fix | include signal debug names in their `toString()` representation |
| [8630319f74](https://github.com/angular/angular/commit/8630319f74c9575a21693d875cc7d5252516146d) | fix | sanitize translated attribute bindings with interpolations |
| [36936872c9](https://github.com/angular/angular/commit/36936872c962b2073c8f44080684701068866691) | refactor | remove `createNgModuleRef` |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [3e7ce0dafc](https://github.com/angular/angular/commit/3e7ce0dafcf1c0b9ed7a8c528f7120f5c796a668) | fix | restrict `SignalFormsConfig` to a readonly API |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [5a6d88626b](https://github.com/angular/angular/commit/5a6d88626b604db937287a501cb723c088412a7e) | feat | add angular template inlay hints support |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.3"></a>
# 21.2.3 (2026-03-11)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [62a97f7e4b](https://github.com/angular/angular/commit/62a97f7e4b896b4b03a1ef25764db387ffecebe1) | fix | ensure definitions compile |
| [21b1c3b2ee](https://github.com/angular/angular/commit/21b1c3b2ee2c8423782b111b93bd60eb6b453259) | fix | include signal debug names in their `toString()` representation |
| [224e60ecb1](https://github.com/angular/angular/commit/224e60ecb1b90115baa702f1c06edc1d64d86187) | fix | sanitize translated attribute bindings with interpolations |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.2"></a>
# 21.2.2 (2026-03-09)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [1df1697c6e](https://github.com/angular/angular/commit/1df1697c6e3a6b1d302f7692b495146943faa12f) | fix | prevent mutation of children array in RecursiveVisitor |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [c822bf8e76](https://github.com/angular/angular/commit/c822bf8e76611afde332b6625f5e7bae2fe9c3f3) | fix | always parenthesize object literals in TCB |
| [05d022d5e6](https://github.com/angular/angular/commit/05d022d5e61cca7ac90d5b2b2ba3fc738b364ad9) | fix | ignore generated ngDevMode signal branch for code coverage |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [670d1660c4](https://github.com/angular/angular/commit/670d1660c40504e3f55e094c3ebbcccad14163f3) | feat | add 'blur' option to debounce rule |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.1"></a>
# 22.0.0-next.1 (2026-03-05)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [72a17afaf3](https://github.com/angular/angular/commit/72a17afaf32194d42e4b5c090d4f75bad875930b) | fix | prevent mutation of children array in RecursiveVisitor |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [dc4cf649b6](https://github.com/angular/angular/commit/dc4cf649b62fd47e0e1bd255ec954d88585899c4) | fix | ignore generated ngDevMode signal branch for code coverage |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [c767d678cf](https://github.com/angular/angular/commit/c767d678cff65a89f380b4512590fa732db072c8) | feat | add 'blur' option to debounce rule |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [f01901d766](https://github.com/angular/angular/commit/f01901d7668ab926bd7a786f43dbb18f2bb8a5b7) | fix | avoid generating invalid code in ChangeDetectionStrategy.Eager migration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="22.0.0-next.0"></a>
# 22.0.0-next.0 (2026-03-04)
## Breaking Changes
### 
- Node.js v20 is no longer supported. The minimum supported Node.js versions are now v22.22.0 and v24.13.1.
### compiler
- data prefixed attribute no-longer bind inputs nor outputs.
- The compiler will throw when there a when inputs, outputs or model are binding to the same input/outputs.
- `in` variables will throw in template expressions.
### core
- change AnimationCallbackEvent.animationComplete signature
### http
- Use the `HttpXhrBackend` with `provideHttpClient(withXhr)` if you want to keep supporting upload progress reports.
### router
- `provideRoutes()` has been removed. Use `provideRouter()` or `ROUTES` as multi token if necessary.
### upgrade
- Deprecated `getAngularLib`/`setAngularLib` have been removed use `getAngularJSGlobal`/`setAngularJSGlobal` instead.
## Deprecations
### http
- `withFetch` is now deprecated, it can be safely removed.
### 
| Commit | Type | Description |
| -- | -- | -- |
| [d550bf713a](https://github.com/angular/angular/commit/d550bf713a5f558a85cc85639ce96de3677f324a) | build | update minimum supported Node.js versions |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [488d962bc7](https://github.com/angular/angular/commit/488d962bc700fb7189749c63ba63eac50a54e363) | fix | Don't bind inputs/outputs for `data-` attributes |
| [03db2aefaa](https://github.com/angular/angular/commit/03db2aefaa88bc73b6af6ed1c9c722b65079ab3b) | fix | throw on duplicate input/outputs |
| [786ef8261f](https://github.com/angular/angular/commit/786ef8261f4faca0693ef73938d3a6275b5baf7f) | fix | throw on invalid in expressions |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [2c87f21abe](https://github.com/angular/angular/commit/2c87f21abe902f5ef04396994e351762b96836b1) | fix | always parenthesize object literals in TCB |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [17d3ea44e2](https://github.com/angular/angular/commit/17d3ea44e25e077b18178aa8108828f36eb821f4) | feat | add `IdleRequestOptions` support to `IdleService` |
| [3bc095d508](https://github.com/angular/angular/commit/3bc095d508653982a48b337afd51bfedbbde1f87) | feat | Add a schematics to migrate `provideHttpClient` to keep using the `HttpXhrBackend` implementation. |
| [cb4cb77053](https://github.com/angular/angular/commit/cb4cb77053a817fe800af6395783720761e29ada) | feat | Add migration to add `ChangeDetectionStrategy.Eager` where applicable |
| [2206efa55f](https://github.com/angular/angular/commit/2206efa55fc1de160333d62680f8893c47525335) | feat | add special return statuses for resource params |
| [246a984a5d](https://github.com/angular/angular/commit/246a984a5df0006bc5f4025baf918345aa38499c) | feat | add TestBed.getFixture |
| [a5981b83a6](https://github.com/angular/angular/commit/a5981b83a60577d9068d2429bcbed969edca581b) | feat | support customization of @defer's on idle behavior |
| [98eb24cea0](https://github.com/angular/angular/commit/98eb24cea0498382cc7cf7d7b85cd9ead5ad99ad) | feat | Support optional timeout for idle deferred triggers |
| [f9d8da6924](https://github.com/angular/angular/commit/f9d8da69243ae1cd0eb1ab197fdd80e9a34107c1) | fix | bind global context to idle callback shims in @defer's idle service |
| [b9b5c279b4](https://github.com/angular/angular/commit/b9b5c279b444ab2684fe911982930dc7c31ed43c) | refactor | enhance AnimationCallbackEvent.animationComplete signature |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [fb166772d2](https://github.com/angular/angular/commit/fb166772d2e987c0145bdd5bbe83b2a29d74f31c) | fix | split the `touched` model into an input and `touch` output |
| [2061fd8253](https://github.com/angular/angular/commit/2061fd8253882a46336aae8d73a79a1b176449e0) | fix | Untrack `setValue` in reactive forms |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [5c432fb8bb](https://github.com/angular/angular/commit/5c432fb8bb69343ef2633811c37c0c6c0fd65126) | feat | Use `FetchBackend` as default for the `HttpBackend` implementation |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [c6f98c723c](https://github.com/angular/angular/commit/c6f98c723cdd2c209092927855f8cbaf63ecce30) | feat | Add support for idle timeout in defer blocks |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [3683902234](https://github.com/angular/angular/commit/3683902234acf74c7047337bda4db937e93f93d7) | feat | adds browserUrl input support to router links |
| [bdb6ae9dbc](https://github.com/angular/angular/commit/bdb6ae9dbc080cd6ce4f5058c65f6b2bd853beda) | refactor | remove deprecated `provideRoutes` function. |
### upgrade
| Commit | Type | Description |
| -- | -- | -- |
| [01a179577b](https://github.com/angular/angular/commit/01a179577b5a250f5801f6d9a04378aea73c4251) | refactor | remove `getAngularLib`/`setAngularLib` |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.1"></a>
# 21.2.1 (2026-03-04)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [e2e9a9a531](https://github.com/angular/angular/commit/e2e9a9a531c9e9a69701e549f28354cc5d5edd77) | fix | adds transfer cache to httpResource to fix hydration |
| [b4ec3cc4e4](https://github.com/angular/angular/commit/b4ec3cc4e41f2948ad0830eb14aa05d14fa3a9ed) | fix | prevent child animation elements from being orphaned |
| [e923d88398](https://github.com/angular/angular/commit/e923d8839868c79989502ab3503e13d93c78516a) | fix | Prevent removal of elements during drag and drop |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [277ade97ac](https://github.com/angular/angular/commit/277ade97ac2a3a7f2a5b513acaa93e7663cdc55f) | fix | correctly cache blob responses in transfer cache ([#67002](https://github.com/angular/angular/pull/67002)) |


<!-- CHANGELOG SPLIT MARKER -->

<a name="21.2.0"></a>
# 21.2.0 (2026-02-25)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [18003a33bb](https://github.com/angular/angular/commit/18003a33bb0d6bb09def8a0e5939fa24069696eb) | feat | add an 'outlet' injector option for ngTemplateOutlet |
| [8bbe6dc46c](https://github.com/angular/angular/commit/8bbe6dc46c9dc13bafa81a60c7613b84b5ca3761) | feat | Add Location strategies to manage trailing slash on write |
| [51cc914807](https://github.com/angular/angular/commit/51cc91480761b7275c15b5600381207f8ca00ee5) | feat | support height in ImageLoaderConfig and built-in loaders |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [72534e2a34](https://github.com/angular/angular/commit/72534e2a3458df4e1bb097973872f00bbb92be42) | feat | Add support for the `instanceof` binary operator |
| [95b3f37d4a](https://github.com/angular/angular/commit/95b3f37d4a7d9a38f616d56df746dfcda3c2139b) | feat | Exhaustive checks for switch blocks |
| [04ba09a8d9](https://github.com/angular/angular/commit/04ba09a8d9454013bebdd643eacb737642161952) | feat | support `AstVisitor.visitEmptyExpr()` |
| [ce80136e7b](https://github.com/angular/angular/commit/ce80136e7b9f0024d49fce835cffa024c4505855) | fix | optimize away unnecessary restore/reset view calls |
| [3242a61bae](https://github.com/angular/angular/commit/3242a61bae02253d13abb510b666376c665e61ac) | fix | variable counter visiting some expressions twice |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [473dd3e1cb](https://github.com/angular/angular/commit/473dd3e1cbd4fe3fa88ae4d5358eee35c11acb1b) | fix | attach source spans to object literal keys in TCB |
| [a904d9f77b](https://github.com/angular/angular/commit/a904d9f77b56feab407f75f8d0527fa512d5dafb) | fix | support nested component declaration |
| [2ea6dfc6c9](https://github.com/angular/angular/commit/2ea6dfc6c9ca11e96a2654510c980419899f8d04) | fix | update diagnostic to flag no-op arrow functions in listeners |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [8d5210c9fe](https://github.com/angular/angular/commit/8d5210c9fedd8abdd810d7a89ec7ee9a1234f5c1) | feat | add ChangeDetectionStrategy.Eager alias for Default |
| [92d2498910](https://github.com/angular/angular/commit/92d2498910caed06c182b67e39726e1441418698) | feat | add host node to DeferBlockData ([#66546](https://github.com/angular/angular/pull/66546)) |
| [ea2016a6dc](https://github.com/angular/angular/commit/ea2016a6dce58f95ecab7c773d5dcde274354e1a) | feat | add support for nested animations |
| [81cabc1477](https://github.com/angular/angular/commit/81cabc14777a3b4966c29d60e1505aca8c29b71c) | feat | add support for TypeScript 6 |
| [1ba9b7ac50](https://github.com/angular/angular/commit/1ba9b7ac5001b315cc9df78c518964dbf479d647) | feat | resource composition via snapshots |
| [d9923b72a2](https://github.com/angular/angular/commit/d9923b72a20972ba6bf728d78f1afac6936ade18) | feat | support arrow functions in expressions |
| [a7e8abbb7e](https://github.com/angular/angular/commit/a7e8abbb7e738ba338c3f50c76934c99925954e5) | fix | correctly handle SkipSelf when resolving from embedded view injector |
| [0806ee3826](https://github.com/angular/angular/commit/0806ee38269b664f535e10d4d501b88370d3b44c) | fix | prevent animated element duplication with dynamic components in zoneless mode |
| [ed78fa05c7](https://github.com/angular/angular/commit/ed78fa05c710ebafb355ae00a85b190a118b6cc4) | fix | Remove note to skip arrow functions in best practices |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [f56bb07d83](https://github.com/angular/angular/commit/f56bb07d83a015b0ac12e74fdb0cf1550ff36b97) | feat | add field param to submit action and onInvalid |
| [ba009b6031](https://github.com/angular/angular/commit/ba009b603119299a03f9d844f93882d42d47d150) | feat | add form directive |
| [22afbb2f36](https://github.com/angular/angular/commit/22afbb2f36be89c2ae575df343571a918dec5985) | feat | add parsing support to native inputs ([#66917](https://github.com/angular/angular/pull/66917)) |
| [95c386469c](https://github.com/angular/angular/commit/95c386469c7a2f09dd731601c2061bdb10d25717) | feat | Add passing focus options to form field |
| [95ecce8334](https://github.com/angular/angular/commit/95ecce8334299defe55fb2b74264e5258ffd137c) | feat | allow setting submit options at form-level |
| [ebae211add](https://github.com/angular/angular/commit/ebae211add37700858adeb8fc5d87bf503a59721) | feat | introduce parse errors in signal forms |
| [3937afc316](https://github.com/angular/angular/commit/3937afc3167ce409eebb06d91d5fb122eea4e33d) | feat | introduce SignalFormControl for Reactive Forms compatibility |
| [30f0914754](https://github.com/angular/angular/commit/30f09147545b67185f93efb9796e37c1db76733a) | feat | support binding null to number input ([#66917](https://github.com/angular/angular/pull/66917)) |
| [dd208ca259](https://github.com/angular/angular/commit/dd208ca2595258fcd1e289374f812ce0b56c7011) | feat | update submit function to accept options object |
| [27397b3f4f](https://github.com/angular/angular/commit/27397b3f4f3182ce00d6e2f8690285c316e2a274) | fix | clear parse errors when model updates ([#66917](https://github.com/angular/angular/pull/66917)) |
| [63d8005703](https://github.com/angular/angular/commit/63d80057039928b3e878b59c1fe6b93ef1c6b701) | fix | preserve custom-control focus context in signal forms |
| [631f60d1f9](https://github.com/angular/angular/commit/631f60d1f9be72cb68330308a6ff18cc195babb8) | fix | preserve parse errors when parse returns value |
| [adfb83146b](https://github.com/angular/angular/commit/adfb83146b0c149734f43961563b389e00cc1d85) | fix | simplify design of parse errors |
| [fb05fc86d0](https://github.com/angular/angular/commit/fb05fc86d0f12ffafd94c7c1420118d8a79f7e59) | fix | sort error summary by DOM order |
| [567f292e8e](https://github.com/angular/angular/commit/567f292e8e0f9d2b5ddebadfa1c6d6dd6c456f39) | fix | support custom controls as host directives |
| [bdfb60f3e3](https://github.com/angular/angular/commit/bdfb60f3e33065e047183dc1890c36e527e2b304) | fix | use consistent error format returned from parse |
| [d75046bc09](https://github.com/angular/angular/commit/d75046bc091699bbadcb5f2032be627e983ee6fa) | fix | warn when showing hidden field state |
### language-server
| Commit | Type | Description |
| -- | -- | -- |
| [ebc90c26f5](https://github.com/angular/angular/commit/ebc90c26f5ff1ba1e0ca9b775a44e301ebfb9473) | feat | Add completions and hover info for inline styles |
| [26fd0839c3](https://github.com/angular/angular/commit/26fd0839c32d2ebeaa5e3ecc10ed70ab9ca17749) | feat | Add folding range support for inline styles |
| [573aadef7e](https://github.com/angular/angular/commit/573aadef7eb8b6b5e83b82a16f95d2a556f27c01) | feat | Add quick info for inline styles |
| [6fb39d9b62](https://github.com/angular/angular/commit/6fb39d9b62cbb634e95ec00fe5ef85d84da3bdbd) | feat | Support client-side file watching via `onDidChangeWatchedFiles` |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [496967e7b1](https://github.com/angular/angular/commit/496967e7b13dfe1ebdde69724cd62880914beb60) | feat | add JSON schema for angularCompilerOptions |
| [8c21866f49](https://github.com/angular/angular/commit/8c21866f49ff74344551395ae0a5df1841d54c0d) | feat | add linked editing ranges for HTML tag synchronization |
| [d2137928e8](https://github.com/angular/angular/commit/d2137928e8f075527016a3c011dd8efc4d4e1ebd) | perf | use lightweight project warmup for Angular analysis |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [b51bab583d](https://github.com/angular/angular/commit/b51bab583d84e38f16dea489e4119edc34e2a491) | feat | Add partial ActivatedRouteSnapshot information to `canMatch` params |
| [cf9620f7d0](https://github.com/angular/angular/commit/cf9620f7d072897f13b7f281b7bca6f51f69cfd0) | feat | Make match options optional in isActive |
| [907a94dcec](https://github.com/angular/angular/commit/907a94dcec2926a5c7d0c4d36249bd62e31a2ae3) | feat | Update `IsActiveMatchOptions` APIs to accept a Partial |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.6"></a>
# 21.1.6 (2026-02-25)
## Breaking Changes
### core
- Angular now only applies known attributes from HTML in translated ICU content. Unknown attributes are dropped and not rendered.
  
  (cherry picked from commit 306f367899dfc2e04238fecd3455547b5d54075d)
### common
| Commit | Type | Description |
| -- | -- | -- |
| [31d3d56496](https://github.com/angular/angular/commit/31d3d564961b701bda96d94731fbed72c01975fa) | fix | fix LCP image detection with duplicate URLs |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [24b578ce90](https://github.com/angular/angular/commit/24b578ce90ed50022f62584671aef01d4c5dd7b2) | fix | detect uninvoked functions in defer trigger expressions |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [b858309532](https://github.com/angular/angular/commit/b85830953281ff3a1a77bbfe69019d352d509c93) | fix | block creation of sensitive URI attributes from ICU messages |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.5"></a>
# 21.1.5 (2026-02-18)
No user facing changes in this release

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.4"></a>
# 21.1.4 (2026-02-11)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [caab23dfe6](https://github.com/angular/angular/commit/caab23dfe6acf06c3b859af091f5e078b08f1c4c) | fix | add geolocation element to schema |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2b99eaa019](https://github.com/angular/angular/commit/2b99eaa019b5551a2e2fcf9ff8cd0a796e1e857b) | fix | capture animation dependencies eagerly to avoid destroyed injector |
| [d6aeac504c](https://github.com/angular/angular/commit/d6aeac504c6181f15e5d8afdca3d9c3e3b32652c) | fix | Fix flakey test due to document injection |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [0d1acd0165](https://github.com/angular/angular/commit/0d1acd0165511b57ce853f29486d9b92d0215959) | feat | support signal-based schemas in validateStandardSchema |
### http
| Commit | Type | Description |
| -- | -- | -- |
| [3905015ccc](https://github.com/angular/angular/commit/3905015ccc53399a606dd8e4f3c4d0cce628a08e) | fix | correctly parse ArrayBuffer and Blob in transfer cache |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.3"></a>
# 21.1.3 (2026-02-04)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [2b254bc050](https://github.com/angular/angular/commit/2b254bc0508b73aab8991c3b1a9a703c339cb735) | fix | `linkedSignal.update` should propagate errors |
| [e5110b4fa1](https://github.com/angular/angular/commit/e5110b4fa155e4669ed507f3460d2d29026a28ab) | fix | export DirectiveWithBindings |
| [2cf4da0ea1](https://github.com/angular/angular/commit/2cf4da0ea11f5746eb7ae4dfd775f757576e4d98) | fix | hold constructors weakly in DepsTracker cache |
| [70a5b651be](https://github.com/angular/angular/commit/70a5b651be29f1421eb25150b560bfe154aad6bc) | fix | prevent element duplication with dynamic components |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [6f75b6e3f6](https://github.com/angular/angular/commit/6f75b6e3f60dc2a4f33e13562649931dc95eb52b) | fix | Resolves debounce promise on abort in debounceForDuration |
### localize
| Commit | Type | Description |
| -- | -- | -- |
| [4c7126d23b](https://github.com/angular/angular/commit/4c7126d23be3e43b1d5bd6f2fb13119d185c3682) | fix | add support for unit-test builder in ng-add schematic |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [d6268c0bbb](https://github.com/angular/angular/commit/d6268c0bbbdc92abaaaeb8eebee3bc45decab9c9) | fix | limit UrlParser recursion depth to prevent stack overflow |
| [49a36f4cc7](https://github.com/angular/angular/commit/49a36f4cc7254420bc34fff4e0f0242e00970280) | perf | Use .bind to avoid holding other closures in memory |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.2"></a>
# 21.1.2 (2026-01-28)
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [9f99b14882](https://github.com/angular/angular/commit/9f99b14882bc4f883aa33295856010a8bca900fa) | fix | only touch visible, interactive fields on submit |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [c57b0355b5](https://github.com/angular/angular/commit/c57b0355b51f5aee5abd822f203fc3bcc3e85acd) | fix | Detect local project version on creation |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [21ecdc036a](https://github.com/angular/angular/commit/21ecdc036a46c487d6c5b6bd25c2bbc3e53a60f9) | fix | Do not intercept reload events with Navigation integration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.1"></a>
# 21.1.1 (2026-01-21)
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [0e1f1ed573](https://github.com/angular/angular/commit/0e1f1ed5732f3bb4d5dfbd1f0ee5a5be840594e4) | fix | drop .tsx extension for generated relative imports |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [05adfcf8f2](https://github.com/angular/angular/commit/05adfcf8f26013ac20c38f2b08847b5142e4fd85) | fix | handle Set in class bindings |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [d89a80a970](https://github.com/angular/angular/commit/d89a80a970d9590df0509d8b94090904a99b7aca) | feat | Ability to manually register a form field binding in signal forms |
| [cb75f9ce85](https://github.com/angular/angular/commit/cb75f9ce85160b2e4359610c06294929ac1169c0) | fix | fix control value syncing on touch |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.1.0"></a>
# 21.1.0 (2026-01-14)
## Deprecations
### upgrade
- `VERSION` from `@angular/upgrade` is deprecated. Please use the entry from `@angular/upgrade/static` instead.
### common
| Commit | Type | Description |
| -- | -- | -- |
| [d8790972be](https://github.com/angular/angular/commit/d8790972bea4c59a208219dd36d158b5d7e4fdde) | feat | Add custom transformations for Cloudflare and Cloudinary image loaders |
| [a6b8cb68af](https://github.com/angular/angular/commit/a6b8cb68afaded6999ee68f495512be1a9932ae4) | feat | support custom transformations in ImageKit and Imgix loaders |
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [640693da8e](https://github.com/angular/angular/commit/640693da8e667c015662246152236585d9b24e7f) | feat | Add support for multiple swich cases matching |
| [0ad3adc7c6](https://github.com/angular/angular/commit/0ad3adc7c6d4094f1e3432a3f2e3bdc9862cb4fa) | fix | Support empty cases |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [99ad18a4ee](https://github.com/angular/angular/commit/99ad18a4ee82ecc5524106d1d403ccfa9bae2304) | feat | Add stability debugging utility |
| [a0dfa5fa86](https://github.com/angular/angular/commit/a0dfa5fa86f40520b0e368a021b3c72009a45e8e) | feat | support rest arguments in function calls |
| [6e18fa8bc9](https://github.com/angular/angular/commit/6e18fa8bc9d7e6801e2e89e635c2f759dc422317) | feat | support spread elements in array literals |
| [e407280ab5](https://github.com/angular/angular/commit/e407280ab53cde5f93c3a643457c848845c6ec8b) | feat | support spread expressions in object literals |
| [06be8034bb](https://github.com/angular/angular/commit/06be8034bb9b9adfc07ab0d40cd87c6ae5de02de) | fix | Microtask scheduling should be used after any application synchronization |
| [b4f584cf42](https://github.com/angular/angular/commit/b4f584cf42235c94bb8389fa55bc634e23d7b010) | fix | return `StaticProvider` for `providePlatformInitializer` |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [1ea5c97703](https://github.com/angular/angular/commit/1ea5c97703ad3c6d8e4cb1b4297eec57629ce117) | feat | allow focusing bound control from field state |
### platform-browser
| Commit | Type | Description |
| -- | -- | -- |
| [ec9dc94cee](https://github.com/angular/angular/commit/ec9dc94ceeb3c026c64e01c6889b7f5c6fd25a66) | feat | add `context` to `createApplication` |
| [ab67988d2e](https://github.com/angular/angular/commit/ab67988d2e5242eff0034483f984428d684acd02) | feat | resolve JIT resources in `createApplication` |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [5edceffd04](https://github.com/angular/angular/commit/5edceffd0431f5a25e111a731db521e966b91f86) | feat | add controls for route cleanup |
| [a03c82564d](https://github.com/angular/angular/commit/a03c82564da6824e199ff48d5249ea8708040951) | feat | Add scroll behavior controls on router navigation |
| [e44839b016](https://github.com/angular/angular/commit/e44839b01640505e554fff16f24e08f282a557c0) | feat | Add standalone function to create a comptued for isActive |
| [c25d749d85](https://github.com/angular/angular/commit/c25d749d85374fff7745980cd9bb2673c661105a) | feat | Execute RunGuardsAndResolvers function in injection context |
| [1c00ab42f8](https://github.com/angular/angular/commit/1c00ab42f8714f2775ed75bbf3cdf0fd44ee32c3) | feat | extend paramters of RedirectFunction to include paramMap and queryParamMap |
| [7003e8d241](https://github.com/angular/angular/commit/7003e8d2417660f71b3a2a017aff3e650c8d9646) | feat | Publish Router's integration with platform Navigation API as experimental |
| [c84d372778](https://github.com/angular/angular/commit/c84d37277874cf7cbd7582a295d796ff113b9cc1) | feat | Support wildcard params with segments trailing ([#64737](https://github.com/angular/angular/pull/64737)) |
### upgrade
| Commit | Type | Description |
| -- | -- | -- |
| [75fe8f8af9](https://github.com/angular/angular/commit/75fe8f8af9488bae6f7068b64d44500643c5d63f) | refactor | deprecate `VERSION` export |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.9"></a>
# 21.0.9 (2026-01-14)
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [82d556a8fb](https://github.com/angular/angular/commit/82d556a8fb38cd2024e3d098c55254305ba12b6b) | fix | Ensure the control instruction comes after the other bindings |
| [0055f3cc79](https://github.com/angular/angular/commit/0055f3cc79f387b8dec6ce5e1a33fad5486f9341) | fix | Rename signal form [field] to [formField] |
### migrations
| Commit | Type | Description |
| -- | -- | -- |
| [e4bfa5c9e7](https://github.com/angular/angular/commit/e4bfa5c9e7feec48d3c4e9425a21a2ccf6532bdb) | fix | prevent duplicate imports in common-to-standalone migration |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.8"></a>
# 21.0.8 (2026-01-08)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [a6a2621bf9](https://github.com/angular/angular/commit/a6a2621bf9df02584e4079f4a804278fc2060a9c) | fix | fix memory leak with event replay |
| [5239e471a1](https://github.com/angular/angular/commit/5239e471a1f887574c6703c0497e5854304cce4e) | fix | handle cancelled traversals in fake navigation |


<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.7"></a>
# 21.0.7 (2026-01-07)
### compiler
| Commit | Type | Description |
| -- | -- | -- |
| [8e808740c9](https://github.com/angular/angular/commit/8e808740c9311daa0f1c9bab8596ed5e54bdcc6a) | fix | better types for a few expression AST nodes |
| [63b1cdcf70](https://github.com/angular/angular/commit/63b1cdcf70e6de448e8fa4ba1732d7bd7b5400d1) | fix | produce accurate span for typeof and void expressions |
| [3c3ae0cb64](https://github.com/angular/angular/commit/3c3ae0cb64bb112d7167fd9b0bf7739f0c9e6a39) | fix | provide location information for literal map keys |
| [523dbaf1c3](https://github.com/angular/angular/commit/523dbaf1c3646ce27f1cf2e4cfc84c730fea8da9) | fix | stop ThisReceiver inheritance from ImplicitReceiver |
### compiler-cli
| Commit | Type | Description |
| -- | -- | -- |
| [4d9c4567ed](https://github.com/angular/angular/commit/4d9c4567edfb8dd424a3336ef54ffdfc6ca7c15f) | fix | ensure component import diagnostics are reported within the `imports` expression |
| [cd405685af](https://github.com/angular/angular/commit/cd405685afbfad530de7fb841ad352d2b702a9a4) | fix | fix up spelling of diagnostic |
| [778460fcca](https://github.com/angular/angular/commit/778460fccac13d8667bb53fa24ba977a930c0253) | fix | support qualified names in `typeof` type references |
### core
| Commit | Type | Description |
| -- | -- | -- |
| [7c74674eb0](https://github.com/angular/angular/commit/7c74674eb07491f808f79976e3e21787a841aefb) | fix | avoid leaking view data in animations |
| [0edbee4550](https://github.com/angular/angular/commit/0edbee4550e85b933e9bd2ba3c5511ef6fbf7304) | fix | explicitly cast signal node value to String |
| [f9c29572d2](https://github.com/angular/angular/commit/f9c29572d28feef878c73edad562b3a6451825a6) | fix | sanitize sensitive attributes on SVG script elements |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [e3fba182f9](https://github.com/angular/angular/commit/e3fba182f90a2673040cf267a970c54c07d4840f) | feat | add `[formField]` directive |
| [561772b152](https://github.com/angular/angular/commit/561772b152458e1d91d4bf3ef45d9645a731f2b1) | fix | allow custom controls to require `dirty` input |
| [f0fb1d8581](https://github.com/angular/angular/commit/f0fb1d8581671ca499bcb4790b0549825eb36a91) | fix | allow custom controls to require `hidden` input |
| [ec110f170b](https://github.com/angular/angular/commit/ec110f170bbba95f023c8ae0e4429c35bfedc572) | fix | allow custom controls to require `pending` input |
| [ae1dc16bb0](https://github.com/angular/angular/commit/ae1dc16bb0d30b6e87b0f98b7989e6685d856e31) | fix | clean up abort listener after timeout |
| [9748b0d5da](https://github.com/angular/angular/commit/9748b0d5da6ffb1fd2498b23cc452240f46e0549) | fix | support custom controls with non signal-based models |
| [6bd22df987](https://github.com/angular/angular/commit/6bd22df987e433a9e3cb759e35eb6403991cf4b7) | fix | Support readonly arrays in signal forms |
### router
| Commit | Type | Description |
| -- | -- | -- |
| [41cd4a6af8](https://github.com/angular/angular/commit/41cd4a6af800cf7807c46862c99ae036457d8fa7) | fix | Fix RouterLink href not updating with `queryParamsHandling` |
| [5e9e09aee0](https://github.com/angular/angular/commit/5e9e09aee0c08901d2a4d48b60bd13692c73e76e) | fix | handle errors from view transition `updateCallbackDone` promise |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.6"></a>
# 21.0.6 (2025-12-17)
## Breaking Changes (affecting only experimental features)
### forms
- The shape of `SignalFormsConfig.classes` has changed
  
  Previously each function in the `classes` map took a `FieldState`. Now
  it takes a `Field` directive.
  
  For example if you previously had:
  ```
  provideSignalFormsConfig({
    classes: {
      'my-valid': (state) => state.valid()
    }
  })
  ```
  
  You would need to update to:
  ```
  provideSignalFormsConfig({
    classes: {
      'my-valid': ({state}) => state().valid()
    }
  })
  ```
  
  (cherry picked from commit 348f149e8b06d6885f54bac4cf03a9481a8b19b7)
- (cherry picked from commit ae0c59028a2f393ea5716bf222db2c38e7a3989f)
### core
| Commit | Type | Description |
| -- | -- | -- |
| [4c8fb3631d](https://github.com/angular/angular/commit/4c8fb3631d58e22d693aba0b89243f2e9ecb0807) | fix | throw better errors for potential circular references |
| [48492524ea](https://github.com/angular/angular/commit/48492524ea4adfa232b0daee0d955924be31ebea) | fix | use mutable ResponseInit type for RESPONSE_INIT token |
### forms
| Commit | Type | Description |
| -- | -- | -- |
| [81772b420d](https://github.com/angular/angular/commit/81772b420dcda2cbe2a8cb75e50c6da2e1ecdc68) | feat | pass field directive to class config |
| [729b96476b](https://github.com/angular/angular/commit/729b96476b73f1670a0f7c6ab3f36be9d38ebcac) | refactor | rename field to fieldTree in FieldContext and ValidationError |
### language-service
| Commit | Type | Description |
| -- | -- | -- |
| [e0694df3ec](https://github.com/angular/angular/commit/e0694df3eccae3d31a4ea537dffe1db1368ef34a) | fix | avoid interpolation highlighting inside @let |
| [5047be4bc1](https://github.com/angular/angular/commit/5047be4bc1c6f6016263703c743f8033f669f0ee) | fix | Prevent language service from crashing on suggestion diagnostic errors |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.5"></a>

# 21.0.5 (2025-12-11)

### core

| Commit                                                                                            | Type | Description                                                                    |
| ------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------ |
| [69d243abb74](https://github.com/angular/angular/commit/69d243abb7438c37b9ef763755f8fb7fdee165be) | fix  | avoid false-positive deprecation when using `InjectionToken` with factory only |

### forms

| Commit                                                                                            | Type | Description                 |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------- |
| [4fd2b722b40](https://github.com/angular/angular/commit/4fd2b722b4054181a6e5f09a3cc657ae05541782) | fix  | fix signal forms type error |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.4"></a>

# 21.0.4 (2025-12-10)

### compiler

| Commit                                                                                            | Type | Description                       |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------------- |
| [f901cc9eb32](https://github.com/angular/angular/commit/f901cc9eb328bed74fd7f09607e54154254d4a97) | perf | chain query creation instructions |

### compiler-cli

| Commit                                                                                            | Type | Description                                         |
| ------------------------------------------------------------------------------------------------- | ---- | --------------------------------------------------- |
| [65297c62011](https://github.com/angular/angular/commit/65297c62011ae353f8555738688a83a5fba5ea4e) | fix  | expand type for native controls with a dynamic type |

### forms

| Commit                                                                                            | Type | Description                                                                                             |
| ------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| [f254ff4f2e0](https://github.com/angular/angular/commit/f254ff4f2e014064b4d6073341dec0c5a7a754bf) | feat | expose element on signal forms `Field` directive                                                        |
| [5880fbc73c6](https://github.com/angular/angular/commit/5880fbc73c6ac42976b3ada9803965bc20d047db) | feat | redo the signal forms metadata API                                                                      |
| [55fc677cef4](https://github.com/angular/angular/commit/55fc677cef4409302bc474ff316d392097a034e7) | fix  | add signals for dirty, hidden, and pending states in custom controls                                    |
| [cbb10179c80](https://github.com/angular/angular/commit/cbb10179c8098f6a20b0bc365a492f14e4d2a51a) | fix  | allow resetting with empty string                                                                       |
| [bf1c12cd932](https://github.com/angular/angular/commit/bf1c12cd932028dc4bb50914c64bbb6d882b6ec1) | fix  | memoize reads of child fields in signal forms ([#65802](https://github.com/angular/angular/pull/65802)) |
| [6d7475582f9](https://github.com/angular/angular/commit/6d7475582f95720b4487f663d339a18a25374481) | fix  | Reuse key in parent in compat structure                                                                 |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.3"></a>

# 21.0.3 (2025-12-03)

### compiler-cli

| Commit                                                                                           | Type | Description                                               |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------- |
| [5a80a48e96](https://github.com/angular/angular/commit/5a80a48e962f72825050202198b32abbfee66714) | fix  | avoid allocating an object for signals in production mode |
| [1f1856e897](https://github.com/angular/angular/commit/1f1856e897e0a10e2ca6d934c80fd69d1ac06210) | fix  | check that field radio button values are strings          |

### core

| Commit                                                                                           | Type | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------ |
| [8c3304c766](https://github.com/angular/angular/commit/8c3304c766131b031b736ee3fe2ec9c9a42fbe07) | fix  | run animation queue in environment injector context                                                                |
| [4bb085311e](https://github.com/angular/angular/commit/4bb085311e24966ef2dd673f23746988c449c7ff) | fix  | unable to inject viewProviders when host directive with providers is present                                       |
| [609699ae17](https://github.com/angular/angular/commit/609699ae1781a9160b0f474b7ebe0998221c0722) | perf | tree shake unused dynamic `[field]` binding instructions ([#65599](https://github.com/angular/angular/pull/65599)) |

### forms

| Commit                                                                                           | Type | Description                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------- |
| [6b4ab876e8](https://github.com/angular/angular/commit/6b4ab876e811b4e3a6f9617a2b379f62cf187403) | feat | Allows transforms on `FormUiControl` signals                                                 |
| [a5dbd4b382](https://github.com/angular/angular/commit/a5dbd4b382417fc111d6a622862a015c47027a41) | fix  | support dynamic `[field]` bindings ([#65599](https://github.com/angular/angular/pull/65599)) |

### http

| Commit                                                                                           | Type | Description                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------- |
| [20474d3f0f](https://github.com/angular/angular/commit/20474d3f0fd7c64071add6e84acf720627e5c19b) | fix  | enable XSRF protection for same-origin absolute URLs |

### router

| Commit                                                                                           | Type | Description                                         |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------- |
| [48b89f9fbe](https://github.com/angular/angular/commit/48b89f9fbe16acff8b2f3f37853e745ed43d3a32) | fix  | handle errors from view transition finished promise |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.2"></a>

# 21.0.2 (2025-12-01)

### compiler

| Commit                                                                                           | Type | Description                                                       |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------- |
| [78fd159b78](https://github.com/angular/angular/commit/78fd159b78d32cb8b94891e3fc6013076d7838af) | fix  | prevent XSS via SVG animation `attributeName` and MathML/SVG URLs |

<a name="21.0.1"></a>

# 21.0.1 (2025-11-25)

### compiler-cli

| Commit                                                                                           | Type | Description                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------- |
| [39c577bc36](https://github.com/angular/angular/commit/39c577bc362b263896b38c9486131d4342b8f1a8) | fix  | do not type check native controls with ControlValueAccessor |
| [8d3a89a477](https://github.com/angular/angular/commit/8d3a89a477e273b9b2223b6db775955e35105963) | fix  | escape angular control flow in jsdoc                        |
| [bc34083d34](https://github.com/angular/angular/commit/bc34083d349a7d30efb43df97de0509fd85a1996) | fix  | ignore non-existent files                                   |

### core

| Commit                                                                                           | Type | Description                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------- |
| [0ea1e07174](https://github.com/angular/angular/commit/0ea1e071742a031d9afb7a39f8e23082cd88ca2e) | fix  | apply bootstrap-options migration to `platformBrowserDynamic` |
| [70507b8c1c](https://github.com/angular/angular/commit/70507b8c1ce733b8232a12fa45037ee219b5b102) | fix  | debug data causing memory leak for root effects               |
| [a55482fca3](https://github.com/angular/angular/commit/a55482fca3b7e4f39d95f8ff236b6619e59b8190) | fix  | notify profiler events in case of errors                      |
| [49ad7c6508](https://github.com/angular/angular/commit/49ad7c650818ee7db321a24c89282dbf9bb250f3) | fix  | use injected `DOCUMENT` for `CSP_NONCE`                       |
| [cc1ec09931](https://github.com/angular/angular/commit/cc1ec099315b0f429d0b0f07c9b1bf686668db6b) | perf | avoid repeat searches for field directive                     |

### forms

| Commit                                                                                           | Type | Description                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------- |
| [7d5c7cf99a](https://github.com/angular/angular/commit/7d5c7cf99aa5c6490f8bea950b04bd56073582a1) | feat | add DI option for classes on `Field` directive        |
| [8acf5d2756](https://github.com/angular/angular/commit/8acf5d27563ec51cc76971732d50e1f4142a3fe3) | fix  | allow dynamic `type` bindings on signal form controls |
| [de5fca94c5](https://github.com/angular/angular/commit/de5fca94c5cfafa9098d9ee270f448b90d4ac06f) | fix  | run reset as untracked                                |

### http

| Commit                                                                                           | Type | Description                                          |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------- |
| [3240d856d9](https://github.com/angular/angular/commit/3240d856d942727372a705252f7c8c115394a41e) | fix  | prevent XSRF token leakage to protocol-relative URLs |

### migrations

| Commit                                                                                           | Type | Description                                              |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------- |
| [f394215b14](https://github.com/angular/angular/commit/f394215b14d59c49e1433472ecdd2fd5547cc769) | fix  | detect structural ngTemplateOutlet and ngComponentOutlet |

<!-- CHANGELOG SPLIT MARKER -->

<a name="21.0.0"></a>

# 21.0.0 (2025-11-19)

[Blog post "Announcing Angular v21"](http://goo.gle/angular-v21-blog).

## Breaking Changes

### common

- (test only) - `TestBed` now provides a fake `PlatformLocation`
  implementation that supports the Navigation API. This may break some
  tests, though we have not observed any failures internally. You can revert to the
  old default for `TestBed` by providing the `MockPlatformLocation` from
  `@angular/common/testing` in your providers:
  `{provide: PlatformLocation, useClass: MockPlatformLocation}`
- `ngComponentOutletContent` is now of type `Node[][] | undefined` instead of `any[][] | undefined`.
- NgModuleFactory has been removed, use NgModule instead.

### compiler-cli

- - Previously hidden type issues in host bindings may show up in your builds. Either resolve the type issues or set `"typeCheckHostBindings": false` in the `angularCompilerOptions` section of your tsconfig.
- The Angular compiler now produces an error when the
  the `emitDeclarationOnly` TS compiler option is enabled as this mode is
  not supported.

### core

- The server-side bootstrapping process has been changed to eliminate the reliance on a global platform injector.

  Before:

  ```ts
  const bootstrap = () => bootstrapApplication(AppComponent, config);
  ```

  After:

  ```ts
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);
  ```

  A schematic is provided to automatically update `main.server.ts` files to pass the `BootstrapContext` to the `bootstrapApplication` call.

  In addition, `getPlatform()` and `destroyPlatform()` will now return `null` and be a no-op respectively when running in a server environment.

- Using a combination of `provideZoneChangeDetection`
  while also removing ZoneJS polyfills will no longer result in the
  internal scheduler being disabled. All Angular applications now
  consistently use the same scheduler, and those with the Zone change detection
  provider include additional automatic scheduling behaviors based on
  NgZone stabilization.
- - TypeScript versions less than 5.9 are no longer supported.
- (test only) - Using `provideZoneChangeDetection` in the
  TestBed providers would previously prevent `TestBed` from rethrowing
  errors as it should. Errors in the test will now be rethrown, regardless
  of the usage of `provideZoneChangeDetection`. Tests should be adjusted to
  prevent or account for these errors. As in previous major versions,
  this behavior can be disabled with `rethrowApplicationErrors: false` in
  `configureTestingModule` as a last resort.
- `ignoreChangesOutsideZone` is no longer available as an
  option for configuring ZoneJS change detection behavior.
- Angular no longer provides a change detection scheduler
  for ZoneJS-based change detection by default. Add
  `provideZoneChangeDetection` to the providers of your
  `bootstrapApplication` function or your `AppModule` (if using
  `bootstrapModule`). This provider addition will be covered by an
  automated migration.
- `moduleId` was removed from `Component` metadata.
- The `interpolation` option on Components has been removed. Only the default `{{ ... }}` is now supported.

### elements

- Fix signal input getter behavior in custom elements.

  Before this change, signal inputs in custom elements required function calls to access their values (`elementRef.newInput()`), while decorator inputs were accessed directly (`elementRef.oldInput`). This inconsistency caused confusion and typing difficulties.

  The getter behavior has been standardized so signal inputs can now be accessed directly, matching the behavior of decorator inputs:

  Before:
  - Decorator Input: `elementRef.oldInput`
  - Signal Input: `elementRef.newInput()`

  After:
  - Decorator Input: `elementRef.oldInput`
  - Signal Input: `elementRef.newInput`

### forms

- This new directive will conflict with existing FormArray directives or formArray inputs on the same element.

### platform-browser

- The deprecated `ApplicationConfig` export from `@angular/platform-browser` has been removed.
  Please import `ApplicationConfig` from `@angular/core` instead.

### router

- `lastSuccessfulNavigation` is now a signal and needs to be invoked
- Router navigations may take several additional
  microtasks to complete. Tests have been found to often be highly
  dependent on the exact timing of navigation completions with respect to
  the microtask queue. The most common fix for tests is to ensure all
  navigations have been completed before making assertions. On rare
  occasions, this can also affect production applications. This can be
  caused by multiple subscriptions to router state throughout the application,
  both of which trigger navigations that happened to not conflict with the
  previous timing.

### upgrade

- `UpgradeAdapter` is no longer available. Use
  `upgrade/static` instead

### zone.js

- IE/Non-Chromium Edge are not supported anymore.

## Deprecations

### http

- `HttpResponseBase.statusText` is deprecated

### common

| Commit                                                                                           | Type     | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| [c795960ada](https://github.com/angular/angular/commit/c795960ada1a7e21b8bee411e20a08c700b6e385) | feat     | Add experimental support for the Navigation API ([#63406](https://github.com/angular/angular/pull/63406))      |
| [9eac43cf46](https://github.com/angular/angular/commit/9eac43cf46993442e9de5764e2ccca98e3837939) | feat     | Support of optional keys for the KeyValue pipe ([#48814](https://github.com/angular/angular/pull/48814))       |
| [a1868c9d13](https://github.com/angular/angular/commit/a1868c9d13991d24f893499406b29a5f2e0a388b) | feat     | update to cldr 47 ([#64032](https://github.com/angular/angular/pull/64032))                                    |
| [196fa500a3](https://github.com/angular/angular/commit/196fa500a3c282af5158fa2873df8e2a73243493) | fix      | properly type ngComponentOutlet ([#64561](https://github.com/angular/angular/pull/64561))                      |
| [7a4b225c57](https://github.com/angular/angular/commit/7a4b225c57d8e390ec06731f5211d52d14da3a9c) | refactor | improve typing of `ngComponentOutletContent` ([#63674](https://github.com/angular/angular/pull/63674))         |
| [25f593ce2a](https://github.com/angular/angular/commit/25f593ce2a623add0cbd4ab3bb0d4987793e4f34) | refactor | remove`ngModuleFactory` input of `NgComponentOutlet` ([#62838](https://github.com/angular/angular/pull/62838)) |

### compiler

| Commit                                                                                           | Type | Description                                           |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------- |
| [ecea909bcc](https://github.com/angular/angular/commit/ecea909bccc3d6a3c33e77e1feb4ad0926e72f9e) | fix  | don't choke on unbalanced parens in declaration block |
| [04dd75ba94](https://github.com/angular/angular/commit/04dd75ba948889601bf611254021577aba458d4c) | fix  | support arbitrary nesting in :host-context()          |
| [f54cc4f28a](https://github.com/angular/angular/commit/f54cc4f28abb9ded190ae33619e5ca7073df08a6) | fix  | support commas in :host() argument                    |
| [814b2713f5](https://github.com/angular/angular/commit/814b2713f56f94372db7e15e0a86f089a88f888d) | fix  | support complex selectors in :nth-child()             |
| [aad6ced0ef](https://github.com/angular/angular/commit/aad6ced0ef5e535d1a6eae7c79df4e03ea73b7f2) | fix  | support one additional level of nesting in :host()    |

### compiler-cli

| Commit                                                                                           | Type | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [563dbd998c](https://github.com/angular/angular/commit/563dbd998c86e850b3c4dde4c7cee00d7c9d7581) | feat | Adds diagnostic for misconfigured `@defer` triggers ([#64069](https://github.com/angular/angular/pull/64069))                          |
| [0571b335b9](https://github.com/angular/angular/commit/0571b335b9b11459b73a19679671eae97fbe1683) | feat | enable type checking of host bindings by default ([#63654](https://github.com/angular/angular/pull/63654))                             |
| [5b55200edf](https://github.com/angular/angular/commit/5b55200edfd12fa7dcdb6570885e0c52a9cc5ec0) | fix  | allow value to be set on radio fields                                                                                                  |
| [ab98b2425f](https://github.com/angular/angular/commit/ab98b2425f4c4cb59927aa686818ecee99e634c7) | fix  | capture metadata for undecorated fields ([#63957](https://github.com/angular/angular/pull/63957))                                      |
| [be7110342b](https://github.com/angular/angular/commit/be7110342b61d837822524d4f60f56a7f859f594) | fix  | disallow compiling with the `emitDeclarationOnly` TS compiler option enabled ([#61609](https://github.com/angular/angular/pull/61609)) |
| [bd322ca410](https://github.com/angular/angular/commit/bd322ca4100c8e51df7c71377161c2c9412d1b83) | fix  | do not flag custom control required inputs as missing when field is present                                                            |
| [471da8a311](https://github.com/angular/angular/commit/471da8a311fa7f77815bdf0199943cfa50d45181) | fix  | infer type of custom field controls                                                                                                    |
| [96cb0cffda](https://github.com/angular/angular/commit/96cb0cffda55516e01613958d1268872f1070722) | fix  | infer types of signal forms set on native inputs                                                                                       |
| [71ab11ccf0](https://github.com/angular/angular/commit/71ab11ccf0f0daaffb49779d5f90b9e2da76dbd5) | fix  | make field detection logic more robust                                                                                                 |
| [1f389b8b97](https://github.com/angular/angular/commit/1f389b8b97600ee382ff842e066abc2ca31c442f) | fix  | missingStructuralDirective diagnostic produces false negatives ([#64579](https://github.com/angular/angular/pull/64579))               |
| [7fd3db0423](https://github.com/angular/angular/commit/7fd3db04232d63f1b48ec389bbb62d9ca277fcf9) | fix  | remove internal syntax-related flags ([#63787](https://github.com/angular/angular/pull/63787))                                         |
| [c371251e4c](https://github.com/angular/angular/commit/c371251e4c2e7bc1ab6da7c51b05e047bdfe6068) | fix  | report invalid bindings on form controls                                                                                               |
| [01290ab275](https://github.com/angular/angular/commit/01290ab275599ee6887f9c2139a16f833eaa7071) | fix  | use any when checking field interface conformance                                                                                      |

### core

| Commit                                                                                           | Type     | Description                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [809a4ed8c1](https://github.com/angular/angular/commit/809a4ed8c110ca930cb1c6bad309f8bfcaf7ceb8) | feat     | Add migration for zoneless by default. ([#63042](https://github.com/angular/angular/pull/63042))                                          |
| [2a7a5de53f](https://github.com/angular/angular/commit/2a7a5de53fd6fb5714c06c63dd1dad5718086083) | feat     | Allow passing application providers in `bootstrapModule` options ([#64354](https://github.com/angular/angular/pull/64354))                |
| [28926ba92c](https://github.com/angular/angular/commit/28926ba92cf3da7e45a7b8938bba49febdf58eb7) | feat     | introduce `BootstrapContext` for improved server bootstrapping ([#63562](https://github.com/angular/angular/pull/63562))                  |
| [c2d376b85a](https://github.com/angular/angular/commit/c2d376b85aa6eea2c4d7ec3207df6767f5739945) | feat     | make SimpleChanges generic ([#64535](https://github.com/angular/angular/pull/64535))                                                      |
| [ad2376435b](https://github.com/angular/angular/commit/ad2376435b4bcfdb695d841272f8234ab2a7cca5) | feat     | support IntersectionObserver options in viewport triggers ([#64130](https://github.com/angular/angular/pull/64130))                       |
| [539717f58a](https://github.com/angular/angular/commit/539717f58a9bff1f8aacc857657b7df573d0bb70) | feat     | support regular expressions in templates ([#63887](https://github.com/angular/angular/pull/63887))                                        |
| [ab415f3d7f](https://github.com/angular/angular/commit/ab415f3d7f23cef8e00595e9cf6af2c8b764a8ae) | fix      | control not recognized when input has directive injecting ViewContainerRef ([#64368](https://github.com/angular/angular/pull/64368))      |
| [f008045ded](https://github.com/angular/angular/commit/f008045dedc773f70dd6f1ced73e689fb4436d6d) | fix      | do not rename ARIA property bindings to attributes ([#63925](https://github.com/angular/angular/pull/63925))                              |
| [1352fbdbf2](https://github.com/angular/angular/commit/1352fbdbf2542c39715045c7a6c0f6aa41516b02) | fix      | Drop special-case disables automatic change detection scheduling ([#63846](https://github.com/angular/angular/pull/63846))                |
| [c0791e1887](https://github.com/angular/angular/commit/c0791e1887590b862bfed9333c5c90be3ac487d0) | fix      | drop support for TypeScript 5.8 ([#63589](https://github.com/angular/angular/pull/63589))                                                 |
| [aa389a691b](https://github.com/angular/angular/commit/aa389a691bc2e5726a0ded73d30962c29faab680) | fix      | ensure `@for` iteration over field is reactive ([#64113](https://github.com/angular/angular/pull/64113))                                  |
| [fec7c288e9](https://github.com/angular/angular/commit/fec7c288e96dd32f5861124384dbef4d5350d437) | fix      | Error on invalid APP_ID ([#63252](https://github.com/angular/angular/pull/63252))                                                         |
| [d399d7d02b](https://github.com/angular/angular/commit/d399d7d02b66c485cc5479dabd349d017a002692) | fix      | Explicit Zone CD in TestBed providers should not override TestBed error handler ([#63404](https://github.com/angular/angular/pull/63404)) |
| [92e09adc0a](https://github.com/angular/angular/commit/92e09adc0a191ec599915e20b0835bf455bc572b) | fix      | Remove ignoreChangesOutsideZone option ([#62700](https://github.com/angular/angular/pull/62700))                                          |
| [45fed3d201](https://github.com/angular/angular/commit/45fed3d2011bf6feffa8ee1365a5c88d603f826c) | fix      | Remove Zone-based change provider from internals by default ([#63382](https://github.com/angular/angular/pull/63382))                     |
| [c9f977833e](https://github.com/angular/angular/commit/c9f977833ebed6f89afd38f65c03e9b3808f2b07) | fix      | skip Angular formatting when formatting signals recursively                                                                               |
| [67fbd5ff1e](https://github.com/angular/angular/commit/67fbd5ff1eef80d98e5e9c633a15bb1ae27134bb) | fix      | SSR error in signal forms                                                                                                                 |
| [c241038111](https://github.com/angular/angular/commit/c241038111cf602669dd68ef516f147889ab02e5) | fix      | update symbols ([#64481](https://github.com/angular/angular/pull/64481))                                                                  |
| [a5e5dbbc16](https://github.com/angular/angular/commit/a5e5dbbc16f605cce6dd72a82ddb9110e655a89b) | refactor | remove `moduleId` from Component metadata ([#63482](https://github.com/angular/angular/pull/63482))                                       |
| [9a16718b13](https://github.com/angular/angular/commit/9a16718b13a03df2941c31cb968dcbfa6904a481) | refactor | remove deprecated `interpolation` option on Components. ([#63474](https://github.com/angular/angular/pull/63474))                         |

### elements

| Commit                                                                                           | Type | Description                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------- |
| [be0455adda](https://github.com/angular/angular/commit/be0455adda7d92f741105b3599e7922f099cc024) | fix  | return value on signal input getter ([#62113](https://github.com/angular/angular/pull/62113)) |

### forms

| Commit                                                                                           | Type | Description                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [a278ee358c](https://github.com/angular/angular/commit/a278ee358c4d111cf29eb8d3d8eb1fe1799c8495) | feat | add `debounce()` rule for signal forms                                                                                                    |
| [b8314bd340](https://github.com/angular/angular/commit/b8314bd3409500b8540d1ce00a330fdb2f0fc83a) | feat | add experimental signal-based forms ([#63408](https://github.com/angular/angular/pull/63408))                                             |
| [0dd95c503f](https://github.com/angular/angular/commit/0dd95c503f4b07b478e505b99aaa63419a340095) | feat | Add FormArrayDirective ([#55880](https://github.com/angular/angular/pull/55880))                                                          |
| [d201cd2c2b](https://github.com/angular/angular/commit/d201cd2c2bdb418fd1b595320855c35eb91e1e5b) | feat | Prevents marking fields as touched/dirty when state is hidden/readonly/disabled ([#63633](https://github.com/angular/angular/pull/63633)) |
| [9c5e969f51](https://github.com/angular/angular/commit/9c5e969f51448aad05a7e0ac83143b4b5ae477b4) | fix  | bind invalid input in custom controls ([#64526](https://github.com/angular/angular/pull/64526))                                           |
| [10ef96adb3](https://github.com/angular/angular/commit/10ef96adb3d989781c7ec5116a70b6518866ee27) | fix  | consistent treatment of empty ([#63456](https://github.com/angular/angular/pull/63456))                                                   |
| [d89e522a1f](https://github.com/angular/angular/commit/d89e522a1f07c4b2ac7fd2b926ae44658f9394d4) | fix  | debounce updates from interop controls                                                                                                    |
| [c0d88c37c9](https://github.com/angular/angular/commit/c0d88c37c983991236177a0337f5cab75054abf7) | fix  | Emit `FormResetEvent` when resetting control ([#64024](https://github.com/angular/angular/pull/64024))                                    |
| [94b0afec00](https://github.com/angular/angular/commit/94b0afec0007f0f5142a39def2849a1ba9e5030d) | fix  | implement interoperability between signal forms and reactive forms ([#64471](https://github.com/angular/angular/pull/64471))              |
| [a1ac9a6415](https://github.com/angular/angular/commit/a1ac9a64154c0a9206e11343b195f287dba3425d) | fix  | interop supports CVAs with signals ([#64618](https://github.com/angular/angular/pull/64618))                                              |
| [505bde1fed](https://github.com/angular/angular/commit/505bde1fede95ec907c6b028db4b3c9237899f30) | fix  | mark field as dirty when value is changed by `ControlValueAccessor` ([#64471](https://github.com/angular/angular/pull/64471))             |
| [3529877772](https://github.com/angular/angular/commit/3529877772f7a777d467c99e3d95b465b1b1d82c) | fix  | mark field as dirty when value is changed by a bound control ([#64483](https://github.com/angular/angular/pull/64483))                    |
| [fd9af2afaf](https://github.com/angular/angular/commit/fd9af2afaf6c239bbbba50f2f016ecf9b83133c4) | fix  | only propagate schema defined properties from field to control ([#64446](https://github.com/angular/angular/pull/64446))                  |
| [91d8d55a80](https://github.com/angular/angular/commit/91d8d55a80a1d1894827ef06e38e56de6e661575) | fix  | Set error message of a schema error.                                                                                                      |
| [f4d1017c25](https://github.com/angular/angular/commit/f4d1017c25813b290697d8e1a829983a7b1bca27) | fix  | test that common field states are propagated to controls ([#63884](https://github.com/angular/angular/pull/63884))                        |
| [acd7c83597](https://github.com/angular/angular/commit/acd7c83597ad376ec9a48421b3b291951ca2d75e) | fix  | test that min/max properties are propagated to controls ([#63884](https://github.com/angular/angular/pull/63884))                         |
| [71e8672837](https://github.com/angular/angular/commit/71e8672837eb6c2da2570eb2341e896fbf7ca5a3) | fix  | test that minLength/maxLength properties are propagated to controls ([#63884](https://github.com/angular/angular/pull/63884))             |
| [507b3466ee](https://github.com/angular/angular/commit/507b3466eec648a706f10d2805e67e53522e9654) | perf | implement change detection for field control bindings                                                                                     |
| [781a3299f9](https://github.com/angular/angular/commit/781a3299f9e16e16902f12f7e7c80c10f15f788a) | perf | only update interop controls when bound field changes                                                                                     |
| [32f86d35f7](https://github.com/angular/angular/commit/32f86d35f7cd177b6e4525a7ae97909888d9fee4) | perf | optimize `[field]` binding instructions ([#64351](https://github.com/angular/angular/pull/64351))                                         |

### http

| Commit                                                                                           | Type     | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| [2739b7975b](https://github.com/angular/angular/commit/2739b7975ba40a8cfc3b00f0c444a3a147f7f553) | feat     | add referrerPolicy option to HttpResource ([#64283](https://github.com/angular/angular/pull/64283))                      |
| [07e678872f](https://github.com/angular/angular/commit/07e678872f91236f5c258f98a7aea536b5a200ac) | feat     | Add reponseType property to HttpResponse and HttpErrorResponse ([#63043](https://github.com/angular/angular/pull/63043)) |
| [5cbdefcf11](https://github.com/angular/angular/commit/5cbdefcf118e9c228bc887be30114afc84a4db2a) | feat     | add support for fetch referrerPolicy option in HttpClient ([#64116](https://github.com/angular/angular/pull/64116))      |
| [4bed062bc9](https://github.com/angular/angular/commit/4bed062bc9f2a0a66c9af3cb8aeb42ee023c6393) | feat     | Provide http services in root ([#56212](https://github.com/angular/angular/pull/56212))                                  |
| [0e4e17cd97](https://github.com/angular/angular/commit/0e4e17cd97d7a5f7ccc40405ba2103a78e1e1298) | refactor | `HttpResponseBase.statusText` ([#64176](https://github.com/angular/angular/pull/64176))                                  |

### language-server

| Commit                                                                                           | Type | Description                       |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------- |
| [3f7111a9c3](https://github.com/angular/angular/commit/3f7111a9c38c6fd00af705a3045f2909f47b505b) | fix  | fix directory renaming on Windows |

### language-service

| Commit                                                                                           | Type | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| [89095946cf](https://github.com/angular/angular/commit/89095946cff051c5613b8f54ec722d08cd47c709) | fix  | address potential memory leak during project creation                                                         |
| [80e00ff4e5](https://github.com/angular/angular/commit/80e00ff4e5833c35e19cfca271dff51121108333) | fix  | prevent interpolation from superseding block braces ([#64392](https://github.com/angular/angular/pull/64392)) |

### migrations

| Commit                                                                                           | Type | Description                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| [6ddb250391](https://github.com/angular/angular/commit/6ddb2503913fa8698a0e07e88ce49598cc7af481) | feat | add migration to convert ngClass to use class ([#62983](https://github.com/angular/angular/pull/62983))                |
| [8dc8914c8a](https://github.com/angular/angular/commit/8dc8914c8a2be44e30b512670628a558bdd7f1f4) | feat | add migration to convert ngStyle to use style ([#63517](https://github.com/angular/angular/pull/63517))                |
| [861cee34e0](https://github.com/angular/angular/commit/861cee34e0e9b5562cfe70d245f30b7ddea7d8fd) | feat | Adds migration for deprecated router testing module ([#64217](https://github.com/angular/angular/pull/64217))          |
| [75fc16b261](https://github.com/angular/angular/commit/75fc16b261de5312c60834330680052f07138480) | feat | Adds support for CommonModule to standalone migration ([#64138](https://github.com/angular/angular/pull/64138))        |
| [655a99d0c6](https://github.com/angular/angular/commit/655a99d0c60f70bbc14968133cfe6ab251cedc92) | fix  | fix bug in ngclass-to-class migration ([#63617](https://github.com/angular/angular/pull/63617))                        |
| [62bbce63b7](https://github.com/angular/angular/commit/62bbce63b7abcb22f1fd453c59e0063aae3b189c) | fix  | remove error for no matching files in control flow migration ([#64253](https://github.com/angular/angular/pull/64253)) |

### platform-browser

| Commit                                                                                           | Type     | Description                                                                                            |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------ |
| [ce8db665f9](https://github.com/angular/angular/commit/ce8db665f984005264de0eb8b452370972823c17) | refactor | remove deprecated `ApplicationConfig` export ([#63529](https://github.com/angular/angular/pull/63529)) |

### router

| Commit                                                                                           | Type | Description                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| [4e0fc81491](https://github.com/angular/angular/commit/4e0fc81491bfe6e4eac5c59ef0bde908a3d58413) | feat | convert `lastSuccessfulNavigation` to signal ([#63057](https://github.com/angular/angular/pull/63057))                      |
| [5e61e8d3c3](https://github.com/angular/angular/commit/5e61e8d3c3a80b21116e3188805de556e4f0c496) | fix  | Fix memory leak through Navigation.abort and canDeactivate guards ([#64141](https://github.com/angular/angular/pull/64141)) |
| [f6a73f1913](https://github.com/angular/angular/commit/f6a73f19131b2befa74f4ea3f941038603958ac0) | fix  | Respect custom `UrlSerializer` handling of query parameters ([#64449](https://github.com/angular/angular/pull/64449))       |
| [5b53535dd1](https://github.com/angular/angular/commit/5b53535dd16af7d3ea7b0216984560fd2223d76c) | fix  | Update recognize stage to use internally async/await ([#62994](https://github.com/angular/angular/pull/62994))              |

### upgrade

| Commit                                                                                           | Type | Description                                                                                |
| ------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------ |
| [f86846555b](https://github.com/angular/angular/commit/f86846555bba44b2fb71d012fe4eebf82a0f5d00) | fix  | Remove deprecated UpgradeAdapter ([#61659](https://github.com/angular/angular/pull/61659)) |
