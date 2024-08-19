import { useState, useEffect } from "react";
import bgMobile from "../assets/bg-shorten-mobile.svg";
import bgDesktop from "../assets/bg-shorten-desktop.svg";

// Function to get the list of links from local storage
const getLocalStorage = () => {
  const storedLinks = localStorage.getItem("links");
  return storedLinks ? JSON.parse(storedLinks) : [];
};

export default function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage()); // Store array of links
  const [error, setError] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null); // Track which link has been copied

  // Save links to local storage when they change
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  // Clear local storage on page unload (when refreshing or closing the tab)
  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("links"); // Clear the stored links
    };

    // Add event listener for page unload
    window.addEventListener("beforeunload", handleUnload);

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
      return;
    }

    try {
      const res = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(text)}`
      );
      const data = await res.json();

      if (res.ok && data && data.shorturl) {
        const newLink = { original: text, shortened: data.shorturl };
        const updatedLinks = [...links, newLink];
        setLinks(updatedLinks);
        setError(null); // Clear previous errors
      } else {
        throw new Error("Failed to shorten the link.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleCopy = (index, link) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index); // Set the copied index
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
  };

  return (
    <>
      <section className="max-width shortener relative !p-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} className="w-full" />
          <img src={bgMobile} alt="Background" className="w-full" />
        </picture>

        <form
          className="form w-full flex items-center top-1/2 gap-5 px-10"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            placeholder="Shorten a link here"
            className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn-cta rounded-lg w-fit text-center shrink-0 bg-blue-500 text-white px-4 py-2"
          >
            Shorten It!!!
          </button>
        </form>

        {links.length > 0 && (
          <div className="flex flex-col items-center bg-white p-6 w-full mt-3 mx-auto rounded-lg shadow-lg">
            {links.map((link, index) => (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-4 bg-gray-100 p-4 rounded-lg"
              >
                <h6 className="text-gray-800 text-lg font-semibold truncate w-full md:w-auto mb-2 md:mb-0">
                  {link.original}
                </h6>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
                  <p className="text-gray-700 text-base truncate w-full md:w-auto">
                    Shortened Link:{" "}
                    <a
                      href={link.shortened}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium underline truncate"
                    >
                      {link.shortened}
                    </a>
                  </p>
                  <button
                    onClick={() => handleCopy(index, link.shortened)}
                    className="btn-cta rounded-lg text-sm bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
                  >
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="mt-5 px-10 text-red-500">
            <p>Error: {error}</p>
          </div>
        )}
      </section>
    </>
  );
}
