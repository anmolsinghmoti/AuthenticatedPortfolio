import express, {Request, Response, NextFunction } from 'express';

import * as DBConfig from '../config/db';

let UserDocument = require('../models/contacts');

export function UserDisplayName(req: Request) : string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return
    }
}