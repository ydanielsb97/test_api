import { Request, Response } from "express";


export interface RequestI extends Request {
    user?: any; //TODO: Make model for user
}

export interface ResponseI extends Response {
    
}