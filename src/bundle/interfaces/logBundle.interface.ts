/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface LogBundle extends Document {
  date: string;
  servicio:string;
  destination: string;
  idServiceRequest:string
  bundle: string;
}
