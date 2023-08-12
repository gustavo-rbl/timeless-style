function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Lorem ipsum dolor sit amet?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eum culpa dolorem ullam sed
        quisquam suscipit, adipisci quis excepturi obcaecati ad inventore quibusdam, id sequi.
      </p>

      <form onSubmit={handleSubmit}>
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
          <textarea name="message" id="message" required></textarea>
        </section>

        <button>Submit</button>
      </form>
    </>
  );
}

export default Contact;
