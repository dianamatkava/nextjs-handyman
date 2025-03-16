import { Metadata } from "next";
import Privacy from "../ui/Privacy/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | ALX Handyman Services",
  description:
    "Privacy policy for ALX Handyman Services. Learn how we protect and handle your personal information.",
};

export default function PrivacyPage() {
  return <Privacy />;
}
