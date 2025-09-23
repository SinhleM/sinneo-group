// File: app/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t pt-6 pb-12 text-sm text-gray-500">
      <div className="flex items-center justify-between">
        <div>© {new Date().getFullYear()} Sinneo Group. All rights reserved.</div>
        <div>Terms · Privacy · POPIA compliant</div>
      </div>
    </footer>
  );
}