import { Helmet } from "react-helmet";
import name from "../../main";

function Home() {
  return (
    <main>
      <Helmet>
        <title>{name} - Home</title>
      </Helmet> 
      <h1>Fsystem Private</h1>
      <p>Um grupo de desenvolvedores/hackers </p>
    </main>
  );
}

export default Home;
