---
title: "All the cool photos live here"
date: 2019-02-11T18:25:55-08:00
---

This is a photo gallery demo project for Netlify Large Media made with the photos from [Unsplash](https://unsplash.com/) and [Hugo](https://gohugo.io/).

You can browse the code for this site on [GitHub](https://github.com/netlify/netlify-photo-gallery/). This project has two branches:

**[master](https://github.com/netlify/netlify-photo-gallery/)**: A photo gallery that _doesn't use_ Netlify Large Media feature. You can go to [README](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md) to see how you can deploy this with your Netlify account and start using Large Media feature.

**[large-media-sample](https://github.com/netlify/netlify-photo-gallery/tree/large-media-sample)**: A photo gallery that uses Netlify Large Media feature. You can go to a [static/images](https://github.com/netlify/netlify-photo-gallery/tree/large-media-sample/static/images) folder to see how large media assets are managed with Git. This branch is deployed as [https://netlify-photo-gallery.netlify.com/](https://netlify-photo-gallery.netlify.com/) demo page.

### How to start using this?

If you want to try deploying your photo gallery, please go to the [README](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md) for how to do it.

If you want to contribute to the existing photo gallery site _that you have an access to (note: you don't have an access to https://netlify-photo-gallery.netlify.com/ unless you work for Netlify!)_, you can check out [Contributing to a repository with Large Media enabled](https://www.netlify.com/docs/large-media/#contributing-to-a-repository-with-large-media-enabled) documentation for how to prepare.

Here is how to add some photos to the gallery:

1. Add some images in `static/images` folder, and the info to `data/photos.json`
   * You can check which files/suffix are currently tracked by checking `.gitattributes` file
2. Once it's done, you can `git add`, `git commit`, then `git push` to push them to Netlify/Large Media!
3. By running `git lfs ls-files`, you can double check which files are managed by Large Media.

With Netlify Large Media, you can do a cool thing like image transformation. You can see the [documentation](https://www.netlify.com/docs/image-transformation/) for more detail.