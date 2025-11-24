import { TextLink } from "@/components/ui/text-link";
import { SquareActivity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex flex-row items-center gap-2">
              <span className="text-xl font-semibold text-white">
                <SquareActivity
                  className="h-10 w-10"
                  fill="#0c5046"
                  stroke="white"
                  strokeWidth={1.4}
                />
                PricePulse
              </span>
            </div>
            <p className="text-sm text-zinc-400">Built for makers, by makers</p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              🚀 Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <TextLink href="/auth/login">Login</TextLink>
              </li>
              <li>
                <TextLink href="/auth/register">Signup</TextLink>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              📜 Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <TextLink href="/tos">Terms of Servise</TextLink>
              </li>
              <li>
                <TextLink href="/privacy">Privacy Policy</TextLink>
              </li>
              <li>
                <TextLink href="/licenses">Licenses</TextLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2025 PricePulse. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
