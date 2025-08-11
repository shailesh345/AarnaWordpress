import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { contactConfig } from "@/features/contact/contact.config";
import { isBot } from "@/features/contact/spam";

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

  const consentId = useMemo(
    () => `consent-${Math.random().toString(36).slice(2)}`,
    []
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 max-w-2xl"
    >
      <input
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
      />

      {/* Retro form header */}
      <div className="text-center mb-6">
        <h3 className="pixel-font text-xl font-bold text-cyan-400 mb-2">
          ═══ CONTACT_FORM.EXE ═══
        </h3>
        <div className="text-green-400 pixel-font text-sm">
          C:\PORTFOLIO\CONTACT&gt; SEND_MESSAGE.BAT
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block pixel-font text-cyan-400 font-bold mb-2">
            NAME.STR
          </label>
          <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
            <input
              {...register("name")}
              className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none"
              placeholder=">>> ENTER_NAME"
            />
          </div>
          {errors.name && (
            <p className="pixel-font text-red-400 text-sm mt-1">
              ERROR: {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label className="block pixel-font text-cyan-400 font-bold mb-2">
            EMAIL.ADDR
          </label>
          <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
            <input
              type="email"
              {...register("email")}
              className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none"
              placeholder=">>> ENTER_EMAIL@DOMAIN.COM"
            />
          </div>
          {errors.email && (
            <p className="pixel-font text-red-400 text-sm mt-1">
              ERROR: {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block pixel-font text-cyan-400 font-bold mb-2">
          COMPANY.ORG (OPTIONAL)
        </label>
        <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
          <input
            {...register("company")}
            className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none"
            placeholder=">>> ENTER_COMPANY_NAME"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block pixel-font text-cyan-400 font-bold mb-2">
            PROJECT_TYPE.EXE
          </label>
          <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
            <input
              {...register("projectType")}
              className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none"
              placeholder=">>> SAAS, API, WEB..."
            />
          </div>
          {errors.projectType && (
            <p className="pixel-font text-red-400 text-sm mt-1">
              ERROR: {errors.projectType.message}
            </p>
          )}
        </div>
        <div>
          <label className="block pixel-font text-cyan-400 font-bold mb-2">
            BUDGET.USD (OPTIONAL)
          </label>
          <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
            <input
              {...register("budget")}
              className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none"
              placeholder=">>> $5K-$20K"
            />
          </div>
        </div>
        <div>
          <label className="block pixel-font text-cyan-400 font-bold mb-2">
            TIMELINE.DAT (OPTIONAL)
          </label>
          <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
            <input
              {...register("timeline")}
              className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none"
              placeholder=">>> 4-8_WEEKS"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block pixel-font text-cyan-400 font-bold mb-2">
          MESSAGE.TXT
        </label>
        <div className="bg-black border-2 border-green-400 pixel-perfect p-1">
          <textarea
            rows={5}
            {...register("message")}
            className="w-full bg-black text-green-400 pixel-font px-2 py-1 focus:outline-none resize-none"
            placeholder=">>> DESCRIBE YOUR PROJECT GOALS AND SUCCESS CRITERIA..."
          />
        </div>
        {errors.message && (
          <p className="pixel-font text-red-400 text-sm mt-1">
            ERROR: {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id={consentId}
          type="checkbox"
          {...register("consent")}
          className="mt-1 w-4 h-4"
        />
        <label
          htmlFor={consentId}
          className="pixel-font text-green-300 text-sm"
        >
          ► I AGREE TO BE CONTACTED ABOUT THIS INQUIRY.
        </label>
      </div>
      {errors.consent && (
        <p className="pixel-font text-red-400 text-sm">
          ERROR: {errors.consent.message}
        </p>
      )}

      <div className="flex items-center gap-4 pt-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-6 py-3 pixel-perfect bg-gradient-to-r from-cyan-500 to-blue-600 text-black pixel-font font-bold border-4 border-white hover:scale-105 transition-transform duration-200 disabled:opacity-60"
        >
          {isSubmitting ? "► SENDING.PROGRESS" : "► SEND_MESSAGE.BAT"}
        </button>
        <a
          className="px-6 py-3 pixel-perfect bg-gradient-to-r from-purple-600 to-pink-600 text-white pixel-font font-bold border-4 border-cyan-400 hover:scale-105 transition-transform duration-200"
          href="/shailesh.vcf"
          download
        >
          ► VCARD.VCF
        </a>
      </div>

      <div className="bg-black border-2 border-yellow-400 pixel-perfect p-3">
        <p className="pixel-font text-yellow-400 text-sm">
          ► RESPONSE_TIME: 24-48_HOURS.LOG
          <br />► NO_TRACKING.SYS, NO_ADS.BLOCK
        </p>
      </div>
    </form>
  );
}
