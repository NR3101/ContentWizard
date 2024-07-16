import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData"),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug"),
  createdBy: varchar("createdBy"),
  createdAt: varchar("createdAt"),
});

export const userSubscriptions = pgTable("userSubscriptions", {
  id: serial("id").primaryKey(),
  email: varchar("email"),
  userName: varchar("userName"),
  isActive: boolean("isActive"),
  paymentID: varchar("paymentID"),
  joinDate: varchar("joinDate"),
});
