import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { contactConfig } from "../../features/contact/contact.config";
import { isBot } from "../../features/contact/spam";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string().min(2),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v, { message: "Consent is required" }),
  website: z.string().optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [startedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  // offline draft
  const draftKey = "contact-draft-v1";
  const values = watch();
  useEffect(() => {
    const saved = localStorage.getItem(draftKey);
    if (saved) {
      try {
        reset(JSON.parse(saved));
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const id = setTimeout(
      () => localStorage.setItem(draftKey, JSON.stringify(values)),
      300
    );
    return () => clearTimeout(id);
  }, [values]);

  const onSubmit = async (data: FormData) => {
    if (isBot(data as any, startedAt)) {
      toast.error("Spam detected.");
      return;
    }

    const payload = {
      from_name: data.name,
      from_email: data.email,
      message: `${data.message}\n\nCompany: ${data.company || "-"}\nProject: ${
        data.projectType
      }\nBudget: ${data.budget || "-"}\nTimeline: ${data.timeline || "-"}`,
    };

    try {
      if (
        contactConfig.emailJs.serviceId &&
        contactConfig.emailJs.templateId &&
        contactConfig.emailJs.publicKey
      ) {
        await emailjs.send(
          contactConfig.emailJs.serviceId!,
          contactConfig.emailJs.templateId!,
          payload,
          contactConfig.emailJs.publicKey
        );
        toast.success("Message sent successfully!");
      } else if (contactConfig.formspreeEndpoint) {
        const r = await fetch(contactConfig.formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!r.ok) throw new Error("Formspree error");
        toast.success("Message sent!");
      } else {
        window.location.href = `mailto:hello@yourdomain.com?subject=${encodeURIComponent(
          "New inquiry"
        )}\u0026body=${encodeURIComponent(payload.message)}`;
      }
      localStorage.removeItem(draftKey);
      reset();
    } catch (e) {
      console.error(e);
      toast.error("Failed to send. Try another channel below.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register("website")}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name and Email */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block phone-font text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="phone-font text-red-600 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block phone-font text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="phone-font text-red-600 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block phone-font text-sm font-medium mb-2">
          Company (Optional)
        </label>
        <input
          {...register("company")}
          className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Your company name"
        />
      </div>

      {/* Project Details */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block phone-font text-sm font-medium mb-2">
            Project Type *
          </label>
          <input
            {...register("projectType")}
            className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="e.g. SaaS, API, Web App"
          />
          {errors.projectType && (
            <p className="phone-font text-red-600 text-xs mt-1">
              {errors.projectType.message}
            </p>
          )}
        </div>

        <div>
          <label className="block phone-font text-sm font-medium mb-2">
            Budget (Optional)
          </label>
          <input
            {...register("budget")}
            className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="e.g. $5k-10k"
          />
        </div>

        <div>
          <label className="block phone-font text-sm font-medium mb-2">
            Timeline (Optional)
          </label>
          <input
            {...register("timeline")}
            className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="e.g. 2-3 months"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block phone-font text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full px-3 py-2 border-2 border-black phone-font text-sm focus:outline-none focus:ring-2 focus:ring-black resize-y"
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p className="phone-font text-red-600 text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1"
          id="consent"
        />
        <label htmlFor="consent" className="phone-font text-sm">
          I consent to being contacted via email regarding this inquiry *
        </label>
      </div>
      {errors.consent && (
        <p className="phone-font text-red-600 text-xs">
          {errors.consent.message}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="old-phone-button px-6 py-3 w-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="phone-font text-sm">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
      </button>

    </form>
  );
}
