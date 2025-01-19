import React, { useEffect } from 'react';
import home from '../../../assets/TeamLeader.jpeg';

const Leadership = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "Mr. Mayank Jain",
      "url": "https://jinraitech.com/about",
      "image": "https://jinraitech.com/static/media/TeamLeader.8d8f4e95e8784f3b71ff.jpeg",
      "sameAs": [
        "https://www.facebook.com/jinraitech",
        "https://www.linkedin.com/company/jinraitech/",
        "https://jinraitech.com/"
      ],
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Jinrai Technologies"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="md:px-20 px-8 pt-12 pb-14 bg-[#f4f4f4]">
      <h1 className="my-2 md:text-4xl text-3xl text-[--bg-color] font-bold text-center">Leadership Team at Jinrai Technologies</h1>
      <div className="flex justify-center pb-6">
        <div className="w-96 border-b-4 border-[--bg-color]"></div>
      </div>

      <div className="mx-auto md:flex md:flex-wrap md:justify-center gap-8 md:p-4 items-center bg-[#f4f4f4]">
        <figure className="md:w-[30%] w-full" role="none">
          <img
            className="rounded-md"
            src={home}
            alt="Mayank Jain, Founder of Jinrai Technologies"
            title="Mayank Jain, Founder of Jinrai Technologies"
          />
        </figure>

        <div className="py-8 md:w-[50%] w-full">
          <p>
            Our Founder, Mr. Mayank Jain, established Jinrai Technologies in 2023 with the vision to provide the industry's best services to our clients. His goal is to create a company that everyone wants to work with. Before founding Jinrai, Mr. Jain excelled in various roles across prominent Telecom and IT organizations, including Director, E2E Delivery Manager, SDM, Partner Engagement Manager, and Technical Project Manager.
          </p>
          <br />
          <p>
            Mr. Jain has successfully led numerous IT Delivery, Telecom Installation, Upgrade, Migration, Support & Transformation projects worldwide. His ability to foster strong relationships with clients and stakeholders has resulted in consistently high margins for projects. With Jinrai Technologies, his focus remains on continuing this legacy and efficiently managing all programs to meet and exceed customer expectations.
          </p>
          <br />
          <p>
            On a personal note, Mr. Jain is supported by his father, Mr. J.D. Jain, and his mother, Mrs. Vimlesh Jain, who are also Founder Directors of Jinrai Technologies. He is based in Noida, where he lives with his wife, Mrs. Chetana Jain, who works in the Software Development field, and their two daughters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
