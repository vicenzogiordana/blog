import gsap from 'gsap';

const projects = [
    {
      title: "New York",
      color: "#F06318"
    },
    {
      title: "San Francisco",
      color: "#DCF018"
    },
    {
      title: "San Antonio",
      color: "#18F0E8"
    },
    {
      title: "Nashville",
      color: "#8C0CF0"
    },
    {
      title: "Houston",
      color: "#F0183C"
    },
    {
      title: "New Orleans",
      color: "#F0BA18"
    },
    {
      title: "Oklahoma City",
      color: "#0C34F0"
    },
    {
      title: "Detroit",
      color: "#0CBCF0"
    },
    {
      title: "Indianapolis",
      color: "#91F018"
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
                  <div
                    key={index}
                    onMouseEnter={(e) => manageMouseEnter(e, index)}
                    onMouseLeave={(e) => manageMouseLeave(e, index)}
                    className="relative mb-[-2vw] bg-white border-t border-black cursor-pointer"
                  >
                    <p className="m-0 text-[5vw] text-black pl-2 uppercase pointer-events-none">
                      {project.title}
                    </p>
                  </div>
                );
              })
            }
        </div>
    </div>
  );
}