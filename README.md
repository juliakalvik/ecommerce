This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Report

This project is my first take on an e-commerce website using next.js and zustand.
I found it interesting and challanging, especially when it came to deploying my website to Netlify. That came with a lot of errors, so I learned a lot from doing that.

The website has:
- a homepage displaying a list of products
- a product sepcific page that the user gets redirected to when clicking on one of the products
  - on the product specific page, you can see ratings and read the reviews linked to each specific item 
  - on the product specific page, you can choose to add the product to your shopping cart. I used localstorage to make sure the products added to the cart, stays in the cart when the page reloads
- a shopping cart modal that is available from anywhere on the website, which contains the added products and the quantity + price, and the total price
  -  in the shopping cart modal, you can click on a button that clears the cart
  -  from the shopping cart, you can proceed to the checkout page
- a checkout page that for now is not working as i wish, but I'm working on that
  - when you click on "place order" on the checkout page, you get an alert message confirming your order. I am working on imporving this
- a contact page with a contact form, requiring correct info before submission


My overall experience with this project is that it was nice using Zustand for handling the cart. Working in Next.js was also nice in regards to the routing, which was easy to set up.

Here is the link to the deployed website:
https://ecomjulezshoez.netlify.app/ 


