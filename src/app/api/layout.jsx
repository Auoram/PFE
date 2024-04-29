"use server"
import { Suspense } from 'react';
import { NavigationEvents } from '../../components/NavigationEvents/NavigationEvents';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}