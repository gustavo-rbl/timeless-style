import style from "./AboutError.module.css";
import Animation from "../../../css/Animation.module.css";
import SetTitle from "../../../modules/SetTitle";

function AboutError() {
  SetTitle("About");

  return (
    <div className={Animation.fadeIn}>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora iste quas
        necessitatibus magnam obcaecati quo doloribus, veritatis numquam modi doloremque est culpa
        totam tenetur?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis officia quam. Atque
        iusto est quos corporis quo quasi quas, similique reprehenderit ut dolor repellendus
        laudantium optio. Minima vitae nobis perferendis ullam iusto corrupti eligendi aspernatur?
        Possimus tempore quia culpa.
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className={style.aboutDisplay}>
        <img
          src="https://source.unsplash.com/random/300x500/?style"
          alt="Random unsplash style image"
          className={style.banner}
        />

        <img
          src="https://source.unsplash.com/random/300x500/?beauty"
          alt="Random unsplash beauty image"
          className={style.banner}
        />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, deleniti tempora
        quibusdam, ad eveniet ducimus nobis hic quam vitae placeat soluta dolorum mollitia quae ab
        totam labore ut odio earum?
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, assumenda? Ipsum impedit
        sed natus. Magnam, consectetur similique eos ex ea at saepe earum repellat ipsa porro culpa
        laborum recusandae? Amet provident voluptate similique dignissimos.
      </p>
    </div>
  );
}

export default AboutError;
