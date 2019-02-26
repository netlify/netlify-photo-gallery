# Netlify Photo Gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d853017-7159-4520-b9ee-cc9951715434/deploy-status)](https://app.netlify.com/sites/netlify-photo-gallery/deploys)

This is a photo gallery demo project for Netlify Large Media made with the photos from [Unsplash](https://unsplash.com/) and built with [Hugo](https://gohugo.io/).

This project has two branches:

* **master:** A photo gallery that _doesn't use_ Netlify Large Media feature. You can go to [README](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md) to see how you can deploy this with your Netlify account and start using Large Media feature.

* **large-media-sample:** A photo gallery that uses Netlify Large Media feature. You can go to a [static/images](https://github.com/netlify/netlify-photo-gallery/tree/large-media-sample/static/images) folder to see how large media assets are managed with Git. This branch is deployed as [https://netlify-photo-gallery.netlify.com/](https://netlify-photo-gallery.netlify.com/) demo page.

## How to deploy your own photo gallery to play with it

1. Deploy to Netlify with "Deploy to Netlify" button. This will create a new Netlify site and copy the repo to your GitHub account.

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-photo-gallery)
2. Clone a newly created repo to your local computer with `git clone`.
3. Follow the step of [Enabling Netlify Large Media](https://www.netlify.com/docs/large-media/#enabling-netlify-large-media) to enable Large Media for the newly deployed site.
4. Tweak the LFS settings with the `git lfs` commands. The following example tracks `jpg` and `png` files. Tracking them is required for this photo gallery, so you can start tracking them:
   * To track jpg files: `git lfs track *.jpg`.
   * To track png files: `git lfs track *.png`.
5. Explore more for how to configure the tracking in [the documentation](https://www.netlify.com/docs/large-media/#large-media-file-tracking-configuration).
7. After making sure you `git add` changes, run `git push origin master` to push your changes to GitHub. It'll be automatically deployed to Netlify utlizing Large Media.
8. Try transformations with image files. For example, you can tweak the layout file with `layouts/photos_s/list.html`.
