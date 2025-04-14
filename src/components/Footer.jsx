export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bandage. Tüm hakları saklıdır.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Gizlilik Politikası
          </a>
          <a href="#" className="hover:underline">
            Şartlar ve Koşullar
          </a>
          <a href="#" className="hover:underline">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
}
