async function deleteProduct(id) {
  let deletedData = await fetch(`/deleteProducts/${id}`, {
    method: "DELETE",
  });

  console.log(deletedData); // Check the response

  if (deletedData.ok) {
    window.location.reload();
  } else {
    console.error("Delete failed:", deletedData.statusText);
  }
}
