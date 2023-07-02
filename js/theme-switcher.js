const darkTheme = 'theme-dark';
const lightTheme = 'theme-light';

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : lightTheme;
setTheme(currentTheme);


var checkbox = document.querySelector("input[name=checkbox]");
checkbox.checked = currentTheme === darkTheme ? true : false;
checkbox.addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('theme', darkTheme);
        setTheme(darkTheme);
    } else {
      localStorage.setItem('theme', lightTheme);
      setTheme(lightTheme);
    }
});

function setTheme(themeName) { 
    document.documentElement.className = themeName;
}