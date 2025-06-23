'use server';

import { signIn, signOut } from '@/auth';

export const signOutAction = async () => {
  await signOut({ redirectTo: '/login' });
};

export const signInAction = async () => {
  'use server';
  await signIn('google', { redirectTo: '/' });
};
