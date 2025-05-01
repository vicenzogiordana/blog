import gsap from 'gsap';

const projects = [
    {
      title: "Amormío",
      color: "#F06318",
      href: '1'
    },
    {
      title: "Emptiness",
      color: "#DCF018",
      href: '2'
    },
    {
      title: "18 años",
      color: "#18F0E8",
      href: '3'
    },
    {
      title: "TE AMO",
      color: "#8C0CF0",
      href: '4'
    },
    {
      title: "PRISCILLA",
      color: "#F0183C",
      href: '5'
    },
    {
      title: "More than friends",
      color: "#F0BA18",
      href: '6'
    },
    {
      title: "Passion",
      color: "#0C34F0",
      href: '7'
    },
    {
      title: "Saudade",
      color: "#0CBCF0",
      href: '8'
    },
    {
      title: "You deserve",
      color: "#91F018",
      href: '9'
    }
];

export default function Lista() {

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: projects[index].color, duration: 0.3});
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.target, {top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1});
  };

  return (
    <div className="flex h-screen items-center">
        <div className="relative w-full">
            {
              projects.map((project, index) => {
                return (
                  <a href={`/posts/${project.href}`} key={index}>
                  <div
                    key={index}
                    onMouseEnter={(e) => manageMouseEnter(e, index)}
                    onMouseLeave={(e) => manageMouseLeave(e, index)}
                    className="relative mb-[-2vw] bg-white border-t border-black cursor-pointer"
                  >
                    <p className="m-0 text-[10vw] lg:text-[5vw] text-black pl-2 uppercase pointer-events-none">
                      {project.title}
                    </p>
                  </div>
                  </a>
                );
              })
            }
        </div>
    </div>
  );
}