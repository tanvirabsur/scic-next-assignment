# scic-next-assignment

This is a Next.js project for a niche service marketplace.

## Description

This project is a web application built with Next.js. It appears to be a marketplace for niche services, with features for browsing products, viewing product details, and user authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js
* npm or yarn

### Installing

1. Clone the repo:
   ```sh
   git clone https://github.com/your_username/scic-next-assignment.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

*   **Product Listing:** Browse a list of products or services.
*   **Product Details:** View detailed information for each product.
*   **User Authentication:** A login page is available for user authentication.
*   **Responsive Design:** The application is built with responsive design in mind.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for production
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
*   [daisyUI](https://daisyui.com/) - A component library for Tailwind CSS
*   [Material-UI](https://mui.com/) - A popular React UI framework
*   [Lucide React](https://lucide.dev/) - A library of simply beautiful icons

## Folder Structure

```
.
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── Niche service marketplace-amico.png
│   ├── products.json
│   ├── vercel.svg
│   └── window.svg
└── src
    └── app
        ├── favicon.ico
        ├── globals.css
        ├── layout.js
        ├── page.js
        ├── (Routing page)
        │   ├── login
        │   │   └── page.jsx
        │   └── products
        │       ├── page.jsx
        │       └── [id]
        │           └── page.jsx
        └── Components
            ├── FetuardProducts.jsx
            ├── Footer.jsx
            ├── Hero.jsx
            ├── Navbar.jsx
            └── ProductCard.jsx
```

## Screenshots

(Add screenshots of your application here)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.