'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setMessage('Subscribed successfully!');
        setEmail('');
      } else {
        setMessage('Subscription failed. Try again.');
      }
    } catch {
      setMessage('An error occurred.');
    }
  };

  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-6">Stay updated with the latest events and offers!</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border rounded text-dark"
          required
        />
        <button type="submit" className="bg-accent text-dark py-2 px-4 rounded hover:bg-opacity-80">
          Subscribe
        </button>
        {message && <p className="mt-4">{message}</p>}
      </form>
    </section>
  );
}