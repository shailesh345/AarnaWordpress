export const contactConfig = {
  emailJs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT,
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
  telegram: import.meta.env.VITE_TELEGRAM_HANDLE,
  calendly: import.meta.env.VITE_CALENDLY_URL,
};
