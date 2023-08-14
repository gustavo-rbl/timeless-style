import IndexStyle from "../../../css/Index.module.css";
import style from "./Contact.module.css";
import Animation from "../../../css/Animation.module.css";
import SetTitle from "../../../modules/SetTitle";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // set page title
  SetTitle("Contact");

  return (
    <div className={Animation.fadeIn}>
      <h2>Lorem ipsum dolor sit amet?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eum culpa dolorem ullam sed
        quisquam suscipit, adipisci quis excepturi obcaecati ad inventore quibusdam, id sequi.
      </p>

      <form onSubmit={handleSubmit} className={style.contactForm}>
        <section>
          <label htmlFor="name">Your Name:</label>
          <br />
          <input type="text" name="name" id="name" required />
        </section>

        <section>
          <label htmlFor="email">Your Email</label>
          <br />
          <input type="email" name="email" id="email" required />
        </section>

        <section>
          <label htmlFor="message">Your Message</label>
          <br />
          <textarea name="message" id="message" rows="10" maxLength="1000" required></textarea>
        </section>

        <button className={IndexStyle.buttonV01}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
