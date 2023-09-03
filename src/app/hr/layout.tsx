import { Header, Sidebar } from 'src/components/common';

export default function HRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <section className='w-[calc(100%-300px)] float-right'>{children}</section>
    </div>
  );
}
