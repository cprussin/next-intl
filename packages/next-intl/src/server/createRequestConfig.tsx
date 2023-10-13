// @ts-expect-error
// eslint-disable-next-line import/no-extraneous-dependencies
import type {IntlConfig} from '@cprussin/use-intl/core';
import getRuntimeConfig from 'next-intl/config';
import type {GetRequestConfigParams} from './getRequestConfig';

export default getRuntimeConfig as (
  params: GetRequestConfigParams
) => IntlConfig | Promise<IntlConfig>;
