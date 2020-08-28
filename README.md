# flo shop
front end for online shop

Forked from https://github.com/brxck/gatsby-starter-stripe

## Prerequisites
1. Stripe account and public/private keys

2. Netlify account with auth activated

3. Dependency gatsby-soutrce-stripe does not yet handle downloading pictures from stripe with new price API. PR pending

   For now its been changed locally in npm modules:
   ```
   FileDownloadService ln 33 : change 'sku' to 'price'

   Helpers/ExtractUrls ln 13: change 'sku' to 'price
   ```

## Getting Started

1. **Start development servers**

   You will need to install and configure the [Netlify CLI](https://docs.netlify.com/cli/get-started/): `npm install netlify-cli -g`

   To start the development servers for Gatsby & [Netlify Functions](https://github.com/netlify/netlify-lambda#usage) simply run [Netlify Dev](https://www.netlify.com/products/dev).

   ```sh
   netlify dev
   ```

   Your site is accessible at `http://localhost:8888`!

   > :warning: Make sure to use the proxied _Netilfy Dev_ server at `:8888`! Otherwise your Gatsby application will not be able to access your Netlify Functions.


2. **Deploy to [Netlify](https://www.netlify.com/docs)**

   ```sh
   netlify deploy
   ```

## TODO
1. stripe webhook to mark product as inactive after successful order
2. locally mark product as inactive after being put in cart - limit orders to 1 for each item

