import type { AppInfo } from '@/types/app'
export const APP_ID = 'eba7943c-60c9-4cf9-8bf3-cb8c9692a2f7'
export const API_KEY = '<Web API Key From Dify>'
export const API_URL = 'http://ai.signapp.asia/v1'
export const APP_INFO: AppInfo = {
  title: '加急猫AI',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
  disable_session_same_site: false, // set it to true if you want to embed the chatbot in an iframe
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
