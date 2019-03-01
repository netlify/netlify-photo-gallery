# Netlify Photo Gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d853017-7159-4520-b9ee-cc9951715434/deploy-status)](https://app.netlify.com/sites/netlify-photo-gallery/deploys)

This is a photo gallery demo project for Netlify Large Media made with photos from [Unsplash](https://unsplash.com/) and built with [Hugo](https://gohugo.io/).

This project has two branches:

* **master:** A photo gallery that does _not_ have Netlify Large Media enabled yet. You can follow the [README instructions](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md/#how-to-deploy-your-own-photo-gallery-with-large-media) to deploy this with your Netlify account and start using Large Media yourself.
* **large-media-sample:** A copy of the photo gallery, with Netlify Large Media enabled. You can go to the files in the [static/images](https://github.com/netlify/netlify-photo-gallery/tree/large-media-sample/static/images) folder to see how large media assets are managed with Git. This branch is used to deploy the demo site, [https://netlify-photo-gallery.netlify.com/](https://netlify-photo-gallery.netlify.com/).

## How to deploy your own photo gallery with Netlify Large Media

1. Deploy to Netlify with "Deploy to Netlify" button. This will create a new Netlify site and copy the repository to your GitHub account.

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-photo-gallery)
2. Find your newly created repository on GitHub and clone it to your local computer with `git clone`.
3. Follow the instructions for [Enabling Netlify Large Media](https://www.netlify.com/docs/large-media/#enabling-netlify-large-media) to enable Large Media for the newly deployed site.
4. Specify which files to track using the `git lfs track` command. The following example tracks `jpg` and `png` files. Tracking them is required for this photo gallery, so you can start tracking them:
   * To track jpg files: `git lfs track "*.jpg"`.
   * To track png files: `git lfs track "*.png"`.
5. Find out more about how to configure file tracking in [the documentation](https://www.netlify.com/docs/large-media/#large-media-file-tracking-configuration).
7. After making sure you `git add`  and `git commit` your changes, run `git push origin master` to push your changes to GitHub. It'll be automatically deployed to Netlify using Large Media.
8. When your deploy is done, try running transformations with the image files. For example, you can tweak the layout file at `layouts/photos_s/list.html`.

## Running the site locally

This site is built with Hugo, and works with Hugo version 0.42 and above. Run `hugo version` in your teminal to see if you have Hugo installed. If it's not installed, or you have a version below 0.42, follow the [Hugo documentation](https://gohugo.io/getting-started/installing) to install the current version.

When Hugo is installed, `cd` into this repository and run:

```
hugo server
```

After building the site, the terminal will output the URL for the local server. It will hot reload when you save changes.

## To add photos to the gallery:

1. Add some images in `static/images` folder, and the info to `data/photos.json`.
   * You can check which files/suffix are currently tracked by checking `.gitattributes` file.
2. Once it's done, you can `git add`, `git commit`, then `git push` to push them to Netlify Large Media!
3. By running `git lfs ls-files`, you can double check which files are managed by Large Media.

## Get fancy

With Netlify Large Media, you can do cool things like image transformation. You can visit the [documentation](https://www.netlify.com/docs/image-transformation/) for more detail.