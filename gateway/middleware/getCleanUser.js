function getCleanUser(user) {
    if (!user) return null;
   
    return {
      userId: user.userId,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin
    };
  }

  module.exports = getCleanUser;