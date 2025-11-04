# Email Audit

Lightweight email validation and fraud detection library.

## Features

- Email validation: RFC5322 compliance check
- Detects fake or throwaway emails (temporary or high-entropy patterns)
- Identifies role-based or shared inboxes like `info@`, `admin@`, `support@`
- Separator and alias checks
- Checks composition for unnatural or auto-generated addresses
- Lightweight, dependency-free, and fast
- Ideal for user signup validation, form submissions, and anti-fraud systems

## Installation

Via NPM:

```shell
npm install email-audit
```

Via Yarn:

```shell
yarn add email-audit
```

## Quick Start

```javascript
import inspect from "email-audit"

const result = inspect("j.o.h.n+ygdfs@gmail.com")

console.log(result)
```

### Output

```shell
{
  suspicious: true,
  threats: [ 
    'email_local_sep_high_density', 
    'email_tag_suspicious' 
  ]
}
```

## What It Detects
| Code                           | Description                                                        |
| ------------------------------ |--------------------------------------------------------------------|
| `email_not_valid`              | Email syntax fails RFC5322 validation                              |
| `email_local_not_found`        | Local part is missing before the `@`                               |
| `email_local_too_short`        | Local part is unusually short (<2)                                 |
| `email_local_too_long`         | Local part exceeds allowed length (>30)                            |
| `email_local_digits_only`      | Local part contains only digits                                    |
| `email_local_high_digit_ratio` | Too many digits compared to letters                                |
| `email_local_consec_digits5`   | Contains ≥5 consecutive digits                                     |
| `email_local_lacks_vowels`     | Local part has no vowels (often synthetic)                         |
| `email_local_high_entropy`     | Random-looking local part (high entropy)                           |
| `email_local_repeated_chars`   | Repeated or unnatural character patterns                           |
| `email_local_mixed_scripts`    | Contains characters from multiple alphabets (e.g. Latin + Cyrillic) |
| `email_local_emoji`            | Contains emoji or non-standard symbols                             |
| `email_local_sep_abuse`        | Too many separators (`.`, `_`, `-`)                                |
| `email_local_double_sep`       | Contains repeated separators (`..`, `__`, `--`)                    |
| `email_local_sep_high_density` | Separator density too high for a normal name                       |
| `email_role_generic`           | Role-based or shared inbox (e.g. `admin@`, `support@`)             |
| `email_is_alias`               | The email is an alias of another address (e.q. j.o.h.n@gmail is an alias of john@gmail.com) |
| `email_tag_suspicious`         | Alias tag (`+something`) appears random or high-entropy            |

## Individual Helpers

You can import and run specific checks directly:

```javascript
import {
    validateEmail,
    checkGenericRole,
    checkComposition,
    checkSeparator,
    checkSuspiciousTag,
	checkIfAlias
} from "email-audit"
```

Each helper returns an array of triggered issue codes or an empty array.

## License

[MIT](https://opensource.org/license/mit) © 2025 [Gatekeepr](https://gatekeepr.io).

## About

**email-audit** is an open-source component of [Gatekeepr](https://gatekeepr.io), a privacy-first API that blocks 
fake users and platform abuse by analyzing emails, IPs, domains, and user agents in real time.