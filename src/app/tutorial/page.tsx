import { redirect } from 'next/navigation';

export const metadata = { title: 'Tutorial | COMSNETS 2027' };

export default function TutorialPage() {
  redirect('https://www.comsnets.org/tutorials.html');
}
