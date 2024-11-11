# Next.js SaaS Starter for African Markets

A production-ready template for building SaaS applications targeting the African market, built with Next.js and featuring comprehensive local payment integrations.

**Demo: [https://next-saas-starter-demo.vercel.app](https://next-saas-starter-demo.vercel.app)**

## 🚀 Coming Next Week

- Paystack Integration for seamless local payments
- MPESA Integration for mobile money
- Multi-currency support for African markets
- Local payment webhook handling

## ✨ Features

### Authentication & Users

- Email & social login authentication
- Role-based access control
- Team management
- User profile management

### Subscription & Payments

- Paystack integration for local payments
- Multiple subscription plans
- Usage-based billing
- Payment history & invoicing
- Multi-currency support
- MPESA integration (coming soon)

### Developer Experience

- TypeScript for type safety
- API documentation
- Database migrations
- Environment management
- Pre-configured testing setup

### UI/UX

- Responsive dashboard
- Dark/light mode support
- Loading states
- Error handling
- Toast notifications

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Payments**: [Paystack](https://paystack.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/farajabien/next-saas-starter
cd next-saas-starter

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env

# Setup database
pnpm db:setup
pnpm db:migrate
pnpm db:seed

# Start development server
pnpm dev
```

## 💳 Testing Payments

### Test Cards for Paystack (Coming Soon)

- Card Number: `4084 0840 8408 4081`
- Expiration: Any future date
- CVV: Any 3 digits

### MPESA Testing (Coming Soon)

Documentation for MPESA testing will be available with the upcoming integration.

## 🌍 African Market Focus

This template is specifically designed for businesses targeting the African market with features like:

- Local payment method integrations (Paystack, MPESA)
- Multi-currency support for African currencies
- Mobile-first design approach
- Optimized for lower bandwidth conditions
- Local regulatory compliance considerations

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

- [Setup Guide](./docs/setup.md)
- [Payment Integration](./docs/payments.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guide](./docs/contributing.md)

## 🚀 Deployment

### Environment Variables

```bash
# Required variables
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Payment integration (Coming Soon)
PAYSTACK_SECRET_KEY=
PAYSTACK_PUBLIC_KEY=
MPESA_CONSUMER_KEY=
MPESA_CONSUMER_SECRET=
```

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/farajabien/next-saas-starter)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## ⭐️ Support

If you find this template helpful, please consider giving it a star! Also, don't forget to follow me on:

- Twitter: [@farajabien](https://twitter.com/farajabien)
- GitHub: [@farajabien](https://github.com/farajabien)

## 👥 Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) to learn about our development process and how to propose bugfixes and improvements.

## 🙏 Acknowledgments

This template builds upon the excellent work of many open source projects and was inspired by various SaaS platforms in the African market.
