# novu-bridge-svc

This novu bridge microservice, as the name suggests acts as a bridge between running instance of novu and twoMatches notification specs in the form of workflows.

## Getting Started

To run the development server, run:

```bash
npm run dev
```

By default, the [Next.js](https://nextjs.org/) server will start and your state can be synchronized with Novu Cloud via the Bridge Endpoint (default is `/api/novu`). Your server will by default run on [http://localhost:4000](http://localhost:4000).

## Directory structure

```
.
├── .github
│   └── workflows
│       └── novu.yml
├── README.md
├── app
│   ├── api
│   │   └── novu
│   │       └── route.ts
│   ├── novu
│   │   ├── emails
│   │   │   └── novu-onboarding-email.tsx
│   │   └── workflows
│   │       ├── index.ts
│   │       └── welcome-onboarding-email
│   │           ├── index.ts
│   │           ├── schemas.ts
│   │           ├── types.ts
│   │           └── workflow.ts
│   └── page.tsx
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── tailwind.config.ts
└── tsconfig.json
```
