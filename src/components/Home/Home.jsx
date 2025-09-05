import { useNavigate } from 'react-router-dom';
import background from "../../assets/Picture.png";
import css from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={css.homeWrapper}>
                <img src={background} alt="picture" className={css.bgPicture} />
                <div>
                    <h1 className={css.homeTitle}>Campers of your dreams</h1>
                    <h2 className={css.homeDescr}>You can find everything you want in our catalog</h2>
                </div>
                <button onClick={() => navigate("/catalog")} className={css.viewButton}>View Now</button>
            </div>
        </>
    );
};

export default Home;