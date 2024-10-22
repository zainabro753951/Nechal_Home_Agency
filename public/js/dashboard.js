async function deleteProduct(id) {
  let deletedData = await fetch(`/deleteProducts/${id}`, {
    method: "DELETE",
  });
  if (deletedData) {
    window.location.reload();
  }
}
