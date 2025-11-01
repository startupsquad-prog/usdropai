"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone_number: phoneNumber || null,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Thanks! We'll be in touch soon." });
        setEmail("");
        setPhoneNumber("");
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to submit. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="waitlist-form">
      <div className="waitlist-form-grid">
        <Field>
          <FieldLabel htmlFor="waitlist-email" className="sr-only">
            Email Address
          </FieldLabel>
          <Input
            id="waitlist-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="waitlist-input"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="waitlist-phone" className="sr-only">
            Phone Number (Optional)
          </FieldLabel>
          <Input
            id="waitlist-phone"
            type="tel"
            placeholder="Phone number (optional)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="waitlist-input"
          />
        </Field>

        <Button
          type="submit"
          disabled={loading}
          className="waitlist-submit"
        >
          {loading ? "Submitting..." : "Join Waitlist"}
        </Button>
      </div>

      {message && (
        <div className={`waitlist-message waitlist-message-${message.type}`}>
          {message.text}
        </div>
      )}
    </form>
  );
}

