const darkTheme = 'theme-dark';
const lightTheme = 'theme-light';

localStorage.setItem('theme', 'theme-light');

var checkbox = document.querySelector("input[name=checkbox]");

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
