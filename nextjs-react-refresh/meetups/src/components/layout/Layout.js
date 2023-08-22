import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {

	const { children } = props;

  return (
    <div>
      <MainNavigation />
			<main className={ classes.main }>{ children }</main>
    </div>
  );
}

export default Layout;
