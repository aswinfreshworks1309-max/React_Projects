import { useState } from "react";

export default function HackathonForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Successfully Registered!");
    setForm({ name: "", email: "", college: "", phone: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[420px] border border-white/20">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Hackathon Registration
        </h1>

        <form onSubmit={submitForm} className="space-y-5">

          <div>
            <label className="text-white text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-white text-sm">College</label>
            <input
              type="text"
              name="college"
              required
              value={form.college}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your college name"
            />
          </div>

          <div>
            <label className="text-white text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            Register Now 🚀
          </button>

        </form>
      </div>
    </div>
  );
}
