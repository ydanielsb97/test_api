import { IError } from "./generic.interface";

export interface ResServiceI<DataI = any> extends IError {
    data?: DataI;
}