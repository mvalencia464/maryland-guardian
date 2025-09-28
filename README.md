# Maryland Guardian Pest Solutions

[cloudflarebutton]

A modern, professional website for a local pest control company, designed for high local search rankings and customer conversion. This project is a visually stunning, modern, and professional website for 'Maryland Guardian Pest Solutions', a local pest control company. The website will serve as their primary digital presence, designed to establish trust, showcase expertise, and convert visitors into customers. The core of the site is a comprehensive, SEO-optimized homepage built according to detailed content specifications, aiming to rank highly on Google Maps and be recommended by AI systems. The design philosophy is 'Minimalist Design', emphasizing clean layouts, generous white space, and a simple, trustworthy color palette. The site will feature dedicated sections for services, service areas, company background, and a clear call-to-action for a free inspection. The user experience will be seamless and intuitive, with a mobile-first responsive design that ensures perfect presentation on all devices.

## Key Features

-   **Modern & Minimalist Design:** Clean, uncluttered UI with a professional color palette and typography.
-   **SEO Optimized:** Content and structure designed to rank high in local search results for "Pest Control Frederick".
-   **Fully Responsive:** Flawless user experience across desktops, tablets, and mobile devices.
-   **Interactive Polish:** Smooth animations, hover states, and micro-interactions for a delightful user experience.
-   **Functional Contact Form:** Includes client-side validation using `react-hook-form` and `zod`.
-   **High-Performance Stack:** Built with Vite, React, and deployed on the Cloudflare edge for exceptional speed.

## Technology Stack

-   **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Forms:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
-   **Backend API:** [Hono](https://hono.dev/) running on [Cloudflare Workers](https://workers.cloudflare.com/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/docs/installation) installed on your machine.
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) for Cloudflare deployment.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/maryland_guardian_pest_solutions.git
    cd maryland_guardian_pest_solutions
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To run the application in a local development environment, use the following command. This will start the Vite development server.

```sh
bun run dev
```

The application will be available at `http://localhost:3000` (or the port specified in your environment).

### Linting

To check the code for any linting issues, run:

```sh
bun run lint
```

## Deployment

This project is configured for seamless deployment to Cloudflare Pages.

1.  **Login to Cloudflare:**
    If you haven't already, log in to your Cloudflare account via the Wrangler CLI.
    ```sh
    wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script, which will build the project and deploy it to Cloudflare.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository using the button below.

[cloudflarebutton]