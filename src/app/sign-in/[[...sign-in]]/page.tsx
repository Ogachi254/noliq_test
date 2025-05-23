import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="md:ml-64 flex items-center justify-center min-h-screen bg-cream p-4">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-md">
        <SignIn
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'w-full bg-cream shadow-none',
              formButtonPrimary: 'bg-accent text-dark hover:bg-accent-dark transition-colors',
              headerTitle: 'text-dark text-2xl font-bold',
              headerSubtitle: 'text-gray-600',
              formFieldInput: 'border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/50 bg-white text-dark rounded-lg',
              formFieldLabel: 'text-gray-700',
              socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50',
              footerActionText: 'text-gray-600',
              footerActionLink: 'text-accent hover:text-accent-dark',
              dividerLine: 'bg-gray-200',
              dividerText: 'text-gray-500'
            },
            variables: {
              colorPrimary: '#29AB87', // Your accent color
              colorText: '#121212',   // Your dark color
              colorBackground: '#FFF8F0', // Assuming cream color
              colorInputBackground: '#FFFFFF'
            }
          }}
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
}