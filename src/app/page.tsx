import TableComponent from '../app/components/table';

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto mt-4 max-lg:px-4 '>
      <div className='text-center my-6 flex flex-col gap-4 dissolveInTopVisible'>
        <h1 className='text-2xl font-bold'>Filter Table App</h1>
      </div>
      <TableComponent  />
   </main>
  );
}
