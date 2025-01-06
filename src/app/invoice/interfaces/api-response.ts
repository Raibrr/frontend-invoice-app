import { Invoice } from "./invoice.interface";

export interface ApiResponse {
  invoices: Invoice[];
  message: string;
  success: boolean;
}
