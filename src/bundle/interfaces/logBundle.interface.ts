/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface LogBundle extends Document {
  date: string;
  destination: string;
  bundle: string;
}
