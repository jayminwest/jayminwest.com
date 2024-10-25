export type ClassValue = string | undefined | null;

export type Message = {
  type: "bot" | "user";
  content: string;
};
