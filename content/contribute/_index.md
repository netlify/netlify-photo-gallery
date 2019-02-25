---
title: "Contribute"
date: 2019-02-11T18:16:19-08:00
---

## Before starting

This contribution guide only works **after** you enabled the Large Media feature for the site. To enable the Large Media feature, please take a look [README](https://github.com/netlify/netlify-photo-gallery/blob/master/README.md).

## How to contribute

### Initial setup

1. Install the latest version of Netlify’s CLI with `npm install netlify-cli -g`
2. Install Git LFS if you haven’t already: https://git-lfs.github.com/
   * You can check to see if you have it installed with `git lfs version`
3. Install CLI plugin for Large Media: `netlify plugins:install netlify-lm-plugin`
4. Run `netlify lm:install` to setup the local environment
   * This command will install things like Netlify's Git Credential helper, if it's not installed already
   * Watch for the banner upon completion, then run the designated command to use Large Media in your current shell
5. Clone the repository of your photo gallery
   * By default, if the setup is done correctly, this will clone/download all the original assets too
   * If you _don't_ want to download assets, you can add `GIT_LFS_SKIP_SMUDGE=1` in front of the `git clone` command
6. Link the repository to Netlify site by running: `netlify init`

### Actually playing with it

1. Add some images in `static/images` folder, and the info to `data/photos.json`
   * You can check which files/suffix are currently tracked by checking `.gitattributes` file
2. Once it's done, you can `git add`, `git commit`, then `git push` to push them to Netlify/Large Media!
3. By running `git lfs ls-files`, you can double check which files are managed by Large Media.

### Caveats

* Maybe there is a new Netlify Git Credential helper released, please run `netlify lm:install` to update things
* Above is "how to contribute to the sites that are already using Netlify Large Media", so "how to use Large Media with my site" will be a bit different (see README or official doc for more information)
