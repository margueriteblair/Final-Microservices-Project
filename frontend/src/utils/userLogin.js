module.exports = (userData, newPage) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location = newPage;
}