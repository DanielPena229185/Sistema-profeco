import { Request } from "express";

export function parseCount(countParam: string) {
    if(countParam === undefined){ return 20; }
    let count: number = parseInt(countParam) || 20;
    if(count < 1){ count = 1; }
    if(count > 50){ count = 50; }
    return count;
}