import {LogInterface} from "../entities/log";

export type RegisterRequest = {
  /**
   * @example "Fateme"
   */
  firstName: string;

  /**
   * @example "Fateme"
   */
  lastName: string;

  /**
   * @example "fake@gmail.com"
   */
  email: string;

  /**
   * @example "123456"
   */
  password: string;
};
export type LoginRequest = {

  /**
   * @example "fake@gmail.com"
   */
  email: string;

  /**
   * @example "123456"
   */
  password: string;
};

export type LoginResponse = {

  /**
   * @example "fake@gmail.com"
   */
  email: string;

  /**
   * @example "foo"
   */
  firstName: string;

  /**
   * @example "bar"
   */
  lastName: string;

  /**
   * @example true
   */
  isEmailVerified: boolean;
};

export type LogResponse =LogInterface []

export type ResendVerificationEmailRequest = {
  /**
   * @example "fake@gmail.com"
   */
  email: string;
};

export type GeneralResponse = {
  /**
   * @example true
   */
  success: boolean;

  /**
   * @example Email has been sent
   */
  message: string;
};
export type RegisterResponse = GeneralResponse

export type ConfirmEmailResponse = GeneralResponse
