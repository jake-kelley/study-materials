# 🎓 Certification Study Materials

A personal, research-backed hub of exam study guides — each with a high-level overview, a thorough deep-dive, community-sourced study-material recommendations (Reddit consensus), and a dense one-page **"Cram Jam"** for the day of the exam.

👉 **View it:** https://jake-kelley.github.io/study-materials/

## Certifications covered

| Cert | Code | Guide | Cram |
|------|------|-------|------|
| AWS Solutions Architect – Associate | SAA-C03 | [guide](saa/index.html) | [cram](saa/cram.html) |
| Splunk Core Certified Power User | SPLK-1002 | [guide](splunk-power-user/index.html) | [cram](splunk-power-user/cram.html) |
| CompTIA Security+ | SY0-701 | [guide](security-plus/index.html) | [cram](security-plus/cram.html) |
| Microsoft Azure — Designing Infrastructure Solutions | AZ-305 | [guide](az-305/index.html) | [cram](az-305/cram.html) |
| HashiCorp Terraform Associate | 004 | [guide](terraform-associate/index.html) | [cram](terraform-associate/cram.html) |

## What each guide contains

- **Fixed left-panel table of contents** with scrollspy (stays on screen and tracks your position as you scroll).
- **High-level overview** — exam-at-a-glance, domains/weightings, a service/concept snapshot, and a quick study plan. Overview items link straight into the deep-dive sections.
- **Thorough study guide** — every exam domain/objective, decision tables, and service/command references.
- **Study materials** — the most commonly recommended courses, practice exams, and free resources, synthesized from Reddit and community write-ups (with sources cited).
- **Retention-based study plan** — built on evidence-based learning (active recall, spaced repetition, interleaving, the Feynman technique, hands-on practice), not just "watch videos and cram."
- **⚡ Cram Jam** — a dense, print-friendly one-pager (`cram.html`) to speed-read right before the exam.

## Structure

```
study-materials/
├── index.html              # hub landing page
├── assets/
│   ├── style.css           # shared guide styles (per-cert color themes)
│   ├── cram.css            # dense cram-sheet styles (print-friendly)
│   └── scrollspy.js        # shared TOC scrollspy
├── saa/                    # each cert: index.html (guide) + cram.html
├── splunk-power-user/
├── security-plus/
├── az-305/
└── terraform-associate/
```

## Sources & caveats

Guides are compiled from official exam guides/objectives and community consensus (r/AWSCertifications, r/Splunk, r/CompTIA, r/AzureCertification, r/Terraform + first-hand pass write-ups). A few notes:

- **Verify service limits, pricing, and the current exam version** against official vendor documentation before your exam — figures are study aids, not guarantees.
- **Terraform Associate 004** is built against Terraform 1.12.
- **Security+ SY0-701** domain weightings and objectives were verified verbatim against the official CompTIA objectives PDF.

> Not affiliated with or endorsed by AWS, Splunk, CompTIA, Microsoft, or HashiCorp.
