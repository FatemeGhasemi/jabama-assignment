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

export type RegisterResponse = {
  /**
   * @example true
   */
  success: boolean;

  /**
   * @example Email has been sent
   */
  message: string;
};

export type ConfirmEmailResponse = {
  /**
   * @example true
   */
  success: boolean;

  /**
   * @example Email got verified
   */
  message: string;
};
