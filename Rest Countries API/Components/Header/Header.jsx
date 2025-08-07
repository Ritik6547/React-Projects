import { useTheme } from "../../hooks/useTheme";

function Header() {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}>
          <i className={`fa-regular ${isDark ? "fa-sun" : "fa-moon"}`} />
          &nbsp;&nbsp;
          <span className="mode">{isDark ? "Light Mode" : "Dark Mode"}</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
