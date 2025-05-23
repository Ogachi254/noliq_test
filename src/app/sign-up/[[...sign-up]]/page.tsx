import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="ml-64 flex items-center justify-center min-h-screen bg-cream">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'bg-accent text-dark hover:bg-opacity-80',
              card: 'bg-cream',
              headerTitle: 'text-dark',
              formFieldInput: 'border-dark bg-cream text-dark',
            },
          }}
        />
      </div>
    </div>
  );
}