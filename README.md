# Rapid Shipping

Multilingual static website for shipping services, schedules, pricing, and customer contact.

## Repository structure

HTML pages are at the repository root; styles, images, scripts, partials, and translations are organized in dedicated directories.

## Local development

The site has no build step. Open index.html directly or serve the repository with a local static server:

    python -m http.server 8000

## Repository hygiene

- Do not commit credentials, local environment files, virtual environments, generated caches, or build output.
- Keep project documentation factual and update it alongside behavioral or deployment changes.
- Preserve database and project-data files unless their removal has been reviewed separately.
