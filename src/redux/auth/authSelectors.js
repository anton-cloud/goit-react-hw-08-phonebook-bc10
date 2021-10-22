const getToken = ((state) => state.auth.token);
const getUserName = ((state => state.auth.user.name))

const authSelectors = {getToken, getUserName};

export default authSelectors;