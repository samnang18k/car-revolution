
function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 px-6 py-8 text-center text-white">
      <p className="text-lg font-bold">
        Car<span className="text-red-500">Revolution</span>
      </p>

      <p className="mt-2 text-sm text-gray-400">
        Find your next car with confidence.
      </p>

      <p className="mt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} CarRevolution. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
