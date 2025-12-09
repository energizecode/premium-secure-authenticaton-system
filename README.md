# E-CONNECT — Sign_up_in

A small authentication UI project (Login & Register) with a polished UI named "E-CONNECT".

## Overview

This folder contains a simple frontend for authentication pages: a landing `index.html`, `login.html`, and `register.html`, plus related JS and CSS.

## Features

- Responsive landing page (`index.html`) linking to login and register pages
- Styled login and register pages with validation helpers in JS
- Consolidated styles in `styles.css`

## Files

- `index.html` — Project landing page (links to login/register)
- `login.html` — Login page UI and form
- `register.html` — Registration page UI and form
- `login.js` — Login form behaviors and validation
- `register.js` — Register form behaviors and validation
- `styles.css` — Centralized stylesheet used across pages

## Usage

Open the project in a browser (double-click the `index.html` file or serve the folder with a simple static server).

Example (PowerShell) to open the page in the default browser:

```powershell
Start-Process "index.html"
```

Or serve with Python's simple HTTP server (for local testing):

```powershell
# from inside the Sign_up_in folder
python -m http.server 8000; Start-Process "http://localhost:8000"
```

## Notes

- This is a static frontend demo — no backend authentication or persistent storage is included.
- To integrate with a backend, connect the forms to your API endpoints and handle authentication tokens securely.

## License & Credits

- Feel free to reuse and adapt for your projects.
- Created by EnergizeCode (local project).