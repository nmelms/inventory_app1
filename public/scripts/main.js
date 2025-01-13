const handleDelete = (id) => {
  try {
    const res = fetch(`/games/${id}`, { method: "DELETE" });
  } catch (err) {
    console.log("error:", err);
  }
};
