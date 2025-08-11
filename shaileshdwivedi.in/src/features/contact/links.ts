export const mailto = (to: string, subject: string, body: string) =>
  `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

export const tel = (num: string) => `tel:${num}`;
export const whatsapp = (num: string, text: string) =>
  `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
export const telegram = (handle: string) =>
  `https://t.me/${handle.replace(/^@/, "")}`;
