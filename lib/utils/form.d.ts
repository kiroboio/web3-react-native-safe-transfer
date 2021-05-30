import { Maybe } from 'yup/lib/types';
import { AnyObject } from 'yup/lib/object';
import { BaseSchema } from 'yup';
declare module 'yup' {
    interface StringSchema<TType extends Maybe<string> = string | undefined, TContext extends AnyObject = AnyObject, TOut extends TType = TType> extends BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): StringSchema<TType, TContext>;
        ethereumAddress(message: string): StringSchema<TType, TContext>;
        ether(min: string, max: string, minMessage: string, maxMessage: string): StringSchema<TType, TContext>;
    }
    interface NumberSchema<TType extends Maybe<number> = number | undefined, TContext extends AnyObject = AnyObject, TOut extends TType = TType> extends BaseSchema<TType, TContext, TOut> {
        emptyAsUndefined(): NumberSchema<TType, TContext>;
    }
}
