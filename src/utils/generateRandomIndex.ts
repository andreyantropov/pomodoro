import { assoc } from './assoc';
import { nanoid } from 'nanoid';

export const assignId = assoc('id', nanoid());
export const generateId = <O extends object>(obj: O) => assoc('id', nanoid())(obj);