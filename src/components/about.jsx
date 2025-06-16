const About = () => {
  return (
    <section className='bg-white text-gray-800 py-16 px-6 md:px-12'>
      <div className="max-w-4xl mx-auto">
        <h2 className='text-5xl font-bold mb-6 text-black'>Why iOS Elite.</h2>
        <p className="text-l leading-relaxed mb-2 w-1/2">
          <strong>iOS Elite</strong> is a boutique software development company specializing in websites, apps, and the iOS ecosystem.
          We write clean, scalable code built for the long term — easy for any developer to pick up and extend, with zero compromise on quality.
        </p>
        <p className="text-l leading-relaxed mb-4 w-1/2">
          We don’t just build — we lead. Our team often provides mentoring, improves internal workflows, and brings a passion for excellence and speed.
          With iOS Elite, you’re not hiring just developers — you’re gaining partners fully invested in your product’s success.
        </p>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                Exceptional Execution Speed
            </h3>
            <p className="text-gray-700">
              iOS development is our passion. That’s why our clients benefit from
              rapid delivery and high-quality solutions — often in <strong>half the time </strong>
              it takes other companies, with no compromise on code integrity.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                Personalized Service & Responsiveness
            </h3>
            <p className="text-gray-700">
              We’re not just another vendor handing off finished projects. At iOS Elite, we walk
              with our clients <strong>every step of the way</strong> — with high availability,
              open communication, and a genuine partnership mentality.
            </p>
          </div>
        </div>
        <p className="mt-10 text-lg font-medium text-gray-900  text-center">
          We don’t just develop apps — we build relationships and deliver excellence.
        </p>
      </div>
    </section>
  );
};

export default About;

