export type Lead = {
  id: number;
  name: string;
  message: string;
  hoursSinceReply: number;
};

export const leads: Lead[] = [
  {
    id: 1,
    name: "Marina Costa",
    message: "Hi, I'd like to book a first appointment for next week.",
    hoursSinceReply: 6,
  },
  {
    id: 2,
    name: "Lucas Ferreira",
    message: "Can you send me pricing for treatment packages?",
    hoursSinceReply: 12,
  },
  {
    id: 3,
    name: "Ana Ruiz",
    message: "I just wanted some information about your services.",
    hoursSinceReply: 3,
  },
  {
    id: 4,
    name: "Paula Mendes",
    message: "Is there availability tomorrow? I'm ready to confirm.",
    hoursSinceReply: 10,
  },
];
