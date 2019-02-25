# Netlify Photo Gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d853017-7159-4520-b9ee-cc9951715434/deploy-status)](https://app.netlify.com/sites/netlify-photo-gallery/deploys)

This is a photo gallery demo project for Netlify Large Media made with the photos from [Unsplash](https://unsplash.com/) and Hugo.

This project has two branches:

* **master:** A photo gallery that _doesn't use_ Netlify Large Media feature. You can go to [README](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md) to see how you can deploy this with your Netlify account and start using Large Media feature.

* **large-media-sample:** A photo gallery that uses Netlify Large Media feature. You can go to a [static/images](https://github.com/netlify/netlify-photo-gallery/tree/large-media-sample/static/images) folder to see how large media assets are managed with Git. This branch is deployed as [https://netlify-photo-gallery.netlify.com/](https://netlify-photo-gallery.netlify.com/) demo page.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-photo-gallery)

## How to play with this

1. Deploy to Netlify with "Deploy to Netlify" button. This will create a new Netlify site and copy the repo to your GitHub account.
2. Clone a newly created repo to your local computer with `git clone`.
3. `netlify link` to link the local repo and the Netlify site.
   * Make sure to install Netlify CLI if you haven't: `npm install netlify-cli -g`.
4. Check if the Large Media local setup has finished already.
   * You can check it with `netlify lm:info` command.
   * Make sure to install netlify-lm-plugin plugin if you haven't: `netlify plugins:install netlify-lm-plugin`.
5. Run `netlify lm:setup` to setup the Large Media for this repository/site.
   * It will create a `.lfsconfig` file, make sure that you track this file.
6. Tweak the LFS settings with `git lfs` commands.
   * This example contains jpg and png files, and expected that both of them are tracked by LFS.
   * To track jpg files: `git lfs track *.jpg`.
   * To track png files: `git lfs track *.png`.
   * To track all files under `static/images`: `git lfs track static/images/**`.
7. `git push origin master` to push to the GitHub. It'll be automatically deployed to Netlify utlizing Large Media.
8. Try transformations with image files. You can tweak the layout file like `layouts/photos_s/list.html`.
