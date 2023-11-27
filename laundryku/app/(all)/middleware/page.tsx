export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Middleware usage</h1>
      <p>
        This page is protected by using the universal{" "}
          <code>auth()</code>
        method in{" "}
          Next.js Middleware
        .
      </p>
    </div>
  )
}