<h1 align="center">
  <br>
  <a href="https://github.com/salomonelli/best-resume-ever">
  <img src="src/assets/logo.png" alt="Markdownify" width="200"></a>
  <br>
  best-resume-ever
  <br>
</h1>

<div align="center">

[![Travis badge](https://travis-ci.org/salomonelli/best-resume-ever.svg?branch=master)](https://travis-ci.org/salomonelli/best-resume-ever)

</div>

<h4 align="center">
  :necktie: :briefcase: Build fast :rocket: and easy multiple beautiful resumes and create your best CV ever!
  <br><br>
  Made with Vue and LESS.
</h4>

<br>
<br>

<p align="left">
<p>Cool<br>
<img src="src/assets/preview/resume-cool.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-cool-rtl2.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-cool-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Creative<br>
<img src="src/assets/preview/resume-creative.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Green<br>
<img src="src/assets/preview/resume-green.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Purple<br>
<img src="src/assets/preview/resume-purple.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Side Bar<br>
<img src="src/assets/preview/resume-side-bar.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-side-bar-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Left Right<br>
<img src="src/assets/preview/resume-left-right.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-left-right-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Material Dark<br>
<img src="src/assets/preview/resume-material-dark.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-material-dark-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
<p>Oblique<br>
<img src="src/assets/preview/resume-oblique.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique-rtl.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
<img src="src/assets/preview/resume-oblique-projects.png" width="150" style="margin-right:5px; border: 1px solid #ccc;" />
</p>
</p>

<br>
<br>

## Prerequisites

### Node.js and npm Requirements

This project requires:
- **Node.js**: version 10.11.0 (as specified in package.json dependencies)
- **npm**: version 5.0.0 or higher (comes with Node.js)

To check your current versions:
```bash
node -v
npm -v
```

### Installation Recommendations

#### Option 1: Using nvm (Recommended)
We strongly recommend using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage Node.js versions:

1. **Install nvm** (if not already installed):
   ```bash
   # On macOS/Linux
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Or using Homebrew on macOS
   brew install nvm
   ```

2. **Install and use Node.js 10.11.0**:
   ```bash
   # Install Node.js 10.11.0 (required version)
   nvm install 10.11.0
   nvm use 10.11.0
   ```

3. **Verify installation**:
   ```bash
   node -v  # Should show v10.11.0
   npm -v   # Should show compatible npm version (6.x.x)
   ```

#### Option 2: Direct Installation
If you prefer not to use nvm, download Node.js directly from [nodejs.org](https://nodejs.org/en/download/).

### Troubleshooting Version Issues

If you encounter npm compatibility errors like:
```
ERROR: npm v9.5.1 is known not to run on Node.js v10.11.0
```

**Solution**: Use the correct Node.js version:
```bash
# With nvm - use the required version
nvm use 10.11.0

# If you have npm v9.x.x, downgrade to a compatible version
npm install -g npm@6.14.17
```

## How to use

1. Clone this repository.

```
git clone https://github.com/salomonelli/best-resume-ever.git
```

2. Go to the cloned directory (e.g. `cd best-resume-ever`).

3. Run `npm install`. This may take a few seconds.

4. Customize your resume in the `resume/` directory: edit your data `data.yml` and replace the default profile-picture `id.jpg` with your picture. Rename your picture as `id.jpg` and copy it in the `resume/` directory. During this step, you may find it easier to navigate with Finder or File Explorer to get to the files. This will allow you to edit files with your computers default text editor. 

5. Preview resumes with `npm run dev`. The command will start a server instance and listen on port 8080.  Open (http://localhost:8080/home) in your browser. The page will show some resume previews. To see the preview of your resume, with your picture and data, click on one layout that you like and the resume will be opened in the same window.

![Resume previews](/readme-images/resumePreviews.png)


6. Export your resume as pdf by running the command `npm run export`. In order to avoid errors due to the concurrency of two  `npm run` commands, stop the execution of the previus `npm run dev` and then type the export command.

All resumes will be exported to the `pdf/` folder.

<br>

## Creating and Updating Templates

Please read the <a href="DEVELOPER.md">developer docs</a> on how to create or update templates.

<br>

## Contribute

Feel free to add your own templates, language supports, fix bugs or improve the docs. Any kind of help is appreciated! If you make any kind of changes to an existing template, please commit them as new templates.

<br>

## Credits

This project uses several open source packages:

- <a href="https://github.com/vuejs/vue" target="_blank">Vue</a>
- <a href="https://github.com/GoogleChrome/puppeteer" target="_blank">Puppeteer</a>
- <a href="https://github.com/less/less.js" target="_blank">LESS</a>

<br>

---

> [sarasteiert.com](https://www.sarasteiert.com) &nbsp;&middot;&nbsp;
> GitHub [@salomonelli](https://github.com/salomonelli) &nbsp;&middot;&nbsp;
> Twitter [@salomonelli](https://twitter.com/salomonelli)

## License

[MIT](https://github.com/salomonelli/best-resume-ever/blob/master/LICENCE.md)
