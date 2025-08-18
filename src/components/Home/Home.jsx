import { Button } from "../../components/Button/Button";
import css from "./Home.module.css";

function Home() {
    return (
        <>
            <div>
                <div>
                    <h1>Campers of your dreams</h1>
                </div>
                <div>
                    <h2>You can find everything you want in our catalog</h2>
                </div>
            <Button to="/catalog" className={css.viewButton}>View Now</Button>
            </div>
        </>
    );
};

export default Home
