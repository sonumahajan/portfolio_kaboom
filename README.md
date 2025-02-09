# portfolio_kaboom

Portfolio using Kaboom JS

# To host your Vite project from your repository portfolio_kaboom on GitHub Pages at https://sonumahajan.github.io/portfolio_kaboom/

## Step 1: Update vite.config.js

First, you'll need to configure Vite to correctly build your project for deployment on GitHub Pages.
Open the vite.config.js file in your repository.
Add the base option in the configuration to specify the repository name:

// vite.config.js
export default {
base: '/portfolio_kaboom/', // Set this to the repository name
// Other configurations...
}

This will ensure that Vite correctly handles assets and routing when the site is deployed under a subdirectory (like portfolio_kaboom).

## Step 2: Build your project

In your local environment, run the following command to build the project:

npm run build

This will generate a dist folder containing the production-ready build of your app.

## Step 3: Deploy to GitHub Pages

You will need to install gh-pages, a package to help you deploy your site to GitHub Pages.
npm install --save-dev gh-pages
Add the following scripts to your package.json:

"scripts": {
"deploy": "gh-pages -d dist",
"predeploy": "npm run build"
}

The predeploy script will run the build command before deploying.
The deploy script will push the contents of the dist folder to the gh-pages branch.

## Step 4: Deploy your project

Run the following command to deploy your app to GitHub Pages:

npm run deploy

This will push the contents of the dist folder to the gh-pages branch on your repository.

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub (https://github.com/sonumahajan/portfolio_kaboom).
2. Click on the Settings tab.
3. Scroll down to the Pages section.
4. In the Source dropdown, select the gh-pages branch.
5. Click Save.

## Step 6: Access Your Site

After GitHub Pages has finished deploying your site, you should be able to access it at:

https://sonumahajan.github.io/portfolio_kaboom/
