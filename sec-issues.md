# Security Issues Report

Generated: March 10, 2026

---

## Critical Issues

### 1. Hardcoded API Credentials

**File:** `src/app/tumblr/tumblr.component.ts:23`

```typescript
const apiKey = `RSIq08oTL7lA1DyETOmqujDSph7rvP4akG8NRPz9os6ywJjBhE`;
const clientId = 'e972ca06cc4b961';
```

**Risk:** API key and client ID are hardcoded in source code. These credentials are exposed in the client-side bundle and can be extracted by anyone viewing the application.

**Recommendation:** Move sensitive credentials to environment files or a backend proxy service. Never include API keys in client-side code.

---

### 2. XSS via innerHTML with bypassSecurityTrustHtml

**Files:**

- `src/app/blogs/blogs.component.ts:64`
- `projects/slido/src/app/slide/slide.component.ts:63`

```typescript
return this.san.bypassSecurityTrustHtml(html);
```

**Risk:** Using `bypassSecurityTrustHtml()` disables Angular's built-in XSS protection. If the loaded content (markdown files from `/assets/articles/`) can be controlled by attackers, they could inject malicious scripts.

**Recommendation:**

- Validate and sanitize all content before rendering
- Consider using DOMPurify in addition to Angular's sanitizer
- Use Content Security Policy (CSP) headers

---

### 3. Unsafe innerHTML Assignment (Intentional Demo)

**File:** `src/app/dynamichtml/dynamichtml.component.ts:121`

```typescript
/** DANGER AHEAD */ target.innerHTML = newHtml;
```

**Risk:** This is intentionally unsafe code for demonstration purposes. However, if this pattern exists elsewhere or the comment is removed in production, it creates a critical XSS vulnerability.

**Recommendation:** Remove or comment out this dangerous pattern. Use the sanitized version on line 129 instead.

---

## High Issues

### 4. Unauthenticated MQTT Connection

**File:** `src/app/mqtt/mqtt.service.ts:24`

```typescript
m.default.connectAsync(`wss://mqtt.eliasweb.nl`);
```

**Risk:** The MQTT service connects to a WebSocket MQTT broker without authentication. This could allow unauthorized access to Zigbee device data and control.

**Recommendation:** Implement authentication (username/password or TLS certificates) for MQTT connections.

---

### 5. localStorage for Sensitive Data

**File:** `src/app/mqtt/pair-button/pair-button.component.ts:87,101`

```typescript
const storedRouter = localStorage.getItem(lsKey);
localStorage.setItem(lsKey, selected);
```

**Risk:** Storing device-related data in localStorage is accessible via XSS attacks and persists on shared devices.

**Recommendation:** Use sessionStorage for less sensitive data, or implement proper encryption if storage is required.

---

### 6. Direct DOM Manipulation

**Files:**

- `src/app/icon-sprite/icon-sprite.component.ts`
- `src/app/custom-native-form/digit-input/digit-input.component.ts`
- `src/app/mqtt/pretty-json/pj.ts`

**Risk:** Extensive use of `document.createElement()`, `document.body.insertBefore()`, and similar DOM APIs bypass Angular's change detection and security model.

**Recommendation:** Prefer Angular's rendering engine and template binding. If DOM manipulation is necessary, ensure proper sanitization.

---

## Medium Issues

### 7. Unsafe URL Construction

**File:** `src/app/dyn-route/dyn-routes.routes.ts:15`

```typescript
const option = (new URL(window.location.href).searchParams.get('comp') ?? ...
```

**Risk:** Using URL parameters directly without validation could lead to injection attacks or navigation to malicious URLs.

**Recommendation:** Validate and sanitize all URL parameters before use.

---

### 8. Global Window Variable Exposure

**File:** `src/app/rvt/template/template.component.ts:100`

```typescript
window.templateForm = form;
```

**Risk:** Exposing components or forms on the global `window` object makes them accessible to any JavaScript on the page, including potential XSS payloads.

**Recommendation:** Avoid attaching Angular components to the global scope.

---

## Low Issues

### 9. Debug/Hardcoded URLs in Production Code

**Files:**

- MQTT broker URL: `wss://mqtt.eliasweb.nl`
- Imgur API: `https://api.imgur.com/3/gallery/t/`

**Risk:** Hardcoded URLs make it difficult to manage environment-specific configurations and may expose internal infrastructure.

**Recommendation:** Use environment variables or configuration services for all URLs.

---

## Summary

| Severity | Count |
| -------- | ----- |
| Critical | 3     |
| High     | 3     |
| Medium   | 2     |
| Low      | 1     |

**Overall Assessment:** The codebase contains several security issues, primarily around XSS vulnerabilities and hardcoded credentials. The most urgent issues to address are the hardcoded API key in the Tumblr component and the XSS vulnerabilities in the blogs component.

---

## Recommendations Priority

1. **Immediately:** Remove or rotate the exposed API key
2. **High Priority:** Review and sanitize all uses of `bypassSecurityTrustHtml()` and `innerHTML`
3. **High Priority:** Add authentication to MQTT connection
4. **Medium Priority:** Review localStorage usage for sensitive data
5. **Ongoing:** Conduct regular security audits
