/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";

export const LogBundleSchema = new Schema({
    date: {type: String, require:true},
    destination: {type: String, require:true},
    bundle: {type: String, require:true}
});
