import { Link } from "react-router-dom";

const categories = ["ropa", "accesorios"];

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Todos</Link>
      {categories.map(cat => (
        <Link key={cat} to={`/category/${cat}`}>{cat}</Link>
      ))}
    </nav>
  );
};

export default Navbar;
