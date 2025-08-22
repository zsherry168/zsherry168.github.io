export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Sherry Zhang
      </div>
    </footer>
  );
}
