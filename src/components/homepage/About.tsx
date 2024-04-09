import { people } from "../../constance/people";
import People from "./People";

const About = () => {
  return (
    <div
      className="px-8 sm:px-16 py-[60px] sm:py-[100px] flex flex-col bg-gray-100"
      id="about"
    >
      <div className="flex flex-col gap-6 sm:col-span-2">
        <h2 className="font-bold text-4xl capitalize text-global">About Us</h2>
        <div className="divider" />
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio
          accusantium asperiores debitis, beatae aut omnis dolor consequatur
          reprehenderit suscipit eum iusto odio ab animi earum quo quibusdam
          esse vero dolores ipsa numquam labore dolore. Suscipit ad explicabo
          doloribus sunt repellendus magni dolore tempora, dolorum repudiandae
          ipsa eaque incidunt consequuntur rerum molestias ipsum, minus laborum
          possimus provident in consectetur nisi at praesentium hic. Vel harum
          consectetur a nam cum voluptatum magnam dicta pariatur facere
          provident aliquam, similique velit quos, placeat odit nisi beatae eos
          rerum quisquam? Labore, dolore nobis. Atque natus magnam eius
          molestiae optio voluptatibus est illo placeat consequatur dolorum ex,
          nobis alias repudiandae doloribus itaque harum cum debitis et, ipsam
          rem fugiat perferendis id consectetur asperiores. Sequi iure ab beatae
          fuga? Aut tempora pariatur iusto enim possimus maiores minus doloribus
          sed. Qui magni beatae asperiores exercitationem! Nobis doloribus
          perspiciatis doloremque laudantium ipsa repellat distinctio sint ut
          amet beatae exercitationem laboriosam aut itaque quos voluptas rem,
          nostrum totam vitae. Autem, repellat tempora. Magnam praesentium, iste
          sequi pariatur reiciendis voluptates asperiores? Minima neque
          accusantium cupiditate porro harum odit distinctio id officiis
          voluptatum velit nisi nihil consequatur illum, vel possimus expedita
          consectetur deleniti. Sint explicabo earum esse blanditiis ut et
          corporis.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-4xl capitalize text-global mt-[50px]">
          Executive Profiles
        </h2>
        <div className="divider" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-2">
          {people.map((person) => (
            <People key={person.name} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
