import { Metadata } from "next";
import Terms from "../ui/Terms/Terms";

export const metadata: Metadata = {
  title: "Terms of Use | ALX Handyman Services",
  description:
    "Terms of use and service conditions for ALX Handyman Services. Read our policies and guidelines for using our handyman services.",
};

export default function TermsPage() {
  return <Terms />;
}
