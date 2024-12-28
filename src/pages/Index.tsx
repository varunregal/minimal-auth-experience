import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mentor Match</h1>
          <p className="text-xl text-gray-600">Connect with mentors and grow your career</p>
        </div>
      </div>
    </div>
  );
};

export default Index;