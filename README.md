# easySIPp.com Website

This repository hosts the official website for **easySIPp**, a powerful, web-based graphical user interface (GUI) for the SIPp (SIP performance testing tool).

The website, available at [**easysipp.com**](https://easysipp.com), provides comprehensive information about easySIPp, its key features, how to get started, and resources for contributions.

## About easySIPp

easySIPp simplifies SIP/VoIP testing by offering an intuitive web interface to create, run, and visualize SIPp test scenarios, eliminating the need for complex command-line interactions. It is built with Python (Django) for the backend and modern web technologies for the frontend.

**Find the main easySIPp project repository here:** [https://github.com/kiran-daware/easySIPp](https://github.com/kiran-daware/easySIPp)

## Technologies Used

This website is built with:

* [**Hugo**](https://gohugo.io/): A fast and flexible static site generator.

* HTML5, CSS3, JavaScript

## Getting Started (Local Development)

To run this website locally on your machine:

1.  **Clone the repository:**

    ```
    git clone [https://github.com/your-username/easysipp-website.git](https://github.com/your-username/easysipp-website.git)
    cd easysipp-website

    ```

    (Replace `your-username` with your GitHub username)

2.  **Install Hugo:**
    If you don't have Hugo installed, follow the official installation guide: [gohugo.io/getting-started/installing](https://gohugo.io/getting-started/installing/)
    Ensure you install the **extended** version of Hugo, which is required for PostCSS processing.


3.  **Run the Hugo development server:**

    ```
    hugo server

    ```

    Your site will be available at `http://localhost:1313/` (or another port if 1313 is in use).

## Deployment

This website is automatically deployed to GitHub Pages via GitHub Actions.
Any push to the `main` branch triggers the deployment workflow defined in `.github/workflows/hugo.yml`.

The site is hosted on a custom domain: [**easysipp.com**](https://easysipp.com).

## Contributing to the Website

We welcome contributions to improve the website's content, design, or functionality!

To contribute:

1.  Fork this repository.

2.  Create a new branch (`git checkout -b feature/your-feature-name` or `bugfix/issue-description`).

3.  Make your changes.

4.  Commit your changes (`git commit -m 'Add new feature'`).

5.  Push to your branch (`git push origin feature/your-feature-name`).

6.  Open a Pull Request to the `main` branch of this repository.

Please ensure your changes align with the existing code style and website purpose.

## License

This project is open-source and licensed under the [MIT License](/LICENSE).

## Contact & Support

For any questions or support related to the easySIPp software, please refer to the main [easySIPp GitHub repository](https://github.com/kiran-daware/easySIPp).

For issues or suggestions specifically regarding this website, please open an issue on this repository.
