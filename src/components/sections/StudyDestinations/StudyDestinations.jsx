const StudyDestinations = () => {
  const destinations = [
    {
      name: "USA",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "UK",
      image:
        "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Australia",
      image:
        "https://images.unsplash.com/photo-1605578298583-e935687f3e0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Canada",
      image: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Germany",
      image:
        "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ireland",
      image:
        "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1653829131425-e8d4908a32e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dubai",
      image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-350 mx-auto px-4 py-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Your Perfect Study Destination is Just One Click Away
        </h2>

        <p className="mt-4 text-gray-500 font-light text-lg">
          Choose from top countries like Australia, the USA, Canada, the UK, and
          more. We’ll help you find the best universities, scholarships, and
          opportunities—fast and easy.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-medium">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
