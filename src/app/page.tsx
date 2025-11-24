import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PricePulse",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>Main Public Page</div>
    </div>
  );
}
