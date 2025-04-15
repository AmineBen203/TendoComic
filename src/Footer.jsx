export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-700 text-center text-sm">
        <div className="mb-3">
          <a
            href="https://discord.gg/t5CpXaK7QY"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-white transition"
          >
            Discord
          </a>
          |
          <a
            href="https://www.instagram.com/bruce.wayne39"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-white transition"
          >
            Instagram
          </a>
          |
          <a
            href="mailto:contact@tendocomic.me"
            className="mx-2 hover:text-white transition"
          >
            Email
          </a>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} TendoComic. All rights reserved.
        </p>
      </footer>
    );
  }
  