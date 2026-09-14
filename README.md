# Daniel Blanco — DANI PROJECTS Portfolio

Public portfolio for **Daniel Blanco**, Biomedical Engineer / Digital Health Solutions.

The site is designed to showcase private product work without publishing the underlying applications. It combines approved screenshots, synthetic demos, case studies and a Three.js product constellation.

## Public profile

- GitHub: `22danielblanco`
- Portfolio repository: `22danielblanco.github.io`
- Expected public URL: `https://22danielblanco.github.io/`
- LinkedIn: `https://www.linkedin.com/in/daniel-blanco-de-miguel/`
- Languages: Spanish / English (browser language is used on first visit; manual switch is available)

## Projects represented

1. AVI-MAMA — conversational Health AI interface
2. HealthTech Career Studio — job intelligence and ATS-aware CV workflows
3. Health Analytics Studio — operational analytics workspace
4. Data Engineering Studio — ETL / DAG authoring workspace
5. BusinessOS Studio — configurable vertical CRM
6. Aula Studio — multi-school digital platform
7. Wealthpilot — personal finance decision cockpit

AVI-MAMA currently uses two **approved real screenshots**. The other products use synthetic UI demonstrations and fictitious data so the private applications remain isolated.

## Privacy rule

**Never copy production source code, API keys, private endpoints, customer/patient data, proprietary corpora or confidential datasets into this repository.**

The portfolio must remain a presentation layer. If richer demos are added later, create sanitised standalone recreations rather than importing the real applications.

## Run locally on Windows

Install Node.js LTS. Then open PowerShell inside this folder:

```powershell
npm install
npm run dev
```

Open the address shown by Vite, normally:

```text
http://localhost:5173
```

Production test:

```powershell
npm run build
npm run preview
```

## Publish on GitHub Pages

The recommended repository name is exactly:

```text
22danielblanco.github.io
```

The included GitHub Actions workflow publishes every push to `main`.

### Easiest route if you are not used to GitHub

1. Sign in to GitHub as `22danielblanco`.
2. Create a new repository named **`22danielblanco.github.io`**.
3. Keep it **Public** for this portfolio. Do not upload any private application source code.
4. Upload the contents of this folder to the repository.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **GitHub Actions** as the source.
7. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages` to finish successfully.
8. Visit `https://22danielblanco.github.io/`.

A more detailed guide is included in [`PUBLISH_GITHUB.md`](./PUBLISH_GITHUB.md).

## Repository strategy

```text
22danielblanco (GitHub account)
│
├─ 22danielblanco.github.io       PUBLIC   ← only this portfolio
│
├─ avi-mama                       PRIVATE  ← real application
├─ healthtech-career-studio       PRIVATE
├─ health-analytics-studio        PRIVATE
├─ data-engineering-studio        PRIVATE
├─ businessos-studio              PRIVATE
├─ aula-studio                    PRIVATE
└─ wealthpilot                    PRIVATE
```

The public portfolio should never import or depend on those private repositories.

## Current design

- Vite
- Three.js animated product constellation
- Responsive dark technical visual system
- Spanish / English content
- Real screenshot gallery for AVI-MAMA
- Synthetic interactive visualisations for the remaining projects
- Privacy explanation modal
- GitHub / LinkedIn links
- GitHub Pages deployment workflow

## Updating AVI screenshots

The current public screenshots are stored in:

```text
public/projects/avi/avi-main.png
public/projects/avi/avi-visual.png
```

Replace those files with new approved screenshots using the same names to update the gallery without changing code.

## Adding screenshots for another project

Before adding any screenshot, verify that it contains no:

- patient or customer information;
- internal URLs or IP addresses;
- credentials or API keys;
- confidential company names or data;
- proprietary prompts, corpora or implementation details that should remain private.

Then add the image under `public/projects/<project>/` and update the relevant project object in `src/main.js`.
