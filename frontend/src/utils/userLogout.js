module.exports = (newPage) => {
    localStorage.setItem("userData", null);
    window.location = newPage;
}