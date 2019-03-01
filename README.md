# Netlify Photo Gallery

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d853017-7159-4520-b9ee-cc9951715434/deploy-status)](https://app.netlify.com/sites/netlify-photo-gallery/deploys)

This is a photo gallery demo project for Netlify Large Media made with photos from [Unsplash](https://unsplash.com/) and built with [Hugo](https://gohugo.io/).

This project has two branches:

* **master:** A photo gallery that does _not_ have Netlify Large Media enabled yet. You can follow the [README instructions](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md/#how-to-deploy-your-own-photo-gallery-with-large-media) to deploy this with your Netlify account and start using Large Media yourself.
* **large-media-sample:** A copy of the photo gallery, with Netlify Large Media enabled. You can go to the files in the [static/images](https://github.com/netlify/netlify-photo-gallery/tree/large-media-sample/static/images) folder to see how large media assets are managed with Git. This branch is used to deploy the demo site, [https://netlify-photo-gallery.netlify.com/](https://netlify-photo-gallery.netlify.com/).

**This is the `large-media-sample` branch.**

## Contributing (Netlify employees only)

To contribute to a site with Large Media enabled, you must have collaborator access or higher for the site on Netlify. The site built with this branch is editable only by members of the Netlify team. To get started:

1. Make sure you have completed the [requirements for Large Media](https://www.netlify.com/docs/large-media/#requirements), including installing Git LFS, Netlify CLI, and the Large Media CLI plugin.
2. Clone the repository and work as normal.

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