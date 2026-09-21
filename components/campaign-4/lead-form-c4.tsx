"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const COUNTRY_CODES = [
  { code: "+91", label: "+91  India" },
  { code: "+1", label: "+1   USA / Canada" },
  { code: "+44", label: "+44  UK" },
  { code: "+971", label: "+971 UAE" },
  { code: "+65", label: "+65  Singapore" },
  { code: "+61", label: "+61  Australia" },
  { code: "+60", label: "+60  Malaysia" },
  { code: "+974", label: "+974 Qatar" },
  { code: "+966", label: "+966 Saudi Arabia" },
  { code: "+973", label: "+973 Bahrain" },
  { code: "+968", label: "+968 Oman" },
  { code: "+49", label: "+49  Germany" },
  { code: "+33", label: "+33  France" },
  { code: "+31", label: "+31  Netherlands" },
  { code: "+41", label: "+41  Switzerland" },
  { code: "+46", label: "+46  Sweden" },
  { code: "+7", label: "+7   Russia" },
  { code: "+86", label: "+86  China" },
  { code: "+81", label: "+81  Japan" },
  { code: "+82", label: "+82  South Korea" },
  { code: "+64", label: "+64  New Zealand" },
  { code: "+27", label: "+27  South Africa" },
];

const BUDGET_OPTIONS = ["Below ₹5 Lacs", "₹5L – ₹12L", "₹12L – ₹25L", "Above ₹25L"];
const RESEND_SECONDS = 30;

type FormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  location: string;
  budget: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export function LeadFormC4() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    location: "Chennai",
    budget: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [resendSeconds, setResendSeconds] = useState(0);

  useEffect(() => {
    if (resendSeconds <= 0) return;

    const timer = window.setInterval(() => {
      setResendSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [resendSeconds]);

  const fullPhone = `${form.countryCode}${form.phone}`;
  const isIndianNumber = form.countryCode === "+91";
  const isPhoneValid = isIndianNumber ? /^[6-9]\d{9}$/.test(form.phone) : /^\+[1-9]\d{7,14}$/.test(fullPhone);

  const resetOtp = () => {
    setOtp("");
    setOtpSent(false);
    setOtpVerified(false);
    setOtpError("");
    setOtpMessage("");
    setResendSeconds(0);
  };

  const validate = (): boolean => {
    const nextErrors: Errors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!isPhoneValid) {
      nextErrors.phone = isIndianNumber ? "Enter a valid 10-digit Indian mobile number." : "Enter a valid phone number.";
    }
    if (!form.budget) nextErrors.budget = "Please select an investment range.";
    if (isIndianNumber && !otpVerified) {
      setOtpError("Please verify your phone number before submitting.");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0 && (!isIndianNumber || otpVerified);
  };

  const handleCountryCodeChange = (countryCode: string) => {
    setForm((current) => ({ ...current, countryCode }));
    setErrors((current) => ({ ...current, phone: undefined }));
    resetOtp();
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = isIndianNumber ? 10 : 14;
    const phone = event.target.value.replace(/\D/g, "").slice(0, maxLength);

    setForm((current) => ({ ...current, phone }));
    setErrors((current) => ({ ...current, phone: undefined }));
    resetOtp();
  };

  const sendOtp = async () => {
    setOtpError("");
    setOtpMessage("");

    if (!isPhoneValid) {
      setErrors((current) => ({
        ...current,
        phone: isIndianNumber ? "Enter a valid 10-digit Indian mobile number." : "Enter a valid phone number.",
      }));
      return;
    }

    if (!isIndianNumber) {
      setOtpError("OTP verification is currently available only for Indian numbers.");
      return;
    }

    setOtpLoading(true);

    try {
      const response = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send OTP. Please try again.");
      }

      setOtpSent(true);
      setOtp("");
      setOtpMessage(`OTP sent to ${form.countryCode} ${form.phone}`);
      setResendSeconds(RESEND_SECONDS);
    } catch (error) {
      setOtpError(error instanceof Error ? error.message : "Unable to send OTP.");
    } finally {
      setOtpLoading(false);
    }
  };

  const verifyOtp = async () => {
    setOtpError("");
    setOtpMessage("");

    if (!/^\d{6}$/.test(otp)) {
      setOtpError("Enter the 6-digit OTP.");
      return;
    }

    setOtpLoading(true);

    try {
      const response = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone, code: otp }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.verified) {
        throw new Error(result.error || "Incorrect or expired OTP.");
      }

      setOtpVerified(true);
      setOtpMessage("Phone number verified successfully.");
    } catch (error) {
      setOtpVerified(false);
      setOtpError(error instanceof Error ? error.message : "Unable to verify OTP.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: `${form.countryCode} ${form.phone}`,
          budget: form.budget,
          location: form.location,
          source: "lp4-hero",
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.error || "Submission failed. Please try again.");
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_source: "lp4-hero",
        form_budget: form.budget,
        form_location: form.location,
      });

      router.push("/thank-you");
    } catch (error) {
      console.error("[lead-form-c4] Submission failed:", error);
      setSubmissionError(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase = "w-full rounded border px-4 py-3 text-sm transition focus:outline-none";
  const inputStyle = { borderColor: "#DEDEDE", color: "#111111" };
  const inputFocus = {
    onFocus: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      event.currentTarget.style.borderColor = "#2B2B2B";
    },
    onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      event.currentTarget.style.borderColor = "#DEDEDE";
    },
  };
  const labelBase = "mb-1.5 block text-[10.5px] font-medium uppercase tracking-widest text-[#3D3B38]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label className={labelBase}>Full Name *</label>
        <input
          type="text"
          placeholder="Eg. Rajesh Kumar"
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          className={inputBase}
          style={{ ...inputStyle, borderColor: errors.name ? "#C4622D" : "#DEDEDE" }}
          {...inputFocus}
        />
        {errors.name && (
          <p className="mt-1 text-[11px]" style={{ color: "#C4622D" }}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className={labelBase}>Email Address *</label>
        <input
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          className={inputBase}
          style={{ ...inputStyle, borderColor: errors.email ? "#C4622D" : "#DEDEDE" }}
          {...inputFocus}
        />
        {errors.email && (
          <p className="mt-1 text-[11px]" style={{ color: "#C4622D" }}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className={labelBase}>Phone Number *</label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            value={form.countryCode}
            onChange={(event) => handleCountryCodeChange(event.target.value)}
            className="w-full rounded border px-3 py-3 text-sm transition focus:outline-none sm:w-24"
            style={{ borderColor: "#DEDEDE", color: "#111111" }}
            {...inputFocus}
          >
            {COUNTRY_CODES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </select>

          <div className="flex min-w-0 flex-1 gap-2">
            <input
              type="tel"
              placeholder="98765 43210"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={isIndianNumber ? 10 : 14}
              value={form.phone}
              onChange={handlePhoneChange}
              className={`${inputBase} min-w-0 flex-1`}
              style={{ ...inputStyle, borderColor: errors.phone ? "#C4622D" : "#DEDEDE" }}
              {...inputFocus}
            />

            {isIndianNumber && !otpVerified && (
              <button
                type="button"
                onClick={sendOtp}
                disabled={otpLoading || (otpSent && resendSeconds > 0)}
                className="shrink-0 rounded border border-[#DEDEDE] bg-[#FAFAF8] px-3 py-3 text-[10px] font-medium uppercase tracking-wider text-[#3D3B38] transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                {otpLoading && !otpSent
                  ? "Sending..."
                  : otpSent && resendSeconds > 0
                    ? `Resend ${resendSeconds}s`
                    : otpSent
                      ? "Resend OTP"
                      : "Send OTP"}
              </button>
            )}

            {isIndianNumber && otpVerified && (
              <span className="flex shrink-0 items-center rounded border border-[#2E8B57] px-3 text-[11px] font-medium text-[#2E8B57]">
                ✓ Verified
              </span>
            )}
          </div>
        </div>
        {errors.phone && (
          <p className="mt-1 text-[11px]" style={{ color: "#C4622D" }}>
            {errors.phone}
          </p>
        )}
      </div>

      {isIndianNumber && otpSent && !otpVerified && (
        <div>
          <label className={labelBase}>Enter OTP *</label>
          <div className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="6-digit OTP"
              maxLength={6}
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value.replace(/\D/g, "").slice(0, 6));
                setOtpError("");
              }}
              className={`${inputBase} min-w-0 flex-1`}
              style={{ ...inputStyle, borderColor: otpError ? "#C4622D" : "#DEDEDE" }}
              {...inputFocus}
            />
            <button
              type="button"
              onClick={verifyOtp}
              disabled={otpLoading || otp.length !== 6}
              className="shrink-0 rounded bg-[#111111] px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {otpLoading ? "Checking..." : "Verify OTP"}
            </button>
          </div>
        </div>
      )}

      {otpMessage && (
        <p className="text-[11px]" style={{ color: otpVerified ? "#2E8B57" : "#777" }}>
          {otpMessage}
        </p>
      )}
      {otpError && (
        <p className="text-[11px]" style={{ color: "#C4622D" }}>
          {otpError}
        </p>
      )}

      <div>
        <label className={labelBase}>Service Location *</label>
        <select
          value={form.location}
          onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
          className={inputBase}
          style={inputStyle}
          {...inputFocus}
        >
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      <div>
        <label className={labelBase}>Investment Range *</label>
        <div className="grid grid-cols-2 gap-2">
          {BUDGET_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setForm((current) => ({ ...current, budget: option }));
                setErrors((current) => ({ ...current, budget: undefined }));
              }}
              className="rounded px-3 py-2.5 text-center text-xs transition-all duration-150"
              style={{
                border: `1px solid ${form.budget === option ? "#BFA07A" : "#DEDEDE"}`,
                background: form.budget === option ? "#BFA07A" : "#FAFAF8",
                color: form.budget === option ? "#111111" : "#555555",
                fontWeight: form.budget === option ? 600 : 400,
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {errors.budget && (
          <p className="mt-1 text-[11px]" style={{ color: "#C4622D" }}>
            {errors.budget}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting || (isIndianNumber && !otpVerified)}
        className="w-full rounded py-3.5 text-xs font-medium uppercase tracking-widest text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        style={{ background: submitting ? "#888" : "#111111", letterSpacing: "0.1em" }}
      >
        {submitting ? "Submitting..." : "Book My Free Consultation →"}
      </button>

      {submissionError && (
        <p className="text-center text-[11px]" style={{ color: "#C4622D" }}>
          {submissionError}
        </p>
      )}
      <p className="text-center text-[10.5px]" style={{ color: "#999" }}>
        No spam. No sales pressure. Just a genuine conversation.
      </p>
    </form>
  );
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
