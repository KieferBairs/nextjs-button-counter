// Import Counter
import Counter from "../components/Counter";

// Main page component
export default function Page() {
  return (
    <main style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>Next.js Button Counter</h1>

     {/* First Counter uses defualt props */}
     <section style={{ marginBottom: '24px'}}>
      <Counter />
     </section>

     {/* Second Counter uses custom props  */}
      <section>
      <Counter initialCount={5} intitialStep={2} />
      </section>
    </main>
  );
}


