import { redirect } from 'next/navigation';

export default function AdminDashboard() {
  // Directly redirect to the OC management page for now
  redirect('/admin/oc');
}
