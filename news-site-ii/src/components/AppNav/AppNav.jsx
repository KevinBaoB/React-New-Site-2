function AppNav(props) {

  // syntax for the builtin function like map needs parentheses rather than curly brackets for the functions
  return (
      <nav>
        {/* // use to iterate through json data of the same type for the navbar */}
        {props.navItems.map((item) => 
          (
              <a key={item.label} onClick={props.handleNavClick}> {item.label}</a>
          )
        )}
      
      </nav>
  )
}

export default AppNav;
