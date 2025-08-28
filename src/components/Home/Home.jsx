import { Button } from "../../components/Button/Button";
import background from "../../assets/Picture.png";
import css from "./Home.module.css";

const Home = () => {
    return (
        <>
            <div>
                <img src={background} alt="picture" className={css.bgPicture} />
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

export default Home;