const createUser = (name = '', age = 0, options = {}) => {
  const defaultOptions = {
    email: 'test@test.com',
    password: '123',
    address: '123st',
    confirmPassword: '123',
    role: 'guest',
  };

  const keys = Object.keys(defaultOptions);
  const optionKeys = Object.keys(options);
  console.log(keys);
  // const newOptions = Object.assign({}, defaultOptions, options);
  const newOptions = {
    ...defaultOptions,
    ...options,
  };
  console.log(newOptions);
};

createUser('ahmed', 25, { email: 'mohamed@gmail.com' });
