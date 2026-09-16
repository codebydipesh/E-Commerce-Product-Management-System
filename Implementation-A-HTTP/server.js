const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    // ===============================
    // CSS FILE
    // ===============================

    if (req.url === "/style.css") {

        const cssPath = path.join(__dirname, "public", "style.css");

        fs.readFile(cssPath, (err, data) => {

            if (err) {

                res.writeHead(404);
                res.end("CSS file not found");

            } else {

                res.writeHead(200, {
                    "Content-Type": "text/css"
                });

                res.end(data);

            }

        });

        return;
    }


    // ===============================
    // HOME PAGE
    // ===============================

    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.write(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>My E-Commerce Website</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <nav class="navbar">

                    <div class="logo">
                        🛒 My E-Commerce
                    </div>

                    <div>
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                        <a href="/category/Electronics">Electronics</a>
                        <a href="/category/Clothing">Clothing</a>
                    </div>

                </nav>


                <main class="container">

                    <div class="hero">

                        <h1>🛒 My E-Commerce Website</h1>

                        <p>
                            Welcome to our online store!
                        </p>

                        <p>
                            Find useful products at simple
                            and affordable prices.
                        </p>

                        <a href="/products" class="button">
                            View Products
                        </a>

                    </div>


                    <div class="categories">

                        <h2>Shop by Category</h2>

                        <a href="/category/Electronics">
                            Electronics
                        </a>

                        <a href="/category/Clothing">
                            Clothing
                        </a>

                    </div>

                </main>


                <footer class="footer">
                    <p>© 2026 My E-Commerce Website</p>
                </footer>

            </body>

            </html>
        `);

        res.end();

    }


    // ===============================
    // PRODUCTS PAGE
    // ===============================

    else if (req.url === "/products" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.write(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>Our Products</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <nav class="navbar">

                    <div class="logo">
                        🛒 My E-Commerce
                    </div>

                    <div>
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                        <a href="/category/Electronics">
                            Electronics
                        </a>
                        <a href="/category/Clothing">
                            Clothing
                        </a>
                    </div>

                </nav>


                <main class="container">

                    <h1>Our Products</h1>

                    <p>
                        Browse our available products below.
                    </p>


                    <div class="product-grid">


                        <div class="product-card">

                            <h2>Wireless Headphones</h2>

                            <p class="price">
                                ₹2,000
                            </p>

                            <p class="category">
                                Category: Electronics
                            </p>

                            <p>
                                Good quality wireless
                                headphones with clear sound.
                            </p>

                            <p>✅ In Stock</p>

                            <a href="/products/1" class="button">
                                View Details
                            </a>

                        </div>


                        <div class="product-card">

                            <h2>Smart Watch</h2>

                            <p class="price">
                                ₹3,500
                            </p>

                            <p class="category">
                                Category: Electronics
                            </p>

                            <p>
                                Smart watch with useful
                                features for everyday use.
                            </p>

                            <p>✅ In Stock</p>

                            <a href="/products/2" class="button">
                                View Details
                            </a>

                        </div>


                        <div class="product-card">

                            <h2>Casual T-Shirt</h2>

                            <p class="price">
                                ₹800
                            </p>

                            <p class="category">
                                Category: Clothing
                            </p>

                            <p>
                                Comfortable casual cotton
                                T-shirt for everyday use.
                            </p>

                            <p>❌ Out of Stock</p>

                            <a href="/products/3" class="button">
                                View Details
                            </a>

                        </div>


                    </div>


                    <div class="categories">

                        <h2>Categories</h2>

                        <a href="/category/Electronics">
                            Electronics
                        </a>

                        <a href="/category/Clothing">
                            Clothing
                        </a>

                    </div>

                </main>


                <footer class="footer">
                    <p>© 2026 My E-Commerce Website</p>
                </footer>

            </body>

            </html>
        `);

        res.end();

    }


    // ===============================
    // PRODUCT DETAILS
    // ===============================

    else if (
        req.url.startsWith("/products/") &&
        req.method === "GET"
    ) {

        const id = req.url.split("/")[2];

        let product;

        if (id === "1") {

            product = {
                name: "Wireless Headphones",
                price: "₹2,000",
                category: "Electronics",
                description:
                    "Good quality wireless headphones with clear sound."
            };

        }

        else if (id === "2") {

            product = {
                name: "Smart Watch",
                price: "₹3,500",
                category: "Electronics",
                description:
                    "Smart watch with useful features for everyday use."
            };

        }

        else if (id === "3") {

            product = {
                name: "Casual T-Shirt",
                price: "₹800",
                category: "Clothing",
                description:
                    "Comfortable casual cotton T-shirt for everyday use."
            };

        }

        else {

            res.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.end(`
                <h1>404 - Product Not Found</h1>

                <p>
                    Sorry, this product does not exist.
                </p>

                <a href="/products">
                    Back to Products
                </a>
            `);

            return;
        }


        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.write(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>${product.name}</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <nav class="navbar">

                    <div class="logo">
                        🛒 My E-Commerce
                    </div>

                    <div>
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                    </div>

                </nav>


                <main class="container">

                    <div class="details-card">

                        <h1>${product.name}</h1>

                        <p class="price">
                            ${product.price}
                        </p>

                        <p>
                            <strong>Category:</strong>
                            ${product.category}
                        </p>

                        <p>
                            <strong>Description:</strong>
                            ${product.description}
                        </p>

                        <p>
                            ✅ Product information available
                        </p>

                        <a href="/products" class="button">
                            ← Back to Products
                        </a>

                    </div>

                </main>


                <footer class="footer">
                    <p>© 2026 My E-Commerce Website</p>
                </footer>

            </body>

            </html>
        `);

        res.end();

    }


    // ===============================
    // CATEGORY ROUTE
    // ===============================

    else if (
        req.url.startsWith("/category/") &&
        req.method === "GET"
    ) {

        const category = req.url.split("/")[2];

        let content = "";

        if (category.toLowerCase() === "electronics") {

            content = `
                <h1>Electronics Products</h1>

                <div class="product-grid">

                    <div class="product-card">

                        <h2>Wireless Headphones</h2>

                        <p class="price">
                            ₹2,000
                        </p>

                        <p>
                            Good quality wireless headphones
                            with clear sound.
                        </p>

                        <a href="/products/1" class="button">
                            View Details
                        </a>

                    </div>


                    <div class="product-card">

                        <h2>Smart Watch</h2>

                        <p class="price">
                            ₹3,500
                        </p>

                        <p>
                            Smart watch with useful features.
                        </p>

                        <a href="/products/2" class="button">
                            View Details
                        </a>

                    </div>

                </div>
            `;

        }

        else if (category.toLowerCase() === "clothing") {

            content = `
                <h1>Clothing Products</h1>

                <div class="product-grid">

                    <div class="product-card">

                        <h2>Casual T-Shirt</h2>

                        <p class="price">
                            ₹800
                        </p>

                        <p>
                            Comfortable casual cotton
                            T-shirt for everyday use.
                        </p>

                        <a href="/products/3" class="button">
                            View Details
                        </a>

                    </div>

                </div>
            `;

        }

        else {

            res.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.end(`
                <h1>404 - Category Not Found</h1>

                <p>
                    Sorry, this category does not exist.
                </p>

                <a href="/products">
                    View Products
                </a>
            `);

            return;
        }


        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.write(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>${category} Products</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <nav class="navbar">

                    <div class="logo">
                        🛒 My E-Commerce
                    </div>

                    <div>
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                    </div>

                </nav>


                <main class="container">

                    ${content}

                    <br>

                    <a href="/products" class="button">
                        View All Products
                    </a>

                </main>


                <footer class="footer">
                    <p>© 2026 My E-Commerce Website</p>
                </footer>

            </body>

            </html>
        `);

        res.end();

    }


    // ===============================
    // PAGE NOT FOUND
    // ===============================

    else {

        res.writeHead(404, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(`
            <!DOCTYPE html>
            <html>

            <head>
                <title>404 - Page Not Found</title>
                <link rel="stylesheet" href="/style.css">
            </head>

            <body>

                <main class="container">

                    <div class="details-card">

                        <h1>😕 404 - Page Not Found</h1>

                        <p>
                            The page you are looking for
                            does not exist.
                        </p>

                        <a href="/" class="button">
                            Back to Home
                        </a>

                    </div>

                </main>

            </body>

            </html>
        `);

        res.end();

    }

});


// ===============================
// START SERVER
// ===============================

server.listen(3000, () => {

    console.log(
        "Server is running on http://localhost:3000"
    );

});