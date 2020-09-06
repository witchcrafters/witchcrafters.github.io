![](https://github.com/expede/witchcraft/raw/master/brand/Wordmark/PNG/WC-wordmark-lrg@2x.png)

The `Witchcraft` website, built with [bridgetownrb](https://bridgetownrb.com) and [tailwindcss](https://tailwindcss.com/)

Join the discussion at https://witchcraft.chat

- [Development Setup](#development-setup)
- [Contribution Guidelines](#contribution-guidelines)
  - [CSS and JS](#css-and-js)
  - [Directory structure explained](#directory-structure-explained)

## Development Setup

### Step 0: Requirements

- ruby 2.7.1 and bundler (`gem install bundler`)
- Node.js and yarn

### Step 1: Setup your local development environment

1. `git clone` this repo
2. `cd` into it
3. Run `bundle install`
4. Run `yarn install`

### Step 2: Start the development server

```
yarn start
```

The page is available under http://localhost:4000.

Any file edits will immediately update inside your browser. ✨

## Contribution Guidelines

- #TODO

### CSS and JS

We are using [Tailwind CSS](https://tailwindcss.com) for the styling of our website.

Sometimes we do also need to add custom css for specific components.

The css entrypoint is `frontend/styles/index.scss`.

The js entrypoint is `frontend/javascript/index.js`.

### Directory structure explained

- **`frontend/`** contains all the static javascript and stylesheets
- **`src/`** contains all content (pages, layout, components, images)

### The `src/` directory

Contains all **content**, like pages, guides written in markdown, layouts, 
components and images.

##### `_guides/`

Directory for all guide entries. Each file should be a markdown file.

##### `_media/`

Directory for all the external media entries about `Witchcraft` like podcasts, conference talks etc.

##### `_layouts/`

Directory for all layout files. Different pages can have different layouts.
For example the regular page layout `default.liquid` is located here. Read more
about layouts in bridgetownrb here: https://www.bridgetownrb.com/docs/layouts

##### `_components/`

Directory for all component files, like navbar, footer, etc.

To include a component inside a layout

```liquid
{% render "shared/navbar", page: page, navigation: site.data.navigation %}
```

Read more here: https://www.bridgetownrb.com/docs/components

##### `assets/img`

Insert new images for content here.
