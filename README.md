# Jibbit

Jibbit is a foundation software architecture for Jovens Gênios products. Built on [Next.js](https://nextjs.org), it combines shadcn UI components with tweakcn styling to create highly adaptable platforms that can be customized for different clients and products.

## Key Features

- **Customizable Design**: Each client can have their solution tailored with custom color styles, logos, and specific functionality
- **Theming System**: CSS themes can be customized at [tweakcn.com](https://tweakcn.com/) and imported into the globals.css file
- **Theme Switching**: Built-in UI button to switch between installed themes
- **Feature Flags**: Support for enabling/disabling features based on client requirements
- **Monorepo Structure**: Designed to serve as a foundation for current and future Jovens Gênios products

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family.

## Implementation Examples

- **High School Products**: Customized educational platforms with school-specific branding
- **AdaptAI**: Client-specific AI solutions with tailored features and design
- **Future Products**: Scalable foundation for upcoming Jovens Gênios offerings

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [shadcn/ui](https://ui.shadcn.com/) - re-usable components built with Radix UI and Tailwind CSS
- [tweakcn](https://tweakcn.com/) - styling system for shadcn components

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
