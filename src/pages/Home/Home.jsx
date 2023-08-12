import { Link } from "react-router-dom";
import { discount } from "../../modules/HandleDiscount";
import { add, format } from "date-fns";

function Home() {
  return (
    <>
      <div>
        <div>
          <div>
            <h2>Big Sale</h2>

            <p>{discount}% off</p>
          </div>

          <img
            src="https://source.unsplash.com/random/400x400/?apparel"
            alt="Unsplash Fashion Image"
          />
        </div>

        <p>
          <span>Don&#39;t miss out great specials!</span> Ends{" "}
          {format(add(new Date(), { weeks: 2 }), "LLLL - dd")}
        </p>

        <Link to="products">Shop Now</Link>
      </div>

      <div>
        <h2>This Week&#39;s Stories</h2>

        <div>
          <div>
            <img
              src="https://source.unsplash.com/random/400x600/?beauty"
              alt="Random unsplash beauty image"
            />

            <p>Lorem, ipsum.</p>

            <h3>Lorem ipsum dolor sit amet consectetur.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quidem
              delectus doloremque id sequi incidunt ducimus, nemo soluta, aliquam tenetur voluptatem
              libero consequuntur.
            </p>

            <Link to="/">Read More</Link>
          </div>

          <div>
            <img
              src="https://source.unsplash.com/random/400x600/?fashion"
              alt="Random unsplash fashion image"
            />

            <p>Lorem.</p>

            <h3>Lorem ipsum dolor sit amet.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quidem
              delectus doloremque id sequi incidunt ducimus, nemo soluta, aliquam tenetur voluptatem
              libero consequuntur.
            </p>

            <Link to="/">Read More</Link>
          </div>

          <div>
            <img
              src="https://source.unsplash.com/random/400x600/?style"
              alt="Random unsplash style image"
            />

            <p>Lorem, ipsum dolor.</p>

            <h3>Lorem ipsum dolor sit.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odio quam quidem
              delectus doloremque id sequi incidunt ducimus, nemo soluta, aliquam tenetur voluptatem
              libero consequuntur.
            </p>

            <Link to="/">Read More</Link>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="sign-up-email">Get top deals, latest trends, and more.</label>

        <input type="email" id="sign-up-email" />

        <button>Sign up</button>
      </div>
    </>
  );
}

export default Home;
