import IMAGE_JAKE from "../assets/images/avatar-jake.jpg";
import IMAGE_THOMPSON from "../assets/images/avatar-thompson.jpg";
import IMAGE_JACKSON from "../assets/images/avatar-jackson.jpg";
import IMAGE_MARIA from "../assets/images/avatar-maria.jpg";
import Leaders from "../components/Leaders";

const LeadersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mx-auto md:px-[3rem] lg:gap-[2.5rem]">
      <Leaders src={IMAGE_JAKE} name="Jake Richards" title="Chief Architect" />

      <Leaders
        src={IMAGE_THOMPSON}
        name="Thompson Smith"
        title="Head of Finance"
      />

      <Leaders
        src={IMAGE_JACKSON}
        name="Jackson Rourke"
        title="Lead Designer"
      />

      <Leaders
        src={IMAGE_MARIA}
        name="Maria Simpson"
        title="Senior Architect"
      />
    </div>
  );
};

export default LeadersList;
