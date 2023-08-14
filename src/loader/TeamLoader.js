const TeamLoader = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=20", { mode: "cors" });

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();

    const team = data.results.map((el) => ({
      name: `${el.name.first} ${el.name.last}`,
      country: el.location.country,
      image: el.picture.medium,
    }));

    return team;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default TeamLoader;
