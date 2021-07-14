import Web3 from 'web3'

import { Maybe } from 'yup/lib/types'
import { AnyObject } from 'yup/lib/object'
import { useAccount } from '../context/account'
import { currencyValueToWei } from './ethereum'

import {
  StringSchema,
  addMethod,
  NumberSchema,
  BaseSchema,
  string as yupString,
  number as yupNumber,
} from 'yup'

addMethod<StringSchema>(yupString, 'emptyAsUndefined', function () {
  return this.transform((value) => (value ? value : undefined))
})

addMethod<NumberSchema>(yupNumber, 'emptyAsUndefined', function () {
  return this.transform((value, originalValue) =>
    String(originalValue)?.trim() ? value : undefined
  )
})

addMethod<StringSchema>(yupString, 'ethereumAddress', function (errorMessage) {
  return this.test(`test-ethereum-address`, errorMessage, function (value) {
    const { path, createError } = this

    return (
      (value && Web3.utils.isAddress(value)) ||
      createError({ path, message: errorMessage })
    )
  })
})

addMethod<StringSchema>(
  yupString,
  'ether',
  function (min, minErrorMessage, maxErrorMessage) {
    const { currency, balance, tokenBalance } = useAccount()
    return this.test(`test-ether`, 'ether failed', function (value) {
      const { path, createError } = this
      value = value || '0'
      const decimal = value.indexOf('.')
      if (decimal > 0) value = value.substr(0, decimal + 19)
      const weiValue = Web3.utils.toBN(
        currencyValueToWei(value, currency.decimals || 18)
      )
      const weiMin = Web3.utils.toBN(min)
      const weiMax = Web3.utils.toBN(
        currency.symbol === 'ETH' ? balance : tokenBalance
      )
      if (value && weiValue.gt(weiMax)) {
        return createError({
          path,
          message: `${maxErrorMessage} ${currency.symbol}`,
        })
      }
      if (value && weiValue.lt(weiMin)) {
        return createError({ path, message: minErrorMessage })
      }
      return true
    })
  }
)

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): StringSchema<TType, TContext>
    ethereumAddress(message: string): StringSchema<TType, TContext>
    ether(
      min: string,
      minMessage: string,
      maxMessage: string
    ): StringSchema<TType, TContext>
  }

  interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): NumberSchema<TType, TContext>
  }
}

export * from 'yup';