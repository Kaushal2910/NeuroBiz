import { useState } from "react";
import axios from "axios";

const LeadsPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business_type: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/leads/`,
        form
      );

      setSuccess(
        "Lead submitted successfully."
      );

      setForm({
        name: "",
        email: "",
        business_type: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-6 py-10">

      <div className="max-w-3xl mx-auto">

        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >

          <h1 className="text-4xl font-bold">

            Business Lead Capture

          </h1>

          <p className="mt-3 text-gray-400">

            Submit your business requirements
            and automation goals.

          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="text"
              name="business_type"
              placeholder="Business Type"
              value={form.business_type}
              onChange={handleChange}
              required
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <textarea
              name="message"
              placeholder="Describe your automation needs..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="
                w-full
                bg-black/30
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-2xl
                py-4
                font-semibold
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                hover:opacity-90
                transition-all
              "
            >

              {loading
                ? "Submitting..."
                : "Submit Lead"}

            </button>

            {success && (
              <p className="text-green-400">

                {success}

              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  );
};

export default LeadsPage;