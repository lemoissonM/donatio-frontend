export default {
  password: { required: true },
  passwordConfirmation: { required: true, sameAs: 'password' },
};
