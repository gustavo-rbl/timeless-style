import { nanoid } from "nanoid";
import { useLoaderData } from "react-router-dom";
import style from "./About.module.css";
import IndexStyle from "../../../css/Index.module.css";
import Animation from "../../../css/Animation.module.css";
import SetTitle from "../../../modules/SetTitle";

function About() {
  const team = useLoaderData();

  const members = team.map((member) => (
    <div key={nanoid()} className={style.member}>
      <img src={member.image} alt={member.name} className={style.memberImage} />
      <div>
        <h2 className={IndexStyle.gradientText}>{member.name}</h2>
        <h4>{member.country}</h4>
      </div>
    </div>
  ));

  // set page title
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

      <h2>Meet our Team:</h2>
      <div className={style.team}>{members}</div>
    </div>
  );
}

export default About;
