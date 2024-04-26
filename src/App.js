import React, { useState } from "react";

function App() {
  const [nama, setNama] = useState("");
  const [gmail, setGmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (nama.trim() === "") {
      alert("Nama tidak boleh kosong!");
    } else {
      alert(`Hello ${nama}`);
    }
  }

  function checkGmail(event) {
    event.preventDefault();
    if (gmail.trim() === "") {
      alert("Gmail Tidak Boleh Kosong");
    } else {
      alert(`Gmail anda: ${gmail}`);
    }
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <header className="App-header">
        <div class="w-full max-w-xs"></div>

        {/* Membuat form dengan onSubmit dan handleSubmit */}
        <form
          onSubmit={handleSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="w-full max-w-xs"></div>
          <form onSubmit={checkGmail}>
            {/* Label untuk memilih nama, dan membuat input type text */}
            <div class="mb-4"></div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              // for="username"
            >
              Nama:
              <input
                // id="username"
                type="text"
                /* Menampung isi dari input text dengan state nama */
                value={nama}
                /* Ketika ada perubahan pada input text, maka state nama akan diupdate */
                onChange={(event) => setNama(event.target.value)}
                required
                placeholder=" Masukkan Nama Anda"
              ></input>
            </label>
            <div className="mb-2"></div> {/* Jarak terpisah sedikit */}
            <label
              class="block text-gray-700 text-sm font-bold mb-4" // Menambah jarak antara label dengan input
              // for="username"
            >
              Gmail:
              <input
                // id="username"
                type="text"
                value={gmail}
                onChange={(event) => setGmail(event.target.value)}
                required
                placeholder=" Masukkan Gmail Anda"
                style={{ marginTop: "10px" }} // Placeholder berjarak lebih jauh dari label
              ></input>
            </label>
            {/* Button untuk mengirim form */}
            <div className="flex items-center justify-between"></div>
            <input
              type="submit"
              value="Kirim"
              className="text-white bg-blue-500 hover:bg-blue-700 w-full rounded-tl rounded-tr"
            ></input>
          </form>
        </form>
      </header>
    </div>
  );
}

export default App;
