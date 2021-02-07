export default function Footer() {
  return (
    <footer className="absolute bottom-0 h-16 w-full flex justify-center items-center">
      <span className="text-gray-900 dark:text-gray-100">
        Copyright © {new Date().getFullYear()} Devin Shoemaker
      </span>
    </footer>
  );
}
