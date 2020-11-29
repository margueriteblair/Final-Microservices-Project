module.exports = (newPage) => {
    window.location = newPage;
    localStorage.setItem("userData", null);
    
}