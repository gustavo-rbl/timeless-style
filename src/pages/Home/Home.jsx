import { Link } from "react-router-dom";
import { discount } from "../../modules/HandleDiscount";
import { add, format } from "date-fns";
import style from "./Home.module.css";
import IndexStyle from "../../css/Index.module.css";
import Animation from "../../css/Animation.module.css";
import { FaShirt, FaTruckFast, FaTicket } from "react-icons/fa6";
import SetTitle from "../../modules/SetTitle";

function Home() {
  SetTitle("Home");

  return (
    <div className={Animation.fadeIn}>
      <div className={style.sale}>
        <div className={style.saleArea1}>
          <p className={IndexStyle.textSize3}>Big Sale</p>

          <p className={IndexStyle.textSize4}>{discount}% off</p>
        </div>

        <div className={style.saleArea2}>
          <img
            src="https://source.unsplash.com/random/500x500/?apparel"
            alt="Unsplash Fashion Image"
          />
        </div>

        <div className={style.saleArea3}>
          <p>
            <span className={IndexStyle.textBold}>Don&#39;t miss out great specials!</span> Ends:{" "}
            {format(add(new Date(), { weeks: 2 }), "LLLL/dd")} &nbsp; &nbsp;
            <Link to="products">Shop Now</Link>
          </p>
        </div>
      </div>

      <div>
        <h2 className={IndexStyle.textCenter}>This Week&#39;s Stories</h2>

        <div className={style.stories}>
          <div className={style.story}>
            <img
              src="https://source.unsplash.com/random/400x600/?beauty"
              alt="Random unsplash beauty image"
              className={style.storyImage}
            />

            <p className={IndexStyle.colorGray5}>Lorem, ipsum.</p>

            <h3>Lorem ipsum dolor sit amet consectetur.</h3>

            <p className={IndexStyle.colorGray5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quidem
              delectus doloremque id sequi incidunt ducimus, nemo soluta, aliquam tenetur voluptatem
              libero consequuntur.
            </p>

            <Link to="/" className={style.storyLink}>
              Read More
            </Link>
          </div>

          <div className={style.story}>
            <img
              src="https://source.unsplash.com/random/400x600/?fashion"
              alt="Random unsplash fashion image"
              className={style.storyImage}
            />

            <p className={IndexStyle.colorGray5}>Lorem.</p>

            <h3>Lorem ipsum dolor sit amet.</h3>

            <p className={IndexStyle.colorGray5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quidem
              delectus doloremque id sequi incidunt ducimus, nemo soluta, aliquam tenetur voluptatem
              libero consequuntur.
            </p>

            <Link to="/" className={style.storyLink}>
              Read More
            </Link>
          </div>

          <div className={style.story}>
            <img
              src="https://source.unsplash.com/random/400x600/?style"
              alt="Random unsplash style image"
              className={style.storyImage}
            />

            <p className={IndexStyle.colorGray5}>Lorem, ipsum dolor.</p>

            <h3>Lorem ipsum dolor sit.</h3>

            <p className={IndexStyle.colorGray5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quidem
              delectus doloremque id sequi incidunt ducimus, nemo soluta, aliquam tenetur voluptatem
              libero consequuntur.
            </p>

            <Link to="/" className={style.storyLink}>
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className={IndexStyle.textCenter}>
        <h2>
          Why <span className={IndexStyle.gradientText}>TimelessStyle</span>
        </h2>

        <div className={style.promos}>
          <div className={style.promo}>
            <FaShirt className={style.promoIcon} />

            <h4>Premium Products</h4>

            <p>Our products are 100% made with high quality materials.</p>
          </div>

          <div className={style.promo}>
            <FaTruckFast className={style.promoIcon} />

            <h4>Free Shipping</h4>

            <p>We ship all over the United States for FREE.</p>
          </div>

          <div className={style.promo}>
            <FaTicket className={style.promoIcon} />

            <h4>Exciting Offers</h4>

            <p>We provide amazing offers & discounts.</p>
          </div>
        </div>
      </div>

      <form className={style.signUp} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="sign-up-email">Get top deals, latest trends, and more.</label>

        <input type="email" id="sign-up-email" required />

        <button className={IndexStyle.buttonV01}>Sign up</button>
      </form>
    </div>
  );
}

export default Home;
