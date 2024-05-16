# Insta App

This project is inspired by Instagram, offering users a mini social network experience where they can view posts, interact with content, and create their own posts. Users can sign in with their Google account, eliminating the need for creating new credentials. After signing in, users can like/unlike posts, comment on posts, and create new posts with their images and captions. The app serves as a photo gallery where users can share photos and inspiring captions, fostering interactions within the community. The app's theme synchronizes with the device's theme, allowing for seamless switching between dark and light modes.

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Explain the purpose of each environment variable used in the project and how to set them up.

- **GOOGLE_ID**: Used for signing in with the Google provider.
- **GOOGLE_SECRET**: Google secret used for login with Google provider.
- **NEXTAUTH_SECRET**: Random key for NextAuth.
- **NEXTAUTH_URL**: The URL where your Next.js app is hosted.
- **NEXT_PUBLIC_FIREBASE_API_KEY**: API key used for the Firebase config file.

Create a `.env` file in the root directory of your project and add the following:

```plaintext
GOOGLE_ID=your-google-id
GOOGLE_SECRET=your-google-secret
NEXTAUTH_SECRET=random-key
NEXTAUTH_URL=http://localhost:3000/
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
```

Replace `your-google-id`, `your-google-secret`, and `your-firebase-api-key` with your actual credentials.

### Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework used for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs quickly.
- [NextAuth](https://next-auth.js.org/) - A complete open-source authentication solution for Next.js applications.
- [Firebase](https://firebase.google.com/) - Provides backend services like cloud storage, authentication, and real-time database.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, Tailwind CSS, and Firebase, refer to their official documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)