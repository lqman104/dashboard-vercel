import { Montserrat } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400',
});