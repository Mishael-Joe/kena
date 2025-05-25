/**
 * Footer component with copyright
 *
 * Features:
 * - Copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 md:px-6 py-6">
        {/* Bottom Footer */}
        <div className=" flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Built by Ziv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
